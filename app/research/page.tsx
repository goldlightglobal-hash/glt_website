import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SectionTitle } from "@/components/section-title";
import { ResearchCard } from "@/components/research-card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CtaSection } from "@/components/cta-section";
import { createPageMetadata } from "@/lib/seo";
import { researchAreas } from "@/lib/data";

export const metadata: Metadata = createPageMetadata(
  "Research",
  "GoldLighT Technologies research in medical imaging, computer vision, AI hardware, CNN accelerators, TinyML, edge AI, and future semiconductor technologies.",
  "/research/"
);

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        title="Research & Development"
        description="Pushing the boundaries of AI hardware, medical imaging, and semiconductor innovation."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-muted text-lg leading-relaxed">
                Our R&D team collaborates with academic institutions and industry partners
                to advance the state of the art in AI acceleration, medical imaging,
                computer vision, and next-generation semiconductor technologies. We
                publish findings, contribute to open-source projects, and translate
                research into production-ready engineering solutions.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <SectionTitle
              subtitle="Focus Areas"
              title="Research Areas"
              description="Active research programs driving innovation across multiple domains."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {researchAreas.map((area, i) => (
              <ScrollReveal key={area.title} delay={i * 0.06}>
                <ResearchCard {...area} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle
              subtitle="Collaboration"
              title="Research Partnerships"
              description="We welcome collaborations with universities, research labs, and industry partners."
            />
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  title: "Academic Partnerships",
                  desc: "Joint research projects, student internships, and funded PhD programs.",
                },
                {
                  title: "Industry Collaborations",
                  desc: "Co-development of IP blocks, accelerators, and reference designs.",
                },
                {
                  title: "Open Source",
                  desc: "Contributing tools, models, and datasets to the engineering community.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border bg-card p-6 text-center"
                >
                  <h3 className="font-heading text-lg font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CtaSection
        title="Interested in Research Collaboration?"
        description="Connect with our R&D team to explore partnership opportunities."
      />
    </>
  );
}
