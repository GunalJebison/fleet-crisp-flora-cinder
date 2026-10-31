import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "/#letter", label: "Letter" },
  { href: "/#wishes", label: "Wishes" },
  { href: "/#pictures", label: "Pictures" },
  { href: "/journal", label: "Journal" },
];

export function replayOpening() {
  try {
    sessionStorage.removeItem("shanthi-opened");
  } catch {
    /* private mode */
  }
  window.location.assign("/");
}

export function SiteFrame({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    setMenu(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <a
        href="#letter"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-canvas focus:px-4 focus:py-3"
      >
        Skip to the letter
      </a>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-canvas/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link to="/" className="display text-xl text-deep italic">
            Shanthi
          </Link>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Sections">
            {LINKS.map((link) => {
              const journal = link.href === "/journal";
              const active = journal && pathname.startsWith("/journal");
              return journal ? (
                <Link
                  key={link.href}
                  to="/journal"
                  className={`text-sm font-medium ${active ? "text-deep" : "text-muted"}`}
                >
                  {link.label}
                </Link>
              ) : (
                <a key={link.href} href={link.href} className="text-sm font-medium text-muted">
                  {link.label}
                </a>
              );
            })}
          </nav>
          <button
            type="button"
            className="tap inline-flex size-11 items-center justify-center text-deep md:hidden"
            aria-expanded={menu}
            aria-label={menu ? "Close menu" : "Open menu"}
            onClick={() => setMenu((open) => !open)}
          >
            {menu ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </header>
      {menu ? (
        <div className="fixed inset-x-0 top-16 bottom-0 z-30 bg-canvas px-6 pt-6 md:hidden">
          <nav className="flex flex-col" aria-label="Sections">
            {LINKS.map((link) =>
              link.href === "/journal" ? (
                <Link
                  key={link.href}
                  to="/journal"
                  className="display border-b border-line py-4 text-4xl text-deep"
                  onClick={() => setMenu(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="display border-b border-line py-4 text-4xl text-deep"
                  onClick={() => setMenu(false)}
                >
                  {link.label}
                </a>
              ),
            )}
          </nav>
        </div>
      ) : null}
      {children}
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-end sm:justify-between sm:px-8">
          <div>
            <p className="display text-3xl text-deep italic">For Shanthi</p>
            <p className="mt-2 max-w-sm text-sm text-muted">
              A birthday letter in olive. The journal is ready for photographs whenever you send
              them.
            </p>
          </div>
          <div className="flex gap-6 text-sm font-medium">
            <button type="button" className="tap text-olive" onClick={replayOpening}>
              Replay the opening
            </button>
            <a href="#top" className="text-olive">
              Back to top
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
