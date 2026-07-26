import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";

interface CtaSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CtaSection({
  title = "Ready to Build Your Next Innovation?",
  description = "Partner with GoldLighT Technologies to transform your ideas from AI algorithms to silicon-ready solutions.",
  buttonText = "Contact Us",
  buttonHref = "/contact/",
}: CtaSectionProps) {
  return (
    <section className="py-20 md:py-28" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-2xl border border-gold/20 bg-gradient-to-br from-secondary via-background to-secondary p-10 md:p-16 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2
                id="cta-heading"
                className="font-heading text-3xl sm:text-4xl font-bold mb-4"
              >
                {title}
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto mb-8">
                {description}
              </p>
              <Button asChild variant="default" size="lg">
                <Link href={buttonHref}>{buttonText}</Link>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
