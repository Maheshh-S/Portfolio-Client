import { marqueeItems } from "@/lib/content";

export function TopMarquee() {
  return (
    <div className="top-marquee" aria-label="Announcement">
      <div className="marquee-track">
        {marqueeItems.map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}
