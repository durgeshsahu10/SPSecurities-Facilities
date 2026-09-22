import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/sp-securities-logo.png";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/gallery", label: "Gallery" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

const serviceLinks = [
  { to: "/services", label: "All Services" },
  { to: "/services/security", label: "Security Services" },
  { to: "/services/facilities", label: "Facilities Services" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  // Close on Escape + lock background scroll while the drawer is open.
  // Runs only in the browser, so server rendering is unaffected.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
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

  return (
    <header className="sticky top-0 z-50 border-b border-sidebar-border bg-primary text-primary-foreground shadow-card">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="SP Securities logo"
            width={180}
            height={100}
            className="h-14 w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <HeaderLink to="/" label="Home" />
          <div className="group relative">
            <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-primary-foreground/80 transition-colors hover:text-accent">
              Services <ChevronDown className="size-4" />
            </button>
            <div className="invisible absolute left-0 top-full w-60 translate-y-1 rounded-lg border border-border bg-card p-2 opacity-0 shadow-card transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {serviceLinks.map((s) => (
                <Link
                  key={s.to}
                  to={s.to}
                  className="block rounded-md px-3 py-2 text-sm text-ink-soft transition-colors hover:bg-sand hover:text-gold-deep"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
          {navLinks.slice(1).map((l) => (
            <HeaderLink key={l.to} to={l.to} label={l.label} />
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-md bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-ink shadow-gold transition-transform hover:-translate-y-0.5"
          >
            Contact Us
          </Link>
        </div>

        <button
          type="button"
          className="rounded-md border border-primary-foreground/25 p-2 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Backdrop — taps outside the drawer close it */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-ink/60 transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      {/* Slide-in drawer — always mounted so open/close only flips
          transform classes, and fixed positioning keeps it above all
          page content on every screen size. */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={cn(
          "fixed top-0 right-0 z-50 flex h-full w-80 max-w-[85vw] flex-col bg-primary text-primary-foreground shadow-card transition-transform duration-300 ease-out lg:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-sidebar-border px-4 py-3">
          <span className="text-sm font-semibold tracking-wide text-accent">
            Menu
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close navigation menu"
            className="rounded-md border border-primary-foreground/25 p-2"
          >
            <X className="size-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-4">
          <DrawerLink to="/" label="Home" onNavigate={() => setOpen(false)} />
          <p className="eyebrow mt-5 mb-1 px-3">Services</p>
          {serviceLinks.map((l) => (
            <DrawerLink
              key={l.to}
              to={l.to}
              label={l.label}
              onNavigate={() => setOpen(false)}
            />
          ))}
          <p className="eyebrow mt-5 mb-1 px-3">Company</p>
          {navLinks.slice(1).map((l) => (
            <DrawerLink
              key={l.to}
              to={l.to}
              label={l.label}
              onNavigate={() => setOpen(false)}
            />
          ))}
        </nav>

        <div className="border-t border-sidebar-border p-4">
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center rounded-md bg-gradient-gold px-5 py-3 text-sm font-semibold text-ink shadow-gold"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}

function HeaderLink({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      activeOptions={{ exact: to === "/" }}
      activeProps={{ className: "text-accent" }}
      className="rounded-md px-3 py-2 text-sm font-medium text-primary-foreground/80 transition-colors hover:text-accent"
    >
      {label}
    </Link>
  );
}

function DrawerLink({
  to,
  label,
  onNavigate,
}: {
  to: string;
  label: string;
  onNavigate: () => void;
}) {
  return (
    <Link
      to={to}
      onClick={onNavigate}
      activeOptions={{ exact: to === "/" }}
      activeProps={{ className: "bg-sidebar-accent text-accent" }}
      className="block rounded-md px-3 py-3 text-base font-medium text-primary-foreground/85 transition-colors hover:bg-sidebar-accent hover:text-accent"
    >
      {label}
    </Link>
  );
}
