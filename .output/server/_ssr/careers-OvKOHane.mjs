import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { C as IndianRupee, N as Clock3, O as GraduationCap, R as Briefcase, T as HeartPulse, _ as MapPin, a as TrendingUp, b as LoaderCircle } from "../_libs/lucide-react.mjs";
import { n as PageHero, r as SectionHeading } from "./page-hero-B5i-ShLc.mjs";
import { t as team_briefing_default } from "./team-briefing-fFrX373A.mjs";
import { i as listJobs, o as submitDocument } from "./jobs-BEpafPlA.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/careers-OvKOHane.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CareersPage() {
	const [jobs, setJobs] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [selected, setSelected] = (0, import_react.useState)("");
	const [sending, setSending] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		listJobs().then(setJobs).catch(() => toast.error("Could not load openings right now.")).finally(() => setLoading(false));
	}, []);
	async function apply(e) {
		e.preventDefault();
		const form = e.currentTarget;
		const data = Object.fromEntries(new FormData(form).entries());
		setSending(true);
		try {
			await submitDocument("applications", {
				...data,
				role: data["role"] || selected
			});
			toast.success("Application received. Our HR team will call you shortly.");
			form.reset();
		} catch {
			toast.error("Could not submit your application. Please try again.");
		} finally {
			setSending(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Careers",
			title: "Join a team that invests in its people",
			description: "Guards, housekeeping staff, technicians and supervisors — with training, statutory benefits and a clear path to supervisory roles.",
			image: team_briefing_default
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Why work with us",
				title: "More than a posting"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-6 md:grid-cols-3",
				children: [
					{
						icon: GraduationCap,
						t: "Paid training",
						d: "PSARA-aligned security training, housekeeping and technical skilling at our academy."
					},
					{
						icon: HeartPulse,
						t: "Full statutory benefits",
						d: "PF, ESIC, bonus, gratuity and insurance — paid on time, every month."
					},
					{
						icon: TrendingUp,
						t: "Growth path",
						d: "Guard to supervisor to site in-charge: internal promotions fill most of our leadership roles."
					}
				].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-card p-7 shadow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex rounded-lg bg-gradient-gold p-2.5 text-ink shadow-gold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(b.icon, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-lg font-semibold text-ink",
							children: b.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: b.d
						})
					]
				}, b.t))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-sand",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Open roles",
					title: "Current openings"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-5",
					children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), " Loading openings…"]
					}) : jobs.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "No openings listed right now. Send your details below and we will keep them on file."
					}) : jobs.map((j) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl border border-border bg-card p-6 shadow-card md:flex md:items-center md:justify-between md:gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: j.department
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 text-xl font-semibold text-ink",
								children: j.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-2xl text-sm text-muted-foreground",
								children: j.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex flex-wrap gap-4 text-xs text-ink-soft",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5 text-gold-deep" }),
											" ",
											j.location
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "size-3.5 text-gold-deep" }),
											" ",
											j.type
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { className: "size-3.5 text-gold-deep" }),
											" ",
											j.experience
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndianRupee, { className: "size-3.5 text-gold-deep" }),
											" ",
											j.salary
										]
									})
								]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#apply",
							onClick: () => setSelected(j.title),
							className: "mt-5 inline-flex shrink-0 items-center rounded-md bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-ink shadow-gold md:mt-0",
							children: "Apply Now"
						})]
					}, j.id))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "apply",
			className: "mx-auto max-w-3xl px-4 py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Apply",
				title: "Send your application",
				align: "center"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: apply,
				className: "mt-10 grid gap-5 rounded-2xl border border-border bg-card p-7 shadow-card sm:grid-cols-2 md:p-9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						label: "Full name *",
						name: "name",
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						label: "Phone *",
						name: "phone",
						type: "tel",
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						label: "Email",
						name: "email",
						type: "email"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						label: "City *",
						name: "city",
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						label: "Role applying for *",
						name: "role",
						required: true,
						defaultValue: selected
					}, selected),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						label: "Total experience",
						name: "experience"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sm:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "about",
							className: "text-sm font-medium text-ink",
							children: "Brief about yourself"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							id: "about",
							name: "about",
							rows: 4,
							className: "mt-2 w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-ring/40"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						disabled: sending,
						className: "inline-flex items-center justify-center gap-2 rounded-md bg-gradient-gold px-6 py-3 text-sm font-semibold text-ink shadow-gold transition-transform hover:-translate-y-0.5 disabled:opacity-60 sm:col-span-2",
						children: [sending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : null, "Submit Application"]
					})
				]
			})]
		})
	] });
}
function Input({ label, name, type = "text", required, defaultValue }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		htmlFor: name,
		className: "text-sm font-medium text-ink",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		id: name,
		name,
		type,
		required,
		defaultValue,
		className: "mt-2 w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-ring/40"
	})] });
}
//#endregion
export { CareersPage as component };
