import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  Award,
  Users,
  Headset,
} from "lucide-react";
import heroImage from "@/assets/hero-security.jpg";
import heroImageMobile from "@/assets/hero-security-mobile.jpg";
import securityImage from "@/assets/security-services.jpg";
import facilityImage from "@/assets/facility-services.jpg";
import { SectionHeading, CtaBand } from "@/components/page-hero";
import { ClientShowcase } from "@/components/client-showcase";
import {
  company,
  securityServices,
  facilityServices,
  stats,
  industries,
  serviceAreas,
} from "@/data/site";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      {
        title: "Security Services in Pune & Mumbai | SP Securities",
      },
      {
        name: "description",
        content:
          "SP Securities provides professional security personnel, private detective, bouncer, housekeeping and facility services across Pune and Mumbai.",
      },
      {
        name: "keywords",
        content:
          "security agency in Pune, security guard services Pune, facility management Mumbai, housekeeping services Pune, PSARA licensed security company",
      },
      {
        property: "og:title",
        content: "Security Services in Pune & Mumbai | SP Securities",
      },
      {
        property: "og:description",
        content:
          "Responsible security and housekeeping solutions for residential, commercial, corporate and industrial premises.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
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
            "Thane",
          ],
          address: {
            "@type": "PostalAddress",
            streetAddress: company.addressLine,
            addressLocality: company.city,
            addressRegion: company.state,
            postalCode: company.pincode,
            addressCountry: "IN",
          },
          openingHours: "Mo-Sa 09:00-19:00",
        }),
      },
    ],
  }),
});

function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <picture>
          <source media="(max-width: 768px)" srcSet={heroImageMobile} />
          <img
            src={heroImage}
            alt="SP Securities guards on duty at a corporate tower in Pune"
            width={1920}
            height={1088}
            sizes="100vw"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 size-full object-cover object-center"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-ink/30" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-36">
          <p className="text-xs font-bold tracking-[0.24em] text-accent uppercase">
            Security services across Pune &amp; Mumbai
          </p>
          <h1 className="mt-4 max-w-3xl text-[2.5rem] leading-[1.06] font-semibold text-primary-foreground md:mt-5 md:text-6xl md:leading-[1.08]">
            Your Safety.{" "}
            <span className="text-gradient-gold">Our Responsibility.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-primary-foreground/80 md:mt-6 md:text-lg">
            Reliable, professional and responsible security solutions designed
            to protect people, properties, businesses and valuable assets.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-9">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-gold px-6 py-3 text-sm font-semibold text-ink shadow-gold transition-transform hover:-translate-y-0.5"
            >
              Contact Us <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Explore Services
            </Link>
          </div>

          <dl className="mt-10 grid max-w-3xl grid-cols-2 gap-5 md:mt-14 md:grid-cols-4 md:gap-6">
            {stats.map((s) => (
              <div key={s.label} className="border-l-2 border-accent/70 pl-4">
                <dt className="font-display text-2xl font-semibold text-primary-foreground md:text-3xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs text-primary-foreground/65">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Two pillars */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionHeading
          eyebrow="What we do"
          title="Two divisions. One accountable partner."
          description="Security and facility management under a single contract, single supervisor structure and single monthly report."
          align="center"
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <PillarCard
            to="/services/security"
            image={securityImage}
            icon={ShieldCheck}
            title="Security Services"
            text="Professional guarding, industrial, residential and commercial security, event teams, personal protection, private detective and bouncer services."
            items={securityServices.slice(0, 5).map((s) => s.title)}
          />
          <PillarCard
            to="/services/facilities"
            image={facilityImage}
            icon={Sparkles}
            title="Facilities Services"
            text="Housekeeping, project cleaning, carpet and chair shampooing, technical upkeep, pest control and integrated facility management."
            items={facilityServices.slice(0, 5).map((s) => s.title)}
          />
        </div>
      </section>

      {/* Why us */}
      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <SectionHeading
            eyebrow="Why SP Securities"
            title="Compliance, training and supervision you can audit"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Award,
                title: "PSARA licensed",
                text: "Statutory compliance on PF, ESIC, minimum wages and police verification for every deployed person.",
              },
              {
                icon: Users,
                title: "Screened manpower",
                text: "Background checks, Aadhaar verification and reference validation before any badge is issued.",
              },
              {
                icon: Clock,
                title: "24x7 control room",
                text: "Live escalation desk, night patrol checks and guaranteed relief cover for absentees.",
              },
              {
                icon: Headset,
                title: "Dedicated account manager",
                text: "One named manager per client, monthly site audits and a transparent performance scorecard.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-border bg-card p-6 shadow-card"
              >
                <span className="inline-flex rounded-lg bg-gradient-gold p-2.5 text-ink shadow-gold">
                  <f.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-ink">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries + areas */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Industries"
              title="Sectors we protect and maintain"
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {industries.map((i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-sm text-ink-soft"
                >
                  <CheckCircle2 className="size-4 shrink-0 text-gold-deep" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading
              eyebrow="Coverage"
              title="On the ground across Pune & Mumbai"
              description="Deployment teams stationed close to every major business hub, so replacements reach your site fast."
            />
            <div className="mt-8 flex flex-wrap gap-2">
              {serviceAreas.map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-ink-soft"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ClientShowcase />

      {/* Testimonials */}
      <section className="bg-gradient-ink">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <SectionHeading
            eyebrow="Clients"
            title="What our clients say"
            align="center"
            tone="dark"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                quote:
                  "Guard turnout and shift discipline improved within the first month. The monthly audit report is genuinely useful.",
                name: "Facility Head",
                org: "IT Park, Hinjewadi",
              },
              {
                quote:
                  "One team handles our housekeeping and security. Coordination headaches simply disappeared.",
                name: "Estate Manager",
                org: "Residential Society, Kharadi",
              },
              {
                quote:
                  "Their control room responded to a night incident in under ten minutes. That decided our renewal.",
                name: "Plant Administrator",
                org: "Manufacturing Unit, Chakan",
              },
            ].map((t) => (
              <figure
                key={t.org}
                className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-7"
              >
                <blockquote className="text-sm leading-relaxed text-primary-foreground/85">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 text-xs text-accent">
                  {t.name} · {t.org}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

function PillarCard({
  to,
  image,
  icon: Icon,
  title,
  text,
  items,
}: {
  to: string;
  image: string;
  icon: typeof ShieldCheck;
  title: string;
  text: string;
  items: string[];
}) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card">
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          width={1600}
          height={1008}
          loading="lazy"
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 inline-flex rounded-lg bg-gradient-gold p-2.5 text-ink shadow-gold">
          <Icon className="size-5" />
        </span>
      </div>
      <div className="p-7">
        <h3 className="text-2xl font-semibold text-ink">{title}</h3>
        <p className="mt-3 text-sm text-muted-foreground">{text}</p>
        <ul className="mt-5 grid gap-2 sm:grid-cols-2">
          {items.map((i) => (
            <li
              key={i}
              className="flex items-center gap-2 text-sm text-ink-soft"
            >
              <CheckCircle2 className="size-4 shrink-0 text-gold-deep" /> {i}
            </li>
          ))}
        </ul>
        <Link
          to={to}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-deep hover:gap-3"
        >
          View all {title.toLowerCase()} <ArrowRight className="size-4" />
        </Link>
      </div>
    </article>
  );
}
