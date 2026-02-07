"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32 bg-brand-primary">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-semibold mb-6">
            <Zap className="h-4 w-4" />
            <span>Ready to bring your game to life?</span>
          </div>

          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Turn Your Digital Dream Into a{" "}
            <span className="text-brand-secondary">Physical Reality</span>
          </h2>

          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of indie developers who have brought their games to
            life. It is a magical blend of passion and production, delivered
            with care and built for play.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <Button
                size="lg"
                className="bg-white hover:bg-white/90 text-brand-primary font-semibold text-lg px-8 h-14 group shadow-xl"
              >
                Request Your Free Quote
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/process">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/50 text-white hover:bg-white/10 font-semibold text-lg px-8 h-14"
              >
                See How It Works
              </Button>
            </Link>
          </div>

          <p className="mt-8 text-sm text-white/70">
            Free quotes • No minimum commitment • Response within 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
}
