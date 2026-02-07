"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const offerings = [
  {
    title: "Retro Console Sales & Repair",
    description:
      "System busted? We revive the unplayable or help you find your next great love.",
  },
  {
    title: "Custom Parts & Cartridges",
    description:
      "Dream project with no vessel? We craft, print, and forge what's missing, then make it yours.",
  },
  {
    title: "Retro Game Development (Homebrew)",
    description:
      "Homebrews for real hardware. We help you bring yours to life too.",
  },
  {
    title: "Manuals, Schematics & Docs",
    description: "If you're fixing it yourself, we've got what you need.",
  },
  {
    title: "Tabletop Roleplaying Games",
    description:
      "We're building new worlds. A dark RPG universe where myth, and magick converge.",
  },
  {
    title: "RetroNomicon Quarterly",
    description:
      "More than a magazine, a summoning. Discover new games. Rediscover old obsessions.",
  },
];

export default function HoskBrewPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden py-20 lg:py-28 bg-[#0a0f1a]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#11192c] via-[#0a0f1a] to-[#11192c]" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-left"
              >
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  HOSKBREW isn't just about making things.
                </h1>
                <p className="text-lg text-slate-300 leading-relaxed">
                  It's about helping creatives bring their homebrew and
                  retro-inspired ideas to life. It's a magical blend of passion
                  and production, delivered with care and built for play.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative flex items-center justify-center"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-brand-primary/20 blur-3xl rounded-full scale-110" />
                  <Image
                    src="/brand-assets/01.png"
                    alt="HoskBrew Cartridge"
                    width={480}
                    height={480}
                    className="w-full max-w-md object-contain"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10">
              {offerings.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="p-6 rounded-2xl border border-border bg-card"
                >
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center text-muted-foreground">
              <div>Scan to explore.</div>
              <div>https://hoskbrew.com</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
