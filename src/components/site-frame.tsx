import { Link } from "@tanstack/react-router";

export function replayOpening() {
  try {
    sessionStorage.removeItem("shanthi-opened");
  } catch {
    /* private mode */
  }
  window.location.assign("/");
}

export function SiteFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-deep text-canvas">
      <header className="border-b border-canvas/15">
        <div className="mx-auto flex h-16 max-w-3xl items-center px-5">
          <Link to="/" className="display text-xl italic">
            Shanthi
          </Link>
        </div>
      </header>
      {children}
    </div>
  );
}
