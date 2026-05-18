
const featuredProjects = [

  {
    title: "Club Night Aftermovie",
    meta: "Nightlife / Event Recap",
    description:
      "High-energy cinematic recap built around crowd movement, lighting, atmosphere, and transitions.",
    video: "/projects/2nd.mp4"
  },

  {
    title: "Restaurant Reel",
    meta: "Food / Ambience Visuals",
    description:
      "Cinematic food and restaurant visuals focused on atmosphere, preparation, interiors, plating, and dining experience.",
    video: "/projects/1st.mp4"
  },

  

  {
    title: "Brand Promotion Film",
    meta: "Promotional / Commercial Visuals",
    description:
      "Cinematic promotional content crafted for brands, launches, campaigns, products, and modern visual storytelling.",
    video: "/projects/3rd.mp4"
  }
] as const;

export function FeaturedWorkSection() {
  return (
    <section
      className="featured-work-section"
      id="work"
      aria-labelledby="work-title"
    >
      <div className="section-kicker">
        <p className="eyebrow">Selected Work</p>

        <h2 id="work-title">
          Featured Projects
        </h2>
      </div>

      <div className="video-card-grid">
        {featuredProjects.map((project, index) => (
          <article
            className="video-card"
            key={project.title}
          >
            <div className="video-slot">
              <video
                className="project-video"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              >
                <source
                  src={project.video}
                  type="video/mp4"
                />
              </video>

              <span>
                0{index + 1}
              </span>
            </div>

            <p className="eyebrow">
              {project.meta}
            </p>

            <h3>
              {project.title}
            </h3>

            <p>
              {project.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}