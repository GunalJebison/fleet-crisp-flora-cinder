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
        <p className="eyebrow text-muted">Off the path</p>
        <h1 className="display mt-4 text-5xl text-deep italic sm:text-6xl">
          This page is not on the table.
        </h1>
        <Link
          to="/"
          className="mt-8 inline-flex min-h-12 items-center bg-olive px-6 text-sm font-medium text-canvas"
        >
          Back to the letter
        </Link>
      </main>
    </SiteFrame>
  );
}
