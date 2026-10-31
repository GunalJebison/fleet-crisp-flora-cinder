import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFrame } from "@/components/site-frame";
import { useReveal } from "@/components/use-reveal";
import { getPost, posts } from "@/data/content";

export const Route = createFileRoute("/journal/$slug")({
  head: ({ params }) => {
    const post = getPost(params.slug);
    return {
      meta: [{ title: post ? `${post.title} — For Shanthi` : "Journal — For Shanthi" }],
    };
  },
  component: JournalPost,
});

function JournalPost() {
  const { slug } = Route.useParams();
  const post = getPost(slug);
  useReveal();

  if (!post) {
    return (
      <SiteFrame>
        <main className="mx-auto max-w-3xl px-5 pt-32 pb-24 sm:px-8">
          <p className="eyebrow text-muted">Journal</p>
          <h1 className="display mt-4 text-5xl text-deep italic">This page is not here.</h1>
          <Link to="/journal" className="mt-8 inline-flex min-h-11 items-center text-sm font-medium text-olive">
            Back to the journal
          </Link>
        </main>
      </SiteFrame>
    );
  }

  const index = posts.findIndex((item) => item.slug === post.slug);
  const next = posts[(index + 1) % posts.length];

  return (
    <SiteFrame>
      <main id="top">
        <article className="mx-auto max-w-6xl px-5 pt-28 pb-8 sm:px-8 lg:pt-36">
          <Link to="/journal" className="text-sm font-medium text-olive">
            All essays
          </Link>
          <p className="eyebrow mt-8 text-muted">{post.number}</p>
          <h1 className="display mt-4 max-w-3xl text-5xl leading-none text-deep sm:text-7xl">
            {post.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">{post.dek}</p>
        </article>
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="relative aspect-video overflow-hidden bg-surface">
            <img
              src={post.image}
              alt={post.imageAlt}
              className="frame-drift h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="mx-auto max-w-2xl space-y-6 px-5 py-14 text-lg text-ink sm:px-8">
          {post.paragraphs.map((paragraph, i) => (
            <p key={paragraph.slice(0, 24)} className={i === 0 ? "drop" : undefined}>
              {paragraph}
            </p>
          ))}
        </div>
        {next ? (
          <div className="border-t border-line">
            <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
              <p className="eyebrow text-muted">Next</p>
              <Link
                to="/journal/$slug"
                params={{ slug: next.slug }}
                className="display mt-3 block text-4xl text-deep italic sm:text-5xl"
              >
                {next.title}
              </Link>
            </div>
          </div>
        ) : null}
      </main>
    </SiteFrame>
  );
}
