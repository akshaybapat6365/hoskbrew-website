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
      "Tell us about your game, platform, and desired run size. We will provide a detailed estimate within 24 hours. No commitment required.",
  },
  {
    icon: Palette,
    title: "Design \u0026 Proofs",
    description:
      "Work with our design team on labels, manuals, and packaging. We provide digital proofs for your approval. Your vision, our expertise.",
  },
  {
    icon: Cog,
    title: "Production",
    description:
      "PCB assembly, cartridge programming, label application, and packaging assembly. Full quality control at every step. Built with care.",
  },
  {
    icon: Package,
    title: "Testing",
    description:
      "Every unit tested on original hardware. We verify functionality, save compatibility, and visual quality. Premium quality guaranteed.",
  },
  {
    icon: Truck,
    title: "Delivery",
    description:
      "Shipped to you or directly to your customers. Worldwide delivery with tracking and insurance. Delivered with care, built for play.",
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Support",
    description:
      "We stand behind our work. If any issues arise, we are here to help with replacements or troubleshooting. Your success is our success.",
  },
];

export function ProcessSection() {
  return (
    <Section id="process" className="bg-secondary/20">
      <SectionHeader
        subtitle="How It Works"
        title="From ROM to Retail"
        description="A streamlined process designed to get your game into players' hands with minimal hassle. We handle the complexity so you can focus on your game."
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-8 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-primary via-brand-accent to-brand-primary/30 hidden md:block" />

        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative md:pl-0 ${index % 2 === 0 ? 'lg:pr-[50%]' : 'lg:pl-[50%]'}`}
            >
              {/* Timeline Dot */}
              <div className={`hidden md:flex absolute top-6 w-12 h-12 rounded-full bg-brand-primary items-center justify-center shadow-lg shadow-brand-primary/30 z-10 ${index % 2 === 0 ? 'lg:right-0 lg:translate-x-1/2' : 'lg:left-0 lg:-translate-x-1/2'} left-0`}>
                <step.icon className="h-5 w-5 text-white" />
              </div>

              {/* Mobile Icon */}
              <div className="md:hidden absolute left-0 w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center shrink-0">
                <step.icon className="h-4 w-4 text-white" />
              </div>

              {/* Content Card */}
              <div className={`bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all md:ml-20 ${index % 2 === 0 ? 'lg:ml-0 lg:mr-12' : 'lg:ml-12 lg:mr-0'}`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm font-bold text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full">
                    Step {index + 1}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
