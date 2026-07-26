"use client";

import { motion } from "framer-motion";
import { iconMap, type IconKey } from "@/lib/icons";
import { cn } from "@/lib/utils";

interface ResearchCardProps {
  title: string;
  description: string;
  icon: IconKey;
  className?: string;
}

export function ResearchCard({
  title,
  description,
  icon,
  className,
}: ResearchCardProps) {
  const Icon = iconMap[icon];
  return (
    <motion.article
      className={cn(
        "group rounded-xl border border-border bg-secondary/40 p-5 transition-all duration-300 hover:border-blue/30 hover:shadow-lg hover:shadow-blue/5",
        className
      )}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue/10 text-blue group-hover:bg-blue/20 transition-colors">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="font-heading text-base font-semibold mb-1.5">{title}</h3>
      <p className="text-sm text-muted leading-relaxed">{description}</p>
    </motion.article>
  );
}
