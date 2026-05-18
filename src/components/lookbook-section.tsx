import Image from "next/image";
import { lookbookImages } from "@/lib/content";

export function LookbookSection() {
  return (
    <section className="lookbook-section" id="lookbook" aria-label="Cinematic still frames gallery">
      <div className="lookbook-grid">
        {lookbookImages.map((image) => (
          <figure className={`look${image.variant ? ` ${image.variant}` : ""}`} key={image.alt}>
            <Image src={image.src} alt={image.alt} fill sizes="(max-width: 640px) 50vw, (max-width: 980px) 33vw, 25vw" />
          </figure>
        ))}
      </div>
    </section>
  );
}
