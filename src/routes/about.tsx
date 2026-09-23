import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  CheckCircle2,
  Target,
  Eye,
  Award,
  Users,
  Clock,
  ShieldCheck,
  ClipboardCheck,
} from "lucide-react";
import { PageHero, SectionHeading, CtaBand } from "@/components/page-hero";
import teamImage from "@/assets/team-briefing.jpg";
import { company, stats } from "@/data/site";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About SP Securities — Professional Security Company in Pune" },
      {
        name: "description",
        content:
          "Learn about SP Securities, a professional security company providing responsible protection solutions for residential, commercial and industrial premises.",
      },
      { property: "og:title", content: "About SP Securities" },
      {
        property: "og:description",
        content:
          "A Pune-based security and facility management partner with PSARA compliance, trained manpower and audited service delivery.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const leadership = [
  {
    name: "Mr. Pawan Sav",
    role: "Founder & Director",
    bio: "A hands-on leader and the driving force behind SP Securities, Mr. Pawan Sav founded the company with a clear mission — to professionalise manned guarding and facility services across Pune and Mumbai. With over a decade of experience in security operations, manpower management and client servicing, he has grown SP Securities from a single-site guarding team into a PSARA-licensed organisation deploying 2,500+ trained personnel across 180+ sites. His focus on statutory compliance, disciplined supervision and quick response has made SP Securities a trusted protection partner for housing societies, corporates, industries and institutions.",
    initial: "PS",
    image: "/TeamImages/PavanSav.jpg",
  },
  {
    name: "Mr. Santosh Darekar",
    role: "Co-Founder & Director",
    bio: "Mr. Santosh Darekar is the co-founder and custodian of SP Securities' operational excellence. With deep expertise in guard recruitment, police verification, training, shift rostering and site supervision, he ensures every deployment meets the company's quality bar before a single officer reaches your gate. His systems for attendance tracking, night patrol checks and monthly site audits keep absenteeism low and service levels consistent. Mr. Darekar's hands-on management style and long-standing client relationships make him the dependable backbone of our day-to-day delivery.",
    initial: "SD",
    image: "/TeamImages/SantoshDarekar1.jpeg",
  },
];

const teamMembers = [
  {
    name: "Mr. Kishor Sav",
    role: "Vice President",
    initial: "KS",
    image: "/TeamImages/KishorSav.jpeg",
    desc: "With 18 years of experience in security operations, Mr. Kishor Sav oversees deployments across our Pune and Mumbai sites. He leads manpower planning, client servicing and escalation handling, and mentors our supervisors to keep every shift disciplined and audit-ready.",
  },
  {
    name: "Mrs. Monika Gujar",
    role: "General Manager- Operations &  Business strategy",
    initial: "MG",
    image: "/TeamImages/MonikaGujar.png",
    desc: "With 20 years of experience, Mrs. Monika Gujar drives operations and business strategy across all client sites. She oversees rostering, relief cover and service quality while charting our growth into new sectors and cities — the strategist behind our 180+ site network.",
  },
  {
    name: "Ms. Bhagyayani Patil",
    role: "Marketing Manager",
    initial: "BP",
    image: "/TeamImages/BhagyayaniPatil.png",
    desc: "A marketing expert, Ms. Bhagyayani Patil builds our brand presence and client acquisition pipeline. She runs campaigns, client meets and follow-ups that convert site visits into long-term guarding and facility contracts.",
  },

  {
    name: "Mr. Anjani Tiwari",
    role: "Ex Serviceman",
    initial: "AT",
    image: "/TeamImages/AnjaniTiwari.png",
    desc: "An ex-serviceman, Mr. Anjani Tiwari brings military discipline to our guard force. From drill and turnout checks to fire drills and emergency response, he makes sure every officer is deployment-ready before reaching your gate.",
  },
];

