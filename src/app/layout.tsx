import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "VYBN Visuals | Cinematographer Portfolio",
  description:
    "VYBN Visuals is a Mysore-based cinematography portfolio for promotional videos, aftermovies, concerts, DJ shoots, car deliveries, and cinematic stories.",
  metadataBase: new URL("https://vybn-visuals.vercel.app")
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
