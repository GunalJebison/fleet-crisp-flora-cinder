import { useEffect, useState } from "react";
import { wishes } from "@/data/content";

const INTERVAL = 6200;

export function Wishes() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [motion, setMotion] = useState(true);
  const wish = wishes[index];

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setMotion(!mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (paused || !motion) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % wishes.length);
    }, INTERVAL);
    return () => window.clearInterval(id);
  }, [paused, motion, index]);

  return (
    <div
      className="grid gap-10 lg:grid-cols-12 lg:gap-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false);
      }}
    >
      <div className="lg:col-span-4" role="tablist" aria-label="Birthday wishes">
        {wishes.map((item, i) => {
          const active = i === index;
          return (
            <button
              key={item.kicker}
              type="button"
              role="tab"
              aria-selected={active}
              className={`flex w-full min-h-11 items-center gap-4 border-b border-line py-3 text-left ${
                active ? "text-deep" : "text-muted"
              }`}
              onClick={() => setIndex(i)}
            >
              <span
                className={`h-4 w-0.5 ${active ? "bg-gold" : "bg-transparent"}`}
                aria-hidden="true"
              />
              <span className="display w-8 text-sm">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-sm font-medium">{item.kicker}</span>
            </button>
          );
        })}
      </div>
      <div className="flex flex-col justify-between lg:col-span-8" role="tabpanel">
        <p key={wish.kicker} className="rise display min-h-40 text-4xl leading-tight text-deep italic sm:min-h-48 sm:text-5xl lg:text-6xl">
          {wish.line}
        </p>
        <div className="mt-10">
          <div className="h-px w-full bg-line">
            {motion ? <div key={wish.kicker} className="wish-bar h-px w-full bg-gold" /> : null}
          </div>
          <p className="mt-3 text-sm text-muted">
            {String(index + 1).padStart(2, "0")} / {String(wishes.length).padStart(2, "0")}
            {paused ? "  ·  paused" : ""}
          </p>
        </div>
      </div>
    </div>
  );
}
