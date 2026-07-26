import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/hero";
import { SectionTitle } from "@/components/section-title";
import { ServiceCard } from "@/components/service-card";
import { FeatureCard } from "@/components/feature-card";
import { IndustryCard } from "@/components/industry-card";
import { ResearchCard } from "@/components/research-card";
import { PortfolioCard } from "@/components/portfolio-card";
import { CtaSection } from "@/components/cta-section";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import {
  services,
  whyChooseUs,
  industries,
  researchHighlights,
  portfolioProjects,
} from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Services */}
      <section className="py-20 md:py-28 bg-secondary/30" aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle
              subtitle="What We Do"
              title="Our Services"
              description="Comprehensive engineering services spanning the full spectrum from AI algorithms to silicon implementation."
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.05}>
                <ServiceCard {...service} />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="text-center mt-10">
            <Button asChild variant="outline">
              <Link href="/services/">
                View All Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28" aria-labelledby="why-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle
              subtitle="Why GoldLighT"
              title="Why Choose Us"
              description="A trusted engineering partner with deep expertise across AI, semiconductor, and embedded domains."
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 0.08}>
                <FeatureCard {...feature} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 md:py-28 bg-secondary/30" aria-labelledby="industries-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle
              subtitle="Industries"
              title="Industries We Serve"
              description="Delivering tailored engineering solutions across diverse industry verticals."
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {industries.map((industry, i) => (
              <ScrollReveal key={industry.title} delay={i * 0.06}>
                <IndustryCard {...industry} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="py-20 md:py-28" aria-labelledby="research-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle
              subtitle="Research"
              title="Research Highlights"
              description="Pioneering research in AI hardware acceleration, medical imaging, and edge computing."
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {researchHighlights.map((area, i) => (
              <ScrollReveal key={area.title} delay={i * 0.05}>
                <ResearchCard {...area} />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="text-center mt-10">
            <Button asChild variant="secondary">
              <Link href="/research/">
                Explore Research
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20 md:py-28 bg-secondary/30" aria-labelledby="portfolio-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle
              subtitle="Portfolio"
              title="Featured Projects"
              description="A showcase of our engineering achievements across AI, FPGA, ASIC, and embedded domains."
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioProjects.slice(0, 6).map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 0.08}>
                <PortfolioCard {...project} />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="text-center mt-10">
            <Button asChild variant="outline">
              <Link href="/portfolio/">
                View Full Portfolio
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
