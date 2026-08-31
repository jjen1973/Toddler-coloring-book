import React, { useEffect, useRef, useState } from 'react';
import FamilyGate from './FamilyGate';

const pages = [
  { letter: 'A', title: 'Apple', image: '/pages/letter-book/a-apple.png', description: 'A big apple page for the first letter.', accent: '#ff6b6b' },
  { letter: 'B', title: 'Banana Bird', image: '/pages/letter-book/b-banana-bird.png', description: 'A banana bird page with a friendly shape to color.', accent: '#f9c74f' },
  { letter: 'C', title: 'Cat', image: '/pages/letter-book/c-cat.png', description: 'A calm cat page for coloring practice.', accent: '#90be6d' },
  { letter: 'D', title: 'Dog', image: '/pages/letter-book/d-dog.png', description: 'A happy dog page with simple outlines.', accent: '#4cc9f0' },
  { letter: 'E', title: 'Elephant', image: '/pages/letter-book/e-elephant.png', description: 'The E page for the toddler coloring book.', accent: '#7b61ff' },
  { letter: 'F', title: 'Flower', image: '/pages/letter-book/f-flower.png', description: 'A flower page for bright, easy coloring.', accent: '#ff8fab' },
  { letter: 'G', title: 'Grapes', image: '/pages/letter-book/g-grapes.png', description: 'A bunch of grapes for a gentle coloring page.', accent: '#8e7dff' },
  { letter: 'H', title: 'Hat', image: '/pages/letter-book/h-hat.png', description: 'A hat page with bold outline shapes.', accent: '#f4a261' },
  { letter: 'I', title: 'Ice Cream', image: '/pages/letter-book/i-ice-cream.png', description: 'A sweet ice cream page for tiny hands.', accent: '#06d6a0' },
  { letter: 'J', title: 'Jellyfish', image: '/pages/letter-book/j-jellyfish.png', description: 'A floating jellyfish page with easy curves.', accent: '#bde0fe' },
  { letter: 'K', title: 'Kangaroo', image: '/pages/letter-book/k-kangaroo.png', description: 'A mother kangaroo and joey ready to color.', accent: '#f4a261' },
  { letter: 'L', title: 'Lion', image: '/pages/letter-book/l-lion.png', description: 'A friendly lion with a big fluffy mane.', accent: '#f9c74f' },
  { letter: 'M', title: 'Moon Macaw', image: '/pages/letter-book/m-moon-macaw.png', description: 'A moon macaw page with bold coloring shapes.', accent: '#cdb4db' },
  { letter: 'N', title: 'Narwhal', image: '/pages/letter-book/n-narwhal.png', description: 'A smiling narwhal swimming under the sea.', accent: '#4cc9f0' },
  { letter: 'O', title: 'Octopus', image: '/pages/letter-book/o-octopus.png', description: 'A cheerful octopus with curling arms.', accent: '#ff8fab' },
  { letter: 'P', title: 'Penguin', image: '/pages/letter-book/p-penguin.png', description: 'A happy penguin standing on the ice.', accent: '#90be6d' },
  { letter: 'Q', title: 'Quail', image: '/pages/letter-book/q-quail.png', description: 'A gentle quail in a grassy field.', accent: '#cdb4db' },
  { letter: 'R', title: 'Rainbow', image: '/pages/letter-book/r-rainbow.png', description: 'A bright rainbow waiting for every color.', accent: '#ff6b6b' },
  { letter: 'S', title: 'Sun', image: '/pages/letter-book/s-sun.png', description: 'A smiling sun with warm, wavy rays.', accent: '#f9c74f' },
  { letter: 'T', title: 'Turtle', image: '/pages/letter-book/t-turtle.png', description: 'A friendly turtle beside a little pond.', accent: '#90be6d' },
  { letter: 'U', title: 'Umbrella', image: '/pages/letter-book/u-umbrella.png', description: 'A cheerful umbrella for a rainy day.', accent: '#4cc9f0' },
  { letter: 'V', title: 'Volcano', image: '/pages/letter-book/v-volcano.png', description: 'A gentle volcano puffing round clouds.', accent: '#f4a261' },
  { letter: 'W', title: 'Whale', image: '/pages/letter-book/w-whale.png', description: 'A happy whale swimming under the sea.', accent: '#bde0fe' },
  { letter: 'X', title: 'Xylophone', image: '/pages/letter-book/x-xylophone.png', description: 'A toy xylophone ready for a song.', accent: '#ff8fab' },
  { letter: 'Y', title: 'Yak', image: '/pages/letter-book/y-yak.png', description: 'A shaggy yak in a mountain meadow.', accent: '#cdb4db' },
  { letter: 'Z', title: 'Zebra', image: '/pages/letter-book/z-zebra.png', description: 'A smiling zebra with bold stripes.', accent: '#ff6b6b' },
];

const crayons = ['#ff6b6b', '#f9c74f', '#90be6d', '#4cc9f0', '#bde0fe', '#ffafcc', '#cdb4db', '#f4a261'];

function ElephantArt() {
  return (
    <svg viewBox="0 0 700 860" className="elephant-art" role="img" aria-label="Elephant coloring page">
      <rect x="18" y="18" width="664" height="824" rx="34" fill="#fff" stroke="#111" strokeWidth="8" />
      <text
        x="350"
        y="250"
        textAnchor="middle"
        className="page-letter"
        fill="none"
        stroke="#111"
        strokeWidth="14"
        fontSize="270"
        fontWeight="900"
        fontFamily="Arial, Helvetica, sans-serif"
      >
        E
      </text>
      <g transform="translate(0,34)" fill="none" stroke="#111" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="346" cy="520" rx="170" ry="126" strokeWidth="8" />
        <ellipse cx="468" cy="456" rx="92" ry="114" strokeWidth="8" />
        <path d="M520 446 C566 460, 582 512, 560 548 C545 572, 520 585, 500 574" strokeWidth="8" />
        <path d="M463 500 C512 492, 548 522, 547 575 C547 620, 524 653, 499 662" strokeWidth="8" />
        <path d="M452 586 C424 648, 398 696, 370 700" strokeWidth="8" />
        <path d="M315 589 C287 648, 268 693, 256 700" strokeWidth="8" />
        <path d="M238 516 C210 536, 204 584, 219 622 C228 646, 245 658, 260 662" strokeWidth="8" />
        <path d="M250 404 C222 395, 198 410, 189 434 C172 480, 184 526, 203 563 C220 596, 247 623, 287 635" strokeWidth="8" />
        <path d="M167 487 C139 486, 117 508, 110 538" strokeWidth="8" />
        <path d="M165 469 C160 439, 163 412, 175 382 C190 345, 221 321, 255 304" strokeWidth="8" />
        <circle cx="289" cy="436" r="28" strokeWidth="8" />
        <circle cx="291" cy="437" r="9" fill="#111" stroke="none" />
        <path d="M205 328 C182 285, 183 238, 204 210" strokeWidth="8" />
        <path d="M200 210 C190 200, 176 201, 168 212" strokeWidth="8" />
        <path d="M220 324 C214 285, 224 250, 250 226" strokeWidth="8" />
        <path d="M253 226 C240 216, 223 219, 214 231" strokeWidth="8" />
        <path d="M175 235 C157 226, 144 204, 140 178" strokeWidth="8" />
        <path d="M250 244 C277 237, 294 248, 304 273" strokeWidth="8" />
        <path d="M478 348 C518 323, 562 327, 591 351" strokeWidth="8" />
        <path d="M476 420 C515 400, 556 406, 581 433" strokeWidth="8" />
        <path d="M300 585 C322 607, 378 607, 398 589" strokeWidth="8" />
        <path d="M274 701 C283 723, 304 737, 329 740" strokeWidth="8" />
        <path d="M366 701 C377 724, 399 738, 425 740" strokeWidth="8" />
        <path d="M451 700 C456 723, 472 737, 495 740" strokeWidth="8" />
      </g>
    </svg>
  );
}

