"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/section";
import {
  MessageSquare,
  Palette,
  Cog,
  Package,
  Truck,
  HeartHandshake,
} from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Request a Quote",
    description:
      "Tell us about your game, platform, and desired run size. We will provide a detailed estimate within 24 hours.",
  },
  {
    icon: Palette,
    title: "Design & Proofs",
    description:
      "Work with our design team on labels, manuals, and packaging. We provide digital proofs for your approval.",
  },
  {
    icon: Cog,
    title: "Production",
    description:
      "PCB assembly, cartridge programming, label application, and packaging assembly. Full quality control at every step.",
  },
  {
    icon: Package,
    title: "Testing",
    description:
      "Every unit tested on original hardware. We verify functionality, save compatibility, and visual quality.",
  },
  {
    icon: Truck,
    title: "Delivery",
    description:
      "Shipped to you or directly to your customers. Worldwide delivery with tracking and insurance.",
  },
  {
    icon: HeartHandshake,
    title: "Support",
    description:
      "We stand behind our work. If any issues arise, we are here to help with replacements or troubleshooting.",
  },
];

export function ProcessSection() {
  return (
    <Section id="process" className="bg-secondary/30">
      <SectionHeader
        subtitle="How It Works"
        title="From ROM to Retail"
        description="A streamlined process designed to get your game into players hands with minimal hassle."
      />

      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative md:pl-24"
            >
              <div className="hidden md:flex absolute left-0 w-16 h-16 rounded-full bg-primary items-center justify-center">
                <step.icon className="h-6 w-6 text-primary-foreground" />
              </div>

              <div className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="md:hidden w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <step.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-primary">
                      Step {index + 1}
                    </span>
                    <h3 className="font-heading text-xl font-semibold text-foreground mt-1">
                      {step.title}
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
