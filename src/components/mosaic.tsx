import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { photos } from "@/data/content";

export function Mosaic() {
  const [active, setActive] = useState<number | null>(null);
  const photo = active === null ? null : photos[active];

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((i) => (i === null ? 0 : (i + 1) % photos.length));
      if (event.key === "ArrowLeft") {
        setActive((i) => (i === null ? 0 : (i - 1 + photos.length) % photos.length));
      }
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  function step(delta: number) {
    setActive((i) => {
      if (i === null) return 0;
      return (i + delta + photos.length) % photos.length;
    });
  }

  return (
    <>
      <ul className="mosaic">
        {photos.map((item, index) => (
          <li key={item.src} className={item.place}>
            <button
              type="button"
              className="group tap relative h-full w-full overflow-hidden bg-surface text-left"
              onClick={() => setActive(index)}
              aria-label={`Open photograph: ${item.caption}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="frame-drift h-full w-full object-cover"
              />
              <span className="absolute inset-x-0 bottom-0 flex min-h-11 items-end bg-deep/90 px-3 py-2.5">
                <span className="display block text-lg text-canvas italic">{item.caption}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>
      {photo ? (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-deep text-canvas"
          role="dialog"
          aria-modal="true"
          aria-label={photo.caption}
        >
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <p className="display text-xl italic">{photo.caption}</p>
            <button
              type="button"
              className="tap inline-flex size-11 items-center justify-center"
              aria-label="Close photograph"
              onClick={() => setActive(null)}
            >
              <X className="size-5" />
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center px-4">
            <img key={photo.src} src={photo.src} alt={photo.alt} className="rise lightbox-img" />
          </div>
          <div className="flex items-center justify-between px-4 py-4 sm:px-6">
            <button
              type="button"
              className="tap inline-flex min-h-11 items-center gap-2 pr-4 text-sm font-medium"
              onClick={() => step(-1)}
            >
              <ChevronLeft className="size-4" />
              Previous
            </button>
            <p className="text-sm text-sage">
              {String((active ?? 0) + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
            </p>
            <button
              type="button"
              className="tap inline-flex min-h-11 items-center gap-2 pl-4 text-sm font-medium"
              onClick={() => step(1)}
            >
              Next
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