function ColoringCanvas({ color, strokes, onStrokeComplete }) {
  const canvasRef = useRef(null);
  const currentStrokeRef = useRef(null);

  const drawStroke = (context, stroke, width, height) => {
    if (!stroke?.points.length) {
      return;
    }

    const points = stroke.points.map((point) => ({ x: point.x * width, y: point.y * height }));
    context.save();
    context.globalCompositeOperation = stroke.erase ? 'destination-out' : 'source-over';
    context.strokeStyle = stroke.erase ? '#000' : stroke.color;
    context.fillStyle = stroke.erase ? '#000' : stroke.color;
    context.lineWidth = Math.max(stroke.erase ? 16 : 7, Math.min(width, height) * (stroke.erase ? 0.075 : 0.035));
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.globalAlpha = 0.72;

    if (points.length === 1) {
      context.beginPath();
      context.arc(points[0].x, points[0].y, context.lineWidth / 2, 0, Math.PI * 2);
      context.fill();
    } else {
      context.beginPath();
      context.moveTo(points[0].x, points[0].y);
      points.slice(1).forEach((point) => context.lineTo(point.x, point.y));
      context.stroke();
    }
    context.restore();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    const redraw = () => {
      const rectangle = canvas.getBoundingClientRect();
      const ratio = window.devicePixelRatio || 1;
      canvas.width = Math.max(1, Math.round(rectangle.width * ratio));
      canvas.height = Math.max(1, Math.round(rectangle.height * ratio));
      const context = canvas.getContext('2d');
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      context.clearRect(0, 0, rectangle.width, rectangle.height);
      strokes.forEach((stroke) => drawStroke(context, stroke, rectangle.width, rectangle.height));
    };

    redraw();
    const observer = new ResizeObserver(redraw);
    observer.observe(canvas);
    return () => observer.disconnect();
  }, [strokes]);

  const pointFromEvent = (event) => {
    const rectangle = event.currentTarget.getBoundingClientRect();
    return {
      x: Math.max(0, Math.min(1, (event.clientX - rectangle.left) / rectangle.width)),
      y: Math.max(0, Math.min(1, (event.clientY - rectangle.top) / rectangle.height)),
    };
  };

  const startDrawing = (event) => {
    if (!color) {
      return;
    }
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    currentStrokeRef.current = { color: color === 'eraser' ? null : color, erase: color === 'eraser', points: [pointFromEvent(event)] };
  };

  const continueDrawing = (event) => {
    const stroke = currentStrokeRef.current;
    if (!stroke) {
      return;
    }
    event.preventDefault();
    const nextPoint = pointFromEvent(event);
    const canvas = canvasRef.current;
    const rectangle = canvas.getBoundingClientRect();
    const context = canvas.getContext('2d');
    const previousPoint = stroke.points[stroke.points.length - 1];
    drawStroke(context, { color: stroke.color, erase: stroke.erase, points: [previousPoint, nextPoint] }, rectangle.width, rectangle.height);
    stroke.points.push(nextPoint);
  };

  const finishDrawing = () => {
    if (!currentStrokeRef.current) {
      return;
    }
    onStrokeComplete(currentStrokeRef.current);
    currentStrokeRef.current = null;
  };

  return (
    <canvas
      ref={canvasRef}
      className={`coloring-canvas ${color ? 'enabled' : ''}`}
      onPointerDown={startDrawing}
      onPointerMove={continueDrawing}
      onPointerUp={finishDrawing}
      onPointerCancel={finishDrawing}
      aria-label={color ? 'Color this page with the crayon' : 'Pick up a crayon to color this page'}
    />
  );
}

function PageArtwork({ page, crayonColor, strokes = [], onStrokeComplete }) {
  return (
    <div className="page-art">
      {page.image ? <img src={page.image} alt={page.title} draggable="false" /> : <ElephantArt />}
      {onStrokeComplete ? (
        <ColoringCanvas color={crayonColor} strokes={strokes} onStrokeComplete={onStrokeComplete} />
      ) : null}
    </div>
  );
}

function PageFace({ page, side, blank, drawingTool, strokes, onStrokeComplete, onPickUpEraser, eraserHeld, onResetPage, onResetColoring, onRestartBook, hasColoring }) {
  if (blank) {
    return (
      <article className={`page-sheet ${side} blank`}>
        <div className="page-sheet__top">
          <span>End</span>
          <span>All done!</span>
        </div>
        <div className="blank-page">
          <span className="end-page__star" aria-hidden="true">★</span>
          <h2>Great coloring!</h2>
          <p>Ready to make a brand-new book?</p>
          <button
            type="button"
            className="reset-coloring-button"
            onClick={onResetColoring}
            disabled={!hasColoring}
          >
            Reset all coloring
          </button>
          <button type="button" className="restart-book-button" onClick={onRestartBook}>
            Back to the beginning
          </button>
          <small>{hasColoring ? 'This clears every colored page.' : 'Your pages are already clean.'}</small>
        </div>
      </article>
    );
  }

  return (
    <article className={`page-sheet ${side}`} style={{ '--page-accent': page.accent }}>
      {strokes?.some((stroke) => !stroke.erase) ? (
        <span className="page-complete-star" role="img" aria-label={`Letter ${page.letter} page colored`}>
          ★
        </span>
      ) : null}
      <div className="page-sheet__top">
        <span>Letter {page.letter}</span>
        <span>{page.title}</span>
      </div>
      <PageArtwork page={page} crayonColor={drawingTool} strokes={strokes} onStrokeComplete={onStrokeComplete} />
      <div className="page-footer">
        <button
          type="button"
          className={`page-eraser-button ${eraserHeld ? 'held' : ''}`}
          onClick={onPickUpEraser}
          aria-pressed={eraserHeld}
          aria-label={`${eraserHeld ? 'Put down' : 'Pick up'} eraser for letter ${page.letter}`}
        >
          <span className="eraser-icon" aria-hidden="true" />
          Eraser
        </button>
        <button
          type="button"
          className="reset-page-button"
          onClick={onResetPage}
          disabled={!strokes?.length}
          aria-label={`Reset coloring on letter ${page.letter}`}
        >
          Reset this page
        </button>
      </div>
    </article>
  );
}

function BookCover({ onOpen }) {
  return (
    <article className="book-cover">
      <div className="book-cover__letters" aria-hidden="true">A B C</div>
      <p>My first coloring book</p>
      <h2>A-Z<br />Coloring</h2>
      <div className="book-cover__picture" aria-hidden="true">
        <span>★</span>
        <span>🖍</span>
        <span>★</span>
      </div>
      <button type="button" onClick={onOpen}>Open the book</button>
    </article>
  );
}

