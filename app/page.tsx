"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Truck, Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden min-h-[90vh] flex items-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-primary/10 via-background to-background" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2344CF6C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center lg:text-left"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-semibold mb-8 border border-brand-primary/20"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>Now Accepting Orders</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6 text-foreground"
                >
                  Turn Your Indie Game Into a{" "}
                  <span className="text-brand-primary">Tangible Reality</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                >
                  Professional white-label manufacturing for indie developers.
                  Homebrews for real hardware—NES, SNES, Game Boy, Genesis and
                  more.
                  <span className="text-brand-primary font-semibold">
                    {" "}
                    Starting at just 100 units.
                  </span>
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <Link href="/quote">
                    <Button
                      size="lg"
                      className="bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold text-lg px-8 h-14 shadow-lg shadow-brand-primary/25 hover:shadow-xl hover:shadow-brand-primary/30 transition-all"
                    >
                      Get Your Free Quote
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/products/crystal-mines">
                    <Button
                      size="lg"
                      variant="outline"
                      className="font-semibold text-lg px-8 h-14 border-2"
                    >
                      See Our Work
                    </Button>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-10"
                >
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center">
                      <Shield className="h-4 w-4 text-brand-primary" />
                    </div>
                    <span className="font-medium">100 Unit MOQ</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center">
                      <Truck className="h-4 w-4 text-brand-primary" />
                    </div>
                    <span className="font-medium">Worldwide Shipping</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center">
                      <Sparkles className="h-4 w-4 text-brand-primary" />
                    </div>
                    <span className="font-medium">Premium Quality</span>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95, x: 40 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative hidden lg:flex items-center justify-center"
              >
                <div className="relative w-full max-w-xl">
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 rounded-3xl blur-3xl scale-110" />

                    <div className="relative bg-gradient-to-br from-card to-card/80 rounded-3xl p-6 shadow-2xl border border-border">
                      <div className="grid grid-cols-2 gap-4">
                        <Link
                          href="/products/crystal-mines"
                          className="group relative overflow-hidden rounded-xl border border-border hover:border-brand-primary/50 transition-all"
                        >
                          <div className="w-full h-full min-h-[220px] bg-[#0a0f1a] p-4 flex flex-col justify-between">
                            <div className="text-xs uppercase tracking-[0.25em] text-cyan-300">
                              Crystal Mines I
                            </div>
                            <div className="text-sm text-white font-semibold">
                              Buried Worlds. Explosive Enemies. And the Clock Is
                              Melting.
                            </div>
                            <div className="text-xs text-cyan-300">
                              Game Boy
                            </div>
                          </div>
                        </Link>

                        <Link
                          href="/services"
                          className="group relative overflow-hidden rounded-xl border border-border hover:border-brand-primary/50 transition-all"
                        >
                          <Image
                            src="/brand-assets/01.png"
                            alt="HoskBrew Services"
                            width={300}
                            height={400}
                            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                            <p className="text-white text-sm font-semibold">
                              HoskBrew
                            </p>
                            <p className="text-white/70 text-xs">
                              Manufacturing
                            </p>
                          </div>
                        </Link>
                      </div>

                      <div className="mt-4 flex items-center justify-center gap-3">
                        <Image
                          src="/octopus/octopus-color.png"
                          alt="HoskBrew Octopus Mascot"
                          width={40}
                          height={40}
                          className="w-10 h-10 object-contain"
                        />
                        <span className="text-sm text-muted-foreground font-medium">
                          Crafted with care by HoskBrew
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>
      </main>
      <Footer />
    </div>
  );
}
