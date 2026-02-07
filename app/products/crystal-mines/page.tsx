"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Gem, Pickaxe, Gamepad2, Star, Shield } from "lucide-react";

/**
 * Crystal Mines Product Page
 * Deconstructs the Crystal Mines Game Boy ad into native web components
 * with animated backgrounds, pixel-art inspired elements, and brand integration.
 */

const gameFeatures = [
  {
    icon: Gem,
    title: "Crystal Mining Adventure",
    description:
      "Explore deep underground caves filled with sparkling crystals and gems. Mine, collect, and discover rare minerals in this retro puzzle adventure.",
  },
  {
    icon: Pickaxe,
    title: "Classic Game Boy Format",
    description:
      "Designed for the original Game Boy hardware. Authentic 4-shade display, chiptune audio, and cartridge-based gameplay just like 1989.",
  },
  {
    icon: Gamepad2,
    title: "Physical Cartridge Release",
    description:
      "Available as a professionally manufactured Game Boy cartridge. Produced by HoskBrew with premium quality PCBs and label printing.",
  },
];

const specs = [
  { label: "Platform", value: "Game Boy (DMG)" },
  { label: "Genre", value: "Puzzle / Adventure" },
  { label: "Cartridge", value: "MBC1 Mapper" },
  { label: "Save", value: "Battery-Backed SRAM" },
  { label: "Players", value: "1 Player" },
  { label: "Format", value: "Complete In Box" },
];

export default function CrystalMinesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section - Dark cave-themed with crystal accents */}
        <section className="relative overflow-hidden min-h-[80vh] flex items-center bg-[#0a0f1a]">
          {/* Animated crystal background particles */}
          <div className="absolute inset-0">
            {/* Gradient overlay simulating cave depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a] via-[#11192c] to-[#0d1117]" />

            {/* Crystal sparkle particles */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1.5, 0.5],
                }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
              />
            ))}

            {/* Large decorative crystal shapes */}
            <motion.div
              className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-purple-500/5 rotate-45"
              animate={{ rotate: [45, 50, 45] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-br from-emerald-500/10 to-cyan-500/5 rotate-12"
              animate={{ rotate: [12, 18, 12] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left - Game Info */}
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
                  <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/30">
                    <Gamepad2 className="h-3 w-3 mr-1" />
                    Game Boy
                  </Badge>
                  <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/30">
                    <Star className="h-3 w-3 mr-1" />
                    HoskBrew Produced
                  </Badge>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 text-white"
                >
                  Crystal{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-300 bg-clip-text text-transparent">
                    Mines
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 max-w-lg leading-relaxed"
                >
                  Dig deep into underground caverns, mine rare crystals, and
                  navigate treacherous tunnels in this authentic Game Boy
                  adventure. Professionally produced on real hardware by
                  HoskBrew.
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
                      className="bg-cyan-500 hover:bg-cyan-400 text-[#0a0f1a] font-semibold text-lg px-8 h-14 shadow-lg shadow-cyan-500/25"
                    >
                      Order Your Copy
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-slate-600 text-slate-200 hover:bg-slate-800 font-semibold text-lg px-8 h-14"
                    >
                      Production Details
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right - Game Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative flex items-center justify-center"
              >
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative"
                >
                  {/* Glow behind image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-emerald-500/20 rounded-2xl blur-3xl scale-110" />

                  {/* Crystal Mines Ad Image */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/20 border border-cyan-500/20">
                    <Image
                      src="/products/crystal-mines-ad.png"
                      alt="Crystal Mines - Game Boy Homebrew Game"
                      width={600}
                      height={800}
                      className="w-full max-w-[280px] sm:max-w-md object-contain"
                      priority
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wide uppercase rounded-full bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
                Game Details
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
                A Retro Mining Adventure
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {gameFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="group bg-card p-8 rounded-2xl border border-border hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5 transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-7 w-7 text-cyan-500" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Specs Grid */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Technical Specifications
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {specs.map((spec, index) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-card rounded-xl p-5 border border-border text-center"
                >
                  <div className="text-sm text-muted-foreground mb-1 uppercase tracking-wide">
                    {spec.label}
                  </div>
                  <div className="font-heading font-semibold text-foreground">
                    {spec.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Assurance */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-brand-primary" />
                </div>
                <h2 className="font-heading text-3xl font-bold mb-4 text-foreground">
                  HoskBrew Quality Guarantee
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Every Crystal Mines cartridge is manufactured using
                  professional-grade PCBs, tested on original Game Boy hardware,
                  and packaged with the care it deserves. Homebrews for real
                  hardware — that&apos;s our promise.
                </p>
                <Link href="/quote">
                  <Button
                    size="lg"
                    className="bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold text-lg px-8 h-14 group"
                  >
                    Start Your Order
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
