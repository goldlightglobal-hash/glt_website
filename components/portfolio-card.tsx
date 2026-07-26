"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PortfolioCardProps {
  title: string;
  description: string;
  technology: string;
  image: string;
  className?: string;
}

export function PortfolioCard({
  title,
  description,
  technology,
  image,
  className,
}: PortfolioCardProps) {
  return (
    <motion.article
      className={cn(
        "group overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5",
        className
      )}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative aspect-video overflow-hidden bg-secondary">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </div>
      <div className="p-5">
        <span className="text-xs font-medium text-blue uppercase tracking-wider">
          {technology}
        </span>
        <h3 className="font-heading text-lg font-semibold mt-1 mb-2 group-hover:text-gold transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted leading-relaxed">{description}</p>
      </div>
    </motion.article>
  );
}
