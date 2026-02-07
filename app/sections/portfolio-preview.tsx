"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const products = [
  {
    title: "Crystal Mines",
    platform: "Game Boy",
    type: "Complete In Box",
    image: "/products/crystal-mines-ad.png",
    href: "/products/crystal-mines",
    accent: "from-cyan-500/20 to-emerald-500/10",
  },
  {
    title: "HoskBrew Manufacturing",
    platform: "Multi-Platform",
    type: "White-Label Service",
    image: "/products/hoskbrew-ad.png",
    href: "/products/hoskbrew",
    accent: "from-brand-primary/20 to-brand-accent/10",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function PortfolioPreviewSection() {
  return (
    <Section id="portfolio">
      <SectionHeader
        subtitle="Our Work"
        title="Featured Productions"
        description="Real games, real hardware, real quality. See what we've been crafting."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
      >
        {products.map((product) => (
          <motion.div key={product.title} variants={itemVariants}>
            <Link href={product.href} className="group block">
              <div className="relative overflow-hidden rounded-2xl border border-border hover:border-brand-primary/50 hover:shadow-xl transition-all duration-300">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${product.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading text-2xl font-bold text-white mb-1">
                    {product.title}
                  </h3>
                  <p className="text-white/80">
                    {product.platform} • {product.type}
                  </p>
                </div>
              </div>
            </Link>
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
        <Link href="/quote">
          <Button variant="outline" size="lg" className="group">
            Start Your Production
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </motion.div>
    </Section>
  );
}
