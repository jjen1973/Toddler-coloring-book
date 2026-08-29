import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD6_uRvv6b4KkT-LrIyaVGm_wzceBO4CV4',
  authDomain: 'toddler-coloring-book-1973.firebaseapp.com',
  projectId: 'toddler-coloring-book-1973',
  storageBucket: 'toddler-coloring-book-1973.firebasestorage.app',
  messagingSenderId: '1015293476578',
  appId: '1:1015293476578:web:980f98e7aecdb2b4b7a8bb',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
export default app;
