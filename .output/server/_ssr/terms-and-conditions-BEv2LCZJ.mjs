import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as company } from "./site-GFofrnMr.mjs";
import { t as LegalPage } from "./legal-page-eTtmDeid.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/terms-and-conditions-BEv2LCZJ.js
var import_jsx_runtime = require_jsx_runtime();
function Terms() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalPage, {
		title: "Terms and Conditions",
		updated: "21 September 2026",
		sections: [
			{
				heading: "1. Acceptance of terms",
				body: [`By accessing ${company.website} you agree to these terms. If you do not agree, please discontinue use of the website.`]
			},
			{
				heading: "2. Website content",
				body: ["Content on this website is provided for general information about our services. Service scope, manpower strength, pricing and timelines are confirmed only through a signed service agreement or written quotation."]
			},
			{
				heading: "3. Intellectual property",
				body: [`The SP Securities name, logo, text, graphics and layout are owned by ${company.name} and may not be reproduced without written permission. Stock photographs are used under licence.`]
			},
			{
				heading: "4. Service engagement",
				body: ["All deployments are subject to a written agreement covering scope, duty hours, statutory compliance, billing cycle, notice period and termination.", "We maintain PSARA licensing and statutory compliance (PF, ESIC, minimum wages) for deployed personnel. Client-specific obligations such as site access, welfare facilities and safety arrangements remain the responsibility of the client."]
			},
			{
				heading: "5. Limitation of liability",
				body: ["We are not liable for indirect or consequential losses arising from the use of this website. Liability under any service engagement is limited to the terms of the executed service agreement."]
			},
			{
				heading: "6. Recruitment notice",
				body: ["We never charge candidates any fee for recruitment, training placement or deployment. Please report any such demand immediately to our head office."]
			},
			{
				heading: "7. Governing law",
				body: ["These terms are governed by the laws of India and subject to the exclusive jurisdiction of the courts at Pune, Maharashtra."]
			}
		]
	});
}
//#endregion
export { Terms as component };
