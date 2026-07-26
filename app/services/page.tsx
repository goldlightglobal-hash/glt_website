import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CtaSection } from "@/components/cta-section";
import { createPageMetadata } from "@/lib/seo";
import { serviceDetails } from "@/lib/data";

export const metadata: Metadata = createPageMetadata(
  "Services",
  "Explore GoldLighT Technologies services: AI, FPGA Design, ASIC Design, Embedded Systems, Medical Imaging, PCB Design, and Industry Training.",
  "/services/"
);

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        description="Comprehensive engineering services from AI algorithm development to silicon tape-out and deployment."
      />

      <div className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">
          {serviceDetails.map((service, index) => (
            <ScrollReveal key={service.slug}>
              <article
                id={service.slug}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <span className="text-sm font-medium uppercase tracking-widest text-gold">
                    Service {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-2 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <h3 className="font-heading text-lg font-semibold mb-3">
                    Key Benefits
                  </h3>
                  <ul className="space-y-2" role="list">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm text-muted">
                        <CheckCircle
                          className="h-4 w-4 text-gold mt-0.5 shrink-0"
                          aria-hidden="true"
                        />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`relative aspect-video rounded-xl overflow-hidden border border-border bg-secondary ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={`${service.title} illustration`}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <CtaSection
        title="Need a Custom Engineering Solution?"
        description="Our team can tailor services to your specific requirements. Let's discuss your project."
      />
    </>
  );
}
