"use client";

import { motion } from "framer-motion";
import { iconMap, type IconKey } from "@/lib/icons";
import { cn } from "@/lib/utils";

interface IndustryCardProps {
  title: string;
  description: string;
  icon: IconKey;
  className?: string;
}

export function IndustryCard({
  title,
  description,
  icon,
  className,
}: IndustryCardProps) {
  const Icon = iconMap[icon];
  return (
    <motion.div
      className={cn(
        "group flex items-start gap-4 p-5 rounded-xl border border-border bg-secondary/30 transition-all duration-300 hover:bg-secondary/60 hover:border-blue/20",
        className
      )}
      whileHover={{ x: 4 }}
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue/10 text-blue group-hover:bg-blue/20 transition-colors">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <div>
        <h3 className="font-heading text-base font-semibold mb-1">{title}</h3>
        <p className="text-sm text-muted leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
