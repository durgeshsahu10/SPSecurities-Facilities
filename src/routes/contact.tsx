import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Clock, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { PageHero, SectionHeading } from "@/components/page-hero";
import heroImage from "@/assets/hero-security.jpg";
import { company, serviceAreas } from "@/data/site";
import { submitDocument } from "@/lib/jobs";
import { notifyAdminFn } from "@/lib/notify";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact SP Securities — Kharadi, Pune | Contact Us" },
      {
        name: "description",
        content:
          "Contact SP Securities in Kharadi, Pune for professional security, bouncer, detective and housekeeping services across Pune and Mumbai.",
      },
      { property: "og:title", content: "Contact Us | SP Securities" },
      {
        property: "og:description",
        content:
          "Call, email or send a request — we respond with a deployment plan within 24 hours.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
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
            addressCountry: "IN",
          },
          areaServed: serviceAreas,
        }),
      },
    ],
  }),
});

function ContactPage() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setLoading(true);
    try {
      await submitDocument("enquiries", data);
      // Best effort — a mail failure must never block the enquiry.
      try {
        const fields: Record<string, string> = Object.fromEntries(
          Object.entries(data).map(([k, v]) => [k, String(v ?? "")]),
        );
        await notifyAdminFn({ data: { kind: "enquiry", fields } });
      } catch {
        console.warn("[email] admin notification failed.");
      }
      toast.success("Thank you — our team will contact you within 24 hours.");
      form.reset();
    } catch {
      toast.error("Could not send your enquiry. Please call us instead.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us about your site"
        description="Share your requirement and we will come back with a manpower plan and costing. Contact us to schedule a site visit."
        image={heroImage}
      />

      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="Reach us" title="Head office in Pune" />
            <ul className="mt-8 space-y-5">
              <ContactRow icon={MapPin} label="Address">
                {company.addressLine}, {company.city} {company.pincode},{" "}
                {company.state}, {company.country}
              </ContactRow>
              <ContactRow icon={Phone} label="Phone">
                <a
                  href={`tel:${company.phone.replace(/\s/g, "")}`}
                  className="hover:text-gold-deep"
                >
                  {company.phone}
                </a>
                <span className="mx-1">/</span>
                <a
                  href={`tel:${company.phoneSecondary.replace(/\s/g, "")}`}
                  className="hover:text-gold-deep"
                >
                  {company.phoneSecondary}
                </a>
              </ContactRow>
              <ContactRow icon={Mail} label="Email">
                <a
                  href={`mailto:${company.email}`}
                  className="hover:text-gold-deep"
                >
                  {company.email}
                </a>
              </ContactRow>
              <ContactRow icon={Clock} label="Working hours">
                {company.hours}
              </ContactRow>
            </ul>

            <div className="mt-8 overflow-hidden rounded-xl border border-border shadow-card">
              <iframe
                title="SP Securities location in Kharadi, Pune"
                src="https://www.google.com/maps?q=Global+Business+Hub+Near+EON+IT+Park+Kharadi+Pune+411014&output=embed"
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-7 shadow-card md:p-9">
            <h2 className="text-2xl font-semibold text-ink">Contact us</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fields marked * are required. We never share your details.
            </p>
            <form
              className="mt-7 grid gap-5 sm:grid-cols-2"
              onSubmit={onSubmit}
            >
              <Field label="Full name *" name="name" required />
              <Field label="Company / Society" name="company" />
              <Field label="Phone *" name="phone" type="tel" required />
              <Field label="Email *" name="email" type="email" required />
              <Select
                label="Service required *"
                name="service"
                options={[
                  "Security Services",
                  "Facilities / Housekeeping",
                  "Integrated (Security + Facilities)",
                  "Industrial Security",
                  "Residential Security",
                  "Commercial Security",
                  "Event Security",
                  "Private Detective Services",
                  "Bouncer Services",
                  "Other",
                ]}
              />
              <Select
                label="City *"
                name="city"
                options={[
                  "Pune",
                  "Pimpri-Chinchwad",
                  "Mumbai",
                  "Navi Mumbai",
                  "Thane",
                  "Other",
                ]}
              />
              <div className="sm:col-span-2">
                <label
                  className="text-sm font-medium text-ink"
                  htmlFor="message"
                >
                  Your requirement
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="e.g. 6 guards across 3 shifts and daily housekeeping for a 40,000 sq ft office"
                  className="mt-2 w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-ring/40"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-gold px-6 py-3 text-sm font-semibold text-ink shadow-gold transition-transform hover:-translate-y-0.5 disabled:opacity-60 sm:col-span-2"
              >
                {loading ? <Loader2 className="size-4 animate-spin" /> : null}
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Mail;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-4">
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-gold text-ink shadow-gold">
        <Icon className="size-4" />
      </span>
      <div>
        <p className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
          {label}
        </p>
        <p className="mt-1 text-sm text-ink-soft">{children}</p>
      </div>
    </li>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-ink" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-ring/40"
      />
    </div>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label className="text-sm font-medium text-ink" htmlFor={name}>
        {label}
      </label>
      <select
        id={name}
        name={name}
        required
        className="mt-2 w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-ring/40"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
