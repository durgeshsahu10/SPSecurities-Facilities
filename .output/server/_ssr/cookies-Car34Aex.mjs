import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as company } from "./site-GFofrnMr.mjs";
import { t as LegalPage } from "./legal-page-eTtmDeid.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cookies-Car34Aex.js
var import_jsx_runtime = require_jsx_runtime();
function CookiesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalPage, {
		title: "Cookie Policy",
		updated: "21 September 2026",
		sections: [
			{
				heading: "1. What cookies are",
				body: ["Cookies are small text files placed on your device when you visit a website. They help the site work correctly and help us understand how visitors use it."]
			},
			{
				heading: "2. Cookies we use",
				body: [
					"Essential cookies: required for page navigation, form submission and secure admin access. These cannot be switched off.",
					"Analytics cookies: help us measure page visits and improve content. They collect aggregated, non-identifying information.",
					"Preference cookies: remember basic choices such as previously entered form details on your device."
				]
			},
			{
				heading: "3. Third-party services",
				body: ["We use Google Firebase for hosting and form storage, Google Maps for the location map and may use Google Analytics for traffic measurement. These services may set their own cookies under their respective policies."]
			},
			{
				heading: "4. Managing cookies",
				body: ["You can delete or block cookies through your browser settings. Blocking essential cookies may prevent forms and some pages from working as intended."]
			},
			{
				heading: "5. Questions",
				body: [`For any question about this policy, write to ${company.email}.`]
			}
		]
	});
}
//#endregion
export { CookiesPage as component };
