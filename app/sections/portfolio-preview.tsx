"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const portfolioItems = [
  { title: "Pixel Quest", platform: "NES", type: "Full Box Set" },
  {
    title: "Neon City",
    platform: "Game Boy Color",
    type: "Cartridge + Manual",
  },
  { title: "Cyber Ninja", platform: "Sega Genesis", type: "Complete In Box" },
  { title: "Space Oddity", platform: "SNES", type: "Collectors Edition" },
  { title: "Dungeon Crawl", platform: "Game Boy", type: "Cartridge Only" },
  { title: "Retro Racer", platform: "Game Boy Advance", type: "Full Box Set" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export function PortfolioPreviewSection() {
  return (
    <Section id="portfolio">
      <SectionHeader
        subtitle="Our Work"
        title="Past Productions"
        description="Quality craftsmanship on every project. Each cartridge is built to last and designed to impress."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-3 gap-6"
      >
        {portfolioItems.map((item, index) => (
          <motion.div
            key={item.title}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className={`group relative overflow-hidden rounded-xl aspect-square cursor-pointer border border-border hover:border-primary/50 hover:shadow-lg transition-all ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/50 group-hover:from-primary/20 transition-all" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className={`${index === 0 ? "w-32 h-40" : "w-20 h-24"} rounded-lg bg-card border-2 border-border shadow-lg rotate-2 group-hover:rotate-0 transition-transform duration-300`}
              />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3
                className={`font-heading font-semibold text-white mb-1 ${index === 0 ? "text-2xl" : "text-lg"}`}
              >
                {item.title}
              </h3>
              <p
                className={`text-white/80 ${index === 0 ? "text-base" : "text-sm"}`}
              >
                {item.platform} • {item.type}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center mt-12"
      >
        <Link href="/portfolio">
          <Button variant="outline" size="lg" className="group">
            View Full Portfolio
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </motion.div>
    </Section>
  );
}
