"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type Production =
  | {
      variant: "text";
      title: string;
      platform: string;
      type: string;
      description: string;
      href: string;
    }
  | {
      variant: "image";
      title: string;
      platform: string;
      type: string;
      description: string;
      href: string;
      image: string;
    };

const productions: Production[] = [
  {
    title: "Crystal Mines",
    platform: "Game Boy",
    type: "Complete In Box",
    description:
      "A retro mining puzzle adventure produced as an authentic Game Boy cartridge. Full CIB release with custom PCB, label, box, and manual.",
    href: "/products/crystal-mines",
    variant: "text",
  },
  {
    title: "HoskBrew Services",
    platform: "Multi-Platform",
    type: "White-Label Manufacturing",
    description:
      "Our core offering — professional cartridge manufacturing for indie developers. NES, SNES, Game Boy, Genesis and more.",
    href: "/products/hoskbrew",
    image: "/brand-assets/01.png",
    variant: "image",
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-semibold mb-6 border border-brand-primary/20">
                Quality Craftsmanship
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Our Productions
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-10">
                Real games made for real hardware. Every cartridge built to last
                and designed to impress.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="text-sm tracking-widest uppercase text-muted-foreground mb-2">
                Our Catalog
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Featured Products
              </h2>
              <p className="text-muted-foreground mt-3">
                Explore our current productions and see the quality we bring to
                every project.
              </p>
            </motion.div>

            <div className="space-y-12">
              {productions.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="grid md:grid-cols-2 gap-8 items-center"
                >
                  <div className={index % 2 !== 0 ? "md:order-2" : ""}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 text-sm font-semibold bg-brand-primary/10 text-brand-primary rounded-full">
                        {item.platform}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {item.type}
                      </span>
                    </div>
                    <h3 className="font-heading text-3xl font-bold mb-3 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {item.description}
                    </p>
                    <Link href={item.href}>
                      <Button variant="outline">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  <div className={index % 2 !== 0 ? "md:order-1" : ""}>
                    <div className="relative rounded-2xl border border-border overflow-hidden">
                      {item.variant === "image" ? (
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={500}
                          height={650}
                          className="w-full h-auto object-cover"
                        />
                      ) : (
                        <div className="w-full h-full min-h-[320px] bg-[#0a0f1a] p-6 flex flex-col justify-between">
                          <div className="text-xs uppercase tracking-[0.25em] text-cyan-300">
                            Crystal Mines I
                          </div>
                          <div className="text-sm text-white font-semibold">
                            Buried Worlds. Explosive Enemies. And the Clock Is
                            Melting.
                          </div>
                          <div className="text-xs text-cyan-300">Game Boy</div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-brand-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                <Button size="lg" className="bg-white text-brand-primary">
                  Start Your Project
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
