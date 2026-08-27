import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Coverage } from "@/components/sections/Coverage";
import { Testimonials } from "@/components/sections/Testimonials";
import { HomeCTA } from "@/components/sections/HomeCTA";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Features />
      <HowItWorks />
      <Coverage />
      <Testimonials />
      <HomeCTA />
    </>
  );
}
