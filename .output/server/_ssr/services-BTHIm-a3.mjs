import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { V as ArrowRight } from "../_libs/lucide-react.mjs";
import { i as securityServices, n as facilityServices } from "./site-GFofrnMr.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PageHero, r as SectionHeading, t as CtaBand } from "./page-hero-B5i-ShLc.mjs";
import { t as hero_security_default } from "./hero-security-I0lUDKTg.mjs";
import { t as facility_services_default } from "./facility-services-xkLzxd2Q.mjs";
import { t as security_services_default } from "./security-services-BneGgZJc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-BTHIm-a3.js
var import_jsx_runtime = require_jsx_runtime();
function ServicesIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Services",
			title: "Everything your site needs, from the gate to the top floor",
			description: "Two specialised divisions working to one service-level agreement — so security cover and facility upkeep never fall between two vendors.",
			image: hero_security_default
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-4 py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DivisionCard, {
					to: "/services/security",
					image: security_services_default,
					title: "Security Services",
					count: securityServices.length,
					text: "Manned guarding, industrial, residential and commercial security, event teams, personal protection, private detective and bouncer services."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DivisionCard, {
					to: "/services/facilities",
					image: facility_services_default,
					title: "Facilities Services",
					count: facilityServices.length,
					text: "Housekeeping for residential societies and commercial properties, project cleaning, carpet and chair shampooing, technical services and pest control."
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-sand",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "How we start",
					title: "A four-step onboarding built for speed",
					align: "center"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-12 grid gap-6 md:grid-cols-4",
					children: [
						{
							t: "Site survey",
							d: "A detailed risk and manpower assessment of your premises, usually within 48 hours."
						},
						{
							t: "Deployment plan",
							d: "Shift roster, post-wise duties, uniform and equipment list with transparent costing."
						},
						{
							t: "Mobilisation",
							d: "Verified staff inducted, trained on your SOPs and deployed — typically in 3–7 days."
						},
						{
							t: "Review & audit",
							d: "Monthly audits, attendance reports and a named account manager on call."
						}
					].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-xl border border-border bg-card p-6 shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-display text-3xl font-semibold text-gradient-gold",
								children: ["0", i + 1]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 text-lg font-semibold text-ink",
								children: s.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: s.d
							})
						]
					}, s.t))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
function DivisionCard({ to, image, title, text, count }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: "group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-transform hover:-translate-y-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: image,
			alt: title,
			width: 1600,
			height: 1008,
			loading: "lazy",
			className: "h-60 w-full object-cover"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "eyebrow",
					children: [count, " services"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-2xl font-semibold text-ink",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: text
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-deep group-hover:gap-3",
					children: ["Explore ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})
			]
		})]
	});
}
//#endregion
export { ServicesIndex as component };
