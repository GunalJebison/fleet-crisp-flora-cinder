import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Mosaic } from "@/components/mosaic";
import { Opening } from "@/components/opening";
import { SiteFrame } from "@/components/site-frame";
import { useReveal } from "@/components/use-reveal";
import { Wishes } from "@/components/wishes";
import { posts } from "@/data/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ title: "For Shanthi — a birthday letter" }],
  }),
  component: Home,
});

const OPEN_KEY = "shanthi-opened";

function Home() {
  const [phase, setPhase] = useState<"cover" | "leaving" | "open">("cover");

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(OPEN_KEY) === "1";
    } catch {
      seen = false;
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduce) setPhase("open");
  }, []);

  useEffect(() => {
    document.body.style.overflow = phase === "open" ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  useEffect(() => {
    if (phase !== "open") return;
    const id = window.location.hash.replace("#", "");
    if (!id) return;
    document.getElementById(id)?.scrollIntoView();
  }, [phase]);

  function enter() {
    try {
      sessionStorage.setItem(OPEN_KEY, "1");
    } catch {
      /* ignore */
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setPhase("open");
      return;
    }
    setPhase("leaving");
    window.setTimeout(() => setPhase("open"), 920);
  }

  return (
    <>
      <div inert={phase !== "open"} aria-hidden={phase !== "open"}>
        <SiteFrame>
          <HomePage />
        </SiteFrame>
      </div>
      {phase !== "open" ? <Opening leaving={phase === "leaving"} onEnter={enter} /> : null}
    </>
  );
}

function HomePage() {
  useReveal();

  return (
    <main id="top">
      <section className="mx-auto grid max-w-6xl items-end gap-12 px-5 pt-28 pb-20 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:pt-36 lg:pb-28">
        <div className="lg:col-span-7">
          <p className="eyebrow text-muted">For Shanthi</p>
          <h1 className="display mt-4 text-5xl leading-none text-deep sm:text-7xl lg:text-8xl">
            <span className="block font-medium">Happy birthday,</span>
            <span className="mt-1 block italic">Shanthi.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted">
            A small place made in the colour you like. Wishes to turn through, pictures that move,
            and a journal with room for your own photographs.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#wishes"
              className="tap inline-flex min-h-12 items-center bg-olive px-6 text-sm font-medium text-canvas"
            >
              Read the wishes
            </a>
            <a
              href="#pictures"
              className="tap inline-flex min-h-12 items-center border border-line px-6 text-sm font-medium text-deep"
            >
              See the pictures
            </a>
          </div>
        </div>
        <figure className="lg:col-span-5">
          <div className="relative aspect-3/4 overflow-hidden bg-surface">
            <img
              src="/photos/still-life.jpg"
              alt="An olive branch resting on cream linen beside a bowl of olives"
              className="frame-drift h-full w-full object-cover"
            />
          </div>
          <figcaption className="mt-3 flex items-center justify-between text-sm text-muted">
            <span>Linen, a branch, the colour</span>
            <span className="eyebrow">01</span>
          </figcaption>
        </figure>
      </section>

      <section id="letter" className="scroll-mt-24 border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-28">
          <div className="reveal lg:col-span-4">
            <p className="eyebrow text-muted">01 — Letter</p>
            <h2 className="display mt-4 text-4xl text-deep italic sm:text-5xl">Not a card.</h2>
            <div className="relative mt-8 aspect-4/3 overflow-hidden bg-surface">
              <img
                src="/photos/paper.jpg"
                alt="Blank cream paper with an olive sprig"
                className="frame-drift h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="reveal lg:col-span-7 lg:col-start-6">
            <div className="space-y-5 text-lg text-ink">
              <p className="drop">
                Some birthdays want a room full of noise. This one is a colour instead — olive, the
                green that can sit in a room without raising its voice, and still be the thing you
                notice.
              </p>
              <p>
                So this is not a card. It is a small place: wishes you can walk through, pictures
                that shift a little if you stay with them, and a few pages of writing.
              </p>
              <p>
                The photographs are borrowed light — groves, linen, a table left quiet. Yours can
                take their place in the journal whenever you want them here. The words are the part
                that is already yours.
              </p>
            </div>
            <p className="display mt-10 text-2xl text-olive italic">Happy birthday.</p>
          </div>
        </div>
      </section>

      <section id="wishes" className="scroll-mt-24 border-t border-line bg-surface">
        <div className="reveal mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
          <p className="eyebrow text-muted">02 — Wishes</p>
          <h2 className="display mt-4 max-w-xl text-4xl text-deep sm:text-5xl">
            Said plainly, one at a time.
          </h2>
          <p className="mt-4 max-w-lg text-muted">
            They turn on their own. Choose one if you would rather not wait. Hover and they hold
            still.
          </p>
          <div className="mt-12">
            <Wishes />
          </div>
        </div>
      </section>

      <section id="pictures" className="scroll-mt-24 border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="reveal mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow text-muted">03 — Pictures</p>
              <h2 className="display mt-4 text-4xl text-deep sm:text-5xl">Light, moving.</h2>
            </div>
            <p className="max-w-sm text-muted">
              Open any frame. These are stand-ins in olive — your photographs can replace them.
            </p>
          </div>
          <Mosaic />
        </div>
      </section>

      <section id="journal" className="scroll-mt-24 border-t border-line bg-deep text-canvas">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="reveal flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow text-sage">04 — Journal</p>
              <h2 className="display mt-4 text-4xl italic sm:text-5xl">A few pages.</h2>
            </div>
            <Link to="/journal" className="text-sm font-medium text-canvas underline-offset-4 hover:underline">
              All essays
            </Link>
          </div>
          <ul className="mt-12 grid gap-10 md:grid-cols-3">
            {posts.map((post) => (
              <li key={post.slug} className="reveal">
                <Link to="/journal/$slug" params={{ slug: post.slug }} className="group block">
                  <div className="relative aspect-3/4 overflow-hidden bg-olive">
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-4 text-xs font-medium tracking-widest text-sage uppercase">
                    {post.number}
                  </p>
                  <h3 className="display mt-2 text-2xl italic">{post.title}</h3>
                  <p className="mt-2 text-sm text-canvas/75">{post.dek}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
