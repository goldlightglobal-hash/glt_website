import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Briefcase, Clock } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { SectionTitle } from "@/components/section-title";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CtaSection } from "@/components/cta-section";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/seo";
import { jobOpenings } from "@/lib/data";

export const metadata: Metadata = createPageMetadata(
  "Careers",
  "Join GoldLighT Technologies. Explore career openings and internships in FPGA, AI, ASIC, embedded systems, and more.",
  "/careers/"
);

export default function CareersPage() {
  const fullTime = jobOpenings.filter((j) => j.type === "Full-time");
  const internships = jobOpenings.filter((j) => j.type === "Internship");

  return (
    <>
      <PageHeader
        title="Careers"
        description="Join a team of passionate engineers building the future of AI and semiconductor technology."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-muted text-lg leading-relaxed">
                At GoldLighT Technologies, you&apos;ll work on cutting-edge projects spanning
                AI acceleration, medical imaging, FPGA design, and ASIC development.
                We offer competitive compensation, continuous learning, and a collaborative
                culture that values innovation and excellence.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <SectionTitle
              subtitle="Open Positions"
              title="Current Openings"
              align="left"
            />
          </ScrollReveal>
          <div className="space-y-4 mb-16">
            {fullTime.map((job, i) => (
              <ScrollReveal key={job.title} delay={i * 0.05}>
                <article className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-gold/30">
                  <div>
                    <h3 className="font-heading text-lg font-semibold mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted">
                      <span className="flex items-center gap-1.5">
                        <Briefcase className="h-4 w-4" aria-hidden="true" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4" aria-hidden="true" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" aria-hidden="true" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Button asChild variant="default" size="sm" className="shrink-0">
                    <Link href="/contact/">Apply</Link>
                  </Button>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <SectionTitle
              subtitle="Internships"
              title="Internship Opportunities"
              align="left"
            />
          </ScrollReveal>
          <div className="space-y-4">
            {internships.map((job, i) => (
              <ScrollReveal key={job.title} delay={i * 0.05}>
                <article className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-blue/30">
                  <div>
                    <h3 className="font-heading text-lg font-semibold mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted">
                      <span className="flex items-center gap-1.5">
                        <Briefcase className="h-4 w-4" aria-hidden="true" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4" aria-hidden="true" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" aria-hidden="true" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Button asChild variant="secondary" size="sm" className="shrink-0">
                    <Link href="/contact/">Apply</Link>
                  </Button>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Don't See the Right Role?"
        description="Send us your resume and we'll keep you in mind for future opportunities."
        buttonText="Send Resume"
      />
    </>
  );
}
