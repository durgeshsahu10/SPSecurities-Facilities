export function LegalPage({
  title,
  updated,
  sections,
}: {
  title: string;
  updated: string;
  sections: { heading: string; body: string[] }[];
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20">
      <p className="eyebrow">Legal</p>
      <h1 className="mt-3 text-4xl font-semibold text-ink">{title}</h1>
      <div className="gold-rule mt-5" />
      <p className="mt-4 text-sm text-muted-foreground">
        Last updated: {updated}
      </p>

      <div className="mt-10 space-y-9">
        {sections.map((s) => (
          <section key={s.heading}>
            <h2 className="text-xl font-semibold text-ink">{s.heading}</h2>
            {s.body.map((p, i) => (
              <p
                key={i}
                className="mt-3 text-sm leading-relaxed text-muted-foreground"
              >
                {p}
              </p>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}
