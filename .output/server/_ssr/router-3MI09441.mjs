import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { A as Facebook, F as ChevronDown, M as Clock, S as Instagram, _ as MapPin, g as Menu, h as Phone, t as X, v as Mail, x as Linkedin } from "../_libs/lucide-react.mjs";
import { a as serviceAreas, t as company } from "./site-GFofrnMr.mjs";
import { _ as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-3MI09441.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DscBvahr.css";
var sp_securities_logo_default = "/assets/sp-securities-logo-2hkpU25p.png";
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var navLinks = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About Us"
	},
	{
		to: "/gallery",
		label: "Gallery"
	},
	{
		to: "/careers",
		label: "Careers"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
var serviceLinks = [
	{
		to: "/services",
		label: "All Services"
	},
	{
		to: "/services/security",
		label: "Security Services"
	},
	{
		to: "/services/facilities",
		label: "Facilities Services"
	}
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (e) => {
			if (e.key === "Escape") setOpen(false);
		};
		document.addEventListener("keydown", onKey);
		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", onKey);
			document.body.style.overflow = prev;
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 border-b border-sidebar-border bg-primary text-primary-foreground shadow-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "flex items-center gap-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: sp_securities_logo_default,
							alt: "SP Securities logo",
							width: 180,
							height: 100,
							className: "h-14 w-auto object-contain"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "hidden items-center gap-1 lg:flex",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderLink, {
								to: "/",
								label: "Home"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-primary-foreground/80 transition-colors hover:text-accent",
									children: ["Services ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "invisible absolute left-0 top-full w-60 translate-y-1 rounded-lg border border-border bg-card p-2 opacity-0 shadow-card transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100",
									children: serviceLinks.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: s.to,
										className: "block rounded-md px-3 py-2 text-sm text-ink-soft transition-colors hover:bg-sand hover:text-gold-deep",
										children: s.label
									}, s.to))
								})]
							}),
							navLinks.slice(1).map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderLink, {
								to: l.to,
								label: l.label
							}, l.to))
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden lg:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "inline-flex items-center rounded-md bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-ink shadow-gold transition-transform hover:-translate-y-0.5",
							children: "Contact Us"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "rounded-md border border-primary-foreground/25 p-2 lg:hidden",
						onClick: () => setOpen((v) => !v),
						"aria-label": open ? "Close navigation menu" : "Open navigation menu",
						"aria-expanded": open,
						"aria-controls": "mobile-menu",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("fixed inset-0 z-40 bg-ink/60 transition-opacity duration-300 lg:hidden", open ? "opacity-100" : "pointer-events-none opacity-0"),
				onClick: () => setOpen(false),
				"aria-hidden": !open
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				id: "mobile-menu",
				role: "dialog",
				"aria-modal": "true",
				"aria-label": "Site menu",
				className: cn("fixed top-0 right-0 z-50 flex h-full w-80 max-w-[85vw] flex-col bg-primary text-primary-foreground shadow-card transition-transform duration-300 ease-out lg:hidden", open ? "translate-x-0" : "translate-x-full"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b border-sidebar-border px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-semibold tracking-wide text-accent",
							children: "Menu"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setOpen(false),
							"aria-label": "Close navigation menu",
							className: "rounded-md border border-primary-foreground/25 p-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "flex-1 overflow-y-auto px-4 py-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrawerLink, {
								to: "/",
								label: "Home",
								onNavigate: () => setOpen(false)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow mt-5 mb-1 px-3",
								children: "Services"
							}),
							serviceLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrawerLink, {
								to: l.to,
								label: l.label,
								onNavigate: () => setOpen(false)
							}, l.to)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow mt-5 mb-1 px-3",
								children: "Company"
							}),
							navLinks.slice(1).map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrawerLink, {
								to: l.to,
								label: l.label,
								onNavigate: () => setOpen(false)
							}, l.to))
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border-t border-sidebar-border p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							onClick: () => setOpen(false),
							className: "flex items-center justify-center rounded-md bg-gradient-gold px-5 py-3 text-sm font-semibold text-ink shadow-gold",
							children: "Contact Us"
						})
					})
				]
			})
		]
	});
}
function HeaderLink({ to, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		activeOptions: { exact: to === "/" },
		activeProps: { className: "text-accent" },
		className: "rounded-md px-3 py-2 text-sm font-medium text-primary-foreground/80 transition-colors hover:text-accent",
		children: label
	});
}
function DrawerLink({ to, label, onNavigate }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		onClick: onNavigate,
		activeOptions: { exact: to === "/" },
		activeProps: { className: "bg-sidebar-accent text-accent" },
		className: "block rounded-md px-3 py-3 text-base font-medium text-primary-foreground/85 transition-colors hover:bg-sidebar-accent hover:text-accent",
		children: label
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-gradient-ink text-primary-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: sp_securities_logo_default,
						alt: "SP Securities logo",
						width: 180,
						height: 101,
						loading: "lazy",
						className: "h-20 w-auto object-contain"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm text-primary-foreground/70",
						children: [company.name, " delivers responsible security and facility services across Pune and Mumbai through trained personnel, disciplined processes and dependable supervision."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 flex gap-3",
						children: [
							Linkedin,
							Facebook,
							Instagram
						].map((Icon, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: company.website,
							target: "_blank",
							rel: "noreferrer noopener",
							"aria-label": "Social profile",
							className: "rounded-md border border-primary-foreground/20 p-2 transition-colors hover:border-accent hover:text-accent",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
						}, i))
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterHeading, { children: "Services" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-2 text-sm text-primary-foreground/70",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterLink, {
							to: "/services",
							label: "All Services"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterLink, {
							to: "/services/security",
							label: "Security Services"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterLink, {
							to: "/services/facilities",
							label: "Facilities Services"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterLink, {
							to: "/about",
							label: "About Us"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterLink, {
							to: "/gallery",
							label: "Gallery"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterLink, {
							to: "/careers",
							label: "Careers"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterLink, {
							to: "/contact",
							label: "Contact Us"
						})
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterHeading, { children: "Areas We Serve" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-relaxed text-primary-foreground/70",
					children: serviceAreas.join(" · ")
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterHeading, { children: "Reach Us" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-3 text-sm text-primary-foreground/70",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								company.addressLine,
								", ",
								company.city,
								" ",
								company.pincode,
								",",
								" ",
								company.state
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 size-4 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `tel:${company.phone.replace(/\s/g, "")}`,
									children: company.phone
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mx-1",
									children: "/"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `tel:${company.phoneSecondary.replace(/\s/g, "")}`,
									children: company.phoneSecondary
								})
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 size-4 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${company.email}`,
								children: company.email
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mt-0.5 size-4 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: company.hours })]
						})
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-primary-foreground/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-primary-foreground/60 md:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					company.name,
					". All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex flex-wrap items-center gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/privacy-policy",
							className: "hover:text-accent",
							children: "Privacy Policy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/terms-and-conditions",
							className: "hover:text-accent",
							children: "Terms & Conditions"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/cookies",
							className: "hover:text-accent",
							children: "Cookies"
						})
					]
				})]
			})
		})]
	});
}
function FooterHeading({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
		className: "mb-4 text-sm font-semibold tracking-[0.18em] text-accent uppercase",
		children
	});
}
function FooterLink({ to, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		className: "transition-colors hover:text-accent",
		children: label
	}) });
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[70vh] items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-7xl font-bold text-gradient-gold",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-ink",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-ink shadow-gold",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[70vh] items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-ink",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-ink shadow-gold",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-accent/15",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$12 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "SP Securities | Professional Security Services in Pune & Mumbai" },
			{
				name: "description",
				content: "Pune-based security company providing professional guarding, residential, commercial, industrial, bouncer, detective and housekeeping services."
			},
			{
				name: "author",
				content: "SP Securities"
			},
			{
				name: "robots",
				content: "index, follow"
			},
			{
				name: "geo.region",
				content: "IN-MH"
			},
			{
				name: "geo.placename",
				content: "Pune, Maharashtra"
			},
			{
				property: "og:site_name",
				content: "SP Securities"
			},
			{
				property: "og:locale",
				content: "en_IN"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "theme-color",
				content: "#111111"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
			},
			{
				rel: "icon",
				type: "image/png",
				href: "/favicon.png"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Organization",
				name: "SP Securities",
				url: "https://www.spgroupcorp.com",
				logo: "https://www.spgroupcorp.com/favicon.png",
				areaServed: ["Pune", "Mumbai"]
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$12.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
			position: "top-right",
			richColors: true
		})]
	});
}
var $$splitComponentImporter$11 = () => import("./routes-uUPlU4k7.mjs");
var Route$11 = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter$11, "component"),
	head: () => ({
		meta: [
			{ title: "Security Services in Pune & Mumbai | SP Securities" },
			{
				name: "description",
				content: "SP Securities provides professional security personnel, private detective, bouncer, housekeeping and facility services across Pune and Mumbai."
			},
			{
				name: "keywords",
				content: "security agency in Pune, security guard services Pune, facility management Mumbai, housekeeping services Pune, PSARA licensed security company"
			},
			{
				property: "og:title",
				content: "Security Services in Pune & Mumbai | SP Securities"
			},
			{
				property: "og:description",
				content: "Responsible security and housekeeping solutions for residential, commercial, corporate and industrial premises."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "SecurityService",
				name: company.name,
				url: company.website,
				telephone: company.phone,
				email: company.email,
				areaServed: [
					"Pune",
					"Mumbai",
					"Pimpri-Chinchwad",
					"Navi Mumbai",
					"Thane"
				],
				address: {
					"@type": "PostalAddress",
					streetAddress: company.addressLine,
					addressLocality: company.city,
					addressRegion: company.state,
					postalCode: company.pincode,
					addressCountry: "IN"
				},
				openingHours: "Mo-Sa 09:00-19:00"
			})
		}]
	})
});
var $$splitComponentImporter$10 = () => import("./about-CAlvHzI5.mjs");
var Route$10 = createFileRoute("/about")({
	component: lazyRouteComponent($$splitComponentImporter$10, "component"),
	head: () => ({
		meta: [
			{ title: "About SP Securities — Professional Security Company in Pune" },
			{
				name: "description",
				content: "Learn about SP Securities, a professional security company providing responsible protection solutions for residential, commercial and industrial premises."
			},
			{
				property: "og:title",
				content: "About SP Securities"
			},
			{
				property: "og:description",
				content: "A Pune-based security and facility management partner with PSARA compliance, trained manpower and audited service delivery."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/about"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	})
});
var $$splitComponentImporter$9 = () => import("./admin-Ct0nVrzs.mjs");
var Route$9 = createFileRoute("/admin")({
	component: lazyRouteComponent($$splitComponentImporter$9, "component"),
	head: () => ({ meta: [
		{ title: "Admin — Manage Job Openings | SP Securities" },
		{
			name: "description",
			content: "Internal admin console for managing career listings."
		},
		{
			name: "robots",
			content: "noindex, nofollow"
		},
		{
			property: "og:title",
			content: "Admin | SP Securities"
		},
		{
			property: "og:description",
			content: "Internal admin console."
		},
		{
			property: "og:type",
			content: "website"
		}
	] })
});
var $$splitComponentImporter$8 = () => import("./careers-OvKOHane.mjs");
var Route$8 = createFileRoute("/careers")({
	component: lazyRouteComponent($$splitComponentImporter$8, "component"),
	head: () => ({
		meta: [
			{ title: "Careers — Security Guard & Facility Jobs in Pune and Mumbai | SP Securities" },
			{
				name: "description",
				content: "Apply for security guard, lady guard, housekeeping, supervisor and operations jobs in Pune and Mumbai with SP Securities. PF, ESIC and training provided."
			},
			{
				name: "keywords",
				content: "security guard jobs Pune, housekeeping jobs Mumbai, supervisor jobs Pune, facility management careers India"
			},
			{
				property: "og:title",
				content: "Careers at SP Securities"
			},
			{
				property: "og:description",
				content: "Open roles for security and facility staff across Pune and Mumbai."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/careers"
			}
		],
		links: [{
			rel: "canonical",
			href: "/careers"
		}]
	})
});
var $$splitComponentImporter$7 = () => import("./contact-CPdR_YHr.mjs");
var Route$7 = createFileRoute("/contact")({
	component: lazyRouteComponent($$splitComponentImporter$7, "component"),
	head: () => ({
		meta: [
			{ title: "Contact SP Securities — Kharadi, Pune | Contact Us" },
			{
				name: "description",
				content: "Contact SP Securities in Kharadi, Pune for professional security, bouncer, detective and housekeeping services across Pune and Mumbai."
			},
			{
				property: "og:title",
				content: "Contact Us | SP Securities"
			},
			{
				property: "og:description",
				content: "Call, email or send a request — we respond with a deployment plan within 24 hours."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "LocalBusiness",
				name: company.name,
				telephone: company.phone,
				email: company.email,
				address: {
					"@type": "PostalAddress",
					streetAddress: company.addressLine,
					addressLocality: company.city,
					addressRegion: company.state,
					postalCode: company.pincode,
					addressCountry: "IN"
				},
				areaServed: serviceAreas
			})
		}]
	})
});
var $$splitComponentImporter$6 = () => import("./cookies-Car34Aex.mjs");
var Route$6 = createFileRoute("/cookies")({
	component: lazyRouteComponent($$splitComponentImporter$6, "component"),
	head: () => ({
		meta: [
			{ title: "Cookie Policy | SP Securities" },
			{
				name: "description",
				content: "How SP Securities uses cookies and similar technologies on this website, and how you can control them."
			},
			{
				property: "og:title",
				content: "Cookie Policy | SP Securities"
			},
			{
				property: "og:description",
				content: "Cookie usage and your choices."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/cookies"
			}
		],
		links: [{
			rel: "canonical",
			href: "/cookies"
		}]
	})
});
var $$splitComponentImporter$5 = () => import("./gallery-B7zkD5uU.mjs");
var Route$5 = createFileRoute("/gallery")({
	component: lazyRouteComponent($$splitComponentImporter$5, "component"),
	head: () => ({
		meta: [
			{ title: "Gallery — Our Teams & Sites in Pune and Mumbai | SP Securities" },
			{
				name: "description",
				content: "Photo gallery of SP Securities teams at work: security deployments, housekeeping operations and client sites across Pune and Mumbai."
			},
			{
				property: "og:title",
				content: "Gallery | SP Securities"
			},
			{
				property: "og:description",
				content: "A look at our security and facility management teams on site across Pune and Mumbai."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/gallery"
			}
		],
		links: [{
			rel: "canonical",
			href: "/gallery"
		}]
	})
});
var $$splitComponentImporter$4 = () => import("./privacy-policy-BwjWv-NS.mjs");
var Route$4 = createFileRoute("/privacy-policy")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: () => ({
		meta: [
			{ title: "Privacy Policy | SP Securities" },
			{
				name: "description",
				content: "How SP Securities collects, uses, stores and protects personal information submitted through this website."
			},
			{
				property: "og:title",
				content: "Privacy Policy | SP Securities"
			},
			{
				property: "og:description",
				content: "Our commitments on personal data collected through enquiry and job application forms."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/privacy-policy"
			}
		],
		links: [{
			rel: "canonical",
			href: "/privacy-policy"
		}]
	})
});
var $$splitComponentImporter$3 = () => import("./terms-and-conditions-BEv2LCZJ.mjs");
var Route$3 = createFileRoute("/terms-and-conditions")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({
		meta: [
			{ title: "Terms and Conditions | SP Securities" },
			{
				name: "description",
				content: "Terms and conditions governing use of the SP Securities website and the engagement of our security and facility management services."
			},
			{
				property: "og:title",
				content: "Terms and Conditions | SP Securities"
			},
			{
				property: "og:description",
				content: "Website usage terms and service engagement conditions."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/terms-and-conditions"
			}
		],
		links: [{
			rel: "canonical",
			href: "/terms-and-conditions"
		}]
	})
});
var $$splitComponentImporter$2 = () => import("./services-BTHIm-a3.mjs");
var Route$2 = createFileRoute("/services/")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({
		meta: [
			{ title: "Our Services — Security & Housekeeping | SP Securities" },
			{
				name: "description",
				content: "Explore SP Securities services: professional guarding, industrial and residential security, private detective, bouncer and housekeeping services in Pune and Mumbai."
			},
			{
				property: "og:title",
				content: "Our Services | SP Securities"
			},
			{
				property: "og:description",
				content: "Security and facility management services for offices, societies, industry and retail across Pune and Mumbai."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/services"
			}
		],
		links: [{
			rel: "canonical",
			href: "/services"
		}]
	})
});
var $$splitComponentImporter$1 = () => import("./facilities-znbI1n_b.mjs");
var Route$1 = createFileRoute("/services/facilities")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({
		meta: [
			{ title: "Housekeeping & Facility Services in Pune & Mumbai | SP Securities" },
			{
				name: "description",
				content: "Housekeeping and facility services in Pune and Mumbai for residential societies and commercial properties, including project cleaning and carpet and chair shampooing."
			},
			{
				name: "keywords",
				content: "facility management company Pune, housekeeping services Mumbai, pest control Pune, office cleaning services, integrated facility management India"
			},
			{
				property: "og:title",
				content: "Facilities Services in Pune & Mumbai | SP Facilities"
			},
			{
				property: "og:description",
				content: "Housekeeping, project cleaning, carpet and chair shampooing, technical services and pest control for residential and commercial properties."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/services/facilities"
			}
		],
		links: [{
			rel: "canonical",
			href: "/services/facilities"
		}]
	})
});
var $$splitComponentImporter = () => import("./security-Cr4rEqCm.mjs");
var Route = createFileRoute("/services/security")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: () => ({
		meta: [
			{ title: "Security Guard Services in Pune & Mumbai | SP Securities" },
			{
				name: "description",
				content: "Professional security services in Pune and Mumbai: manned guarding, industrial, residential and commercial security, private detective, bouncer and event security."
			},
			{
				name: "keywords",
				content: "security guard services Pune, security agency Mumbai, industrial security, residential security, private detective, bouncer services"
			},
			{
				property: "og:title",
				content: "Security Services in Pune & Mumbai | SP Securities"
			},
			{
				property: "og:description",
				content: "Professional security personnel and tailored protection solutions for offices, societies, industry, retail and events."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/services/security"
			}
		],
		links: [{
			rel: "canonical",
			href: "/services/security"
		}]
	})
});
var IndexRoute = Route$11.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$12
});
var AboutRoute = Route$10.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$12
});
var AdminRoute = Route$9.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => Route$12
});
var CareersRoute = Route$8.update({
	id: "/careers",
	path: "/careers",
	getParentRoute: () => Route$12
});
var ContactRoute = Route$7.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$12
});
var CookiesRoute = Route$6.update({
	id: "/cookies",
	path: "/cookies",
	getParentRoute: () => Route$12
});
var GalleryRoute = Route$5.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$12
});
var PrivacyPolicyRoute = Route$4.update({
	id: "/privacy-policy",
	path: "/privacy-policy",
	getParentRoute: () => Route$12
});
var TermsAndConditionsRoute = Route$3.update({
	id: "/terms-and-conditions",
	path: "/terms-and-conditions",
	getParentRoute: () => Route$12
});
var ServicesIndexRoute = Route$2.update({
	id: "/services/",
	path: "/services/",
	getParentRoute: () => Route$12
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	AdminRoute,
	CareersRoute,
	ContactRoute,
	CookiesRoute,
	GalleryRoute,
	PrivacyPolicyRoute,
	TermsAndConditionsRoute,
	ServicesFacilitiesRoute: Route$1.update({
		id: "/services/facilities",
		path: "/services/facilities",
		getParentRoute: () => Route$12
	}),
	ServicesSecurityRoute: Route.update({
		id: "/services/security",
		path: "/services/security",
		getParentRoute: () => Route$12
	}),
	ServicesIndexRoute
};
var routeTree = Route$12._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
