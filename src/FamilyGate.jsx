import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { addDoc, collection, doc, onSnapshot, orderBy, query, runTransaction, serverTimestamp } from 'firebase/firestore';
import { auth, db } from './firebase';

const errorMessage = (error) => ({
  'auth/email-already-in-use': 'That email already has an account. Please sign in.',
  'auth/invalid-credential': 'The email or password is incorrect.',
  'auth/invalid-email': 'Please enter a valid email address.',
  'auth/weak-password': 'Use a password with at least 6 characters.',
  'auth/operation-not-allowed': 'Email/password login is not enabled in Firebase.',
  'permission-denied': 'The Firestore security rules have not been published yet.',
}[error?.code] || error?.message || 'Something went wrong. Please try again.');

export default function FamilyGate({ children }) {
  const [user, setUser] = useState(null);
  const [checking, setChecking] = useState(true);
  const [registering, setRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profiles, setProfiles] = useState([]);
  const [selected, setSelected] = useState(null);
  const [childName, setChildName] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => onAuthStateChanged(auth, (nextUser) => {
    setUser(nextUser);
    setChecking(false);
    if (!nextUser) {
      setProfiles([]);
      setSelected(null);
    }
  }), []);

  useEffect(() => {
    if (!user) return undefined;
    const profilesQuery = query(collection(db, 'parents', user.uid, 'children'), orderBy('createdAt', 'asc'));
    return onSnapshot(profilesQuery, (snapshot) => {
      const nextProfiles = snapshot.docs.map((item) => ({
        id: item.id,
        carrots: 0,
        goldCarrots: 0,
        ...item.data(),
      }));
      const remembered = localStorage.getItem('selectedChild:' + user.uid);
      setProfiles(nextProfiles);
      setSelected((current) => nextProfiles.find((item) => item.id === current?.id)
        || nextProfiles.find((item) => item.id === remembered)
        || null);
    }, (nextError) => setError(errorMessage(nextError)));
  }, [user]);

  const chooseChild = (profile) => {
    localStorage.setItem('selectedChild:' + user.uid, profile.id);
    setSelected(profile);
  };

  const submitAccount = async (event) => {
    event.preventDefault();
    setBusy(true);
    setError('');
    try {
      if (registering) await createUserWithEmailAndPassword(auth, email.trim(), password);
      else await signInWithEmailAndPassword(auth, email.trim(), password);
    } catch (nextError) {
      setError(errorMessage(nextError));
    } finally {
      setBusy(false);
    }
  };

  const addChild = async (event) => {
    event.preventDefault();
    const name = childName.trim();
    if (!name) return;
    setBusy(true);
    setError('');
    try {
      const data = { name, carrots: 0, goldCarrots: 0, createdAt: serverTimestamp() };
      const reference = await addDoc(collection(db, 'parents', user.uid, 'children'), data);
      chooseChild({ id: reference.id, ...data });
      setChildName('');
    } catch (nextError) {
      setError(errorMessage(nextError));
    } finally {
      setBusy(false);
    }
  };

  const awardColoringPage = async (letter) => {
    if (!user || !selected || !letter) return;
    const childReference = doc(db, 'parents', user.uid, 'children', selected.id);
    await runTransaction(db, async (transaction) => {
      const snapshot = await transaction.get(childReference);
      if (!snapshot.exists()) return;
      const data = snapshot.data();
      const rewarded = Array.isArray(data.coloringRewards) ? data.coloringRewards : [];
      if (rewarded.includes(letter)) return;
      const nextRewards = [...rewarded, letter];
      const completedBook = nextRewards.length >= 26 && !data.coloringBookGoldAwarded;
      transaction.update(childReference, {
        coloringRewards: nextRewards,
        carrots: (data.carrots || 0) + 1,
        ...(completedBook ? {
          goldCarrots: (data.goldCarrots || 0) + 1,
          coloringBookGoldAwarded: true,
        } : {}),
      });
    });
  };

  const awardMemoryLevel = async (level, maxLevel) => {
    if (!user || !selected || !level) return;
    const childReference = doc(db, 'parents', user.uid, 'children', selected.id);
    await runTransaction(db, async (transaction) => {
      const snapshot = await transaction.get(childReference);
      if (!snapshot.exists()) return;
      const data = snapshot.data();
      const completed = Array.isArray(data.memoryCompletedLevels) ? data.memoryCompletedLevels : [];
      if (completed.includes(level)) return;
      const earnsGoldCarrot = level % 5 === 0;
      transaction.update(childReference, {
        memoryCompletedLevels: [...completed, level],
        memoryUnlockedLevel: Math.min(maxLevel, Math.max(data.memoryUnlockedLevel || 1, level + 1)),
        carrots: (data.carrots || 0) + 1,
        ...(earnsGoldCarrot ? { goldCarrots: (data.goldCarrots || 0) + 1 } : {}),
      });
    });
  };

  if (checking) return <main className='family-gate'><p className='family-loading'>Opening your family account...</p></main>;

  if (!user) return (
    <main className='family-gate'>
      <section className='family-card'>
        <div className='family-mark' aria-hidden='true'>A B C</div>
        <h1>Parent sign {registering ? 'up' : 'in'}</h1>
        <p>Only parents need an email. Children have profiles inside the family account.</p>
        <form className='family-form' onSubmit={submitAccount}>
          <label>Parent email<input type='email' value={email} onChange={(event) => setEmail(event.target.value)} autoComplete='email' required /></label>
          <label>Password<input type='password' value={password} onChange={(event) => setPassword(event.target.value)} autoComplete={registering ? 'new-password' : 'current-password'} minLength='6' required /></label>
          {error ? <p className='family-error' role='alert'>{error}</p> : null}
          <button disabled={busy}>{busy ? 'Please wait...' : registering ? 'Create parent account' : 'Sign in'}</button>
        </form>
        <button className='family-link' type='button' onClick={() => { setRegistering(!registering); setError(''); }}>
          {registering ? 'Already registered? Sign in' : 'New family? Create a parent account'}
        </button>
      </section>
    </main>
  );

  if (!selected) return (
    <main className='family-gate'>
      <section className='family-card family-card-wide'>
        <h1>Who is playing?</h1>
        <p className='family-email'>Parent: {user.email}</p>
        {profiles.length ? <div className='child-grid'>{profiles.map((profile) => (
          <button className='child-choice' type='button' key={profile.id} onClick={() => chooseChild(profile)}>
            <strong>{profile.name}</strong>
            <small><span>🥕 {profile.carrots}</span><span>✨🥕 {profile.goldCarrots}</span></small>
          </button>
        ))}</div> : <p>Add your first child to begin.</p>}
        <form className='add-child-form' onSubmit={addChild}>
          <label>Child's first name<input value={childName} onChange={(event) => setChildName(event.target.value)} maxLength='30' required /></label>
          <button disabled={busy}>{busy ? 'Adding...' : 'Add child'}</button>
        </form>
        {error ? <p className='family-error' role='alert'>{error}</p> : null}
        <button className='family-link' type='button' onClick={() => signOut(auth)}>Sign out</button>
      </section>
    </main>
  );

  return (
    <>
      <aside className='family-toolbar' aria-label='Family account'>
        <span>Playing as <strong>{selected.name}</strong></span>
        <span className='currency-pill'>🥕 {selected.carrots}</span>
        <span className='currency-pill gold'>✨🥕 {selected.goldCarrots}</span>
        <button type='button' onClick={() => { localStorage.removeItem('selectedChild:' + user.uid); setSelected(null); }}>Switch child</button>
        <button type='button' onClick={() => signOut(auth)}>Sign out</button>
      </aside>
      {React.cloneElement(children, {
        family: { user, child: selected, awardColoringPage, awardMemoryLevel },
      })}
    </>
  );
}
