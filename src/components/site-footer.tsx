import { InstagramIcon, VideoIcon } from "@/components/icons";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>© VYBN Visuals 2026. Mysore-based cinematic video portfolio.</p>
      <div className="socials" aria-label="Social links">
        <a href="#" aria-label="Instagram">
          <InstagramIcon />
        </a>
        <a href="#" aria-label="Video channel">
          <VideoIcon />
        </a>
        <a className="back-top" href="#" aria-label="Back to top">
          ↑
        </a>
      </div>
    </footer>
  );
}
