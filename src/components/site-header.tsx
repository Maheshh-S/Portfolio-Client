"use client";

import { useEffect, useState } from "react";
import { mobileNavigationItems, navigationItems } from "@/lib/content";
import { SearchIcon } from "@/components/icons";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateHeaderState = () => {
      setIsScrolled(window.scrollY > 20);
    };

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateHeaderState);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`site-header${isScrolled ? " is-scrolled" : ""}`} data-header>
       <a className="brand" href="#" aria-label="VYBN Visuals home" onClick={closeMenu}>
  <span className="brand-star">✦</span>

  <div className="brand-lockup">
    <span className="brand-mark">VYBN</span>

    <span className="brand-visuals">
      VISUALS
    </span>
  </div>
</a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button className="icon-button" type="button" aria-label="Search">
            <SearchIcon />
          </button>
          <button
            className={`icon-button menu-button${isMenuOpen ? " is-open" : ""}`}
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`mobile-menu${isMenuOpen ? " is-open" : ""}`} data-mobile-menu>
        {mobileNavigationItems.map((item) => (
          <a href={item.href} key={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}
