import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-frame-CTACHnBH.js
var import_jsx_runtime = require_jsx_runtime();
function replayOpening() {
	try {
		sessionStorage.removeItem("shanthi-opened");
	} catch {}
	window.location.assign("/");
}
function SiteFrame({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-deep text-canvas",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-canvas/15",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto flex h-16 max-w-3xl items-center px-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "display text-xl italic",
					children: "Shanthi"
				})
			})
		}), children]
	});
}
//#endregion
export { replayOpening as n, SiteFrame as t };
