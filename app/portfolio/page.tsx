"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Section, SectionHeader } from "@/components/section";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles, Quote } from "lucide-react";

const caseStudies = [
  {
    title: "Cosmic Explorer",
    developer: "Stellar Soft",
    platform: "Game Boy Color",
    color: "from-yellow-500/20 to-yellow-500/5",
    problem:
      "Developer needed a physical release for Kickstarter backers with limited budget.",
    solution:
      "100-unit run with custom labels, simple boxes, and printed manuals.",
    runSize: "100 units",
    deliverables: [
      "Cartridges",
      "Custom labels",
      "Folded boxes",
      "Instruction manuals",
    ],
    testimonial:
      "Hoskbrew made the process incredibly smooth. The quality exceeded expectations.",
  },
  {
    title: "Dungeon Delver",
    developer: "Pixel Forge",
    platform: "NES",
    color: "from-red-500/20 to-red-500/5",
    problem: "Complex mapper requirements and battery-backed saves needed.",
    solution:
      "Custom PCB with MMC3 mapper, battery save support, and premium CIB packaging.",
    runSize: "500 units",
    deliverables: [
      "Custom PCBs",
      "Premium boxes",
      "Full-color manuals",
      "Map inserts",
      "Stickers",
    ],
    testimonial:
      "The technical expertise was impressive. Everything works perfectly on real hardware.",
  },
  {
    title: "Cyber Ninjas",
    developer: "Neon Games",
    platform: "Sega Genesis",
    color: "from-indigo-500/20 to-indigo-500/5",
    problem: "Tight deadline for convention debut with multiple SKUs needed.",
    solution: "Rush production with standard and limited editions.",
    runSize: "250 + 50 LE",
    deliverables: [
      "Cartridges",
      "Standard & LE boxes",
      "Manuals",
      "Art cards",
      "Patches",
    ],
    testimonial:
      "They delivered on time for our convention. The rush service was a lifesaver.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
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
              
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Our{" "}
                <span className="text-brand-primary">Past Productions</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Quality craftsmanship on every project. Each cartridge is built to last and designed to impress. 
                <span className="text-brand-primary font-semibold">500+ games produced and counting.</span>
              </p>
            </motion.div>
          </div>
        </section>

        {/* Case Studies */}
        <Section>
          <SectionHeader
            title="Case Studies"
            subtitle="Success Stories"
            description="Real projects, real challenges, real solutions. See how we have helped indie developers bring their games to life."
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-3 gap-6"
          >
            {caseStudies.map((study) => (
              <motion.div key={study.title} variants={itemVariants}>
                <Card className="h-full overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <div className={`h-1 bg-gradient-to-r ${study.color}`} />
                  
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{study.platform}</Badge>
                      <span className="text-sm text-muted-foreground font-medium">
                        {study.runSize}
                      </span>
                    </div>
                    
                    <CardTitle className="text-xl">{study.title}</CardTitle>
                    <CardDescription>by {study.developer}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold mb-1 text-brand-primary">Challenge</h4>
                      <p className="text-sm text-muted-foreground">{study.problem}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold mb-1 text-brand-primary">Solution</h4>
                      <p className="text-sm text-muted-foreground">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold mb-2">Deliverables</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.deliverables.map((item) => (
                          <span
                            key={item}
                            className="text-xs px-2 py-1 bg-secondary rounded-full"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <blockquote className="border-l-2 border-brand-primary pl-4 italic text-sm text-muted-foreground bg-secondary/30 p-3 rounded-r-lg">
                      <Quote className="h-4 w-4 text-brand-primary/50 mb-1" />
                      {study.testimonial}
                    </blockquote>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Section>

        {/* CTA Section */}
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
                Ready to Join Our Portfolio?
              </h2>
              
              <p className="text-lg text-white/90 mb-8">
                Let us help you bring your game to life. Get started with a free quote today.
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