const timeline = [
  {
    year: "2014",
    title: "Founded in Pune",
    desc: "SP Securities starts with manned guarding for residential societies in Kharadi.",
  },
  {
    year: "2016",
    title: "Compliance-first operations",
    desc: "PSARA licensing with PF, ESIC, minimum-wage compliance and police verification for every guard.",
  },
  {
    year: "2018",
    title: "100+ sites",
    desc: "Coverage crosses 100 sites across Pune with corporate, industrial and event divisions.",
  },
  {
    year: "2020",
    title: "Facilities division",
    desc: "Housekeeping, technical upkeep and pest control added — single integrated contracts launched.",
  },
  {
    year: "2022",
    title: "Mumbai expansion",
    desc: "Deployment teams stationed across Mumbai with a 24x7 control room for night escalation.",
  },
  {
    year: "2024",
    title: "180+ sites, 2,500+ personnel",
    desc: "One accountable partner for security and facility management across Pune and Mumbai.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Your Safety. Our Responsibility."
        description="Reliable, professional and responsible security solutions designed to protect people, properties, businesses and valuable assets."
        image={teamImage}
      />

      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Who we are"
              title="Professional protection shaped around your premises"
            />
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                SP Securities is a professional security services company
                focused on delivering dependable security and protection
                solutions for residential, commercial, corporate, industrial,
                retail and other premises.
              </p>
              <p>
                We understand that security is more than simply having a
                security guard at your premises. It is about creating a safe
                environment through professional personnel, disciplined
                processes, continuous monitoring, quick response and responsible
                service.
              </p>
              <p>
                We work closely with every client to understand their
                requirements and provide suitable manpower and security
                solutions based on the nature of their property, operations and
                risk environment. Our goal is to give every client confidence
                and peace of mind.
              </p>
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "PSARA licensed operations",
                "PF, ESIC & minimum-wage compliant",
                "Police-verified personnel",
                "24x7 control room escalation",
                "In-house training academy",
                "Dedicated account management",
              ].map((p) => (
                <li
                  key={p}
                  className="flex items-center gap-2 text-sm text-ink-soft"
                >
                  <CheckCircle2 className="size-4 shrink-0 text-gold-deep" />{" "}
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <img
            src={teamImage}
            alt="SP Securities and Facilities staff during a morning briefing"
            width={1600}
            height={1008}
            loading="lazy"
            className="rounded-2xl border border-border object-cover shadow-card"
          />
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <SectionHeading
            eyebrow="What drives us"
            title="Mission, vision and promise"
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Target,
                t: "Our mission",
                d: "To protect people, properties, businesses and valuable assets across Pune and Mumbai through trained personnel, disciplined processes and dependable supervision.",
              },
              {
                icon: Eye,
                t: "Our vision",
                d: "To be the most trusted security and facility management partner — known for statutory compliance, quick response and measurable service quality.",
              },
              {
                icon: Award,
                t: "Our promise",
                d: "Verified manpower, transparent costing, a named account manager, monthly site audits and guaranteed relief cover — service tailored to every site we guard and maintain.",
              },
            ].map((v) => (
              <div
                key={v.t}
                className="rounded-xl border border-border bg-card p-7 shadow-card"
              >
                <span className="inline-flex rounded-lg bg-gradient-gold p-2.5 text-ink shadow-gold">
                  <v.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-ink">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-border bg-card p-6 text-center"
              >
                <dt className="font-display text-3xl font-semibold text-gradient-gold">
                  {s.value}
                </dt>
                <dd className="mt-2 text-xs text-muted-foreground">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionHeading
          eyebrow="Leadership"
          title="The people behind SP Securities"
          description="Founders who still visit sites, check night rosters and answer escalation calls themselves."
          align="center"
        />
        <div className="mt-12 space-y-8">
          {leadership.map((leader, i) => (
            <article
              key={leader.name}
              className={`flex flex-col gap-8 rounded-2xl border border-border bg-card p-6 shadow-card md:p-10 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center md:items-start`}
            >
              <div className="flex shrink-0 flex-col items-center md:items-start">
                <TeamPhoto
                  src={leader.image}
                  alt={leader.name}
                  initial={leader.initial}
                  className="size-40 md:size-52"
                  textClassName="text-4xl md:text-5xl"
                />
                <h3 className="mt-4 text-center font-display text-xl font-bold text-ink md:text-left">
                  {leader.name}
                </h3>
                <p className="text-sm font-semibold text-gold-deep">
                  {leader.role}
                </p>
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="mb-4 flex items-center justify-center gap-3 md:justify-start">
                  <Award className="size-5 text-gold-deep" />
                  <span className="text-sm font-semibold tracking-wider text-gold-deep uppercase">
                    {leader.role}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {leader.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <SectionHeading
            eyebrow="Core team"
            title="Our team members"
            description="The dedicated professionals who keep every site guarded, clean and running."
            align="center"
          />
          <div className="mx-auto mt-12 flex max-w-6xl flex-wrap justify-center gap-6 px-4">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="flex w-72 flex-col items-center rounded-2xl border border-border bg-card p-8 text-center shadow-card transition-all hover:-translate-y-1 hover:border-gold/50 md:w-80"
              >
                <TeamPhoto
                  src={member.image}
                  alt={member.name}
                  initial={member.initial}
                  className="size-40"
                  textClassName="text-3xl"
                />
                <h4 className="mt-6 font-display text-lg font-bold text-ink">
                  {member.name}
                </h4>
                <p className="mt-1.5 text-xs font-semibold tracking-wider text-gold-deep uppercase">
                  {member.role}
                </p>
                <blockquote className="mt-3 text-sm leading-relaxed text-gold-deep">
                  “{member.desc}”
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionHeading
          eyebrow={`Why ${company.shortName}`}
          title="What sets us apart"
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Users,
              t: "2,500+ trained personnel",
              d: "Verified guards, housekeeping and technical staff with relief cover for every post.",
            },
            {
              icon: ShieldCheck,
              t: "PSARA licensed & compliant",
              d: "PF, ESIC, minimum wages and police verification handled for every deployed person.",
            },
            {
              icon: Clock,
              t: "24x7 control room",
              d: "Live escalation desk with night patrol checks and under-ten-minute incident response.",
            },
            {
              icon: Target,
              t: "180+ sites served",
              d: "Housing societies, IT parks, factories, malls and institutions across Pune and Mumbai.",
            },
            {
              icon: ClipboardCheck,
              t: "Audited every month",
              d: "Site audits, attendance reports and a transparent performance scorecard you can verify.",
            },
            {
              icon: Award,
              t: "One integrated contract",
              d: "Security plus housekeeping, technical upkeep and pest control under a single accountable team.",
            },
          ].map((item) => (
            <div
              key={item.t}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 shadow-card"
            >
              <span className="inline-flex shrink-0 rounded-lg bg-gradient-gold p-2.5 text-ink shadow-gold">
                <item.icon className="size-5" />
              </span>
              <div>
                <h4 className="font-semibold text-ink">{item.t}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{item.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <SectionHeading
            eyebrow="Our journey"
            title="A decade of dependable service"
            description="From a single guarding team in Kharadi to an integrated security and facilities partner."
            align="center"
          />
          <div className="relative mx-auto mt-12 max-w-3xl">
            <div className="absolute top-0 bottom-0 left-2 w-px bg-gold/40 md:left-1/2 md:-translate-x-1/2" />
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className={`relative mb-10 flex flex-col items-start gap-2 pl-8 md:flex-row md:items-center md:gap-8 md:pl-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`w-full flex-1 ${
                    i % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <span className="font-display text-xl font-bold text-gold-deep">
                    {item.year}
                  </span>
                  <h4 className="font-display text-lg font-semibold text-ink">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
                <div className="absolute top-2 left-2 z-10 size-4 -translate-x-1/2 rounded-full bg-gradient-gold shadow-gold ring-4 ring-sand md:relative md:top-auto md:left-auto md:translate-x-0 md:shrink-0" />
                <div className="hidden flex-1 md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

// Shows the team photo when the file exists in public/TeamImages/,
// otherwise falls back to a gold monogram so the card never looks broken.
// To add a photo: drop it into public/TeamImages/ with the matching filename.
function TeamPhoto({
  src,
  alt,
  initial,
  className = "size-40",
  textClassName = "text-3xl",
}: {
  src: string;
  alt: string;
  initial: string;
  className?: string;
  textClassName?: string;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-2xl border-2 border-gold/30 bg-card shadow-card ${className}`}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-gold">
        <span className={`font-display font-bold text-ink ${textClassName}`}>
          {initial}
        </span>
      </div>
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="absolute inset-0 size-full object-cover object-top"
        />
      )}
    </div>
  );
}