function ColoringBook({ onExit, family }) {
  const [pageIndex, setPageIndex] = useState(-1);
  const [turn, setTurn] = useState(null);
  const [selectedColor, setSelectedColor] = useState(crayons[0]);
  const [heldColor, setHeldColor] = useState(null);
  const [eraserHeld, setEraserHeld] = useState(false);
  const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 });
  const [drawings, setDrawings] = useState({});
  const rewardRequests = useRef(new Set());

  const currentPage = pages[pageIndex] || null;
  const isCover = pageIndex === -1;
  const isEnd = pageIndex === pages.length;
  const hasColoring = Object.values(drawings).some((strokes) => strokes.some((stroke) => !stroke.erase));
  const drawingTool = eraserHeld ? 'eraser' : heldColor;

  useEffect(() => {
    if (!turn) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setPageIndex((prev) => {
        if (turn.direction === 'next') {
          return Math.min(prev + 1, pages.length);
        }
        return Math.max(prev - 1, -1);
      });
      setTurn(null);
    }, 620);

    return () => window.clearTimeout(timeoutId);
  }, [turn]);

  useEffect(() => {
    if (!heldColor && !eraserHeld) {
      return undefined;
    }

    const followPointer = (event) => {
      setPointerPosition({ x: event.clientX, y: event.clientY });
    };
    const putCrayonDown = (event) => {
      if (event.key === 'Escape') {
        setHeldColor(null);
        setEraserHeld(false);
      }
    };

    window.addEventListener('pointermove', followPointer);
    window.addEventListener('keydown', putCrayonDown);

    return () => {
      window.removeEventListener('pointermove', followPointer);
      window.removeEventListener('keydown', putCrayonDown);
    };
  }, [heldColor, eraserHeld]);

  const pickUpCrayon = (color, event) => {
    setSelectedColor(color);
    setPointerPosition({ x: event.clientX, y: event.clientY });
    setEraserHeld(false);
    setHeldColor((current) => (current === color ? null : color));
  };

  const pickUpEraser = (event) => {
    setPointerPosition({ x: event.clientX, y: event.clientY });
    setHeldColor(null);
    setEraserHeld((current) => !current);
  };

  const saveStroke = (letter, stroke) => {
    setDrawings((current) => ({
      ...current,
      [letter]: [...(current[letter] || []), stroke],
    }));
    const alreadyRewarded = family?.child?.coloringRewards?.includes(letter);
    if (!stroke.erase && !alreadyRewarded && !rewardRequests.current.has(letter)) {
      rewardRequests.current.add(letter);
      family?.awardColoringPage(letter).catch(() => rewardRequests.current.delete(letter));
    }
  };

  const resetPage = (letter) => {
    setDrawings((current) => ({ ...current, [letter]: [] }));
  };

  const restartBook = () => {
    setPageIndex(-1);
    setTurn(null);
    setHeldColor(null);
    setEraserHeld(false);
  };

  const goNext = () => {
    if (turn || pageIndex >= pages.length) {
      return;
    }
    setTurn({ direction: 'next' });
  };

  const goBack = () => {
    if (turn || pageIndex <= -1) {
      return;
    }
    setTurn({ direction: 'prev' });
  };

  return (
    <div className={`page-shell ${drawingTool ? 'holding-tool' : ''}`}>
      {heldColor ? (
        <div
          className="crayon held-crayon"
          style={{ '--crayon-color': heldColor, left: pointerPosition.x, top: pointerPosition.y }}
          aria-hidden="true"
        >
          <span className="crayon-label">CRAYON</span>
        </div>
      ) : null}
      {eraserHeld ? (
        <div
          className="held-eraser"
          style={{ left: pointerPosition.x, top: pointerPosition.y }}
          aria-hidden="true"
        />
      ) : null}
      <button type="button" className="back-to-tunnel" onClick={onExit}>
        <span aria-hidden="true">←</span> Activity doors
      </button>
      <header className="hero">
        <div>
          <h1 className="hero-title">A-Z Coloring</h1>
        </div>
        <div className="hero-pill">
          {isCover ? 'Front cover' : isEnd ? 'The End' : `Letter ${currentPage.letter} · ${pageIndex + 1} of ${pages.length}`}
        </div>
      </header>

      <main className={`book-stage ${turn ? `turning ${turn.direction}` : ''}`}>
        <section className="book-spread single-page-book" aria-label={isCover ? 'Book front cover' : isEnd ? 'End of book' : `Letter ${currentPage.letter} coloring page`}>
          {isCover ? (
            <BookCover onOpen={goNext} />
          ) : currentPage ? (
            <PageFace
              page={currentPage}
              side="single"
              drawingTool={drawingTool}
              strokes={drawings[currentPage.letter] || []}
              onStrokeComplete={(stroke) => saveStroke(currentPage.letter, stroke)}
              onPickUpEraser={pickUpEraser}
              eraserHeld={eraserHeld}
              onResetPage={() => resetPage(currentPage.letter)}
            />
          ) : (
            <PageFace side="single" blank onResetColoring={() => setDrawings({})} onRestartBook={restartBook} hasColoring={hasColoring} />
          )}

          <button
            type="button"
            className="nav-button nav-prev"
            onClick={goBack}
            disabled={pageIndex === -1 || !!turn}
            aria-label="Previous page"
          >
            ‹
          </button>
          <button
            type="button"
            className="nav-button nav-next"
            onClick={goNext}
            disabled={pageIndex === pages.length || !!turn}
            aria-label="Next page"
          >
            ›
          </button>
        </section>

        {currentPage ? (
        <section className="toolstrip" aria-label="Color palette">
          <div className="toolstrip__copy">
            <p className="eyebrow">Crayons</p>
            <h2>Pick a color</h2>
          </div>
          <div className="crayon-grid" role="list">
            {crayons.map((color) => (
              <button
                key={color}
                type="button"
                className={`crayon ${selectedColor === color ? 'selected' : ''} ${heldColor === color ? 'held' : ''}`}
                style={{ '--crayon-color': color }}
                onClick={(event) => pickUpCrayon(color, event)}
                aria-label={`${heldColor === color ? 'Put down' : 'Pick up'} ${color} crayon`}
                aria-pressed={heldColor === color}
              >
                <span className="crayon-label" aria-hidden="true">CRAYON</span>
              </button>
            ))}
          </div>
          <div className="selected-color-box">
            <span className="selected-swatch" style={{ background: selectedColor }} />
            <span aria-live="polite">{heldColor ? 'Crayon in your hand' : 'Current crayon'}</span>
            {heldColor ? (
              <button type="button" className="drop-crayon" onClick={() => setHeldColor(null)}>
                Put it down
              </button>
            ) : null}
          </div>
        </section>
        ) : null}
      </main>
    </div>
  );
}

