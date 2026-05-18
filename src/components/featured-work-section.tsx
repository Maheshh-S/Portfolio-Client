import { featuredProjects } from "@/lib/content";

export function FeaturedWorkSection() {
  return (
    <section className="featured-work-section" id="work" aria-labelledby="work-title">
      <div className="section-kicker">
        <p className="eyebrow">Selected placeholders</p>
        <h2 id="work-title">Video slots ready for your work</h2>
      </div>
      <div className="video-card-grid">
        {featuredProjects.map((project, index) => (
          <article className="video-card" key={project.title}>
            <div className="video-slot" aria-label={`${project.title} video placeholder`}>
              <span>0{index + 1}</span>
              <strong>Video Placeholder</strong>
            </div>
            <p className="eyebrow">{project.meta}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
