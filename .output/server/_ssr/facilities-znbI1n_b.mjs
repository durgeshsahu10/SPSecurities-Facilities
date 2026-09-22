import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { P as CircleCheck } from "../_libs/lucide-react.mjs";
import { n as facilityServices } from "./site-GFofrnMr.mjs";
import { n as PageHero, r as SectionHeading, t as CtaBand } from "./page-hero-B5i-ShLc.mjs";
import { t as facility_services_default } from "./facility-services-xkLzxd2Q.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/facilities-znbI1n_b.js
var import_jsx_runtime = require_jsx_runtime();
function FacilityServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Facilities Division",
			title: "Professional housekeeping for well-kept properties",
			description: "Property maintenance and housekeeping solutions for residential societies and commercial spaces, delivered by trained teams.",
			image: facility_services_default
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Capabilities",
				title: "Soft services, technical services and staffing",
				description: "Choose individual services, or hand over the whole facility under one integrated contract."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
				children: facilityServices.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
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
					eyebrow: "Delivery model",
					title: "How quality is measured, not promised"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 md:grid-cols-3",
					children: [
						{
							t: "Checklists on every shift",
							d: "Zone-wise cleaning and maintenance checklists signed off by the site supervisor each shift."
						},
						{
							t: "Planned preventive maintenance",
							d: "Annual PPM calendar for HVAC, electrical, plumbing and DG sets to avoid unplanned downtime."
						},
						{
							t: "Monthly scorecard",
							d: "Attendance, complaint closure time, consumable usage and audit scores in one shared report."
						}
					].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-card p-7 shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-semibold text-ink",
							children: c.t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: c.d
						})]
					}, c.t))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
//#endregion
export { FacilityServicesPage as component };
