import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { TRACKS } from "@/data/tracks";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ title: "Happy birthday, Shanthi" }],
  }),
  component: Home,
});

const PHOTOS = [
  "/her/smile.jpg",
  "/her/portrait.jpg",
  "/her/prayer.jpg",
  "/her/hand.jpg",
  "/her/blessed.jpg",
  "/her/roses.jpg",
  "/her/gift.jpg",
  "/her/mood.jpg",
];

function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const held = useRef(false);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const track = TRACKS[index]!;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const start = () => {
      if (held.current) return;
      audio.play().catch(() => {});
    };
    start();
    const unlock = () => start();
    window.addEventListener("pointerdown", unlock);
    audio.addEventListener("play", () => window.removeEventListener("pointerdown", unlock), { once: true });
    return () => window.removeEventListener("pointerdown", unlock);
  }, []);

  function playAt(nextIndex: number) {
    const audio = audioRef.current;
    if (!audio) return;
    const next = TRACKS[nextIndex]!;
    setIndex(nextIndex);
    if (!audio.getAttribute("src")?.endsWith(next.src)) audio.src = next.src;
    audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  }

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (!audio.getAttribute("src")) {
      playAt(index);
      return;
    }
    if (audio.paused) {
      held.current = false;
      audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      held.current = true;
      audio.pause();
      setPlaying(false);
    }
  }

  return (
    <div className="gloss-page">
      <audio
        ref={audioRef}
        src={TRACKS[0]!.src}
        autoPlay
        preload="auto"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => playAt((index + 1) % TRACKS.length)}
      />

      <header className="glass glass-bar">
        <p className="display text-xl italic">Shanthi</p>
        <div className="flex gap-2">
          <button type="button" className="glass-chip" onClick={toggle}>
            {playing ? "Pause" : "Play"}
          </button>
          <button type="button" className="glass-chip" onClick={() => playAt((index + 1) % TRACKS.length)}>
            Next
          </button>
        </div>
      </header>

      <main className="mx-auto w-full max-w-xl px-4 pt-5 pb-12">
        <section className="glass">
          <img className="gloss-hero" src="/her/smile.jpg" alt="Shanthi" fetchPriority="high" />
          <div className="gloss-copy">
            <p className="eyebrow">Happy birthday</p>
            <h1 className="display mt-2 text-6xl italic leading-none">Shanthi</h1>
            <p className="mx-auto mt-4 max-w-xs text-lg leading-snug">
              Wishing you happiness, success and balance in all you do.
            </p>
            <p className="display mt-3 text-2xl italic">Happy birthday, Shanthi.</p>
            <p className="mt-4 text-sm text-canvas/80">{playing ? "Playing" : "Ready"} · {track.title}</p>
            <div className="song-picks">
              {TRACKS.map((item, itemIndex) => (
                <button
                  key={item.src}
                  type="button"
                  className={`glass-chip ${itemIndex === index ? "is-on" : ""}`}
                  onClick={() => playAt(itemIndex)}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        </section>

        <ul className="glass glass-tray mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto p-3">
          {PHOTOS.map((src) => (
            <li key={src} className="w-[72%] max-w-64 shrink-0 snap-center">
              <img src={src} alt="" className="glass-photo" loading="lazy" decoding="async" />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
