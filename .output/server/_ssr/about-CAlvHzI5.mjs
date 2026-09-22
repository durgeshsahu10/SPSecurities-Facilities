import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { E as HeartHandshake, P as CircleCheck, j as Eye, s as Target } from "../_libs/lucide-react.mjs";
import { o as stats } from "./site-GFofrnMr.mjs";
import { n as PageHero, r as SectionHeading, t as CtaBand } from "./page-hero-B5i-ShLc.mjs";
import { t as team_briefing_default } from "./team-briefing-fFrX373A.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CAlvHzI5.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "About us",
			title: "Your Safety. Our Responsibility.",
			description: "Reliable, professional and responsible security solutions designed to protect people, properties, businesses and valuable assets.",
			image: team_briefing_default
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-4 py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-12 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Who we are",
						title: "Professional protection shaped around your premises"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-4 text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "SP Securities is a professional security services company focused on delivering dependable security and protection solutions for residential, commercial, corporate, industrial, retail and other premises." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We understand that security is more than simply having a security guard at your premises. It is about creating a safe environment through professional personnel, disciplined processes, continuous monitoring, quick response and responsible service." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We work closely with every client to understand their requirements and provide suitable manpower and security solutions based on the nature of their property, operations and risk environment. Our goal is to give every client confidence and peace of mind." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 grid gap-3 sm:grid-cols-2",
						children: [
							"PSARA licensed operations",
							"PF, ESIC & minimum-wage compliant",
							"Police-verified personnel",
							"24x7 control room escalation",
							"In-house training academy",
							"Dedicated account management"
						].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2 text-sm text-ink-soft",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 shrink-0 text-gold-deep" }),
								" ",
								p
							]
						}, p))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: team_briefing_default,
					alt: "SP Securities and Facilities staff during a morning briefing",
					width: 1600,
					height: 1008,
					loading: "lazy",
					className: "rounded-2xl border border-border object-cover shadow-card"
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-sand",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-3",
					children: [
						{
							icon: Target,
							t: "Our mission",
							d: "To protect people, properties, businesses and valuable assets through professional personnel, disciplined processes and responsible service."
						},
						{
							icon: Eye,
							t: "Our vision",
							d: "To be a trusted security partner known for dependable protection, quick response and service tailored to each client."
						},
						{
							icon: HeartHandshake,
							t: "Our values",
							d: "Discipline, alertness, professionalism, integrity and customer satisfaction guide every assignment."
						}
					].map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-card p-7 shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex rounded-lg bg-gradient-gold p-2.5 text-ink shadow-gold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(v.icon, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-lg font-semibold text-ink",
								children: v.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: v.d
							})
						]
					}, v.t))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-14 grid grid-cols-2 gap-6 md:grid-cols-4",
					children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-card p-6 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-display text-3xl font-semibold text-gradient-gold",
							children: s.value
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-2 text-xs text-muted-foreground",
							children: s.label
						})]
					}, s.label))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
//#endregion
export { AboutPage as component };
