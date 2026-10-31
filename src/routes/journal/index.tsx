import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFrame } from "@/components/site-frame";
import { useReveal } from "@/components/use-reveal";
import { posts } from "@/data/content";

export const Route = createFileRoute("/journal/")({
  head: () => ({
    meta: [{ title: "Journal — For Shanthi" }],
  }),
  component: JournalIndex,
});

function JournalIndex() {
  useReveal();

  return (
    <SiteFrame>
      <main id="top" className="mx-auto max-w-6xl px-5 pt-28 pb-20 sm:px-8 lg:pt-36">
        <p className="eyebrow text-muted">Journal</p>
        <h1 className="display mt-4 max-w-2xl text-5xl leading-none text-deep sm:text-7xl">
          Pages for the <span className="italic">birthday.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted">
          Three short essays, written in olive. When your photographs arrive, they can take the
          frames these pages are holding.
        </p>
        <ul className="mt-16 flex flex-col">
          {posts.map((post) => (
            <li key={post.slug} className="reveal border-t border-line">
              <Link
                to="/journal/$slug"
                params={{ slug: post.slug }}
                className="group grid gap-6 py-8 md:grid-cols-12 md:items-center"
              >
                <div className="relative aspect-video overflow-hidden bg-surface md:col-span-5">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="md:col-span-6 md:col-start-7">
                  <p className="eyebrow text-muted">{post.number}</p>
                  <h2 className="display mt-3 text-4xl text-deep italic">{post.title}</h2>
                  <p className="mt-3 max-w-md text-muted">{post.dek}</p>
                  <p className="mt-5 text-sm font-medium text-olive">Read the page</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </SiteFrame>
  );
}
