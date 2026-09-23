import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Briefcase,
  MapPin,
  IndianRupee,
  Clock3,
  Loader2,
  GraduationCap,
  HeartPulse,
  TrendingUp,
} from "lucide-react";
import { toast } from "sonner";
import { PageHero, SectionHeading } from "@/components/page-hero";
import teamImage from "@/assets/team-briefing.jpg";
import { listJobs, submitDocument, uploadResume, type Job } from "@/lib/jobs";
import { notifyAdminFn } from "@/lib/notify";

export const Route = createFileRoute("/careers")({
  component: CareersPage,
  head: () => ({
    meta: [
      {
        title:
          "Careers — Security Guard & Facility Jobs in Pune and Mumbai | SP Securities",
      },
      {
        name: "description",
        content:
          "Apply for security guard, lady guard, housekeeping, supervisor and operations jobs in Pune and Mumbai with SP Securities. PF, ESIC and training provided.",
      },
      {
        name: "keywords",
        content:
          "security guard jobs Pune, housekeeping jobs Mumbai, supervisor jobs Pune, facility management careers India",
      },
      { property: "og:title", content: "Careers at SP Securities" },
      {
        property: "og:description",
        content:
          "Open roles for security and facility staff across Pune and Mumbai.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
});

function CareersPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<string>("");
  const [roleText, setRoleText] = useState<string>("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    listJobs()
      .then(setJobs)
      .catch(() => toast.error("Could not load openings right now."))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setRoleText(selected);
    setResumeFile(null);
  }, [selected]);

  const needsResume = jobs.some(
    (j) =>
      j.requireResume &&
      j.title.trim().toLowerCase() === roleText.trim().toLowerCase(),
  );

  async function apply(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (needsResume && !resumeFile) {
      toast.error("Please attach your resume (PDF or Word) for this role.");
      return;
    }
    setSending(true);
    try {
      let resumeUrl: string | undefined;
      let resumeName: string | undefined;
      if (resumeFile) {
        try {
          const uploaded = await uploadResume(resumeFile);
          if (uploaded) {
            resumeUrl = uploaded.url;
            resumeName = uploaded.name;
          } else {
            // Demo mode — no Storage; keep the file name for reference.
            resumeName = resumeFile.name;
          }
        } catch (err) {
          toast.error(
            err instanceof Error ? err.message : "Could not upload resume.",
          );
          setSending(false);
          return;
        }
      }
      const fields: Record<string, string> = Object.fromEntries(
        Object.entries(data).map(([k, v]) => [k, String(v ?? "")]),
      );
      fields["role"] = fields["role"] || selected;
      if (resumeUrl) fields["resumeUrl"] = resumeUrl;
      if (resumeName) fields["resumeName"] = resumeName;
      await submitDocument("applications", {
        ...fields,
        role: fields["role"] || selected,
      });
      // Best effort — a mail failure must never block the application.
      try {
        await notifyAdminFn({ data: { kind: "application", fields } });
      } catch {
        console.warn("[email] admin notification failed.");
      }
      toast.success("Application received. Our HR team will call you shortly.");
      form.reset();
      setResumeFile(null);
    } catch {
      toast.error("Could not submit your application. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Join a team that invests in its people"
        description="Guards, housekeeping staff, technicians and supervisors — with training, statutory benefits and a clear path to supervisory roles."
        image={teamImage}
      />

      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionHeading
          eyebrow="Why work with us"
          title="More than a posting"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: GraduationCap,
              t: "Paid training",
              d: "PSARA-aligned security training, housekeeping and technical skilling at our academy.",
            },
            {
              icon: HeartPulse,
              t: "Full statutory benefits",
              d: "PF, ESIC, bonus, gratuity and insurance — paid on time, every month.",
            },
            {
              icon: TrendingUp,
              t: "Growth path",
              d: "Guard to supervisor to site in-charge: internal promotions fill most of our leadership roles.",
            },
          ].map((b) => (
            <div
              key={b.t}
              className="rounded-xl border border-border bg-card p-7 shadow-card"
            >
              <span className="inline-flex rounded-lg bg-gradient-gold p-2.5 text-ink shadow-gold">
                <b.icon className="size-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink">{b.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <SectionHeading eyebrow="Open roles" title="Current openings" />
          <div className="mt-10 grid gap-5">
            {loading ? (
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <Loader2 className="size-4 animate-spin" /> Loading openings…
              </p>
            ) : jobs.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                No openings listed right now. Send your details below and we
                will keep them on file.
              </p>
            ) : (
              jobs.map((j) => (
                <article
                  key={j.id}
                  className="rounded-xl border border-border bg-card p-6 shadow-card md:flex md:items-center md:justify-between md:gap-6"
                >
                  <div>
                    <p className="eyebrow">{j.department}</p>
                    <h3 className="mt-2 text-xl font-semibold text-ink">
                      {j.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                      {j.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-4 text-xs text-ink-soft">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="size-3.5 text-gold-deep" />{" "}
                        {j.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Briefcase className="size-3.5 text-gold-deep" />{" "}
                        {j.type}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock3 className="size-3.5 text-gold-deep" />{" "}
                        {j.experience}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <IndianRupee className="size-3.5 text-gold-deep" />{" "}
                        {j.salary}
                      </span>
                      {j.requireResume ? (
                        <span className="rounded-full bg-sand px-3 py-1 font-semibold text-gold-deep">
                          Resume required
                        </span>
                      ) : null}
                    </div>
                  </div>
                  <a
                    href="#apply"
                    onClick={() => setSelected(j.title)}
                    className="mt-5 inline-flex shrink-0 items-center rounded-md bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-ink shadow-gold md:mt-0"
                  >
                    Apply Now
                  </a>
                </article>
              ))
            )}
          </div>
        </div>
      </section>

      <section id="apply" className="mx-auto max-w-3xl px-4 py-20">
        <SectionHeading
          eyebrow="Apply"
          title="Send your application"
          align="center"
        />
        <form
          onSubmit={apply}
          className="mt-10 grid gap-5 rounded-2xl border border-border bg-card p-7 shadow-card sm:grid-cols-2 md:p-9"
        >
          <Input label="Full name *" name="name" required />
          <Input label="Phone *" name="phone" type="tel" required />
          <Input label="Email" name="email" type="email" />
          <Input label="City *" name="city" required />
          <Input
            label="Role applying for *"
            name="role"
            required
            defaultValue={selected}
            key={selected}
            onChange={setRoleText}
          />
          <Input label="Total experience" name="experience" />
          {needsResume ? (
            <div className="sm:col-span-2">
              <label htmlFor="resume" className="text-sm font-medium text-ink">
                Resume * (PDF or Word, max 5 MB)
              </label>
              <input
                id="resume"
                name="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                required
                onChange={(e) => setResumeFile(e.target.files?.[0] ?? null)}
                className="mt-2 w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none file:mr-4 file:rounded-md file:border-0 file:bg-sand file:px-4 file:py-2 file:text-sm file:font-semibold file:text-ink focus:border-gold focus:ring-2 focus:ring-ring/40"
              />
              <p className="mt-1.5 text-xs text-muted-foreground">
                This role requires a resume — your application cannot be sent
                without it.
              </p>
            </div>
          ) : null}
          <div className="sm:col-span-2">
            <label htmlFor="about" className="text-sm font-medium text-ink">
              Brief about yourself
            </label>
            <textarea
              id="about"
              name="about"
              rows={4}
              className="mt-2 w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-ring/40"
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-gold px-6 py-3 text-sm font-semibold text-ink shadow-gold transition-transform hover:-translate-y-0.5 disabled:opacity-60 sm:col-span-2"
          >
            {sending ? <Loader2 className="size-4 animate-spin" /> : null}
            Submit Application
          </button>
        </form>
      </section>
    </>
  );
}

function Input({
  label,
  name,
  type = "text",
  required,
  defaultValue,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  defaultValue?: string;
  onChange?: (value: string) => void;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        defaultValue={defaultValue}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        className="mt-2 w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-ring/40"
      />
    </div>
  );
}
