import Link from "next/link";
import { ExternalLink, Camera, PlayCircle, Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "@/components/logo";
import { companyInfo, navLinks, services } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/50" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted leading-relaxed">
              Engineering excellence in AI, FPGA, ASIC, embedded systems, medical
              imaging, and industry training. From algorithms to silicon.
            </p>
            <div className="flex gap-3">
              {[
                { icon: ExternalLink, href: companyInfo.social.linkedin, label: "LinkedIn" },
                { icon: Camera, href: companyInfo.social.instagram, label: "Instagram" },
                { icon: PlayCircle, href: companyInfo.social.youtube, label: "YouTube" },
                { icon: ExternalLink, href: companyInfo.social.facebook, label: "Facebook" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted hover:text-gold hover:border-gold/50 transition-colors"
                  aria-label={`Follow us on ${label}`}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              Services
            </h3>
            <ul className="space-y-2" role="list">
              {services.map((service) => (
                <li key={service.title}>
                  <Link
                    href="/services/"
                    className="text-sm text-muted hover:text-gold transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              Contact
            </h3>
            <ul className="space-y-3" role="list">
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-start gap-2 text-sm text-muted hover:text-gold transition-colors"
                >
                  <Mail className="h-4 w-4 mt-0.5 shrink-0" aria-hidden="true" />
                  {companyInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
                  className="flex items-start gap-2 text-sm text-muted hover:text-gold transition-colors"
                >
                  <Phone className="h-4 w-4 mt-0.5 shrink-0" aria-hidden="true" />
                  {companyInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/c6xcm1UhHLdCwzHm9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-sm text-muted hover:text-gold transition-colors"
                >
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0" aria-hidden="true" />
                  {companyInfo.address}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            &copy; {currentYear} {companyInfo.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Accelerating Intelligence: AI to Silicon
          </p>
        </div>
      </div>
    </footer>
  );
}
