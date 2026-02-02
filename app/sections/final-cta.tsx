"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32 bg-primary">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-6">
            <Zap className="h-4 w-4" />
            <span>Ready to get started?</span>
          </div>

          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Turn Your Digital Dream Into Physical Reality
          </h2>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Join hundreds of indie developers who have brought their games to
            life. Get a free quote today. No commitment required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 group"
              >
                Request Your Quote
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/process">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-lg px-8"
              >
                Learn More
              </Button>
            </Link>
          </div>

          <p className="mt-8 text-sm text-primary-foreground/70">
            Free quotes • No minimum commitment • Response within 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
}
