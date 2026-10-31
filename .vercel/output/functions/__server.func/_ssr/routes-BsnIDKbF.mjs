import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ChevronLeft, i as ChevronRight, t as X } from "../_libs/lucide-react.mjs";
import { t as SiteFrame } from "./site-frame-CZe7Uxa9.mjs";
import { a as posts, i as photos, o as wishes } from "./router-Ch05uPY4.mjs";
import { t as useReveal } from "./use-reveal-r33IcyWq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BsnIDKbF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Mosaic() {
	const [active, setActive] = (0, import_react.useState)(null);
	const photo = active === null ? null : photos[active];
	(0, import_react.useEffect)(() => {
		if (active === null) return;
		const onKey = (event) => {
			if (event.key === "Escape") setActive(null);
			if (event.key === "ArrowRight") setActive((i) => i === null ? 0 : (i + 1) % photos.length);
			if (event.key === "ArrowLeft") setActive((i) => i === null ? 0 : (i - 1 + photos.length) % photos.length);
		};
		const previous = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", onKey);
		return () => {
			document.body.style.overflow = previous;
			window.removeEventListener("keydown", onKey);
		};
	}, [active]);
	function step(delta) {
		setActive((i) => {
			if (i === null) return 0;
			return (i + delta + photos.length) % photos.length;
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mosaic",
		children: photos.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
			className: item.place,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "group tap relative h-full w-full overflow-hidden bg-surface text-left",
				onClick: () => setActive(index),
				"aria-label": `Open photograph: ${item.caption}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: item.src,
					alt: item.alt,
					className: "frame-drift h-full w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute inset-x-0 bottom-0 flex min-h-11 items-end bg-deep/90 px-3 py-2.5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "display block text-lg text-canvas italic",
						children: item.caption
					})
				})]
			})
		}, item.src))
	}), photo ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 flex flex-col bg-deep text-canvas",
		role: "dialog",
		"aria-modal": "true",
		"aria-label": photo.caption,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between px-4 py-3 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "display text-xl italic",
					children: photo.caption
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "tap inline-flex size-11 items-center justify-center",
					"aria-label": "Close photograph",
					onClick: () => setActive(null),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-1 items-center justify-center px-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: photo.src,
					alt: photo.alt,
					className: "rise lightbox-img"
				}, photo.src)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between px-4 py-4 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "tap inline-flex min-h-11 items-center gap-2 pr-4 text-sm font-medium",
						onClick: () => step(-1),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" }), "Previous"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-sage",
						children: [
							String((active ?? 0) + 1).padStart(2, "0"),
							" / ",
							String(photos.length).padStart(2, "0")
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "tap inline-flex min-h-11 items-center gap-2 pl-4 text-sm font-medium",
						onClick: () => step(1),
						children: ["Next", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })]
					})
				]
			})
		]
	}) : null] });
}
function Opening({ leaving, onEnter }) {
	const [play, setPlay] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPlay(true);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `opening ${leaving ? "is-leaving" : ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/photos/grove.jpg",
				alt: "",
				className: "frame-drift absolute inset-0 h-full w-full object-cover"
			}),
			play ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				className: "motion-video absolute inset-0 h-full w-full object-cover",
				autoPlay: true,
				muted: true,
				loop: true,
				playsInline: true,
				poster: "/photos/grove.jpg",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
					src: "/photos/grove.mp4",
					type: "video/mp4"
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "opening-scrim absolute inset-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex h-full flex-col justify-between px-5 py-6 sm:px-10 sm:py-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between text-canvas",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-canvas/80",
						children: "A birthday letter"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-canvas/80",
						children: "Olive"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl pb-4 sm:pb-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rule mb-6 bg-gold" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "display text-6xl leading-none text-canvas italic sm:text-8xl",
							children: "Shanthi"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-md text-base text-canvas/85 sm:text-lg",
							children: "Olive light, a long table, and a year that feels like yours."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: onEnter,
							className: "tap mt-8 inline-flex min-h-12 items-center border border-canvas/50 px-7 text-sm font-medium tracking-wide text-canvas hover:bg-canvas hover:text-deep",
							children: "Open the letter"
						})
					]
				})]
			})
		]
	});
}
var INTERVAL = 6200;
function Wishes() {
	const [index, setIndex] = (0, import_react.useState)(0);
	const [paused, setPaused] = (0, import_react.useState)(false);
	const [motion, setMotion] = (0, import_react.useState)(true);
	const wish = wishes[index];
	(0, import_react.useEffect)(() => {
		const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
		const apply = () => setMotion(!mq.matches);
		apply();
		mq.addEventListener("change", apply);
		return () => mq.removeEventListener("change", apply);
	}, []);
	(0, import_react.useEffect)(() => {
		if (paused || !motion) return;
		const id = window.setInterval(() => {
			setIndex((current) => (current + 1) % wishes.length);
		}, INTERVAL);
		return () => window.clearInterval(id);
	}, [
		paused,
		motion,
		index
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-10 lg:grid-cols-12 lg:gap-16",
		onMouseEnter: () => setPaused(true),
		onMouseLeave: () => setPaused(false),
		onFocusCapture: () => setPaused(true),
		onBlurCapture: (event) => {
			if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "lg:col-span-4",
			role: "tablist",
			"aria-label": "Birthday wishes",
			children: wishes.map((item, i) => {
				const active = i === index;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					role: "tab",
					"aria-selected": active,
					className: `flex w-full min-h-11 items-center gap-4 border-b border-line py-3 text-left ${active ? "text-deep" : "text-muted"}`,
					onClick: () => setIndex(i),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `h-4 w-0.5 ${active ? "bg-gold" : "bg-transparent"}`,
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "display w-8 text-sm",
							children: String(i + 1).padStart(2, "0")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium",
							children: item.kicker
						})
					]
				}, item.kicker);
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col justify-between lg:col-span-8",
			role: "tabpanel",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rise display min-h-40 text-4xl leading-tight text-deep italic sm:min-h-48 sm:text-5xl lg:text-6xl",
				children: wish.line
			}, wish.kicker), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-px w-full bg-line",
					children: motion ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "wish-bar h-px w-full bg-gold" }, wish.kicker) : null
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-sm text-muted",
					children: [
						String(index + 1).padStart(2, "0"),
						" / ",
						String(wishes.length).padStart(2, "0"),
						paused ? "  ·  paused" : ""
					]
				})]
			})]
		})]
	});
}
var OPEN_KEY = "shanthi-opened";
function Home() {
	const [phase, setPhase] = (0, import_react.useState)("cover");
	(0, import_react.useEffect)(() => {
		let seen = false;
		try {
			seen = sessionStorage.getItem(OPEN_KEY) === "1";
		} catch {
			seen = false;
		}
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		if (seen || reduce) setPhase("open");
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = phase === "open" ? "" : "hidden";
		return () => {
			document.body.style.overflow = "";
		};
	}, [phase]);
	(0, import_react.useEffect)(() => {
		if (phase !== "open") return;
		const id = window.location.hash.replace("#", "");
		if (!id) return;
		document.getElementById(id)?.scrollIntoView();
	}, [phase]);
	function enter() {
		try {
			sessionStorage.setItem(OPEN_KEY, "1");
		} catch {}
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setPhase("open");
			return;
		}
		setPhase("leaving");
		window.setTimeout(() => setPhase("open"), 920);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		inert: phase !== "open",
		"aria-hidden": phase !== "open",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFrame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomePage, {}) })
	}), phase !== "open" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Opening, {
		leaving: phase === "leaving",
		onEnter: enter
	}) : null] });
}
function HomePage() {
	useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "top",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto grid max-w-6xl items-end gap-12 px-5 pt-28 pb-20 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:pt-36 lg:pb-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-muted",
							children: "For Shanthi"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "display mt-4 text-5xl leading-none text-deep sm:text-7xl lg:text-8xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-medium",
								children: "Happy birthday,"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block italic",
								children: "Shanthi."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-md text-lg text-muted",
							children: "A small place made in the colour you like. Wishes to turn through, pictures that move, and a journal with room for your own photographs."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#wishes",
								className: "tap inline-flex min-h-12 items-center bg-olive px-6 text-sm font-medium text-canvas",
								children: "Read the wishes"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#pictures",
								className: "tap inline-flex min-h-12 items-center border border-line px-6 text-sm font-medium text-deep",
								children: "See the pictures"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "lg:col-span-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative aspect-3/4 overflow-hidden bg-surface",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/photos/still-life.jpg",
							alt: "An olive branch resting on cream linen beside a bowl of olives",
							className: "frame-drift h-full w-full object-cover"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
						className: "mt-3 flex items-center justify-between text-sm text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Linen, a branch, the colour" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "01"
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "letter",
				className: "scroll-mt-24 border-t border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-28",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal lg:col-span-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow text-muted",
								children: "01 — Letter"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "display mt-4 text-4xl text-deep italic sm:text-5xl",
								children: "Not a card."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative mt-8 aspect-4/3 overflow-hidden bg-surface",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/photos/paper.jpg",
									alt: "Blank cream paper with an olive sprig",
									className: "frame-drift h-full w-full object-cover"
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal lg:col-span-7 lg:col-start-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-5 text-lg text-ink",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "drop",
									children: "Some birthdays want a room full of noise. This one is a colour instead — olive, the green that can sit in a room without raising its voice, and still be the thing you notice."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "So this is not a card. It is a small place: wishes you can walk through, pictures that shift a little if you stay with them, and a few pages of writing." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The photographs are borrowed light — groves, linen, a table left quiet. Yours can take their place in the journal whenever you want them here. The words are the part that is already yours." })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "display mt-10 text-2xl text-olive italic",
							children: "Happy birthday."
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "wishes",
				className: "scroll-mt-24 border-t border-line bg-surface",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reveal mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-muted",
							children: "02 — Wishes"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display mt-4 max-w-xl text-4xl text-deep sm:text-5xl",
							children: "Said plainly, one at a time."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-lg text-muted",
							children: "They turn on their own. Choose one if you would rather not wait. Hover and they hold still."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wishes, {})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "pictures",
				className: "scroll-mt-24 border-t border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-muted",
							children: "03 — Pictures"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display mt-4 text-4xl text-deep sm:text-5xl",
							children: "Light, moving."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-sm text-muted",
							children: "Open any frame. These are stand-ins in olive — your photographs can replace them."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mosaic, {})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "journal",
				className: "scroll-mt-24 border-t border-line bg-deep text-canvas",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-sage",
							children: "04 — Journal"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display mt-4 text-4xl italic sm:text-5xl",
							children: "A few pages."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/journal",
							className: "text-sm font-medium text-canvas underline-offset-4 hover:underline",
							children: "All essays"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-12 grid gap-10 md:grid-cols-3",
						children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "reveal",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/journal/$slug",
								params: { slug: post.slug },
								className: "group block",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "relative aspect-3/4 overflow-hidden bg-olive",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: post.image,
											alt: post.imageAlt,
											className: "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-xs font-medium tracking-widest text-sage uppercase",
										children: post.number
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "display mt-2 text-2xl italic",
										children: post.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-canvas/75",
										children: post.dek
									})
								]
							})
						}, post.slug))
					})]
				})
			})
		]
	});
}
//#endregion
export { Home as component };
