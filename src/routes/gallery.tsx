import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHeading, CtaBand } from "@/components/page-hero";
import teamImage from "@/assets/team-briefing.jpg";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      {
        title: "Gallery — Our Teams & Sites in Pune and Mumbai | SP Securities",
      },
      {
        name: "description",
        content:
          "Photo gallery of SP Securities teams at work: security deployments, housekeeping operations and client sites across Pune and Mumbai.",
      },
      { property: "og:title", content: "Gallery | SP Securities" },
      {
        property: "og:description",
        content:
          "A look at our security and facility management teams on site across Pune and Mumbai.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
});

function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Our people, on site, every day"
        description="Deployments, control rooms, housekeeping operations and client premises we look after across Pune and Mumbai."
        image={teamImage}
      />

      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionHeading
          eyebrow="Moments"
          title="From the field"
          align="center"
        />

        <div className="mx-auto mt-10 max-w-2xl rounded-xl border border-dashed border-border bg-card p-12 text-center shadow-card">
          <p className="text-lg font-semibold text-ink">Photos coming soon</p>
          <p className="mt-2 text-sm text-muted-foreground">
            We are updating our site photo collection. Please check back
            shortly, or contact us to arrange a site visit.
          </p>
          {/* To add photos: put files in public/gallery/ and list them in
              src/data/site.ts -> galleryImages with { src, alt, category }. */}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
