import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { SectionTitle } from "@/components/section-title";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CtaSection } from "@/components/cta-section";
import { FeatureCard } from "@/components/feature-card";
import { createPageMetadata } from "@/lib/seo";
import { coreValues, developmentProcess } from "@/lib/data";
import { iconMap, type IconKey } from "@/lib/icons";

export const metadata: Metadata = createPageMetadata(
  "About Us",
  "Learn about GoldLighT Technologies — our vision, mission, core values, and 15+ years of engineering excellence in AI, FPGA, ASIC, and embedded systems.",
  "/about/"
);

const expertise: { title: string; icon: IconKey }[] = [
  { title: "Artificial Intelligence", icon: "Brain" },
  { title: "FPGA Design", icon: "Cpu" },
  { title: "ASIC / VLSI", icon: "Microchip" },
  { title: "Embedded Systems", icon: "CircuitBoard" },
  { title: "Medical Imaging", icon: "HeartPulse" },
  { title: "Computer Vision", icon: "Eye" },
  { title: "PCB Design", icon: "Layers" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About GoldLighT"
        description="Engineering the future of intelligent systems — from AI algorithms to silicon."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <SectionTitle
                subtitle="Company Overview"
                title="Pioneering AI to Silicon Engineering"
                align="left"
              />
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  GoldLighT Technologies Pvt. Ltd. is a premier engineering company
                  specializing in the convergence of artificial intelligence and
                  semiconductor design. Founded with a vision to bridge the gap between
                  software intelligence and hardware implementation, we deliver
                  end-to-end solutions that power the next generation of intelligent
                  systems.
                </p>
                <p>
                  With over 15 years of industry experience, our team of expert engineers
                  has successfully delivered 200+ projects across healthcare, automotive,
                  industrial automation, aerospace, and consumer electronics sectors.
                </p>
                <p>
                  From algorithm development and FPGA prototyping to ASIC tape-out and
                  embedded deployment, we provide comprehensive engineering services
                  backed by rigorous research and hands-on industry training programs.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative aspect-square max-w-md mx-auto rounded-full overflow-hidden border-4 border-gold">
                <Image
                  src="/logo.png"
                  alt="GoldLighT Technologies company logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="rounded-xl border border-gold/20 bg-card p-8 h-full">
                <span className="text-sm font-medium uppercase tracking-widest text-gold">
                  Vision
                </span>
                <h2 className="font-heading text-2xl font-bold mt-3 mb-4">
                  Leading the AI-Silicon Revolution
                </h2>
                <p className="text-muted leading-relaxed">
                  To be the global leader in AI-to-silicon engineering, enabling
                  intelligent systems that transform industries and improve lives
                  through cutting-edge semiconductor and AI technologies.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="rounded-xl border border-blue/20 bg-card p-8 h-full">
                <span className="text-sm font-medium uppercase tracking-widest text-blue">
                  Mission
                </span>
                <h2 className="font-heading text-2xl font-bold mt-3 mb-4">
                  Engineering Excellence, Delivered
                </h2>
                <p className="text-muted leading-relaxed">
                  To deliver world-class engineering solutions in AI, FPGA, ASIC, and
                  embedded systems while nurturing the next generation of semiconductor
                  engineers through industry-aligned training and research programs.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle
              subtitle="Core Values"
              title="What Drives Us"
              description="Our values guide every project, partnership, and training program we deliver."
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.08}>
                <FeatureCard
                  title={value.title}
                  description={value.description}
                  icon={value.icon}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle
              subtitle="Expertise"
              title="Technology Expertise"
              description="Deep technical capabilities across the full engineering stack."
            />
          </ScrollReveal>
          <div className="flex flex-wrap justify-center gap-4">
            {expertise.map((item, i) => {
              const Icon = iconMap[item.icon];
              return (
                <ScrollReveal key={item.title} delay={i * 0.05}>
                  <div className="flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3">
                    <Icon className="h-5 w-5 text-gold" aria-hidden="true" />
                    <span className="text-sm font-medium">{item.title}</span>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle
              subtitle="Process"
              title="Development Process"
              description="A proven, iterative engineering methodology ensuring quality at every stage."
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {developmentProcess.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.08}>
                <div className="relative rounded-xl border border-border bg-card p-6 text-center h-full">
                  <span className="font-heading text-3xl font-bold text-gold/30">
                    {step.step}
                  </span>
                  <h3 className="font-heading text-lg font-semibold mt-2 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
