import Image from "next/image";
import { imageUrls } from "@/lib/content";

export function ShowSection() {
  return (
    <section className="booking-section" id="book" aria-labelledby="book-title">
      <article className="booking-card">
        <p className="serial">VYBN · INDIA · CINEMATIC VISUALS</p>
        <h2 id="book-title">Book a Shoot</h2>
        <p className="booking-lead">
         Visual storytelling for nightlife, concerts, automotive culture, creators, brands, and cinematic experiences.
        </p>
        <div className="booking-meta">
  <span>
    <strong>Focused on</strong>
    Concerts / Nightlife / Automotive / Ambience
  </span>

  <span>
    <strong>Available for</strong>
    Shoots / Campaigns / Events
  </span>
</div>
        <div className="contact-stack" aria-label="Contact links">
          <a href="https://wa.me/+916366583516">WhatsApp</a>
          <a href="https://www.instagram.com/vybn.visuals">Instagram</a>
          <a href="mailto:hello@vybnvisuals.com">Email</a>
        </div>
      </article>

      <div className="booking-image">
        <Image
          src={imageUrls.booking}
          alt="Concert crowd captured in cinematic lighting"
          fill
          sizes="(max-width: 980px) 100vw, 60vw"
        />
        <a className="button" href="mailto:hello@vybnvisuals.com">
          Book a Shoot
        </a>
      </div>
    </section>
  );
}
