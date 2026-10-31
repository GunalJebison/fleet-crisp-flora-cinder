import { i as __toESM } from "../_runtime.mjs";
import { J as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-reveal-r33IcyWq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
function useReveal() {
	(0, import_react.useEffect)(() => {
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const nodes = Array.from(document.querySelectorAll(".reveal"));
		if (reduce) {
			nodes.forEach((node) => node.classList.add("is-in"));
			return;
		}
		const io = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;
				entry.target.classList.add("is-in");
				io.unobserve(entry.target);
			});
		}, {
			threshold: .18,
			rootMargin: "0px 0px -8% 0px"
		});
		nodes.forEach((node) => io.observe(node));
		return () => io.disconnect();
	}, []);
}
//#endregion
export { useReveal as t };
