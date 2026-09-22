import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { M as Clock, _ as MapPin, b as LoaderCircle, h as Phone, v as Mail } from "../_libs/lucide-react.mjs";
import { t as company } from "./site-GFofrnMr.mjs";
import { n as PageHero, r as SectionHeading } from "./page-hero-B5i-ShLc.mjs";
import { o as submitDocument } from "./jobs-BEpafPlA.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as hero_security_default } from "./hero-security-I0lUDKTg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CPdR_YHr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const [loading, setLoading] = (0, import_react.useState)(false);
	async function onSubmit(e) {
		e.preventDefault();
		const form = e.currentTarget;
		const data = Object.fromEntries(new FormData(form).entries());
		setLoading(true);
		try {
			await submitDocument("enquiries", data);
			toast.success("Thank you — our team will contact you within 24 hours.");
			form.reset();
		} catch {
			toast.error("Could not send your enquiry. Please call us instead.");
		} finally {
			setLoading(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Contact",
		title: "Tell us about your site",
		description: "Share your requirement and we will come back with a manpower plan and costing. Contact us to schedule a site visit.",
		image: hero_security_default
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-7xl px-4 py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 lg:grid-cols-[1fr_1.1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Reach us",
					title: "Head office in Pune"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-8 space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContactRow, {
							icon: MapPin,
							label: "Address",
							children: [
								company.addressLine,
								", ",
								company.city,
								" ",
								company.pincode,
								",",
								" ",
								company.state,
								", ",
								company.country
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContactRow, {
							icon: Phone,
							label: "Phone",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `tel:${company.phone.replace(/\s/g, "")}`,
									className: "hover:text-gold-deep",
									children: company.phone
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mx-1",
									children: "/"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `tel:${company.phoneSecondary.replace(/\s/g, "")}`,
									className: "hover:text-gold-deep",
									children: company.phoneSecondary
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
							icon: Mail,
							label: "Email",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${company.email}`,
								className: "hover:text-gold-deep",
								children: company.email
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
							icon: Clock,
							label: "Working hours",
							children: company.hours
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 overflow-hidden rounded-xl border border-border shadow-card",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "SP Securities location in Kharadi, Pune",
						src: "https://www.google.com/maps?q=Global+Business+Hub+Near+EON+IT+Park+Kharadi+Pune+411014&output=embed",
						className: "h-72 w-full",
						loading: "lazy",
						referrerPolicy: "no-referrer-when-downgrade"
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-card p-7 shadow-card md:p-9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-semibold text-ink",
						children: "Contact us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Fields marked * are required. We never share your details."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-7 grid gap-5 sm:grid-cols-2",
						onSubmit,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Full name *",
								name: "name",
								required: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Company / Society",
								name: "company"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Phone *",
								name: "phone",
								type: "tel",
								required: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Email *",
								name: "email",
								type: "email",
								required: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								label: "Service required *",
								name: "service",
								options: [
									"Security Services",
									"Facilities / Housekeeping",
									"Integrated (Security + Facilities)",
									"Industrial Security",
									"Residential Security",
									"Commercial Security",
									"Event Security",
									"Private Detective Services",
									"Bouncer Services",
									"Other"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								label: "City *",
								name: "city",
								options: [
									"Pune",
									"Pimpri-Chinchwad",
									"Mumbai",
									"Navi Mumbai",
									"Thane",
									"Other"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-sm font-medium text-ink",
									htmlFor: "message",
									children: "Your requirement"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									id: "message",
									name: "message",
									rows: 4,
									placeholder: "e.g. 6 guards across 3 shifts and daily housekeeping for a 40,000 sq ft office",
									className: "mt-2 w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-ring/40"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								disabled: loading,
								className: "inline-flex items-center justify-center gap-2 rounded-md bg-gradient-gold px-6 py-3 text-sm font-semibold text-ink shadow-gold transition-transform hover:-translate-y-0.5 disabled:opacity-60 sm:col-span-2",
								children: [loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : null, "Send Enquiry"]
							})
						]
					})
				]
			})]
		})
	})] });
}
function ContactRow({ icon: Icon, label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "flex gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-gold text-ink shadow-gold",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-ink-soft",
			children
		})] })]
	});
}
function Field({ label, name, type = "text", required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "text-sm font-medium text-ink",
		htmlFor: name,
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		id: name,
		name,
		type,
		required,
		className: "mt-2 w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-ring/40"
	})] });
}
function Select({ label, name, options }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "text-sm font-medium text-ink",
		htmlFor: name,
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
		id: name,
		name,
		required: true,
		className: "mt-2 w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-ring/40",
		children: options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: o }, o))
	})] });
}
//#endregion
export { ContactPage as component };
