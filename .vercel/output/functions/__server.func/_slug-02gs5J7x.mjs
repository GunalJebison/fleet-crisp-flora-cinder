import { S as require_jsx_runtime, b as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as SiteFrame } from "./_ssr/site-frame-CZe7Uxa9.mjs";
import { a as posts, n as Route, r as getPost } from "./_ssr/router-Ch05uPY4.mjs";
import { t as useReveal } from "./_ssr/use-reveal-r33IcyWq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-02gs5J7x.js
var import_jsx_runtime = require_jsx_runtime();
function JournalPost() {
	const { slug } = Route.useParams();
	const post = getPost(slug);
	useReveal();
	if (!post) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFrame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-5 pt-32 pb-24 sm:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow text-muted",
				children: "Journal"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "display mt-4 text-5xl text-deep italic",
				children: "This page is not here."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/journal",
				className: "mt-8 inline-flex min-h-11 items-center text-sm font-medium text-olive",
				children: "Back to the journal"
			})
		]
	}) });
	const index = posts.findIndex((item) => item.slug === post.slug);
	const next = posts[(index + 1) % posts.length];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFrame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "top",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "mx-auto max-w-6xl px-5 pt-28 pb-8 sm:px-8 lg:pt-36",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/journal",
						className: "text-sm font-medium text-olive",
						children: "All essays"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mt-8 text-muted",
						children: post.number
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "display mt-4 max-w-3xl text-5xl leading-none text-deep sm:text-7xl",
						children: post.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-lg text-muted",
						children: post.dek
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-6xl px-5 sm:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative aspect-video overflow-hidden bg-surface",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: post.image,
						alt: post.imageAlt,
						className: "frame-drift h-full w-full object-cover"
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-2xl space-y-6 px-5 py-14 text-lg text-ink sm:px-8",
				children: post.paragraphs.map((paragraph, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: i === 0 ? "drop" : void 0,
					children: paragraph
				}, paragraph.slice(0, 24)))
			}),
			next ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 py-12 sm:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-muted",
						children: "Next"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/journal/$slug",
						params: { slug: next.slug },
						className: "display mt-3 block text-4xl text-deep italic sm:text-5xl",
						children: next.title
					})]
				})
			}) : null
		]
	}) });
}
//#endregion
export { JournalPost as component };