function StartPage({ onEnterTunnel }) {
  const [rabbitStage, setRabbitStage] = useState('waiting');
  const [reaction, setReaction] = useState(null);
  const reactionTimeoutRef = useRef(null);
  const macawAudioRef = useRef(null);
  const grandmaVoicesRef = useRef([]);
  const grandmaUtteranceRef = useRef(null);

  useEffect(() => () => window.clearTimeout(reactionTimeoutRef.current), []);

  useEffect(() => {
    const macawAudio = new Audio('/audio/cracker-macaw.m4a');
    macawAudio.preload = 'auto';
    macawAudioRef.current = macawAudio;

    return () => {
      macawAudio.pause();
      macawAudioRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!('speechSynthesis' in window)) {
      return undefined;
    }

    const loadGrandmaVoices = () => {
      grandmaVoicesRef.current = window.speechSynthesis.getVoices();
    };

    loadGrandmaVoices();
    window.speechSynthesis.addEventListener('voiceschanged', loadGrandmaVoices);
    return () => window.speechSynthesis.removeEventListener('voiceschanged', loadGrandmaVoices);
  }, []);

  const showReaction = (name) => {
    window.clearTimeout(reactionTimeoutRef.current);
    setReaction(name);
    reactionTimeoutRef.current = window.setTimeout(() => setReaction(null), 1500);
  };

  const greetFromGrandma = () => {
    showReaction('grandma');
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const speakHello = () => {
        const voices = grandmaVoicesRef.current.length
          ? grandmaVoicesRef.current
          : window.speechSynthesis.getVoices();
        const greeting = new SpeechSynthesisUtterance('Hello!');
        const preferredFemaleVoice = voices.find((voice) => (
          /^en/i.test(voice.lang)
          && /zira|samantha|victoria|karen|moira|susan|hazel|aria|jenny|ava|serena|tessa|emma|sonia|libby|natasha|michelle|nicole|joanna|salli|female|google us english|english united states/i.test(voice.name)
        )) || voices.find((voice) => /^en[-_](us|gb|au|ca)/i.test(voice.lang));
        if (preferredFemaleVoice) {
          greeting.voice = preferredFemaleVoice;
        }
        greeting.rate = 0.82;
        greeting.pitch = 1.2;
        grandmaUtteranceRef.current = greeting;
        greeting.onend = () => {
          grandmaUtteranceRef.current = null;
        };
        window.speechSynthesis.resume();
        window.speechSynthesis.speak(greeting);
        return true;
      };

      speakHello();
    }
  };

  const squawkFromMacaw = () => {
    showReaction('macaw');
    const macawAudio = macawAudioRef.current;
    if (!macawAudio) {
      return;
    }
    macawAudio.pause();
    macawAudio.currentTime = 0;
    macawAudio.play().catch(() => {});
  };

  const rustleTreeLeaves = () => {
    showReaction('tree');
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) {
      return;
    }

    const audioContext = new AudioContextClass();
    const duration = 1.25;
    const sampleCount = Math.ceil(audioContext.sampleRate * duration);
    const buffer = audioContext.createBuffer(1, sampleCount, audioContext.sampleRate);
    const samples = buffer.getChannelData(0);
    let smoothedNoise = 0;

    for (let index = 0; index < sampleCount; index += 1) {
      smoothedNoise = (smoothedNoise * 0.78) + (((Math.random() * 2) - 1) * 0.22);
      const flutter = 0.45 + (0.55 * Math.sin(index * 0.013) ** 2);
      samples[index] = smoothedNoise * flutter;
    }

    const source = audioContext.createBufferSource();
    const highPass = audioContext.createBiquadFilter();
    const lowPass = audioContext.createBiquadFilter();
    const gain = audioContext.createGain();
    source.buffer = buffer;
    highPass.type = 'highpass';
    highPass.frequency.value = 650;
    lowPass.type = 'lowpass';
    lowPass.frequency.value = 4200;
    gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.13, audioContext.currentTime + 0.12);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + duration);
    source.connect(highPass);
    highPass.connect(lowPass);
    lowPass.connect(gain);
    gain.connect(audioContext.destination);
    source.start();
    source.stop(audioContext.currentTime + duration);
    window.setTimeout(() => audioContext.close(), 1500);
  };

  useEffect(() => {
    if (rabbitStage === 'hopping') {
      const timeoutId = window.setTimeout(() => setRabbitStage('at-hole'), 1050);
      return () => window.clearTimeout(timeoutId);
    }

    if (rabbitStage === 'descending') {
      const timeoutId = window.setTimeout(onEnterTunnel, 1800);
      return () => window.clearTimeout(timeoutId);
    }

    return undefined;
  }, [rabbitStage, onEnterTunnel]);

  return (
    <main className={`start-page ${rabbitStage === 'hopping' ? 'following' : ''} ${rabbitStage === 'at-hole' ? 'rabbit-at-hole' : ''}`}>
      <section className="start-scene" aria-label="Grandma, a macaw, and a rabbit beside a rabbit hole">
        <img
          className="start-scene-art"
          src={rabbitStage === 'waiting'
            ? '/pages/start-page/rabbit-hole-start-grandma-rest.png'
            : '/pages/start-page/rabbit-hole-start-empty-hole.png'}
          alt="Grandma standing beside a tree with a macaw, while a white rabbit waits beside its rabbit hole"
        />
        {rabbitStage === 'hopping' ? (
          <img
            className="rabbit-runner"
            src="/pages/start-page/rabbit-runner.png"
            alt=""
            aria-hidden="true"
          />
        ) : null}
        {reaction === 'grandma' ? (
          <img
            className="start-scene-art grandma-wave-scene"
            src="/pages/start-page/rabbit-hole-start-grandma-wave.png"
            alt=""
            aria-hidden="true"
          />
        ) : null}
        {reaction === 'macaw' ? (
          <img
            className="start-scene-art macaw-fluff-scene"
            src="/pages/start-page/rabbit-hole-start-macaw-fluff.png"
            alt=""
            aria-hidden="true"
          />
        ) : null}
        {reaction === 'tree' ? (
          <img
            className="start-scene-art tree-rustle-scene"
            src="/pages/start-page/rabbit-hole-start-grandma-rest.png"
            alt=""
            aria-hidden="true"
          />
        ) : null}
        <button type="button" className="character-hotspot tree-leaves-hotspot" onClick={rustleTreeLeaves} aria-label="Tap the green leaves to make them rustle" />
        <button type="button" className="character-hotspot grandma-hotspot" onClick={greetFromGrandma} aria-label="Tap Grandma to hear her say hello" />
        <button type="button" className="character-hotspot macaw-hotspot" onClick={squawkFromMacaw} aria-label="Tap the macaw to hear it squawk" />
        <button
          type="button"
          className="follow-hotspot rabbit-hotspot"
          onClick={() => {
            setReaction(null);
            setRabbitStage('hopping');
          }}
          disabled={rabbitStage !== 'waiting'}
          aria-label="Tap the rabbit to follow it"
        >
          {rabbitStage === 'waiting' ? <span className="hotspot-ring" aria-hidden="true" /> : null}
        </button>
        <button
          type="button"
          className="follow-hotspot rabbit-hole-hotspot"
          onClick={() => setRabbitStage('descending')}
          disabled={rabbitStage !== 'at-hole'}
          aria-label="Enter the rabbit hole"
        >
          {rabbitStage === 'at-hole' ? <span className="hotspot-ring" aria-hidden="true" /> : null}
        </button>
        {rabbitStage !== 'waiting' ? (
          <div className="follow-rabbit-message" aria-live="polite">Follow the Rabbit!</div>
        ) : null}
        {reaction === 'grandma' ? <div className="scene-reaction grandma-reaction">Hello!</div> : null}
        {reaction === 'macaw' ? <div className="scene-reaction macaw-reaction">SQUAWK!</div> : null}
      </section>
      {rabbitStage === 'descending' ? (
        <div className="rabbit-hole-fall" role="status" aria-label="Falling down the rabbit hole">
          <div className="rabbit-hole-spiral" aria-hidden="true">
            <span className="tunnel-ring ring-one" />
            <span className="tunnel-ring ring-two" />
            <span className="tunnel-ring ring-three" />
            <span className="tunnel-center" />
          </div>
          <div className="falling-message">Wheee!</div>
        </div>
      ) : null}
    </main>
  );
}

const BALL_READY_ENABLED = import.meta.env.DEV;
const futureDoors = [
  { label: 'Stories', icon: '★' },
];

const memoryPictures = [
  { value: 'parrot', picture: '🦜', label: 'Colorful parrot' },
  { value: 'fish', picture: '🐠', label: 'Tropical fish' },
  { value: 'frog', picture: '🐸', label: 'Green frog' },
  { value: 'fox', picture: '🦊', label: 'Orange fox' },
  { value: 'rabbit', picture: '🐇', label: 'White rabbit' },
  { value: 'turtle', picture: '🐢', label: 'Green turtle' },
  { value: 'lion', picture: '🦁', label: 'Friendly lion' },
  { value: 'whale', picture: '🐳', label: 'Blue whale' },
  { value: 'bear', picture: '🐻', label: 'Brown bear' },
  { value: 'bee', picture: '🐝', label: 'Busy bee' },
  { value: 'owl', picture: '🦉', label: 'Wise owl' },
  { value: 'penguin', picture: '🐧', label: 'Happy penguin' },
];

const memoryLevels = Array.from({ length: 10 }, (_, index) => ({
  level: index + 1,
  pairs: index + 3,
}));

function makeMemoryDeck(pairCount) {
  return memoryPictures.slice(0, pairCount)
    .flatMap((item) => [0, 1].map((copy) => ({ ...item, id: `${item.value}-${copy}` })))
    .sort(() => Math.random() - 0.5);
}

