import { AboutSection } from "@/components/about-section";
import { FeaturedWorkSection } from "@/components/featured-work-section";
import { HeroSection } from "@/components/hero-section";
import { IntroSection } from "@/components/intro-section";
import { LookbookSection } from "@/components/lookbook-section";
import { ScheduleHeading } from "@/components/schedule-heading";
import { ServicesSection } from "@/components/services-section";
import { ShowSection } from "@/components/show-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TapeDivider } from "@/components/tape-divider";
import { TopMarquee } from "@/components/top-marquee";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <TopMarquee />
      <SiteHeader />
      <main id="main">
        <HeroSection />
        <TapeDivider />
        <IntroSection />
        <AboutSection />
        <ServicesSection />
        <ShowSection />
        <ScheduleHeading />
        <FeaturedWorkSection />
        <LookbookSection />
      </main>
      <SiteFooter />
    </>
  );
}
