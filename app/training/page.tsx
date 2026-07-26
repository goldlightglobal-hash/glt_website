import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { SectionTitle } from "@/components/section-title";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CtaSection } from "@/components/cta-section";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/seo";
import { trainingPrograms, trainingExtras } from "@/lib/data";
import { iconMap } from "@/lib/icons";

export const metadata: Metadata = createPageMetadata(
  "Training",
  "Industry-aligned training programs in FPGA, VLSI, Embedded Systems, AI, MATLAB, and Python with certification and internship opportunities.",
  "/training/"
);

export default function TrainingPage() {
  return (
    <>
      <PageHeader
        title="Industry Training"
        description="Hands-on engineering programs designed by industry practitioners for real-world readiness."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle
              subtitle="Programs"
              title="Training Programs"
              description="Comprehensive courses with lab sessions, real projects, and industry mentorship."
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingPrograms.map((program, i) => {
              const Icon = iconMap[program.icon];
              return (
                <ScrollReveal key={program.title} delay={i * 0.06}>
                  <article className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10 text-gold group-hover:bg-gold/20 transition-colors">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold mb-2">
                      {program.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed flex-1 mb-4">
                      {program.description}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-gold font-medium">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      {program.duration}
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle
              subtitle="Beyond Training"
              title="Certification, Internships & Workshops"
              description="Additional pathways to accelerate your engineering career."
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trainingExtras.map((extra, i) => {
              const Icon = iconMap[extra.icon];
              return (
                <ScrollReveal key={extra.title} delay={i * 0.08}>
                  <div className="rounded-xl border border-border bg-card p-8 text-center h-full">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue/10 text-blue">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold mb-3">
                      {extra.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {extra.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
          <ScrollReveal className="text-center mt-10">
            <Button asChild variant="default" size="lg">
              <Link href="/contact/">
                Enroll Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <CtaSection
        title="Ready to Start Your Engineering Journey?"
        description="Join thousands of engineers trained by GoldLighT Technologies."
        buttonText="Get in Touch"
      />
    </>
  );
}
