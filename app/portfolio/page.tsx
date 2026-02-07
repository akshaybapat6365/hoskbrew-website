"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Section, SectionHeader } from "@/components/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const productions = [
  {
    title: "Crystal Mines",
    platform: "Game Boy",
    type: "Complete In Box",
    description:
      "A retro mining puzzle adventure produced as an authentic Game Boy cartridge. Full CIB release with custom PCB, label, box, and manual.",
    image: "/products/crystal-mines-ad.png",
    href: "/products/crystal-mines",
    accent: "from-cyan-500/20 to-emerald-500/5",
  },
  {
    title: "HoskBrew Services",
    platform: "Multi-Platform",
    type: "White-Label Manufacturing",
    description:
      "Our core offering — professional cartridge manufacturing for indie developers. NES, SNES, Game Boy, Genesis and more.",
    image: "/products/hoskbrew-ad.png",
    href: "/products/hoskbrew",
    accent: "from-brand-primary/20 to-brand-accent/5",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-br from-brand-primary/5 via-background to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-semibold mb-6 border border-brand-primary/20">
                <Sparkles className="h-4 w-4" />
                <span>Quality Craftsmanship</span>
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Our <span className="text-brand-primary">Productions</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Real games made for real hardware. Every cartridge built to last
                and designed to impress.
              </p>
            </motion.div>
          </div>
        </section>

        <Section>
          <SectionHeader
            title="Featured Products"
            subtitle="Our Catalog"
            description="Explore our current productions and see the quality we bring to every project."
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            {productions.map((product, index) => (
              <motion.div key={product.title} variants={itemVariants}>
                <Link href={product.href} className="group block">
                  <div
                    className={`grid md:grid-cols-2 gap-8 items-center ${
                      index % 2 !== 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={`relative overflow-hidden rounded-2xl border border-border group-hover:border-brand-primary/50 transition-all ${
                        index % 2 !== 0 ? "md:order-2" : ""
                      }`}
                    >
                      <div className="relative aspect-[4/5]">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </div>

                    <div className={index % 2 !== 0 ? "md:order-1" : ""}>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 text-sm font-semibold bg-brand-primary/10 text-brand-primary rounded-full">
                          {product.platform}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {product.type}
                        </span>
                      </div>

                      <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground group-hover:text-brand-primary transition-colors">
                        {product.title}
                      </h2>

                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        {product.description}
                      </p>

                      <Button
                        variant="outline"
                        className="group/btn border-brand-primary/30 hover:bg-brand-primary/10"
                      >
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </Section>

        <section className="py-20 bg-brand-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Be Our Next Production?
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Let us help you bring your game to life. Get started with a free
                quote today.
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
