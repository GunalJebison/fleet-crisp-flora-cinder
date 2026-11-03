import { useRef, useState, type MouseEvent, type PointerEvent } from "react";

type Step = "see" | "excited" | "good";

export function Opening({
  leaving,
  playing,
  onYes,
  onEnter,
}: {
  leaving: boolean;
  playing: boolean;
  onYes: () => void;
  onEnter: () => void;
}) {
  const [step, setStep] = useState<Step>("see");
  const [sad, setSad] = useState(false);
  const [flee, setFlee] = useState<{ x: number; y: number } | null>(null);
  const lock = useRef(false);
  const fled = useRef(false);

  function dodge(event: PointerEvent<HTMLButtonElement> | MouseEvent<HTMLButtonElement>) {
    if ("pointerType" in event && event.type === "pointerenter" && event.pointerType !== "mouse") return;
    if (lock.current) return;
    lock.current = true;
    window.setTimeout(() => {
      lock.current = false;
    }, 360);

    const btn = event.currentTarget;
    const rect = btn.getBoundingClientRect();
    const w = btn.offsetWidth || 88;
    const h = btn.offsetHeight || 48;
    const next = {
      x: 12 + Math.random() * Math.max(40, window.innerWidth - w - 24),
      y: 12 + Math.random() * Math.max(40, window.innerHeight - h - 24),
    };
    setSad(true);
    if (!fled.current) {
      fled.current = true;
      setFlee({ x: rect.left, y: rect.top });
      requestAnimationFrame(() => setFlee(next));
    } else {
      setFlee(next);
    }
  }

  function yes() {
    onYes();
    setSad(false);
    setFlee(null);
    fled.current = false;
    if (step === "see") setStep("excited");
    else setStep("good");
  }

  const question =
    step === "see"
      ? "Do you wanna see it?"
      : step === "excited"
        ? "Are you really excited?"
        : "That's a good girl.";

  return (
    <div className={`opening ${leaving ? "is-leaving" : ""}`}>
      <div className="flex h-full items-center justify-center overflow-y-auto px-5 py-8">
        <div className={`q-card ${sad ? "is-sad" : ""}`}>
          <div className={`q-photo ${sad ? "is-sad" : ""} ${step === "good" ? "is-big" : ""} ${playing ? "is-playing" : ""}`}>
            <img src="/her/smile.jpg" alt="" fetchPriority="high" />
            {sad ? (
              <>
                <span className="tear tear-a" />
                <span className="tear tear-b" />
              </>
            ) : null}
          </div>

          {playing ? (
            <span className="eq is-on mx-auto mb-4 text-olive" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
              <i />
            </span>
          ) : null}

          <div key={step} className="pop-in">
            {step === "excited" && !sad ? <p className="sticker">😄</p> : null}
            {step === "good" ? <p className="sticker">✨</p> : null}
            <h1 className="display text-4xl leading-tight text-ink italic">{question}</h1>
            {sad ? (
              <div className="pop-in mt-4 text-muted">
                <p>Are you sure?</p>
                <p className="sticker">😢</p>
                <p>Please Say Yes...</p>
              </div>
            ) : null}
          </div>

          {step === "good" ? (
            <button
              type="button"
              onClick={onEnter}
              className="tap mt-6 inline-flex min-h-12 min-w-36 items-center justify-center bg-deep px-8 text-sm font-medium text-canvas"
            >
              Open
            </button>
          ) : (
            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={yes}
                className="tap inline-flex min-h-12 min-w-28 items-center justify-center bg-deep px-8 text-sm font-medium text-canvas"
              >
                Yes
              </button>
              <button
                type="button"
                className={`no-run tap inline-flex min-h-12 min-w-20 items-center justify-center border border-line bg-canvas px-5 text-sm font-medium text-ink ${flee ? "is-fleeing" : ""}`}
                style={flee ? { left: flee.x, top: flee.y } : undefined}
                onPointerEnter={dodge}
                onPointerDown={dodge}
                onClick={(event) => {
                  event.preventDefault();
                  dodge(event);
                }}
              >
                No
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
