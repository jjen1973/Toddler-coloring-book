import React, { useEffect, useState } from 'react';

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

function PageArtwork({ page }) {
  return <div className="page-art">{page.image ? <img src={page.image} alt={page.title} /> : <ElephantArt />}</div>;
}

function PageFace({ page, side, blank }) {
  if (blank) {
    return (
      <article className={`page-sheet ${side} blank`}>
        <div className="page-sheet__top">
          <span>End</span>
          <span>Blank page</span>
        </div>
        <div className="blank-page">
          <span>Keep turning</span>
        </div>
      </article>
    );
  }

  return (
    <article className={`page-sheet ${side}`} style={{ '--page-accent': page.accent }}>
      <div className="page-sheet__top">
        <span>Letter {page.letter}</span>
        <span>{page.title}</span>
      </div>
      <PageArtwork page={page} />
      <p className="page-description">{page.description}</p>
    </article>
  );
}

function App() {
  const [pageIndex, setPageIndex] = useState(0);
  const [turn, setTurn] = useState(null);
  const [selectedColor, setSelectedColor] = useState(crayons[0]);

  const leftPage = pages[pageIndex] || null;
  const rightPage = pages[pageIndex + 1] || null;

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
    <div className="page-shell">
      <header className="hero">
        <div>
          <p className="eyebrow">Toddler coloring book</p>
          <h1>Turn the page</h1>
          <p className="hero-copy">Two pages visible at once, like an open book.</p>
        </div>
        <div className="hero-pill">
          Pages {pageIndex + 1}-{Math.min(pageIndex + 2, pages.length)}
        </div>
      </header>

      <main className={`book-stage ${turn ? `turning ${turn.direction}` : ''}`}>
        <section className="book-spread" aria-label="Open book spread">
          <div className="book-spine" aria-hidden="true" />

          {leftPage ? (
            <PageFace page={leftPage} side="left" />
          ) : (
            <PageFace side="left" blank />
          )}

          {rightPage ? (
            <PageFace page={rightPage} side="right" />
          ) : (
            <PageFace side="right" blank />
          )}

          {turn ? (
            <article className={`page-sheet turn-sheet ${turn.direction}`} style={{ '--page-accent': turn.direction === 'next' ? rightPage?.accent : leftPage?.accent }}>
              <div className="page-sheet__top">
                <span>{turn.direction === 'next' ? `Letter ${rightPage?.letter ?? ''}` : `Letter ${leftPage?.letter ?? ''}`}</span>
                <span>{turn.direction === 'next' ? rightPage?.title ?? '' : leftPage?.title ?? ''}</span>
              </div>
              <PageArtwork page={turn.direction === 'next' ? rightPage : leftPage} />
              <p className="page-description">
                {turn.direction === 'next' ? rightPage?.description : leftPage?.description}
              </p>
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
                className={`crayon ${selectedColor === color ? 'selected' : ''}`}
                style={{ background: color }}
                onClick={() => setSelectedColor(color)}
                aria-label={`Select ${color} crayon`}
              />
            ))}
          </div>
          <div className="selected-color-box">
            <span className="selected-swatch" style={{ background: selectedColor }} />
            <span>Current crayon</span>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
