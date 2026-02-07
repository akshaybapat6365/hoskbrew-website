"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Package,
  Gamepad2,
  Zap,
  Shield,
  Truck,
  CheckCircle,
} from "lucide-react";

/**
 * HoskBrew Ad Product/Services Page
 * Deconstructs the HoskBrew promotional ad into native web components
 * with brand-green themed backgrounds, animated elements, and service highlights.
 */

const capabilities = [
  {
    icon: Gamepad2,
    title: "Multi-Platform Production",
    description:
      "NES, SNES, Game Boy, Game Boy Color, Game Boy Advance, Sega Genesis — we manufacture for all major retro platforms.",
  },
  {
    icon: Package,
    title: "Complete Packaging",
    description:
      "Custom boxes, labels, manuals, and inserts. Full CIB (Complete In Box) production that matches the quality of original releases.",
  },
  {
    icon: Shield,
    title: "Quality Testing",
    description:
      "Every single unit tested on original hardware. Compatibility verified across different console revisions. Under 1% defect rate.",
  },
  {
    icon: Truck,
    title: "Worldwide Fulfillment",
    description:
      "Direct shipping to your customers or bulk delivery to you. Tracked, insured, and handled with care.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Submit Your ROM",
    description:
      "Send us your game ROM and artwork files. We review compatibility and provide a detailed quote.",
  },
  {
    step: "02",
    title: "Proof & Approve",
    description:
      "We send you proofs of cartridge labels, box art, and manual layout. You approve before production begins.",
  },
  {
    step: "03",
    title: "Production",
    description:
      "Professional PCB assembly, cartridge flashing, label printing, and packaging. Quality checked at every step.",
  },
  {
    step: "04",
    title: "Ship & Play",
    description:
      "Your finished cartridges ship worldwide. Ready for shelves, conventions, or direct-to-customer fulfillment.",
  },
];

export default function HoskBrewAdPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section - Brand green themed */}
        <section className="relative overflow-hidden min-h-[80vh] flex items-center">
          {/* Animated background with brand colors */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#11192c] via-[#0a0f1a] to-[#11192c]" />

          {/* Green accent orbs */}
          <motion.div
            className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl"
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-20 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl"
            animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />

          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2344CF6C' fill-opacity='1'%3E%3Cpath d='M0 0h1v40H0V0zm39 0h1v40h-1V0zM0 0h40v1H0V0zm0 39h40v1H0v-1z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left - Content */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-3 mb-6"
                >
                  <Badge className="bg-brand-primary/20 text-brand-primary border-brand-primary/30 hover:bg-brand-primary/30">
                    <Zap className="h-3 w-3 mr-1" />
                    White-Label Manufacturing
                  </Badge>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 text-white"
                >
                  Homebrews for{" "}
                  <span className="text-brand-primary">Real Hardware</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-base sm:text-lg md:text-xl text-slate-300 mb-4 max-w-lg leading-relaxed"
                >
                  A magical blend of passion and production, delivered with care
                  and built for play. We craft, print, and forge what&apos;s
                  missing — then make it yours.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  className="text-base text-slate-400 mb-8 max-w-lg"
                >
                  Professional cartridge manufacturing for indie developers.
                  Starting at just 100 units. NES, SNES, Game Boy, Genesis and
                  more.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link href="/quote">
                    <Button
                      size="lg"
                      className="bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold text-lg px-8 h-14 shadow-lg shadow-brand-primary/25"
                    >
                      Get Your Free Quote
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-slate-600 text-slate-200 hover:bg-slate-800 font-semibold text-lg px-8 h-14"
                    >
                      Explore Services
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right - Ad Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative flex items-center justify-center"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative"
                >
                  {/* Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-brand-accent/10 rounded-2xl blur-3xl scale-110" />

                  {/* HoskBrew Ad Image */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-brand-primary/15 border border-brand-primary/20">
                    <Image
                      src="/products/hoskbrew-ad.png"
                      alt="HoskBrew - Professional Retro Game Manufacturing"
                      width={600}
                      height={800}
                      className="w-full max-w-[300px] sm:max-w-lg object-contain"
                      priority
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wide uppercase rounded-full bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
                What We Do
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
                End-to-End Manufacturing
              </h2>
              <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                From ROM file to finished product — we handle every step of the
                physical production process.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {capabilities.map((cap, index) => (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  className="group bg-card p-8 rounded-2xl border border-border hover:border-brand-primary/30 hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-6 group-hover:bg-brand-primary/20 transition-colors">
                    <cap.icon className="h-7 w-7 text-brand-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">
                    {cap.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {cap.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                How It Works
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-primary/10 border-2 border-brand-primary/30 flex items-center justify-center mx-auto mb-4">
                    <span className="font-heading text-lg font-bold text-brand-primary">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-brand-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto"
            >
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Make It Real?
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Get a detailed quote within 24 hours. 100 unit minimum. No
                commitment required.
              </p>
              <Link href="/quote">
                <Button
                  size="lg"
                  className="bg-white hover:bg-white/90 text-brand-primary font-semibold text-lg px-8 h-14 group"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
