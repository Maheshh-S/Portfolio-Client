export function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <video
        className="hero-video"
        aria-label="VYBN Visuals showreel placeholder"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src="/videos/showreel.mp4" type="video/mp4" />
      </video>
      
      <div className="hero-shade" />
      <div className="hero-content">
        <p className="eyebrow">Promos • Aftermovies • Concerts • Automotive</p>
        <h1 id="hero-title">VYBN Visuals</h1>
      </div>
    </section>
  );
}
