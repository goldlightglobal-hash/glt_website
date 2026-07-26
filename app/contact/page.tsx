import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";
import { ScrollReveal } from "@/components/scroll-reveal";
import { createPageMetadata } from "@/lib/seo";
import { companyInfo } from "@/lib/data";

export const metadata: Metadata = createPageMetadata(
  "Contact",
  "Contact GoldLighT Technologies for AI, FPGA, ASIC, embedded systems, and training inquiries. Bangalore, India.",
  "/contact/"
);

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Get in touch with our engineering team to discuss your project or training needs."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <h2 className="font-heading text-2xl font-bold mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <h2 className="font-heading text-2xl font-bold mb-6">
                Company Information
              </h2>
              <div className="space-y-6">
                <div className="rounded-xl border border-border bg-card p-6 space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                      <Mail className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <a
                        href={`mailto:${companyInfo.email}`}
                        className="text-sm text-muted hover:text-gold transition-colors"
                      >
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                      <Phone className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <a
                        href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
                        className="text-sm text-muted hover:text-gold transition-colors"
                      >
                        {companyInfo.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                      <MessageCircle className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">WhatsApp</h3>
                      <a
                        href={companyInfo.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted hover:text-gold transition-colors"
                      >
                        {companyInfo.whatsapp}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                      <MapPin className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Address</h3>
                      <a
                        href="https://maps.app.goo.gl/c6xcm1UhHLdCwzHm9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted hover:text-gold transition-colors"
                      >
                        {companyInfo.address}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                      <Clock className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Business Hours</h3>
                      <p className="text-sm text-muted">
                        Mon – Fri: 9:00 AM – 6:00 PM IST
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-secondary overflow-hidden">
                  <div className="relative aspect-video bg-secondary/80">
                    <iframe
                      title="GoldLighT Technologies location map"
                      src="https://www.google.com/maps?q=JC+Industrial+Estate%2C+Yelachenahalli%2C+Bengaluru%2C+Karnataka+560062&z=17&output=embed"
                      className="absolute inset-0 h-full w-full border-0"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
