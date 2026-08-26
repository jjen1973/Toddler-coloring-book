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

function App() {
  const [pageIndex, setPageIndex] = useState(0);
  const [turn, setTurn] = useState(null);
  const [selectedColor, setSelectedColor] = useState(crayons[0]);
  const [heldColor, setHeldColor] = useState(null);
  const [eraserHeld, setEraserHeld] = useState(false);
  const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 });
  const [drawings, setDrawings] = useState({});

  const leftPage = pages[pageIndex] || null;
  const rightPage = pages[pageIndex + 1] || null;
  const hasColoring = Object.values(drawings).some((strokes) => strokes.some((stroke) => !stroke.erase));
  const drawingTool = eraserHeld ? 'eraser' : heldColor;

  useEffect(() => {
    if (!turn) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setPageIndex((prev) => {
        if (turn.direction === 'next') {
          return Math.min(prev + 1, pages.length - 1);
        }
        return Math.max(prev - 1, 0);
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
    setPageIndex(0);
    setTurn(null);
    setHeldColor(null);
    setEraserHeld(false);
  };

  const goNext = () => {
    if (turn || pageIndex >= pages.length - 1) {
      return;
    }
    setTurn({ direction: 'next' });
  };

  const goBack = () => {
    if (turn || pageIndex <= 0) {
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
      <header className="hero">
        <div>
          <h1 className="hero-title">A-Z Coloring</h1>
        </div>
        <div className="hero-pill">
          Pages {pageIndex + 1}-{Math.min(pageIndex + 2, pages.length)}
        </div>
      </header>

      <main className={`book-stage ${turn ? `turning ${turn.direction}` : ''}`}>
        <section className="book-spread" aria-label="Open book spread">
          <div className="book-spine" aria-hidden="true" />

          {leftPage ? (
            <PageFace
              page={leftPage}
              side="left"
              drawingTool={drawingTool}
              strokes={drawings[leftPage.letter] || []}
              onStrokeComplete={(stroke) => saveStroke(leftPage.letter, stroke)}
              onPickUpEraser={pickUpEraser}
              eraserHeld={eraserHeld}
              onResetPage={() => resetPage(leftPage.letter)}
            />
          ) : (
            <PageFace side="left" blank onResetColoring={() => setDrawings({})} onRestartBook={restartBook} hasColoring={hasColoring} />
          )}

          {rightPage ? (
            <PageFace
              page={rightPage}
              side="right"
              drawingTool={drawingTool}
              strokes={drawings[rightPage.letter] || []}
              onStrokeComplete={(stroke) => saveStroke(rightPage.letter, stroke)}
              onPickUpEraser={pickUpEraser}
              eraserHeld={eraserHeld}
              onResetPage={() => resetPage(rightPage.letter)}
            />
          ) : (
            <PageFace side="right" blank onResetColoring={() => setDrawings({})} onRestartBook={restartBook} hasColoring={hasColoring} />
          )}

          {turn ? (
            <article className={`page-sheet turn-sheet ${turn.direction}`} style={{ '--page-accent': turn.direction === 'next' ? rightPage?.accent : leftPage?.accent }}>
              <div className="page-sheet__top">
                <span>{turn.direction === 'next' ? `Letter ${rightPage?.letter ?? ''}` : `Letter ${leftPage?.letter ?? ''}`}</span>
                <span>{turn.direction === 'next' ? rightPage?.title ?? '' : leftPage?.title ?? ''}</span>
              </div>
              <PageArtwork page={turn.direction === 'next' ? rightPage : leftPage} />
            </article>
          ) : null}

          <button
            type="button"
            className="nav-button nav-prev"
            onClick={goBack}
            disabled={pageIndex === 0 || !!turn}
            aria-label="Previous page"
          >
            ‹
          </button>
          <button
            type="button"
            className="nav-button nav-next"
            onClick={goNext}
            disabled={pageIndex === pages.length - 1 || !!turn}
            aria-label="Next page"
          >
            ›
          </button>
        </section>

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
      </main>
    </div>
  );
}

export default App;
