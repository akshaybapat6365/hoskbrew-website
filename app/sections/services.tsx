"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/section";
import {
  Gamepad2,
  Package,
  FileText,
  Tag,
  CheckCircle,
  Truck,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const services = [
  {
    icon: Gamepad2,
    title: "Cartridge Production",
    headline: "Homebrews for real hardware",
    description:
      "Custom PCB design and assembly for NES, SNES, Game Boy, Genesis and more. We help you bring yours to life too.",
    color: "from-brand-primary/20 to-brand-primary/5",
  },
  {
    icon: Package,
    title: "Packaging & Boxes",
    headline: "Dream project with no vessel?",
    description:
      "Professional retail boxes, clamshell cases, and custom packaging. We craft, print, and forge what's missing, then make it yours.",
    color: "from-brand-accent/20 to-brand-accent/5",
  },
  {
    icon: FileText,
    title: "Manuals & Inserts",
    headline: "Complete the experience",
    description:
      "Full-color instruction manuals, warranty cards, and promotional inserts. Various sizes and paper options.",
    color: "from-purple-500/20 to-purple-500/5",
  },
  {
    icon: Tag,
    title: "Label Printing",
    headline: "Premium presentation",
    description:
      "High-quality cartridge labels with glossy or matte finishes. Weatherproof and fade-resistant for lasting quality.",
    color: "from-orange-500/20 to-orange-500/5",
  },
  {
    icon: CheckCircle,
    title: "QA & Testing",
    headline: "Built to last",
    description:
      "Every unit tested on original hardware. Compatibility verified across different console revisions. Premium quality guaranteed.",
    color: "from-green-500/20 to-green-500/5",
  },
  {
    icon: Truck,
    title: "Fulfillment",
    headline: "Delivered with care",
    description:
      "Worldwide shipping with tracking. We can ship directly to your customers or in bulk to you. Built for play, delivered with care.",
    color: "from-blue-500/20 to-blue-500/5",
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

export function ServicesSection() {
  return (
    <Section id="services" className="bg-secondary/20">
      <SectionHeader
        subtitle="What We Offer"
        title="End-to-End Manufacturing"
        description="From concept to cartridge, we handle every step of the physical production process. A magical blend of passion and production."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service) => (
          <motion.div key={service.title} variants={itemVariants}>
            <motion.div 
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="h-full bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all cursor-pointer group overflow-hidden relative"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-4 transition-colors group-hover:bg-brand-primary/20">
                  <service.icon className="h-6 w-6 text-brand-primary" />
                </div>
                
                <p className="text-sm font-semibold text-brand-primary mb-1">
                  {service.headline}
                </p>
                
                <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-center mt-12"
      >
        <Link href="/services">
          <Button size="lg" variant="outline" className="group">
            View All Services
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </motion.div>
    </Section>
  );
}
