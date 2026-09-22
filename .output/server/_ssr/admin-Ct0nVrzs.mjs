import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { b as LoaderCircle, f as ShieldAlert, m as Plus, o as Trash2, y as LogOut } from "../_libs/lucide-react.mjs";
import { i as signOut, n as onAuthStateChanged, r as signInWithEmailAndPassword } from "../_libs/firebase__auth.mjs";
import "../_libs/firebase.mjs";
import { a as removeJob, i as listJobs, n as getFirebaseAuth, r as isFirebaseConfigured, t as createJob } from "./jobs-BEpafPlA.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-Ct0nVrzs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var emptyJob = {
	title: "",
	department: "Security",
	location: "",
	type: "Full-time",
	experience: "",
	salary: "",
	description: ""
};
function AdminPage() {
	const [user, setUser] = (0, import_react.useState)(null);
	const [checking, setChecking] = (0, import_react.useState)(true);
	const [jobs, setJobs] = (0, import_react.useState)([]);
	const [form, setForm] = (0, import_react.useState)(emptyJob);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const demoMode = !isFirebaseConfigured;
	(0, import_react.useEffect)(() => {
		const auth = getFirebaseAuth();
		if (!auth) {
			setChecking(false);
			return;
		}
		return onAuthStateChanged(auth, (u) => {
			setUser(u);
			setChecking(false);
		});
	}, []);
	const signedIn = demoMode || Boolean(user);
	(0, import_react.useEffect)(() => {
		if (!signedIn) return;
		listJobs().then(setJobs).catch(() => toast.error("Could not load job list."));
	}, [signedIn]);
	async function login(e) {
		e.preventDefault();
		const auth = getFirebaseAuth();
		if (!auth) return;
		const data = new FormData(e.currentTarget);
		setBusy(true);
		try {
			await signInWithEmailAndPassword(auth, String(data.get("email")), String(data.get("password")));
			toast.success("Signed in.");
		} catch {
			toast.error("Invalid email or password.");
		} finally {
			setBusy(false);
		}
	}
	async function addJob(e) {
		e.preventDefault();
		setBusy(true);
		try {
			await createJob(form);
			setJobs(await listJobs());
			setForm(emptyJob);
			toast.success("Job opening published.");
		} catch {
			toast.error("Could not save the job.");
		} finally {
			setBusy(false);
		}
	}
	async function deleteJob(id) {
		try {
			await removeJob(id);
			setJobs(await listJobs());
			toast.success("Job removed.");
		} catch {
			toast.error("Could not remove the job.");
		}
	}
	if (checking) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[60vh] items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-6 animate-spin text-gold-deep" })
	});
	if (!signedIn) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto flex min-h-[70vh] max-w-md items-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: login,
			className: "w-full rounded-2xl border border-border bg-card p-8 shadow-card",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-semibold text-ink",
					children: "Admin sign in"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Use the Firebase Authentication account created for the HR team."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "email",
							type: "email",
							required: true,
							placeholder: "Email",
							className: "w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-ring/40"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "password",
							type: "password",
							required: true,
							placeholder: "Password",
							className: "w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-ring/40"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							disabled: busy,
							className: "inline-flex items-center justify-center gap-2 rounded-md bg-gradient-gold px-6 py-3 text-sm font-semibold text-ink shadow-gold disabled:opacity-60",
							children: [busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : null, " Sign in"]
						})
					]
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Admin console"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 text-3xl font-semibold text-ink",
					children: "Career openings"
				})] }), user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => signOut(getFirebaseAuth()),
					className: "inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-ink-soft hover:border-gold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-4" }), " Sign out"]
				}) : null]
			}),
			demoMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex gap-3 rounded-lg border border-gold bg-sand p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "mt-0.5 size-5 shrink-0 text-gold-deep" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-ink-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Demo mode." }),
						" Firebase keys are not configured yet, so jobs are stored only in this browser and the admin login is bypassed. Follow the Firebase setup steps in",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
							className: "mx-1 rounded bg-card px-1.5 py-0.5",
							children: "README.md"
						}),
						" ",
						"to enable real storage and password-protected access."
					]
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-10 lg:grid-cols-[1fr_1.2fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: addJob,
					className: "rounded-2xl border border-border bg-card p-7 shadow-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-semibold text-ink",
						children: "Add a job opening"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminField, {
								label: "Job title",
								value: form.title,
								onChange: (v) => setForm({
									...form,
									title: v
								}),
								required: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminSelect, {
									label: "Department",
									value: form.department,
									options: [
										"Security",
										"Facilities",
										"Operations",
										"Corporate"
									],
									onChange: (v) => setForm({
										...form,
										department: v
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminSelect, {
									label: "Type",
									value: form.type,
									options: [
										"Full-time",
										"Part-time",
										"Contract"
									],
									onChange: (v) => setForm({
										...form,
										type: v
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminField, {
									label: "Location",
									value: form.location,
									onChange: (v) => setForm({
										...form,
										location: v
									}),
									required: true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminField, {
									label: "Experience",
									value: form.experience,
									onChange: (v) => setForm({
										...form,
										experience: v
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminField, {
								label: "Salary range",
								value: form.salary,
								onChange: (v) => setForm({
									...form,
									salary: v
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-sm font-medium text-ink",
								children: "Description"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								rows: 4,
								value: form.description,
								onChange: (e) => setForm({
									...form,
									description: e.target.value
								}),
								className: "mt-2 w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-ring/40"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								disabled: busy,
								className: "inline-flex items-center justify-center gap-2 rounded-md bg-gradient-gold px-6 py-3 text-sm font-semibold text-ink shadow-gold disabled:opacity-60",
								children: [
									busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }),
									" ",
									"Publish opening"
								]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-xl font-semibold text-ink",
					children: [
						"Published openings (",
						jobs.length,
						")"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-4",
					children: jobs.map((j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-xl border border-border bg-card p-5 shadow-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: j.department
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 text-lg font-semibold text-ink",
									children: j.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: [
										j.location,
										" · ",
										j.type,
										" · ",
										j.experience,
										" · ",
										j.salary
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: j.description
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => deleteJob(j.id),
								"aria-label": `Remove ${j.title}`,
								className: "rounded-md border border-border p-2 text-destructive hover:border-destructive",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
							})]
						})
					}, j.id))
				})] })]
			})
		]
	});
}
function AdminField({ label, value, onChange, required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "text-sm font-medium text-ink",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		value,
		required,
		onChange: (e) => onChange(e.target.value),
		className: "mt-2 w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-ring/40"
	})] });
}
function AdminSelect({ label, value, options, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "text-sm font-medium text-ink",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
		value,
		onChange: (e) => onChange(e.target.value),
		className: "mt-2 w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-ring/40",
		children: options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: o }, o))
	})] });
}
//#endregion
export { AdminPage as component };
