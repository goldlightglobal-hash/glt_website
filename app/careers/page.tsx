import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Briefcase, Clock, CheckCircle } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { SectionTitle } from "@/components/section-title";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CtaSection } from "@/components/cta-section";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/seo";
import { jobOpenings, featuredInternshipProgram } from "@/lib/data";

export const metadata: Metadata = createPageMetadata(
  "Careers",
  "Join GoldLighT Technologies. Explore careers and the Open AI IC Design & ASIC R&D internship for students in VLSI, ECE, and AI hardware.",
  "/careers/"
);

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2" role="list">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm text-muted leading-relaxed">
          <CheckCircle
            className="h-4 w-4 text-gold mt-0.5 shrink-0"
            aria-hidden="true"
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function CareersPage() {
  const fullTime = jobOpenings.filter((j) => j.type === "Full-time");
  const otherInternships = jobOpenings.filter((j) => j.type === "Internship");

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

          <ScrollReveal>
            <article
              id="open-ai-ic-internship"
              className="rounded-2xl border border-blue/20 bg-card overflow-hidden mb-10"
            >
              <div className="border-b border-border bg-secondary/40 px-6 py-5 sm:px-8 sm:flex sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-2">
                    {featuredInternshipProgram.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted">
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="h-4 w-4" aria-hidden="true" />
                      {featuredInternshipProgram.department}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" aria-hidden="true" />
                      {featuredInternshipProgram.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" aria-hidden="true" />
                      {featuredInternshipProgram.type}
                    </span>
                  </div>
                </div>
                <Button asChild variant="secondary" className="shrink-0 mt-4 sm:mt-0">
                  <Link href="/contact/">Apply for Internship</Link>
                </Button>
              </div>

              <div className="px-6 py-8 sm:px-8 space-y-10">
                <div className="space-y-4 text-muted leading-relaxed">
                  {featuredInternshipProgram.introduction.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div>
                  <h4 className="font-heading text-xl font-semibold mb-4">
                    Areas of Work
                  </h4>
                  <BulletList items={featuredInternshipProgram.areasOfWork} />
                </div>

                <div>
                  <h4 className="font-heading text-xl font-semibold mb-4">
                    What Students Will Gain
                  </h4>
                  <BulletList items={featuredInternshipProgram.studentGains} />
                </div>

                <div>
                  <h4 className="font-heading text-xl font-semibold mb-4">
                    Who Can Apply?
                  </h4>
                  <p className="text-sm text-muted mb-3">
                    Students pursuing:
                  </p>
                  <BulletList items={featuredInternshipProgram.eligiblePrograms} />
                  <p className="text-sm text-muted mt-4">
                    <span className="font-medium text-foreground">
                      Preferred knowledge:{" "}
                    </span>
                    {featuredInternshipProgram.preferredKnowledge}
                  </p>
                </div>

                <div>
                  <h4 className="font-heading text-xl font-semibold mb-4">
                    Internship Nature
                  </h4>
                  <div className="space-y-3">
                    {featuredInternshipProgram.internshipNature.map((paragraph) => (
                      <p key={paragraph} className="text-sm text-muted leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-gold/20 bg-gold/5 p-6">
                  <h4 className="font-heading text-xl font-semibold mb-3">
                    Ideal Candidate
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    {featuredInternshipProgram.idealCandidate}
                  </p>
                </div>
              </div>
            </article>
          </ScrollReveal>

          {otherInternships.length > 0 && (
            <>
              <ScrollReveal>
                <h3 className="font-heading text-lg font-semibold text-muted mb-4">
                  Additional internship openings
                </h3>
              </ScrollReveal>
              <div className="space-y-4">
                {otherInternships.map((job, i) => (
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
            </>
          )}
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