function MemoryGame({ onExit, family }) {
  const unlockedLevel = Math.min(memoryLevels.length, family?.child?.memoryUnlockedLevel || 1);
  const completedLevels = family?.child?.memoryCompletedLevels || [];
  const [level, setLevel] = useState(unlockedLevel);
  const pairCount = memoryLevels[level - 1].pairs;
  const [cards, setCards] = useState(() => makeMemoryDeck(pairCount));
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [turns, setTurns] = useState(0);
  const rewardRequested = useRef(new Set());

  useEffect(() => {
    if (flipped.length !== 2) return undefined;

    const [firstId, secondId] = flipped;
    const firstCard = cards.find((card) => card.id === firstId);
    const secondCard = cards.find((card) => card.id === secondId);
    const isMatch = firstCard.value === secondCard.value;

    const matchTimer = window.setTimeout(() => {
      if (isMatch) setMatched((current) => [...current, firstCard.value]);
      setFlipped([]);
    }, isMatch ? 500 : 850);

    return () => window.clearTimeout(matchTimer);
  }, [cards, flipped]);

  const turnCard = (card) => {
    if (flipped.length === 2 || flipped.includes(card.id) || matched.includes(card.value)) return;
    setFlipped((current) => {
      const next = [...current, card.id];
      if (next.length === 2) setTurns((count) => count + 1);
      return next;
    });
  };

  const startLevel = (nextLevel) => {
    setLevel(nextLevel);
    setCards(makeMemoryDeck(memoryLevels[nextLevel - 1].pairs));
    setFlipped([]);
    setMatched([]);
    setTurns(0);
  };

  const gameWon = matched.length === pairCount;
  const levelAlreadyCompleted = completedLevels.includes(level);

  useEffect(() => {
    if (!gameWon || levelAlreadyCompleted || rewardRequested.current.has(level)) return;
    rewardRequested.current.add(level);
    family?.awardMemoryLevel(level, memoryLevels.length)
      .catch(() => rewardRequested.current.delete(level));
  }, [family, gameWon, level, levelAlreadyCompleted]);

  return (
    <main className="memory-game-page">
      <button type="button" className="memory-back-button" onClick={onExit}>← Back to Tunnel</button>
      <header className="memory-game-heading">
        <p>Left Tunnel Two</p>
        <h1>Memory Match</h1>
        <span>Level {level} · Find {pairCount} matching pairs!</span>
      </header>
      <nav className="rabbit-maze-progress" aria-label="Rabbit grass maze level progress">
        <div className="maze-grass-path" aria-hidden="true" />
        {memoryLevels.map((item) => {
          const locked = item.level > unlockedLevel;
          const complete = completedLevels.includes(item.level);
          const milestone = item.level % 5 === 0;
          return (
            <button type="button" key={item.level} disabled={locked} className={(item.level === level ? 'current ' : '') + (complete ? 'complete' : '')} onClick={() => startLevel(item.level)} aria-label={(locked ? 'Locked' : complete ? 'Completed' : 'Available') + ' level ' + item.level}>
              <span aria-hidden="true">{item.level === level ? '🐇' : complete ? '🥕' : locked ? '🔒' : milestone ? '✨' : '🌼'}</span>
              <strong>Level {item.level}</strong>
              {milestone ? <small>Gold</small> : null}
            </button>
          );
        })}
      </nav>
      <section className="memory-card-grid" aria-label="Memory matching cards">
        {cards.map((card) => {
          const isFaceUp = flipped.includes(card.id) || matched.includes(card.value);
          return (
            <button
              type="button"
              className={`memory-card ${isFaceUp ? 'memory-card-up' : ''} ${matched.includes(card.value) ? 'memory-card-matched' : ''}`}
              key={card.id}
              onClick={() => turnCard(card)}
              aria-label={isFaceUp ? card.label : 'Hidden memory card'}
            >
              <span className="memory-card-inner">
                <span className="memory-card-back" aria-hidden="true">?</span>
                <span className="memory-card-front" aria-hidden="true">{card.picture}</span>
              </span>
            </button>
          );
        })}
      </section>
      <div className="memory-game-status" aria-live="polite">
        {gameWon ? <strong>{levelAlreadyCompleted ? 'You matched them all again!' : level % 5 === 0 ? 'Level complete · carrot + gold carrot!' : 'Level complete · 1 carrot earned!'}</strong> : <span>Matches: {matched.length} of {pairCount}</span>}
        <span>Turns: {turns}</span>
      </div>
      {gameWon ? <div className="memory-rabbit-win"><img src="/pages/start-page/rabbit-runner.png" alt="A happy rabbit eating its carrot reward" /><span aria-hidden="true">🥕</span><strong>Crunch! Great matching!</strong></div> : null}
      <button type="button" className="memory-restart-button" onClick={() => startLevel(gameWon && level < memoryLevels.length ? level + 1 : level)}>{gameWon && level < memoryLevels.length ? 'Play Next Level!' : gameWon ? 'Replay This Level' : 'Mix the Cards'}</button>
    </main>
  );
}

const tookieStoryPages = [
  {
    image: '/pages/tookie-book/pages-3-4.png',
    alt: 'Tookie calmly watches the toddlers and guards the stairs',
    text: 'Tookie was the Official Baby Watcher. When Theo tugged her tail, she gave a gentle mew and walked away. When Mabel toddled toward the stairs, Tookie became a furry little gate.',
  },
  {
    image: '/pages/tookie-book/pages-5-6.png',
    alt: 'Tookie sits patiently while the toddlers play with toys',
    text: 'When blocks tumbled everywhere, Tookie stayed patient. Her steady purr softened the loudest wiggles until the whole room felt calm.',
  },
  {
    image: '/pages/tookie-book/pages-7-9.png',
    alt: 'Tookie naps safely between two sleeping toddlers',
    text: 'At naptime, Tookie purred her lullaby. One by one, the children fell asleep. She stayed beside them until morning, curled up like a promise kept.',
  },
];

const wafflesStoryPages = [
  {
    image: '/pages/waffles-book/breakfast.png',
    alt: 'Waffles considers clover, a dandelion, and a suspicious mushroom for breakfast',
    text: 'One sunny morning, Waffles woke with a very noisy tummy. Clover was too leafy. The dandelion was too yellow. Then a mushroom appeared to stare back at him. “Nope,” said Waffles, hopping away very quickly.',
  },
  {
    image: '/pages/waffles-book/berry-warning.png',
    alt: 'Pip warns Waffles not to eat the enormous red berry',
    text: 'Waffles found the biggest, reddest berry he had ever seen. “DON’T EAT THAT!” cried a tiny blue bird. Her name was Pip. She explained that the suspicious berry would make his tummy hurt.',
  },
  {
    image: '/pages/waffles-book/puddle.png',
    alt: 'A dripping wet Waffles climbs out of a puddle while Pip tries not to laugh',
    text: 'Pip offered to find him a safe breakfast. She flew over a log and across a puddle. Waffles jumped across it—mostly. SPLASH! “You look like a mop,” said Pip. “I am a majestic forest rabbit,” said Waffles.',
  },
  {
    image: '/pages/waffles-book/strawberries.png',
    alt: 'Pip playfully removes a dab of strawberry from Waffles nose',
    text: 'Then Pip found wild strawberries. Waffles’ ears stood straight up. “I think I have found true love.” Soon his cheeks were full and strawberry covered his nose. Pip pecked it away and flew off laughing.',
  },
  {
    image: '/pages/waffles-book/friends.png',
    alt: 'Waffles and Pip head down a sunny woodland path together',
    text: 'Still hungry, Waffles followed Pip to find lunch. “Are you sure you know what you’re doing?” he asked. “Absolutely not,” Pip said. “Perfect!” And off went two new friends with absolutely no plan at all.',
  },
];

const deepTunnelDoors = [
  { id: 'deep-left-1', position: 1, activity: 'memory' },
  { id: 'deep-left-2', position: 2, activity: 'books' },
  { id: 'deep-right-2', position: 3, activity: 'locked' },
  { id: 'deep-right-1', position: 4, activity: BALL_READY_ENABLED ? 'lily' : 'locked' },
];

