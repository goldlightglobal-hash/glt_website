"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden circuit-bg chip-pattern"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />

      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-blue/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-gold/10 blur-3xl animate-pulse" />

      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 hidden xl:block opacity-30">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <Cpu className="h-64 w-64 text-blue/40" strokeWidth={0.5} aria-hidden="true" />
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <span className="inline-flex items-center rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium text-gold mb-6">
            AI · FPGA · ASIC · Embedded Systems
          </span>

          <h1
            id="hero-heading"
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            Accelerating Intelligence:{" "}
            <span className="gold-gradient">AI to Silicon</span>
          </h1>

          <p className="mx-auto max-w-3xl text-lg sm:text-xl text-muted leading-relaxed mb-10">
            We develop AI algorithms, FPGA prototypes, ASIC solutions, embedded
            systems, medical imaging applications, and industry-focused
            engineering training.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="default" size="lg">
              <Link href="/services/">
                Explore Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact/">Contact Us</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto justify-items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            { value: "15+", label: "Years Experience" },
            { value: "200+", label: "Projects Delivered" },
            { value: "50+", label: "Industry Partners" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-2xl sm:text-3xl font-bold text-gold">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
