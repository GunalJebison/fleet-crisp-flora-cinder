import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Menu, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-frame-CZe7Uxa9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LINKS = [
	{
		href: "/#letter",
		label: "Letter"
	},
	{
		href: "/#wishes",
		label: "Wishes"
	},
	{
		href: "/#pictures",
		label: "Pictures"
	},
	{
		href: "/journal",
		label: "Journal"
	}
];
function replayOpening() {
	try {
		sessionStorage.removeItem("shanthi-opened");
	} catch {}
	window.location.assign("/");
}
function SiteFrame({ children }) {
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const [menu, setMenu] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setMenu(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = menu ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [menu]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-canvas text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#letter",
				className: "sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-canvas focus:px-4 focus:py-3",
				children: "Skip to the letter"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "fixed inset-x-0 top-0 z-40 border-b border-line bg-canvas/85 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "display text-xl text-deep italic",
							children: "Shanthi"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center gap-8 md:flex",
							"aria-label": "Sections",
							children: LINKS.map((link) => {
								const journal = link.href === "/journal";
								const active = journal && pathname.startsWith("/journal");
								return journal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/journal",
									className: `text-sm font-medium ${active ? "text-deep" : "text-muted"}`,
									children: link.label
								}, link.href) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: link.href,
									className: "text-sm font-medium text-muted",
									children: link.label
								}, link.href);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "tap inline-flex size-11 items-center justify-center text-deep md:hidden",
							"aria-expanded": menu,
							"aria-label": menu ? "Close menu" : "Open menu",
							onClick: () => setMenu((open) => !open),
							children: menu ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						})
					]
				})
			}),
			menu ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-x-0 top-16 bottom-0 z-30 bg-canvas px-6 pt-6 md:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex flex-col",
					"aria-label": "Sections",
					children: LINKS.map((link) => link.href === "/journal" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/journal",
						className: "display border-b border-line py-4 text-4xl text-deep",
						onClick: () => setMenu(false),
						children: link.label
					}, link.href) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: "display border-b border-line py-4 text-4xl text-deep",
						onClick: () => setMenu(false),
						children: link.label
					}, link.href))
				})
			}) : null,
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-end sm:justify-between sm:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "display text-3xl text-deep italic",
						children: "For Shanthi"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-sm text-sm text-muted",
						children: "A birthday letter in olive. The journal is ready for photographs whenever you send them."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-6 text-sm font-medium",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "tap text-olive",
							onClick: replayOpening,
							children: "Replay the opening"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#top",
							className: "text-olive",
							children: "Back to top"
						})]
					})]
				})
			})
		]
	});
}
//#endregion
export { SiteFrame as t };
