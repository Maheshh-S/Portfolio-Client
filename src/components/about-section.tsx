import Image from "next/image";
import { imageUrls } from "@/lib/content";

export function AboutSection() {
  return (
    <section className="about-section" id="collection" aria-labelledby="about-title">
      <div className="about-image-panel">
        
        <div className="about-image-frame">
         <video
  className="about-video"
  autoPlay
  loop
  muted
  playsInline
  preload="metadata"
>
  <source src="/videos/about-video.mp4" type="video/mp4" />
</video>
        </div>
      </div>
      <div className="about-copy">
        <p className="eyebrow">About the eye</p>
        <h2 id="about-title">Feel the rhythm of every frame</h2>
        <p>
          VYBN Visuals turns real moments into cinematic edits: the drop before a DJ set, the crowd
          reaction after a chorus, the final key handover on a automotive, and the tiny details that
          make a brand film feel alive.
        </p>
        <p>
          The work blends nightlife energy, premium automotive polish, street-level spontaneity, and clean
          commercial storytelling for clients across India.
        </p>
        <a className="button" href="#services">
          Explore Services
        </a>
      </div>
    </section>
  );
}
