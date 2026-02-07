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
import { CheckCircle, Cpu, Battery, Save, ArrowRight, Sparkles } from "lucide-react";

const platforms = [
  {
    name: "NES",
    fullName: "Nintendo Entertainment System",
    color: "bg-red-500",
    accent: "from-red-500/20 to-red-500/5",
    year: "1985",
    specs: {
      cpu: "Ricoh 2A03",
      memory: "2KB RAM",
      cartSize: "Up to 1MB",
      saveType: "Battery or EEPROM",
    },
    features: [
      "72-pin cartridge",
      "MMC1/3/5 mapper support",
      "Nametable mirroring",
      "4-screen VRAM options",
    ],
    moq: 100,
    leadTime: "4-6 weeks",
  },
  {
    name: "SNES",
    fullName: "Super Nintendo",
    color: "bg-purple-500",
    accent: "from-purple-500/20 to-purple-500/5",
    year: "1991",
    specs: {
      cpu: "Ricoh 5A22",
      memory: "128KB RAM",
      cartSize: "Up to 6MB",
      saveType: "Battery, EEPROM, or Flash",
    },
    features: [
      "HiROM/LoROM support",
      "SA-1 coprocessor",
      "Super FX support",
      "DSP-1 compatible",
    ],
    moq: 100,
    leadTime: "4-6 weeks",
  },
  {
    name: "Game Boy",
    fullName: "Original Game Boy",
    color: "bg-green-600",
    accent: "from-green-600/20 to-green-600/5",
    year: "1989",
    specs: {
      cpu: "Sharp LR35902",
      memory: "8KB RAM",
      cartSize: "Up to 8MB",
      saveType: "Battery or EEPROM",
    },
    features: [
      "MBC1/3/5 mapper support",
      "Rumble pak compatible",
      "Real-time clock (RTC)",
      "Original DMG format",
    ],
    moq: 100,
    leadTime: "4-6 weeks",
  },
  {
    name: "Game Boy Color",
    fullName: "Game Boy Color",
    color: "bg-yellow-500",
    accent: "from-yellow-500/20 to-yellow-500/5",
    year: "1998",
    specs: {
      cpu: "Sharp LR35902",
      memory: "32KB RAM",
      cartSize: "Up to 8MB",
      saveType: "Battery or EEPROM",
    },
    features: [
      "Full color support",
      "GBC enhanced mode",
      "MBC5 mapper",
      "Infrared port compatible",
    ],
    moq: 100,
    leadTime: "4-6 weeks",
  },
  {
    name: "Game Boy Advance",
    fullName: "Game Boy Advance",
    color: "bg-blue-500",
    accent: "from-blue-500/20 to-blue-500/5",
    year: "2001",
    specs: {
      cpu: "ARM7TDMI",
      memory: "256KB RAM",
      cartSize: "Up to 32MB",
      saveType: "EEPROM, Flash, or SRAM",
    },
    features: [
      "32-bit processing",
      "RTC support",
      "Rumble & solar sensors",
      "Accelerometer compatible",
    ],
    moq: 100,
    leadTime: "4-6 weeks",
  },
  {
    name: "Sega Genesis",
    fullName: "Sega Genesis / Mega Drive",
    color: "bg-indigo-500",
    accent: "from-indigo-500/20 to-indigo-500/5",
    year: "1989",
    specs: {
      cpu: "Motorola 68000",
      memory: "64KB RAM",
      cartSize: "Up to 32MB",
      saveType: "EEPROM or SRAM",
    },
    features: [
      "SVP (Virtua Processor)",
      "Sega CD compatible",
      "32X compatible",
      "Multi-cart options",
    ],
    moq: 100,
    leadTime: "4-6 weeks",
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

export default function PlatformsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-br from-brand-accent/5 via-background to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/10 text-brand-accent text-sm font-semibold mb-6 border border-brand-accent/20">
                <Sparkles className="h-4 w-4" />
                <span>Multi-Platform Support</span>
              </div>
              
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Your Game,{" "}
                <span className="text-brand-primary">Any Platform</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                We manufacture cartridges for all major retro gaming systems. 
                Each platform meticulously supported with accurate hardware implementation.
                <span className="text-brand-primary font-semibold"> Do not see yours? We love a challenge.</span>
              </p>
            </motion.div>
          </div>
        </section>

        {/* Platforms Grid */}
        <Section>
          <SectionHeader
            title="Supported Platforms"
            subtitle="Systems We Support"
            description="Choose your platform. We handle the technical complexity so you can focus on your game."
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {platforms.map((platform) => (
              <motion.div key={platform.name} variants={itemVariants}>
                <Card className="h-full overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <div className={`h-1 bg-gradient-to-r ${platform.accent}`} />
                  
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-14 h-14 ${platform.color} rounded-xl opacity-20 group-hover:opacity-30 transition-opacity`} />
                        <div>
                          <div className="flex items-center gap-2">
                            <CardTitle className="text-2xl">{platform.name}</CardTitle>
                            <span className="text-xs text-muted-foreground font-mono">({platform.year})</span>
                          </div>
                          <CardDescription>{platform.fullName}</CardDescription>
                        </div>
                      </div>
                      <Badge variant="outline" className="shrink-0">MOQ: {platform.moq}</Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="bg-secondary/50 rounded-lg p-2">
                        <div className="flex items-center gap-1 text-muted-foreground mb-1">
                          <Cpu className="h-3 w-3" />
                          <span className="text-xs">CPU</span>
                        </div>
                        <span className="font-medium text-sm">{platform.specs.cpu}</span>
                      </div>
                      
                      <div className="bg-secondary/50 rounded-lg p-2">
                        <div className="flex items-center gap-1 text-muted-foreground mb-1">
                          <Battery className="h-3 w-3" />
                          <span className="text-xs">Memory</span>
                        </div>
                        <span className="font-medium text-sm">{platform.specs.memory}</span>
                      </div>
                      
                      <div className="bg-secondary/50 rounded-lg p-2">
                        <div className="flex items-center gap-1 text-muted-foreground mb-1">
                          <Save className="h-3 w-3" />
                          <span className="text-xs">Save Type</span>
                        </div>
                        <span className="font-medium text-sm">{platform.specs.saveType}</span>
                      </div>
                      
                      <div className="bg-secondary/50 rounded-lg p-2">
                        <div className="flex items-center gap-1 text-muted-foreground mb-1">
                          <CheckCircle className="h-3 w-3" />
                          <span className="text-xs">Lead Time</span>
                        </div>
                        <span className="font-medium text-sm">{platform.leadTime}</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <h4 className="text-sm font-semibold mb-2">Key Features</h4>
                      <ul className="space-y-1">
                        {platform.features.map((feature) => (
                          <li
                            key={feature}
                            className="text-sm text-muted-foreground flex items-center gap-2"
                          >
                            <div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Do not See Your Platform?
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                We can support additional systems and custom formats. Contact us to discuss 
                your specific requirements—we love a challenge!
              </p>
              
              <Link href="/quote">
                <Button
                  size="lg"
                  className="bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold text-lg px-8 h-14 group"
                >
                  Contact Us
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
