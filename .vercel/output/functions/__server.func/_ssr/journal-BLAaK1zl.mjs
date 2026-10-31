import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SiteFrame } from "./site-frame-CZe7Uxa9.mjs";
import { a as posts } from "./router-Ch05uPY4.mjs";
import { t as useReveal } from "./use-reveal-r33IcyWq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/journal-BLAaK1zl.js
var import_jsx_runtime = require_jsx_runtime();
function JournalIndex() {
	useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFrame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "top",
		className: "mx-auto max-w-6xl px-5 pt-28 pb-20 sm:px-8 lg:pt-36",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow text-muted",
				children: "Journal"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "display mt-4 max-w-2xl text-5xl leading-none text-deep sm:text-7xl",
				children: ["Pages for the ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "italic",
					children: "birthday."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 max-w-xl text-lg text-muted",
				children: "Three short essays, written in olive. When your photographs arrive, they can take the frames these pages are holding."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-16 flex flex-col",
				children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "reveal border-t border-line",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/journal/$slug",
						params: { slug: post.slug },
						className: "group grid gap-6 py-8 md:grid-cols-12 md:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative aspect-video overflow-hidden bg-surface md:col-span-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: post.image,
								alt: post.imageAlt,
								className: "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-6 md:col-start-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow text-muted",
									children: post.number
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "display mt-3 text-4xl text-deep italic",
									children: post.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 max-w-md text-muted",
									children: post.dek
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 text-sm font-medium text-olive",
									children: "Read the page"
								})
							]
						})]
					})
				}, post.slug))
			})
		]
	}) });
}
//#endregion
export { JournalIndex as component };
