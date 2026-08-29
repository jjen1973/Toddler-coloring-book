import React, { useEffect, useRef, useState } from 'react';

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

function ColoringBook({ onExit }) {
  const [pageIndex, setPageIndex] = useState(-1);
  const [turn, setTurn] = useState(null);
  const [selectedColor, setSelectedColor] = useState(crayons[0]);
  const [heldColor, setHeldColor] = useState(null);
  const [eraserHeld, setEraserHeld] = useState(false);
  const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 });
  const [drawings, setDrawings] = useState({});

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

const futureDoors = [
  { label: 'Stories', icon: '★' },
];

const memoryPictures = [
  { value: 'parrot', picture: '🦜', label: 'Colorful parrot' },
  { value: 'fish', picture: '🐠', label: 'Tropical fish' },
  { value: 'frog', picture: '🐸', label: 'Green frog' },
  { value: 'fox', picture: '🦊', label: 'Orange fox' },
];

function makeMemoryDeck() {
  return memoryPictures
    .flatMap((item) => [0, 1].map((copy) => ({ ...item, id: `${item.value}-${copy}` })))
    .sort(() => Math.random() - 0.5);
}

function MemoryGame({ onExit }) {
  const [cards, setCards] = useState(makeMemoryDeck);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [turns, setTurns] = useState(0);

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

  const restartGame = () => {
    setCards(makeMemoryDeck());
    setFlipped([]);
    setMatched([]);
    setTurns(0);
  };

  const gameWon = matched.length === memoryPictures.length;

  return (
    <main className="memory-game-page">
      <button type="button" className="memory-back-button" onClick={onExit}>← Back to Tunnel</button>
      <header className="memory-game-heading">
        <p>Left Tunnel Two</p>
        <h1>Memory Match</h1>
        <span>Find the matching pictures!</span>
      </header>
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
        {gameWon ? <strong>You found them all! 🎉</strong> : <span>Matches: {matched.length} of {memoryPictures.length}</span>}
        <span>Turns: {turns}</span>
      </div>
      <button type="button" className="memory-restart-button" onClick={restartGame}>{gameWon ? 'Play Again!' : 'Mix the Cards'}</button>
    </main>
  );
}

function TunnelPage({ onOpenColoring, onOpenMemory, onGoHome }) {
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
          <span className="door-icon" aria-hidden="true">🖍</span>
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
          <span className="watch-shows-icon" aria-hidden="true"><span>▶</span></span>
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
        {[1, 2, 3, 4].map((lockNumber) => lockNumber === 1 ? (
          <button
            type="button"
            className="deeper-door-lock deeper-door-lock-1 memory-tunnel-entrance"
            key={lockNumber}
            onClick={onOpenMemory}
            aria-label="Enter left tunnel two to play Memory Match"
          >
            <span aria-hidden="true">🧠</span>
            <strong>Memory</strong>
          </button>
        ) : (
          <button
            type="button"
            className={`deeper-door-lock deeper-door-lock-${lockNumber}`}
            key={lockNumber}
            disabled
            aria-label={`Activity tunnel ${lockNumber} is locked`}
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

function App() {
  const validRoutes = ['/', '/tunnel', '/coloring', '/memory'];
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
    return <TunnelPage onOpenColoring={() => navigate('/coloring')} onOpenMemory={() => navigate('/memory')} onGoHome={() => navigate('/')} />;
  }

  if (route === '/coloring') {
    return <ColoringBook onExit={() => navigate('/tunnel')} />;
  }

  if (route === '/memory') {
    return <MemoryGame onExit={() => navigate('/tunnel')} />;
  }

  return <StartPage onEnterTunnel={() => navigate('/tunnel')} />;
}

export default App;
