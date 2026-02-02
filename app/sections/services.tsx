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

const services = [
  {
    icon: Gamepad2,
    title: "Cartridge Production",
    description:
      "Custom PCB design and assembly for NES, SNES, Game Boy, Genesis and more. Premium quality chips and components.",
  },
  {
    icon: Package,
    title: "Packaging & Boxes",
    description:
      "Professional retail boxes, clamshell cases, and custom packaging. Full-color printing on premium materials.",
  },
  {
    icon: FileText,
    title: "Manuals & Inserts",
    description:
      "Full-color instruction manuals, warranty cards, and promotional inserts. Various sizes and paper options.",
  },
  {
    icon: Tag,
    title: "Label Printing",
    description:
      "High-quality cartridge labels with glossy or matte finishes. Weatherproof and fade-resistant.",
  },
  {
    icon: CheckCircle,
    title: "QA & Testing",
    description:
      "Every unit tested on original hardware. Compatibility verified across different console revisions.",
  },
  {
    icon: Truck,
    title: "Fulfillment",
    description:
      "Worldwide shipping with tracking. We can ship directly to your customers or in bulk to you.",
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
    <Section id="services" className="bg-secondary/30">
      <SectionHeader
        subtitle="What We Offer"
        title="End-to-End Manufacturing"
        description="From concept to cartridge, we handle every step of the physical production process."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service) => (
          <motion.div key={service.title} variants={itemVariants}>
            <div className="h-full bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 transition-colors group-hover:bg-primary/20">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
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
          <Button size="lg" variant="outline">
            View All Services
          </Button>
        </Link>
      </motion.div>
    </Section>
  );
}
