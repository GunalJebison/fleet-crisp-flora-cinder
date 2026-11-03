import { useRef, useState, type PointerEvent } from "react";

export function Cake({ onCut, cut = false }: { onCut?: () => void; cut?: boolean }) {
  const startY = useRef<number | null>(null);
  const [split, setSplit] = useState(cut);

  function down(event: PointerEvent<HTMLDivElement>) {
    if (split) return;
    startY.current = event.clientY;
    try {
      event.currentTarget.setPointerCapture(event.pointerId);
    } catch {
      /* some browsers reject capture; the swipe still works */
    }
  }

  function move(event: PointerEvent<HTMLDivElement>) {
    if (split || startY.current === null) return;
    if (event.clientY - startY.current < 56) return;
    startY.current = null;
    setSplit(true);
    onCut?.();
  }

  function up(event: PointerEvent<HTMLDivElement>) {
    if (split || startY.current === null) return;
    const dy = event.clientY - startY.current;
    startY.current = null;
    if (dy < 56) return;
    setSplit(true);
    onCut?.();
  }

  return (
    <div
      className={`cake ${split ? "is-split" : ""}`}
      onPointerDown={down}
      onPointerMove={move}
      onPointerUp={up}
    >
      <CakeHalf side="left" />
      <CakeHalf side="right" />
      {split ? <span className="cut-burst" aria-hidden="true" /> : <span className="cut-line" aria-hidden="true" />}
    </div>
  );
}

function CakeHalf({ side }: { side: "left" | "right" }) {
  return (
    <div className={`cake-half is-${side}`} aria-hidden="true">
      <div className="candles">
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
      <div className="tier t1" />
      <div className="tier t2" />
      <div className="tier t3" />
      <div className="plate" />
    </div>
  );
}
