import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFrame } from "@/components/site-frame";

export const Route = createFileRoute("/$")({
  head: () => ({
    meta: [{ title: "Not found — For Shanthi" }],
  }),
  component: Missing,
});

function Missing() {
  return (
    <SiteFrame>
      <main className="mx-auto max-w-3xl px-5 pt-32 pb-28 sm:px-8">
        <p className="eyebrow text-sage">Off the path</p>
        <h1 className="display mt-4 text-5xl italic sm:text-6xl">This page is not here.</h1>
        <Link
          to="/"
          className="mt-8 inline-flex min-h-12 items-center bg-canvas px-6 text-sm font-medium text-deep"
        >
          Back to Shanthi
        </Link>
      </main>
    </SiteFrame>
  );
}
