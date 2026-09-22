import { Link } from "@tanstack/react-router";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-ink">
      <img
        src={image}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 size-full object-cover opacity-30"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-28">
        <p className="text-xs font-bold tracking-[0.22em] text-accent uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold text-primary-foreground md:text-5xl">
          {title}
        </h1>
        <div className="gold-rule mt-6" />
        <p className="mt-5 max-w-2xl text-base text-primary-foreground/75">
          {description}
        </p>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  const titleColor = tone === "dark" ? "text-primary-foreground" : "text-ink";
  const descriptionColor =
    tone === "dark" ? "text-primary-foreground/70" : "text-muted-foreground";
  return (
    <div
      className={
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"
      }
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className={`mt-3 text-3xl font-semibold md:text-4xl ${titleColor}`}>
        {title}
      </h2>
      <div
        className={
          align === "center" ? "gold-rule mx-auto mt-5" : "gold-rule mt-5"
        }
      />
      {description ? (
        <p className={`mt-4 ${descriptionColor}`}>{description}</p>
      ) : null}
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="bg-gradient-ink">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-14 md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-semibold text-primary-foreground md:text-3xl">
            Need guards or facility staff this week?
          </h2>
          <p className="mt-2 text-primary-foreground/70">
            Tell us your site requirement — we share a deployment plan within 24
            hours.
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-flex shrink-0 items-center rounded-md bg-gradient-gold px-6 py-3 text-sm font-semibold text-ink shadow-gold transition-transform hover:-translate-y-0.5"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
