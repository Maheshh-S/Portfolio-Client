import { services } from "@/lib/content";

export function ServicesSection() {
  return (
    <section className="services-section" id="services" aria-labelledby="services-title">
      <div className="section-kicker">
        <p className="eyebrow">Services</p>
        <h2 id="services-title">Shoot the vibe. Cut the story.</h2>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <article className="service-card" key={service.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
