import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CtaSection } from "@/components/cta-section";
import { createPageMetadata } from "@/lib/seo";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = createPageMetadata(
  "Blog",
  "Insights on AI, FPGA, ASIC design, embedded systems, medical imaging, and semiconductor engineering from GoldLighT Technologies.",
  "/blog/"
);

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Blog & Insights"
        description="Technical articles, industry insights, and engineering best practices from our team."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.06}>
                <article
                  className={`group flex h-full flex-col overflow-hidden rounded-xl border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-xl ${
                    i === 0
                      ? "border-gold/50 shadow-lg shadow-gold/5"
                      : "border-border"
                  }`}
                >
                  <div className="relative aspect-video overflow-hidden bg-secondary">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {i === 0 ? (
                      <span className="absolute left-3 top-3 rounded-full border border-gold/50 bg-background/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
                        Featured
                      </span>
                    ) : null}
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium text-gold uppercase tracking-wider">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted">
                        <Calendar className="h-3 w-3" aria-hidden="true" />
                        {post.date}
                      </span>
                    </div>
                    <h2 className="font-heading text-lg font-semibold mb-2 group-hover:text-gold transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted leading-relaxed flex-1 mb-4">
                      {post.excerpt}
                    </p>
                    <Link
                      href={post.href ?? `/blog/#${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:gap-2.5 transition-all"
                      aria-label={`Read more about ${post.title}`}
                    >
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Stay Updated"
        description="Subscribe to our newsletter for the latest engineering insights and company updates."
        buttonText="Contact Us"
      />
    </>
  );
}
