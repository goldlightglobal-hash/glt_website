import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { PortfolioCard } from "@/components/portfolio-card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CtaSection } from "@/components/cta-section";
import { createPageMetadata } from "@/lib/seo";
import { portfolioProjects } from "@/lib/data";

export const metadata: Metadata = createPageMetadata(
  "Portfolio",
  "Explore GoldLighT Technologies portfolio of AI, FPGA, ASIC, embedded systems, and PCB design projects.",
  "/portfolio/"
);

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        title="Our Portfolio"
        description="Engineering achievements across AI acceleration, medical imaging, embedded systems, and semiconductor design."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioProjects.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 0.06}>
                <PortfolioCard {...project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Have a Project in Mind?"
        description="Let's discuss how our engineering expertise can bring your vision to life."
      />
    </>
  );
}
