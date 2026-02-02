"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/section";
import { Badge } from "@/components/ui/badge";

const platforms = [
  { name: "NES", fullName: "Nintendo Entertainment System" },
  { name: "SNES", fullName: "Super Nintendo" },
  { name: "Game Boy", fullName: "Original Game Boy" },
  { name: "Game Boy Color", fullName: "Game Boy Color" },
  { name: "Game Boy Advance", fullName: "Game Boy Advance" },
  { name: "Sega Genesis", fullName: "Sega Genesis / Mega Drive" },
  { name: "Sega Master System", fullName: "Sega Master System" },
  { name: "Atari 2600", fullName: "Atari 2600" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export function PlatformsSection() {
  return (
    <Section id="platforms">
      <SectionHeader
        subtitle="Supported Systems"
        title="Your Game, Any Platform"
        description="We manufacture cartridges for all major retro gaming systems. Do not see yours? Contact us about custom solutions."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {platforms.map((platform) => (
          <motion.div
            key={platform.name}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="group"
          >
            <div className="relative overflow-hidden rounded-xl bg-card border border-border p-6 text-center hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer h-full flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 rounded-xl mx-auto mb-4 bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-heading font-bold text-primary">
                    {platform.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-semibold mb-1 text-foreground">
                  {platform.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-tight">
                  {platform.fullName}
                </p>
              </div>

              <div className="mt-4">
                <Badge variant="secondary">Available</Badge>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-center mt-12 p-8 bg-primary/5 border border-primary/10 rounded-xl max-w-3xl mx-auto"
      >
        <p className="text-lg text-foreground">
          Have a custom platform or flash cart format in mind?{" "}
          <a
            href="/quote"
            className="text-primary hover:underline font-semibold"
          >
            Let us talk
          </a>
        </p>
      </motion.div>
    </Section>
  );
}
