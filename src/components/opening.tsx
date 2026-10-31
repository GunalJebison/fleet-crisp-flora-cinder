import { useEffect, useState } from "react";

export function Opening({
  leaving,
  onEnter,
}: {
  leaving: boolean;
  onEnter: () => void;
}) {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce) setPlay(true);
  }, []);

  return (
    <div className={`opening ${leaving ? "is-leaving" : ""}`}>
      <img
        src="/photos/grove.jpg"
        alt=""
        className="frame-drift absolute inset-0 h-full w-full object-cover"
      />
      {play ? (
        <video
          className="motion-video absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/photos/grove.jpg"
          aria-hidden="true"
        >
          <source src="/photos/grove.mp4" type="video/mp4" />
        </video>
      ) : null}
      <div className="opening-scrim absolute inset-0" />
      <div className="relative flex h-full flex-col justify-between px-5 py-6 sm:px-10 sm:py-8">
        <div className="flex items-center justify-between text-canvas">
          <p className="eyebrow text-canvas/80">A birthday letter</p>
          <p className="eyebrow text-canvas/80">Olive</p>
        </div>
        <div className="max-w-3xl pb-4 sm:pb-10">
          <div className="rule mb-6 bg-gold" />
          <h1 className="display text-6xl leading-none text-canvas italic sm:text-8xl">Shanthi</h1>
          <p className="mt-5 max-w-md text-base text-canvas/85 sm:text-lg">
            Olive light, a long table, and a year that feels like yours.
          </p>
          <button
            type="button"
            onClick={onEnter}
            className="tap mt-8 inline-flex min-h-12 items-center border border-canvas/50 px-7 text-sm font-medium tracking-wide text-canvas hover:bg-canvas hover:text-deep"
          >
            Open the letter
          </button>
        </div>
      </div>
    </div>
  );
}
