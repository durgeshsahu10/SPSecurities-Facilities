import { Link } from "@tanstack/react-router";
import { useState } from "react";
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

  return (
    <header className="sticky top-0 z-50 border-b border-sidebar-border bg-primary text-primary-foreground shadow-card">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5">
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
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
          className="rounded-md border border-primary-foreground/25 p-2 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        className={cn(
          "border-t border-sidebar-border bg-primary lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
          {[...navLinks.slice(0, 1), ...serviceLinks, ...navLinks.slice(1)].map(
            (l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-primary-foreground/80 hover:bg-sidebar-accent hover:text-accent"
              >
                {l.label}
              </Link>
            ),
          )}
        </nav>
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