function BooksPage({ onExit }) {
  const [selectedBook, setSelectedBook] = useState(null);
  const [pageIndex, setPageIndex] = useState(-1);
  const [message, setMessage] = useState('');

  if (selectedBook) {
    const isWaffles = selectedBook === 'waffles';
    const storyPages = isWaffles ? wafflesStoryPages : tookieStoryPages;
    const cover = isWaffles ? '/pages/waffles-book/cover.png' : '/pages/tookie-book/cover.png';
    const title = isWaffles ? 'Waffles the White Rabbit and the Very Suspicious Berry' : 'Tookie the Babysitter Cat';
    const isCover = pageIndex < 0;
    const page = storyPages[Math.max(0, pageIndex)];
    return (
      <main className="story-book-page">
        <button type="button" className="story-back-button" onClick={() => { setSelectedBook(null); setPageIndex(-1); }}>
          <span aria-hidden="true">&#8617;</span> Book Choices
        </button>
        <section className="tookie-reader" aria-label={`${title} picture book`}>
          {isCover ? (
            <button type="button" className="tookie-cover-button" onClick={() => setPageIndex(0)} aria-label={`Open ${title}`}>
              <img src={cover} alt={`${title} book cover`} />
              <span>Tap to open</span>
            </button>
          ) : (
            <article className="tookie-story-card">
              <img src={page.image} alt={page.alt} />
              <div className="tookie-story-text">
                <p>{page.text}</p>
                {pageIndex === storyPages.length - 1 ? <strong>The End</strong> : null}
              </div>
            </article>
          )}
        </section>
        {!isCover ? (
          <nav className="story-page-controls" aria-label="Story pages">
            <button type="button" disabled={pageIndex === 0} onClick={() => setPageIndex((index) => index - 1)}>Back</button>
            <span>{pageIndex + 1} of {storyPages.length}</span>
            <button type="button" disabled={pageIndex === storyPages.length - 1} onClick={() => setPageIndex((index) => index + 1)}>Next</button>
          </nav>
        ) : null}
      </main>
    );
  }

  return (
    <main className="books-choice-page">
      <button type="button" className="story-back-button" onClick={onExit}><span aria-hidden="true">&#8617;</span> Tunnel</button>
      <header>
        <p>Pick a picture</p>
        <h1>Books</h1>
      </header>
      <section className="book-picture-choices" aria-label="Choose a picture book">
        <button type="button" className="book-picture-choice" onClick={() => setSelectedBook('tookie')}>
          <img src="/pages/tookie-book/cover.png" alt="Orange cat" />
          <strong>Cat</strong>
        </button>
        <button type="button" className="book-picture-choice" onClick={() => setSelectedBook('waffles')}>
          <img src="/pages/waffles-book/cover.png" alt="Waffles the white rabbit" />
          <strong>Rabbit</strong>
        </button>
        <button type="button" className="book-picture-choice locked-book-choice" disabled aria-label="Locked book">
          <span aria-hidden="true">&#128274;</span>
        </button>
      </section>
      <p className="book-choice-message" aria-live="polite">{message}</p>
    </main>
  );
}

function TunnelPage({ onOpenColoring, onOpenMemory, onOpenBallReady, onOpenBooks, onGoHome }) {
  const [deepTunnelStage, setDeepTunnelStage] = useState('waiting');

  useEffect(() => {
    if (deepTunnelStage !== 'traveling' && deepTunnelStage !== 'returning') return undefined;

    const travelTimer = window.setTimeout(() => {
      setDeepTunnelStage(deepTunnelStage === 'traveling' ? 'revealed' : 'waiting');
    }, 1450);

    return () => window.clearTimeout(travelTimer);
  }, [deepTunnelStage]);

  return (
    <main className={`tunnel-page deep-tunnel-${deepTunnelStage}`}>
      <div className="deeper-tunnel-background" aria-hidden="true" />
      <button type="button" className="tunnel-home-button" onClick={onGoHome}>
        <span aria-hidden="true">←</span> Outside
      </button>
      <header className="tunnel-heading">
        <p>Welcome down the rabbit hole!</p>
        <h1>Pick a Tunnel</h1>
      </header>
      <section className="activity-doors" aria-label="Activity rabbit holes">
        <button type="button" className="activity-door coloring-door" onClick={onOpenColoring}>
          <span className="door-icon" aria-hidden="true">📖</span>
          <strong>Coloring Book</strong>
          <span className="door-knob" aria-hidden="true" />
        </button>
        <a
          className="activity-door watch-shows-door"
          href="https://tubitv.com/category/preschool"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Watch Shows on Tubi preschool, opens in a new tab"
        >
          <span className="watch-shows-icon" aria-hidden="true"><span>📺</span></span>
          <strong>Watch Shows</strong>
        </a>
        <button
          type="button"
          className="activity-door memory-door"
          onClick={onOpenMemory}
          aria-label="Enter left tunnel two to play Memory Match"
        >
          <span className="memory-door-icon" aria-hidden="true">🧠</span>
          <strong>Memory</strong>
        </button>
        {BALL_READY_ENABLED ? <button type="button" className="activity-door locked-door ball-ready-door" onClick={onOpenBallReady} aria-label="Enter right tunnel two to help Lily">
          <span className="door-lock" aria-hidden="true">👗</span>
          <strong>Help Lily</strong>
        </button> : null}
        {futureDoors.map((door) => (
          <button type="button" className="activity-door locked-door" key={door.label} disabled aria-label={`${door.label} activity locked`}>
            <span className="door-lock" aria-hidden="true">&#128274;</span>
          </button>
        ))}
      </section>
      <button
        type="button"
        className="deep-tunnel-hotspot"
        onClick={() => setDeepTunnelStage('traveling')}
        disabled={deepTunnelStage !== 'waiting'}
        aria-label="Follow the rabbit deeper down the tunnel"
      >
        <span>Go deeper!</span>
      </button>
      <section className="deeper-door-locks" aria-label="Locked activity tunnels">
        {deepTunnelDoors.map((door) => door.activity === 'memory' ? (
          <button
            type="button"
            className={`deeper-door-lock deeper-door-lock-${door.position} memory-tunnel-entrance`}
            key={door.id}
            onClick={onOpenMemory}
            aria-label="Enter deep tunnel one on the left to play Memory Match"
          >
            <span aria-hidden="true">🧠</span>
            <strong>Memory</strong>
          </button>
        ) : door.activity === 'books' ? (
          <button
            type="button"
            className={`deeper-door-lock deeper-door-lock-${door.position} memory-tunnel-entrance books-tunnel-entrance`}
            key={door.id}
            onClick={onOpenBooks}
            aria-label="Enter deep tunnel two on the left to choose a book"
          >
            <span aria-hidden="true">&#128218;</span>
            <strong>Books</strong>
          </button>
        ) : door.activity === 'lily' ? (
          <button
            type="button"
            className={`deeper-door-lock deeper-door-lock-${door.position} memory-tunnel-entrance lily-tunnel-entrance`}
            key={door.id}
            onClick={onOpenBallReady}
            aria-label="Enter the first deep tunnel on the right to help Lily"
          >
            <span aria-hidden="true">👧</span>
            <strong>Help Lily</strong>
          </button>
        ) : (
          <button
            type="button"
            className={`deeper-door-lock deeper-door-lock-${door.position}`}
            key={door.id}
            disabled
            aria-label={`${door.id.replaceAll('-', ' ')} is locked`}
          >
            <span aria-hidden="true">&#128274;</span>
          </button>
        ))}
      </section>
      {deepTunnelStage === 'revealed' ? (
        <button type="button" className="tunnel-back-one-button" onClick={() => setDeepTunnelStage('returning')}>
          <span aria-hidden="true">&#8617;</span> Back One Tunnel
        </button>
      ) : null}
      <img className="tunnel-guide-rabbit" src="/pages/start-page/rabbit-runner.png" alt="The white rabbit waits beside the activity rabbit holes" />
    </main>
  );
}

