import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { P as CircleCheck } from "../_libs/lucide-react.mjs";
import { i as securityServices } from "./site-GFofrnMr.mjs";
import { n as PageHero, r as SectionHeading, t as CtaBand } from "./page-hero-B5i-ShLc.mjs";
import { t as security_services_default } from "./security-services-BneGgZJc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/security-Cr4rEqCm.js
var import_jsx_runtime = require_jsx_runtime();
function SecurityServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Security Division",
			title: "Security services that hold up to a real audit",
			description: "Every officer is police-verified, PSARA trained and supervised by ex-servicemen. Rosters, patrol logs and incident reports are shared with you every month.",
			image: security_services_default
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Capabilities",
				title: `${securityServices.length} security capabilities, one responsible team`,
				description: "Pick a single service or combine them into a site-wide security plan."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
				children: securityServices.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					id: s.slug,
					className: "rounded-xl border border-border bg-card p-7 shadow-card transition-transform hover:-translate-y-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex rounded-lg bg-gradient-gold p-2.5 text-ink shadow-gold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-lg font-semibold text-ink",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: s.summary
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-2",
							children: s.points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2 text-sm text-ink-soft",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 size-4 shrink-0 text-gold-deep" }), p]
							}, p))
						})
					]
				}, s.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-sand",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Training",
					title: "What every SP officer completes before deployment"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3",
					children: [
						"Police verification and Aadhaar-based identity check",
						"PSARA-aligned basic and refresher training",
						"Fire fighting, first aid and evacuation drills",
						"Access control, frisking and visitor protocol",
						"Client-specific SOP and site induction",
						"Grooming, drill and communication etiquette"
					].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3 rounded-lg border border-border bg-card p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 size-5 shrink-0 text-gold-deep" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-ink-soft",
							children: t
						})]
					}, t))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
//#endregion
export { SecurityServicesPage as component };
