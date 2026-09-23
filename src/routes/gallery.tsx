import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageHero, SectionHeading, CtaBand } from "@/components/page-hero";
import teamImage from "@/assets/team-briefing.jpg";
import { galleryImages } from "@/data/site";
import {
  listGalleryImages,
  galleryCategories,
  type GalleryImage,
} from "@/lib/gallery";
import { cn } from "@/lib/utils";

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

const categories = ["All", ...galleryCategories] as const;

function GalleryPage() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [photos, setPhotos] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    listGalleryImages()
      .then(setPhotos)
      .catch(() => setPhotos([]))
      .finally(() => setLoading(false));
  }, []);

  // Admin-uploaded photos first, then any hardcoded ones from site data.
  const all = [
    ...photos.map((p) => ({ key: p.id, src: p.url, alt: p.alt })),
    ...galleryImages.map((g, i) => ({
      key: `site-${i}`,
      src: g.src,
      alt: g.alt,
    })),
  ];
  const withCategory = [...photos, ...galleryImages];
  const shown =
    active === "All"
      ? all
      : all.filter((_, i) => withCategory[i]?.category === active);

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

        {loading ? (
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="h-60 animate-pulse rounded-xl border border-border bg-card"
              />
            ))}
          </div>
        ) : all.length === 0 ? (
          <div className="mx-auto mt-10 max-w-2xl rounded-xl border border-dashed border-border bg-card p-12 text-center shadow-card">
            <p className="text-lg font-semibold text-ink">Photos coming soon</p>
            <p className="mt-2 text-sm text-muted-foreground">
              We are updating our site photo collection. Please check back
              shortly, or contact us to arrange a site visit.
            </p>
          </div>
        ) : (
          <>
            <div className="mt-10 flex flex-wrap justify-center gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={cn(
                    "rounded-full border px-5 py-2 text-xs font-semibold transition-colors",
                    active === c
                      ? "border-transparent bg-gradient-gold text-ink shadow-gold"
                      : "border-border bg-card text-ink-soft hover:border-gold",
                  )}
                >
                  {c}
                </button>
              ))}
            </div>

            {shown.length === 0 ? (
              <p className="mt-10 text-center text-sm text-muted-foreground">
                No photos under this tag yet — try another tag.
              </p>
            ) : (
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {shown.map((img) => (
                  <figure
                    key={img.key}
                    className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-card"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-4 text-xs text-primary-foreground">
                      {img.alt}
                    </figcaption>
                  </figure>
                ))}
              </div>
            )}
          </>
        )}
      </section>

      <CtaBand />
    </>
  );
}
