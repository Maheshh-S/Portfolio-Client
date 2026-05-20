import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "VYBN Visuals | Cinematic Visual Storytelling",

  description:
    "Cinematic visuals for nightlife, concerts, brands, automotive culture, restaurants, promotions, and modern visual storytelling.",

  metadataBase: new URL("https://vybnvisuals.vercel.app")
};

export default function RootLayout({
  children
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}