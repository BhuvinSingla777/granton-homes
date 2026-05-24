import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { GalleryShowcase } from "@/components/site/GalleryShowcase";
import { GALLERY_IMAGES } from "@/lib/gallery-images";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <SiteShell>
      <div className="gallery-theme flex-1">
        <section className="container-luxe pt-[calc(5rem+2rem)] pb-6 sm:pb-8 text-center">
          <h1 className="gallery-heading relative z-10">Gallery</h1>
        </section>

        <section className="container-luxe pb-16 sm:pb-20 lg:pb-24">
          <GalleryShowcase images={[...GALLERY_IMAGES]} />
        </section>
      </div>
    </SiteShell>
  );
}
