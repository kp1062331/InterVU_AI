import type { Metadata } from "next";
import { IntroSplash } from "@/components/IntroSplash";
import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Coverage } from "@/components/sections/Coverage";
import { HomeCTA } from "@/components/sections/HomeCTA";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
};

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
