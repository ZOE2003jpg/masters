import { useCallback, useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell, PageHeader } from "@/components/site/page-shell";
import { DRIVE_ROOT_URL, galleryAlbums, type GalleryPhoto } from "@/lib/gallery";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Photo Gallery — RCCG The Master's Place, Ile-Ife" },
      {
        name: "description",
        content:
          "Recent moments of worship, fellowship and community at RCCG The Master's Place, Ile-Ife.",
      },
      { property: "og:title", content: "Photo Gallery — RCCG The Master's Place" },
      {
        property: "og:description",
        content: "See recent photos from RCCG The Master's Place, Ile-Ife.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const active = galleryAlbums[0];

  if (!active) return null;

  const close = useCallback(() => setLightbox(null), []);
  const step = useCallback(
    (delta: number) =>
      setLightbox((i) =>
        i === null ? i : (i + delta + active.photos.length) % active.photos.length,
      ),
    [active.photos.length],
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, step]);

  const currentPhoto: GalleryPhoto | null = lightbox === null ? null : (active.photos[lightbox] ?? null);

  return (
    <PageShell>
      <PageHeader
        eyebrow="Life at The Master's Place"
        title="Photo Gallery"
        description="A glimpse of our recent moments together — worship, fellowship and life as one church family."
        actions={
          <Button asChild variant="outline" className="border-current/30 bg-transparent text-current hover:bg-current/10 hover:text-current">
            <a href={DRIVE_ROOT_URL} target="_blank" rel="noreferrer">
              Open Google Photos <ExternalLink className="size-4" />
            </a>
          </Button>
        }
      />

      <section id="album-view" className="scroll-mt-24 bg-background py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">{active.group}</p>
              <h2 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
                {active.title}
              </h2>
              <span className="brass-rule mt-5" />
            </div>
            <Button asChild variant="outline" className="border-current/30 bg-transparent text-current hover:bg-current/10 hover:text-current" size="sm">
              <a href={active.driveUrl} target="_blank" rel="noreferrer">
                View all on Google Photos <ExternalLink className="size-4" />
              </a>
            </Button>
          </div>

          <div className="mt-10 columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
            {active.photos.map((photo, i) => (
              <button
                key={`${active.slug}-${photo.src}-${i}`}
                onClick={() => setLightbox(i)}
                className="focus-ring block w-full break-inside-avoid overflow-hidden rounded-lg border border-border bg-card"
                aria-label={`Open photo ${i + 1} of ${active.photos.length}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {currentPhoto && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={currentPhoto.alt}
          onClick={close}
        >
          <button
            onClick={close}
            aria-label="Close"
            className="focus-ring absolute top-4 right-4 inline-flex size-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <X className="size-5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous photo"
            className="focus-ring absolute top-1/2 left-3 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-6"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next photo"
            className="focus-ring absolute top-1/2 right-3 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-6"
          >
            <ChevronRight className="size-5" />
          </button>
          <figure className="max-h-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={currentPhoto.src}
              alt={currentPhoto.alt}
              className="max-h-[80vh] w-auto rounded-lg object-contain"
            />
            <figcaption className="mt-3 text-center text-xs text-white/70">
              {currentPhoto.alt} · {(lightbox ?? 0) + 1} / {active.photos.length}
            </figcaption>
          </figure>
        </div>
      )}
    </PageShell>
  );
}
