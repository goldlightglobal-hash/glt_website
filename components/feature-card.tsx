"use client";

import { motion } from "framer-motion";
import { iconMap, type IconKey } from "@/lib/icons";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: IconKey;
  className?: string;
}

export function FeatureCard({
  title,
  description,
  icon,
  className,
}: FeatureCardProps) {
  const Icon = iconMap[icon];
  return (
    <motion.div
      className={cn(
        "flex flex-col items-center text-center p-6 rounded-xl border border-border bg-card/50 transition-all duration-300 hover:border-gold/20",
        className
      )}
      whileHover={{ y: -4 }}
    >
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold/20 to-blue/20 text-gold">
        <Icon className="h-7 w-7" aria-hidden="true" />
      </div>
      <h3 className="font-heading text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted leading-relaxed">{description}</p>
    </motion.div>
  );
}
