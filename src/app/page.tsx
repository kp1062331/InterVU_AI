import type { Metadata } from "next";
import { IntroSplash } from "@/components/IntroSplash";
import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Coverage } from "@/components/sections/Coverage";
import { HomeCTA } from "@/components/sections/HomeCTA";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <IntroSplash />
      <Hero />
      <AboutSection />
      <HowItWorks />
      <Coverage />
      <HomeCTA />
    </>
  );
}
