import { useEffect, useRef } from "react";

type Bit = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  decay: number;
  size: number;
  color: string;
  gravity: number;
  rot: number;
  spin: number;
  sway: number;
  petal: boolean;
};

const GOLD = ["#fff6e4", "#f6e7c1", "#e7c98a", "#f4c2cf", "#fff"];

function bit(partial: Omit<Bit, "rot" | "spin" | "sway" | "petal" | "gravity"> & Partial<Bit>): Bit {
  return {
    gravity: 0.02,
    rot: Math.random() * 6,
    spin: (Math.random() - 0.5) * 0.12,
    sway: Math.random() * 8,
    petal: false,
    ...partial,
  };
}

export function Celebration() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const sky = canvas?.parentElement;
    if (!canvas || !sky) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let alive = true;
    let tick = 0;
    const bits: Bit[] = [];

    function box() {
      return { width: sky!.clientWidth, height: sky!.clientHeight };
    }

    function resize() {
      const { width, height } = box();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = Math.max(1, Math.floor(width * dpr));
      canvas!.height = Math.max(1, Math.floor(height * dpr));
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function push(next: Bit) {
      if (bits.length > 90) bits.splice(0, 12);
      bits.push(next);
    }

    function burst(x: number, y: number, count = 22) {
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + Math.random() * 0.3;
        const speed = 0.8 + Math.random() * 2.2;
        push(
          bit({
            x,
            y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            life: 1,
            decay: 0.012 + Math.random() * 0.012,
            size: 1.2 + Math.random() * 1.4,
            color: GOLD[i % GOLD.length]!,
            gravity: 0.03,
          }),
        );
      }
    }

    function flowers(x: number, y: number, count = 8) {
      for (let i = 0; i < count; i++) {
        push(
          bit({
            x,
            y,
            vx: (Math.random() - 0.5) * 1.6,
            vy: -1.2 - Math.random() * 1.6,
            life: 1,
            decay: 0.006,
            size: 4 + Math.random() * 4,
            color: Math.random() > 0.5 ? "#f7f3ea" : "#e7a3b5",
            gravity: 0.018,
            petal: true,
          }),
        );
      }
    }

    function fountain(x: number, height: number) {
      push(
        bit({
          x,
          y: height - 2,
          vx: (Math.random() - 0.5) * 0.7,
          vy: -2.2 - Math.random() * 1.6,
          life: 1,
          decay: 0.014,
          size: 1.3,
          color: Math.random() > 0.4 ? "#f6e7c1" : "#fff6e4",
          gravity: 0.045,
        }),
      );
      if (Math.random() > 0.35) {
        push(
          bit({
            x: x + (Math.random() - 0.5) * 16,
            y: height - 2,
            vx: (Math.random() - 0.5) * 0.8,
            vy: -1.8 - Math.random() * 1.4,
            life: 1,
            decay: 0.008,
            size: 4 + Math.random() * 3,
            color: Math.random() > 0.5 ? "#f7f3ea" : "#e7a3b5",
            gravity: 0.02,
            petal: true,
          }),
        );
      }
    }

    function onPointer(event: PointerEvent) {
      const rect = sky!.getBoundingClientRect();
      burst(event.clientX - rect.left, event.clientY - rect.top, 26);
      flowers(event.clientX - rect.left, event.clientY - rect.top, 10);
    }

    function frame() {
      if (!alive) return;
      const { width, height } = box();
      ctx!.clearRect(0, 0, width, height);
      tick += 1;
      if (tick % 3 === 0) {
        fountain(width * 0.22, height);
        fountain(width * 0.78, height);
      }
      if (tick % 80 === 0) {
        burst(width * (0.25 + Math.random() * 0.5), height * (0.25 + Math.random() * 0.35), 24);
        flowers(width * (0.3 + Math.random() * 0.4), height * 0.7, 8);
      }

      for (let i = bits.length - 1; i >= 0; i--) {
        const item = bits[i]!;
        item.vy += item.gravity;
        item.x += item.vx + Math.sin(tick * 0.05 + item.sway) * (item.petal ? 0.25 : 0);
        item.y += item.vy;
        item.rot += item.spin;
        item.life -= item.decay;
        if (item.life <= 0 || item.y > height + 8) {
          bits.splice(i, 1);
          continue;
        }
        ctx!.save();
        ctx!.globalAlpha = Math.max(item.life, 0);
        ctx!.fillStyle = item.color;
        ctx!.translate(item.x, item.y);
        ctx!.rotate(item.rot);
        ctx!.beginPath();
        if (item.petal) ctx!.ellipse(0, 0, item.size * 0.42, item.size, 0, 0, Math.PI * 2);
        else ctx!.arc(0, 0, item.size, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.restore();
      }
      raf = window.requestAnimationFrame(frame);
    }

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(sky);
    sky.addEventListener("pointerdown", onPointer);
    const { width, height } = box();
    burst(width * 0.5, height * 0.45, 28);
    flowers(width * 0.5, height * 0.8, 12);
    raf = window.requestAnimationFrame(frame);

    return () => {
      alive = false;
      window.cancelAnimationFrame(raf);
      observer.disconnect();
      sky.removeEventListener("pointerdown", onPointer);
    };
  }, []);

  return <canvas ref={ref} className="stage-canvas" aria-hidden="true" />;
}
