import { i as __toESM } from "../_runtime.mjs";
import { q as require_react, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as replayOpening } from "./site-frame-CTACHnBH.mjs";
import { i as Pause, r as Play, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DifIj_eH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Opening({ leaving, onEnter }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `opening ${leaving ? "is-leaving" : ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/her/smile.jpg",
				alt: "",
				className: "absolute inset-0 h-full w-full object-cover object-center"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "opening-scrim absolute inset-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex h-full flex-col justify-end px-5 py-10 sm:px-10 sm:py-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-canvas/80",
						children: "Happy birthday"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "display mt-3 text-6xl leading-none text-canvas italic sm:text-8xl",
						children: "Shanthi"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onEnter,
						className: "tap mt-8 inline-flex min-h-12 w-fit items-center border border-canvas/50 px-7 text-sm font-medium text-canvas hover:bg-canvas hover:text-deep",
						children: "Open"
					})
				]
			})
		]
	});
}
var OPEN_KEY = "shanthi-opened";
var BLESSINGS = ["Wishing you happiness, success and balance in all you do.", "Happy birthday, Shanthi."];
var MOMENTS = [
	{
		src: "/her/smile.jpg",
		alt: "Shanthi smiling outdoors",
		label: "Shanthi"
	},
	{
		src: "/her/portrait.jpg",
		alt: "Shanthi seated outdoors",
		label: "Shanthi"
	},
	{
		src: "/her/prayer.jpg",
		alt: "Shanthi praying at a temple",
		label: "Temple"
	},
	{
		src: "/her/blessed.jpg",
		alt: "Jasmine flowers held in blessing",
		label: "Blessed"
	},
	{
		src: "/her/roses.jpg",
		alt: "A bouquet of red roses",
		label: "Roses"
	},
	{
		src: "/her/gift.jpg",
		alt: "A tiny blue car held in a hand",
		label: "For you"
	},
	{
		src: "/her/mood.jpg",
		alt: "A tray of snacks",
		label: "Mood"
	}
];
var LEAVES = Array.from({ length: 16 }, (_, i) => i);
function Home() {
	const audioRef = (0, import_react.useRef)(null);
	const [phase, setPhase] = (0, import_react.useState)("cover");
	const [playing, setPlaying] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		let seen = false;
		try {
			seen = sessionStorage.getItem(OPEN_KEY) === "1";
		} catch {
			seen = false;
		}
		if (seen) setPhase("open");
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = phase === "open" ? "" : "hidden";
		return () => {
			document.body.style.overflow = "";
		};
	}, [phase]);
	function toggleSong() {
		const audio = audioRef.current;
		if (!audio) return;
		if (audio.paused) audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
		else {
			audio.pause();
			setPlaying(false);
		}
	}
	function enter() {
		try {
			sessionStorage.setItem(OPEN_KEY, "1");
		} catch {}
		const audio = audioRef.current;
		if (audio) audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setPhase("open");
			return;
		}
		setPhase("leaving");
		window.setTimeout(() => setPhase("open"), 920);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", {
			ref: audioRef,
			src: "/her/shanthi.mp3",
			preload: "none",
			onEnded: () => setPlaying(false)
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none fixed inset-0 z-[55] overflow-hidden",
			"aria-hidden": "true",
			children: LEAVES.map((leaf) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "leaf",
				style: {
					left: `${leaf * 6.4 % 100}%`,
					animationDelay: `${leaf * -1.15}s`,
					animationDuration: `${12 + leaf % 6 * 2}s`
				}
			}, leaf))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			inert: phase !== "open",
			"aria-hidden": phase !== "open",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Birthday, {
				playing,
				onToggle: toggleSong
			})
		}),
		phase !== "open" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Opening, {
			leaving: phase === "leaving",
			onEnter: enter
		}) : null
	] });
}
function Birthday({ playing, onToggle }) {
	const [bursts, setBursts] = (0, import_react.useState)([]);
	const [photo, setPhoto] = (0, import_react.useState)(null);
	const open = photo === null ? null : MOMENTS[photo];
	function burstAt(x, y) {
		const id = Date.now() + Math.random();
		const dx = `${(Math.random() * 48 - 24).toFixed(0)}px`;
		setBursts((current) => [...current, {
			id,
			x,
			y,
			dx
		}]);
		window.setTimeout(() => {
			setBursts((current) => current.filter((item) => item.id !== id));
		}, 900);
	}
	(0, import_react.useEffect)(() => {
		if (photo === null) return;
		const onKey = (event) => {
			if (event.key === "Escape") setPhoto(null);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [photo]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen bg-deep text-canvas",
		children: [
			bursts.map((burst) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "burst-leaf",
				style: {
					left: burst.x,
					top: burst.y,
					["--dx"]: burst.dx
				}
			}, burst.id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "fixed inset-x-0 top-0 z-30 border-b border-canvas/10 bg-deep/80 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-5xl items-center justify-between px-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "display text-xl italic",
						children: "Shanthi"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: onToggle,
						className: `tap inline-flex min-h-11 items-center gap-2 px-4 text-sm font-medium ${playing ? "song-on" : "text-canvas"}`,
						"aria-pressed": playing,
						children: [playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4" }), playing ? "Pause" : "Oh Shanthi"]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "top",
				className: "mx-auto max-w-5xl px-5 pt-28 pb-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "grid items-center gap-10 lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto w-full max-w-sm overflow-hidden bg-olive",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
								className: "ratio-story w-full object-cover",
								autoPlay: true,
								muted: true,
								loop: true,
								playsInline: true,
								poster: "/her/portrait.jpg",
								"aria-label": "Shanthi",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
									src: "/her/living.mp4",
									type: "video/mp4"
								})
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow text-sage",
								children: "Happy birthday"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "display mt-4 text-6xl leading-none italic sm:text-8xl",
								children: "Shanthi".split("").map((letter, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "live-letter",
									onPointerDown: (event) => {
										event.currentTarget.classList.add("is-on");
										burstAt(event.clientX, event.clientY);
									},
									onPointerUp: (event) => {
										const el = event.currentTarget;
										window.setTimeout(() => el.classList.remove("is-on"), 700);
									},
									onPointerLeave: (event) => event.currentTarget.classList.remove("is-on"),
									children: letter
								}, `${letter}-${index}`))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-sm text-sage",
								children: "Touch the words."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 space-y-5",
								children: BLESSINGS.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "display text-2xl leading-snug sm:text-3xl",
									children: line.split(" ").map((word, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "touch-word",
										onPointerDown: (event) => {
											event.currentTarget.classList.add("is-on");
											burstAt(event.clientX, event.clientY);
										},
										onPointerUp: (event) => {
											const el = event.currentTarget;
											window.setTimeout(() => el.classList.remove("is-on"), 700);
										},
										onPointerLeave: (event) => event.currentTarget.classList.remove("is-on"),
										children: [word, "\xA0"]
									}, `${word}-${index}`))
								}, line))
							})
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "mt-16",
						"aria-label": "Photographs",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4",
							children: MOMENTS.map((moment, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "w-[76vw] max-w-xs shrink-0 snap-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "tap block w-full text-left",
									onClick: () => setPhoto(index),
									"aria-label": `Open ${moment.label}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: moment.src,
										alt: moment.alt,
										className: "ratio-tall w-full object-cover"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-3 block text-sm text-sage",
										children: moment.label
									})]
								})
							}, moment.src))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
						className: "mt-16 flex items-center justify-between border-t border-canvas/15 pt-8 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "display text-2xl italic",
							children: "Happy birthday, Shanthi."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "tap min-h-11 text-sage",
							onClick: replayOpening,
							children: "Play the opening again"
						})]
					})
				]
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-50 flex flex-col bg-deep",
				role: "dialog",
				"aria-modal": "true",
				"aria-label": open.label,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "display text-2xl italic",
						children: open.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "tap inline-flex size-11 items-center justify-center",
						"aria-label": "Close photograph",
						onClick: () => setPhoto(null),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-1 items-center justify-center px-4 pb-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: open.src,
						alt: open.alt,
						className: "lightbox-img"
					})
				})]
			}) : null
		]
	});
}
//#endregion
export { Home as component };