const ballTasks = [
  { id: 'wash', label: 'Wash Face', icon: '🫧', free: true },
  { id: 'comb', label: 'Comb Hair', icon: '🪮', free: true },
  { id: 'bun', label: 'Make a Bun', icon: '💇‍♀️', free: true },
  { id: 'braids', label: 'Braids', icon: '🎀', carrots: 3, choice: 'hair' },
  { id: 'dress', label: 'Ball Dress', icon: '👗', carrots: 3 },
  { id: 'shoes', label: 'Ball Shoes', icon: '👠', carrots: 3 },
  { id: 'necklace', label: 'Necklace', icon: '📿', carrots: 4 },
  { id: 'bow', label: 'Hair Bow', icon: '🎀', carrots: 3 },
  { id: 'tiara', label: 'Tiara', icon: '👑', gold: 1 },
];

const ballLayerAssets = [
  { slot: 'dress', src: '/pages/ball-ready/layer-dress-canvas.png', bunSrc: '/pages/ball-ready/layer-dress-bun-canvas.png', label: 'Her lavender ball dress', layerClass: 'layer-dress' },
  { slot: 'shoes', src: '/pages/ball-ready/layer-shoes-canvas.png', bunSrc: '/pages/ball-ready/layer-shoes-bun-canvas.png', label: 'Her lavender ball shoes', layerClass: 'layer-shoes' },
  { slot: 'necklace', src: '/pages/ball-ready/layer-necklace-canvas.png', bunSrc: '/pages/ball-ready/layer-necklace-bun-canvas.png', label: 'Her purple heart necklace', layerClass: 'layer-necklace' },
  { slot: 'bow', src: '/pages/ball-ready/layer-bow-canvas.png', bunSrc: '/pages/ball-ready/layer-bow-bun-canvas.png', label: 'Her lavender hair bow', layerClass: 'layer-bow' },
  { slot: 'tiara', src: '/pages/ball-ready/layer-tiara-canvas.png', bunSrc: '/pages/ball-ready/layer-tiara-bun-canvas.png', label: 'Her silver and lavender tiara', layerClass: 'layer-tiara' },
];

function BallroomDancerOverlay({ side }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const image = new Image();
    image.onload = () => {
      const sourceWidth = image.naturalWidth / 2;
      canvas.width = sourceWidth;
      canvas.height = image.naturalHeight;
      const context = canvas.getContext('2d', { willReadFrequently: true });
      context.drawImage(image, side === 'left' ? 0 : sourceWidth, 0, sourceWidth, image.naturalHeight, 0, 0, sourceWidth, image.naturalHeight);
      const pixels = context.getImageData(0, 0, canvas.width, canvas.height);
      for (let index = 0; index < pixels.data.length; index += 4) {
        const red = pixels.data[index];
        const green = pixels.data[index + 1];
        const blue = pixels.data[index + 2];
        const lightest = Math.max(red, green, blue);
        const darkest = Math.min(red, green, blue);
        if (darkest > 218 && lightest - darkest < 19) pixels.data[index + 3] = 0;
      }
      context.putImageData(pixels, 0, 0);
    };
    image.src = '/pages/ball-ready/ballroom-child-dancers-v1.png';
  }, [side]);

  return <canvas ref={canvasRef} className={`ballroom-dancers-overlay ${side}`} aria-label={`Children dancing to Lily's ${side}`} />;
}

