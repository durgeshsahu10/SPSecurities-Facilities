import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as PageHero, r as SectionHeading, t as CtaBand } from "./page-hero-B5i-ShLc.mjs";
import { t as team_briefing_default } from "./team-briefing-fFrX373A.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-B7zkD5uU.js
var import_jsx_runtime = require_jsx_runtime();
function GalleryPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Gallery",
			title: "Our people, on site, every day",
			description: "Deployments, control rooms, housekeeping operations and client premises we look after across Pune and Mumbai.",
			image: team_briefing_default
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Moments",
				title: "From the field",
				align: "center"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto mt-10 max-w-2xl rounded-xl border border-dashed border-border bg-card p-12 text-center shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg font-semibold text-ink",
					children: "Photos coming soon"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "We are updating our site photo collection. Please check back shortly, or contact us to arrange a site visit."
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
//#endregion
export { GalleryPage as component };
