import { Link } from "@tanstack/react-router";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";
import logo from "@/assets/sp-securities-logo.png";
import { company, serviceAreas } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="bg-gradient-ink text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img
            src={logo}
            alt="SP Securities logo"
            width={180}
            height={101}
            loading="lazy"
            className="h-20 w-auto object-contain"
          />
          <p className="mt-4 text-sm text-primary-foreground/70">
            {company.name} delivers responsible security and facility services
            across Pune and Mumbai through trained personnel, disciplined
            processes and dependable supervision.
          </p>
          <div className="mt-5 flex gap-3">
            {[Linkedin, Facebook, Instagram].map((Icon, i) => (
              <a
                key={i}
                href={company.website}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Social profile"
                className="rounded-md border border-primary-foreground/20 p-2 transition-colors hover:border-accent hover:text-accent"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <FooterHeading>Services</FooterHeading>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <FooterLink to="/services" label="All Services" />
            <FooterLink to="/services/security" label="Security Services" />
            <FooterLink to="/services/facilities" label="Facilities Services" />
            <FooterLink to="/about" label="About Us" />
            <FooterLink to="/gallery" label="Gallery" />
            <FooterLink to="/careers" label="Careers" />
            <FooterLink to="/contact" label="Contact Us" />
          </ul>
        </div>

        <div>
          <FooterHeading>Areas We Serve</FooterHeading>
          <p className="text-sm leading-relaxed text-primary-foreground/70">
            {serviceAreas.join(" · ")}
          </p>
        </div>

        <div>
          <FooterHeading>Reach Us</FooterHeading>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>
                {company.addressLine}, {company.city} {company.pincode},{" "}
                {company.state}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>
                <a href={`tel:${company.phone.replace(/\s/g, "")}`}>
                  {company.phone}
                </a>
                <span className="mx-1">/</span>
                <a href={`tel:${company.phoneSecondary.replace(/\s/g, "")}`}>
                  {company.phoneSecondary}
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-accent" />
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>{company.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-primary-foreground/60 md:flex-row">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <nav className="flex flex-wrap items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-accent">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-accent">
              Terms &amp; Conditions
            </Link>
            <Link to="/cookies" className="hover:text-accent">
              Cookies
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-4 text-sm font-semibold tracking-[0.18em] text-accent uppercase">
      {children}
    </h3>
  );
}

function FooterLink({ to, label }: { to: string; label: string }) {
  return (
    <li>
      <Link to={to} className="transition-colors hover:text-accent">
        {label}
      </Link>
    </li>
  );
}
