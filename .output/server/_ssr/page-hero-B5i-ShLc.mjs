import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-hero-B5i-ShLc.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ eyebrow, title, description, image }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate overflow-hidden bg-gradient-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: image,
			alt: "",
			"aria-hidden": true,
			loading: "lazy",
			className: "absolute inset-0 size-full object-cover opacity-30"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-4 py-20 md:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-bold tracking-[0.22em] text-accent uppercase",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 max-w-3xl text-4xl font-semibold text-primary-foreground md:text-5xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule mt-6" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-base text-primary-foreground/75",
					children: description
				})
			]
		})]
	});
}
function SectionHeading({ eyebrow, title, description, align = "left", tone = "light" }) {
	const titleColor = tone === "dark" ? "text-primary-foreground" : "text-ink";
	const descriptionColor = tone === "dark" ? "text-primary-foreground/70" : "text-muted-foreground";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
		children: [
			eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: eyebrow
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: `mt-3 text-3xl font-semibold md:text-4xl ${titleColor}`,
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: align === "center" ? "gold-rule mx-auto mt-5" : "gold-rule mt-5" }),
			description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `mt-4 ${descriptionColor}`,
				children: description
			}) : null
		]
	});
}
function CtaBand() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-gradient-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-14 md:flex-row md:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-semibold text-primary-foreground md:text-3xl",
				children: "Need guards or facility staff this week?"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-primary-foreground/70",
				children: "Tell us your site requirement — we share a deployment plan within 24 hours."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/contact",
				className: "inline-flex shrink-0 items-center rounded-md bg-gradient-gold px-6 py-3 text-sm font-semibold text-ink shadow-gold transition-transform hover:-translate-y-0.5",
				children: "Contact Us"
			})]
		})
	});
}
//#endregion
export { PageHero as n, SectionHeading as r, CtaBand as t };