function BallReady({ family, onExit }) {
  const emptyMakeover = { face: 'dirty', hairCare: 'messy', hairstyle: null, dress: false, shoes: false, necklace: false, bow: false, tiara: false };
  const [stage, setStage] = useState('adventure');
  const [done, setDone] = useState([]);
  const [makeover, setMakeover] = useState(emptyMakeover);
  const [message, setMessage] = useState('');
  const [finishing, setFinishing] = useState(false);
  const [washingFace, setWashingFace] = useState(false);
  const [combingHair, setCombingHair] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const owned = family?.child?.ownedItems || [];
  const required = ['wash', 'comb', 'dress', 'shoes', 'necklace', 'tiara'];
  const ready = required.every((id) => done.includes(id)) && (done.includes('bun') || done.includes('braids'));

  const isTaskUnlocked = (taskId) => {
    if (taskId === 'wash' || taskId === 'comb') return true;
    if (taskId === 'bun') return done.includes('wash') && done.includes('comb');
    if (taskId === 'braids') return false;
    if (taskId === 'dress') return done.includes('bun') || done.includes('braids');
    if (taskId === 'shoes') return done.includes('dress');
    if (taskId === 'necklace') return done.includes('shoes');
    if (taskId === 'bow') return false;
    if (taskId === 'tiara') return done.includes('necklace');
    return false;
  };

  const useItem = async (task) => {
    setMessage('');
    if (!isTaskUnlocked(task.id)) {
      setMessage('Finish the glowing steps first to unlock this item.');
      return;
    }
    if (!task.free && !owned.includes('ball-' + task.id)) {
      try {
        await family.purchaseItem('ball-' + task.id, task.carrots || 0, task.gold || 0);
      } catch (error) {
        setMessage(error.message);
        return;
      }
    }
    if (task.id === 'wash') {
      setWashingFace(true);
      await new Promise((resolve) => window.setTimeout(resolve, 1600));
      setMakeover((current) => ({ ...current, face: 'clean' }));
      setWashingFace(false);
    } else if (task.id === 'comb') {
      setCombingHair(true);
      await new Promise((resolve) => window.setTimeout(resolve, 1700));
      setMakeover((current) => ({ ...current, hairCare: 'combed' }));
      setCombingHair(false);
    } else {
      setActiveItem(task);
      await new Promise((resolve) => window.setTimeout(resolve, 900));
      setMakeover((current) => task.id === 'bun' || task.id === 'braids'
        ? { ...current, hairstyle: task.id }
        : { ...current, [task.id]: true });
      setActiveItem(null);
    }
    setDone((current) => {
      const withoutOtherHair = task.choice === 'hair' ? current.filter((id) => id !== 'bun') : task.id === 'bun' ? current.filter((id) => id !== 'braids') : current;
      return withoutOtherHair.includes(task.id) ? withoutOtherHair : [...withoutOtherHair, task.id];
    });
  };

  const usesBunDressState = makeover.hairstyle === 'bun' && makeover.dress;
  const usesBunDressShoesState = usesBunDressState && makeover.shoes;
  const usesBunNecklaceState = usesBunDressShoesState && makeover.necklace;
  const usesBunTiaraState = usesBunNecklaceState && makeover.tiara;
  const gettingReadyImage = usesBunTiaraState
      ? '/pages/ball-ready/getting-ready-bun-elegant-complete-v1.png'
    : usesBunNecklaceState
    ? '/pages/ball-ready/getting-ready-bun-dress-shoes-necklace-v1.png'
    : usesBunDressShoesState
    ? '/pages/ball-ready/getting-ready-bun-dress-shoes-v1.png'
    : usesBunDressState
    ? '/pages/ball-ready/getting-ready-bun-dress-v1.png'
    : makeover.hairstyle === 'bun'
    ? '/pages/ball-ready/getting-ready-bun-v1.png'
    : makeover.hairCare === 'combed'
      ? makeover.face === 'clean' ? '/pages/ball-ready/getting-ready.png' : '/pages/ball-ready/getting-ready-combed-dirty.png'
      : makeover.face === 'clean' ? '/pages/ball-ready/getting-ready-clean-messy.png?v=2' : '/pages/ball-ready/getting-ready-messy.png';

  const finishGettingReady = async () => {
    setFinishing(true);
    setMessage('');
    try {
      await family.awardBallReadyCompletion();
      setStage('celebrating');
    } catch (error) {
      setMessage(error.message);
    } finally {
      setFinishing(false);
    }
  };

  useEffect(() => {
    if (stage !== 'celebrating') return undefined;
    const ballroomTimer = window.setTimeout(() => setStage('finished'), 2400);
    return () => window.clearTimeout(ballroomTimer);
  }, [stage]);

  if (stage === 'adventure') return (
    <main className="ball-ready-page adventure-stage">
      <button type="button" className="memory-back-button" onClick={onExit}>← Back to Tunnel</button>
      <img src="/pages/ball-ready/getting-ready-messy.png" alt="Lily with a dirty face and messy hair asking for help" />
      <img className="lily-room-rabbit" src="/pages/start-page/rabbit-runner.png" alt="The little white rabbit sitting near Lily's mirror" />
      <div className="ball-dialogue lily-adventure-copy">
        <h1>Hi, I am Lily!</h1>
        <p>Help me on my adventures!</p>
      </div>
      <nav className="lily-adventure-grid" aria-label="Choose one of Lily's adventures">
        <button type="button" className="lily-adventure-panel available" onClick={() => setStage('dream')}>
          <span aria-hidden="true">👗</span>
          <strong>Get me to the ball</strong>
        </button>
        {[1, 2, 3].map((adventureNumber) => (
          <button type="button" className="lily-adventure-panel locked" disabled aria-label={`Future Lily adventure ${adventureNumber} locked`} key={adventureNumber}>
            <span aria-hidden="true">🔒</span>
          </button>
        ))}
      </nav>
    </main>
  );

  if (stage === 'dream') return (
    <main className="ball-ready-page dream-stage">
      <button type="button" className="memory-back-button" onClick={onExit}>← Back to Tunnel</button>
      <img src="/pages/ball-ready/ball-dream.png" alt="A girl dressed beautifully and ready for the ball" />
      <img className="ball-dream-rabbit" src="/pages/start-page/rabbit-runner.png" alt="The little white rabbit sitting near the mirror" />
      <div className="ball-dialogue ball-dream-copy"><h1>My Ball Dream!</h1><p>Will you help me get ready?</p><button type="button" onClick={() => setStage('ready')}>Let's help!</button></div>
    </main>
  );

  return (
    <main className="ball-ready-page ready-stage">
      <button type="button" className="memory-back-button" onClick={onExit}>← Back to Tunnel</button>
      <div className={'ball-character-canvas ' + (makeover.hairstyle === 'bun' ? 'bun-character-state' : '')}>
      <img src={stage === 'finished' ? '/pages/ball-ready/lily-ballroom-v1.png' : gettingReadyImage} alt={stage === 'finished' ? 'Lily fully dressed at the royal ball' : 'Lily showing every makeover choice selected so far'} />
      {stage === 'finished' ? <>
        <BallroomDancerOverlay side="left" />
        <BallroomDancerOverlay side="right" />
        <img className="ballroom-rabbit" src="/pages/start-page/rabbit-runner.png" alt="The little white rabbit enjoying the ball" />
      </> : null}
      {stage !== 'finished' && !makeover.dress ? <img className="ready-room-rabbit" src="/pages/start-page/rabbit-runner.png" alt="The little white rabbit sitting beneath the table" /> : null}
      {stage !== 'finished' ? ballLayerAssets.map((layer) => makeover[layer.slot] && !(usesBunDressState && layer.slot === 'dress') && !(usesBunDressShoesState && layer.slot === 'shoes') && !(usesBunNecklaceState && layer.slot === 'necklace') && !(usesBunTiaraState && layer.slot === 'tiara') ? (
        <img className={'character-layer ' + layer.layerClass} src={makeover.hairstyle === 'bun' ? layer.bunSrc : layer.src} alt={layer.label} key={layer.slot} />
      ) : null) : null}
      {stage !== 'finished' && makeover.hairstyle === 'braids' ? <div className="makeover-slot makeover-braids" aria-label="Hair styled in braids"><span>〰</span><span>〰</span></div> : null}
      {washingFace ? <div className="wash-face-action" role="status" aria-label="Washing her face"><span className="wash-rag" aria-hidden="true">🧼</span><span className="suds suds-one" aria-hidden="true" /><span className="suds suds-two" aria-hidden="true" /><span className="suds suds-three" aria-hidden="true" /><strong>Wash, wash, wash!</strong></div> : null}
      {combingHair ? <div className="comb-hair-action" role="status" aria-label="Combing her hair"><span aria-hidden="true">🪮</span><strong>Comb, comb, comb!</strong></div> : null}
      {activeItem ? <div className={'makeover-item-action action-' + activeItem.id} role="status"><span>{activeItem.icon}</span><strong>Adding {activeItem.label}!</strong></div> : null}
      {makeover.face === 'clean' && makeover.hairCare !== 'combed' && !washingFace ? <div className="face-clean-badge" aria-live="polite">✨ Face is clean! ✨</div> : null}
      </div>
      {stage === 'celebrating' ? (
        <div className="lily-ready-celebration" role="status" aria-live="polite">
          <div className="celebration-confetti" aria-hidden="true">{Array.from({ length: 28 }, (_, index) => <span key={index} />)}</div>
          <h1>Wow! I Look Beautiful! Thank You!</h1>
        </div>
      ) : stage === 'finished' ? <div className="ball-dialogue ball-finale-copy"><button type="button" onClick={() => { setStage('ready'); setDone([]); setMakeover(emptyMakeover); }}>Play Again</button></div> : (
        <>
        <div className="ball-ready-instruction">
          <h1>Help Me Get Ready</h1>
          <p>Tap each job and item.</p>
        </div>
        <aside className="ball-task-panel">
          <div className="ball-task-grid">{ballTasks.filter((task) => task.id !== 'braids' && task.id !== 'bow').map((task) => {
            const isPurchased = owned.includes('ball-' + task.id);
            const isOwned = task.free || isPurchased;
            const isUnlocked = isTaskUnlocked(task.id);
            const stateClass = done.includes(task.id) ? 'done' : isUnlocked ? 'unlocked' : isPurchased ? 'locked owned-locked' : 'locked';
            return <button type="button" key={task.id} className={stateClass} disabled={!isUnlocked || washingFace || combingHair || Boolean(activeItem)} onClick={() => useItem(task)}><span>{task.icon}</span><strong>{task.label}</strong><small>{!isUnlocked ? isPurchased ? 'Owned • Locked' : 'Locked' : isOwned ? done.includes(task.id) ? 'Done!' : 'Use' : task.gold ? task.gold + ' gold carrot' : task.carrots + ' carrots'}</small></button>;
          })}</div>
          {message ? <p className="ball-shop-message" role="alert">{message}</p> : null}
          <button type="button" className="ball-finish-button" disabled={!ready || finishing} onClick={finishGettingReady}>{finishing ? 'Saving...' : "I'm Ready!"}</button>
        </aside>
        </>
      )}
    </main>
  );
}

function ToddlerApp({ family }) {
  const validRoutes = ['/', '/tunnel', '/coloring', '/memory', '/books', ...(BALL_READY_ENABLED ? ['/ball-ready'] : [])];
  const getRoute = () => (validRoutes.includes(window.location.pathname) ? window.location.pathname : '/');
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const syncRoute = () => setRoute(getRoute());
    window.addEventListener('popstate', syncRoute);
    return () => window.removeEventListener('popstate', syncRoute);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setRoute(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (route === '/tunnel') {
    return <TunnelPage onOpenColoring={() => navigate('/coloring')} onOpenMemory={() => navigate('/memory')} onOpenBallReady={() => navigate('/ball-ready')} onOpenBooks={() => navigate('/books')} onGoHome={() => navigate('/')} />;
  }

  if (route === '/coloring') {
    return <ColoringBook family={family} onExit={() => navigate('/tunnel')} />;
  }

  if (route === '/memory') {
    return <MemoryGame family={family} onExit={() => navigate('/tunnel')} />;
  }

  if (route === '/books') {
    return <BooksPage onExit={() => navigate('/tunnel')} />;
  }

  if (BALL_READY_ENABLED && route === '/ball-ready') {
    return <BallReady family={family} onExit={() => navigate('/tunnel')} />;
  }

  return <StartPage onEnterTunnel={() => navigate('/tunnel')} />;
}

function App() {
  return <FamilyGate><ToddlerApp /></FamilyGate>;
}

export default App;
