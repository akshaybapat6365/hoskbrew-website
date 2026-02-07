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
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  MessageSquare,
  Palette,
  Cog,
  CheckCircle,
  Package,
  Truck,
  HeartHandshake,
  Clock,
  Zap,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const processSteps = [
  {
    icon: MessageSquare,
    title: "Initial Consultation",
    description:
      "Start by requesting a quote. We will discuss your project requirements, platform, quantity, and timeline.",
    duration: "1-2 days",
    details: [
      "Platform and technical requirements review",
      "Packaging and design preferences",
      "Budget and timeline discussion",
      "Detailed quote provided",
    ],
  },
  {
    icon: Palette,
    title: "Design & Asset Preparation",
    description:
      "Work with our design team or provide your own assets. We will optimize everything for print and production.",
    duration: "1-2 weeks",
    details: [
      "Label artwork review and optimization",
      "Manual and insert layout",
      "Packaging dieline setup",
      "Digital proof approval",
    ],
  },
  {
    icon: Cog,
    title: "Production Begins",
    description:
      "Once designs are approved, we begin manufacturing your cartridges and packaging.",
    duration: "2-3 weeks",
    details: [
      "PCB fabrication and assembly",
      "EPROM/Flash programming",
      "Label printing and application",
      "Packaging production",
    ],
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description:
      "Every single unit undergoes rigorous testing before it leaves our facility.",
    duration: "3-5 days",
    details: [
      "100% functional testing on original hardware",
      "Save functionality verification",
      "Visual quality inspection",
      "Packaging integrity check",
    ],
  },
  {
    icon: Package,
    title: "Final Assembly",
    description:
      "Cartridges are assembled into their final packaging and prepared for shipment.",
    duration: "2-3 days",
    details: [
      "Cartridge insertion into boxes/cases",
      "Manual and insert inclusion",
      "Protective wrapping",
      "Final quality check",
    ],
  },
  {
    icon: Truck,
    title: "Shipping & Delivery",
    description:
      "Your games are carefully packed and shipped to you or directly to your customers.",
    duration: "Varies",
    details: [
      "Secure packaging for transit",
      "Tracking number provided",
      "Customs documentation (international)",
      "Delivery confirmation",
    ],
  },
];

const timelineInfo = [
  {
    icon: Clock,
    title: "Standard Timeline",
    description: "4-6 weeks from approved proofs to delivery",
  },
  {
    icon: Zap,
    title: "Rush Orders",
    description: "2-3 weeks available for an additional fee",
  },
  {
    icon: HeartHandshake,
    title: "Reorders",
    description: "2-3 weeks (artwork already on file)",
  },
];

export default function ProcessPage() {
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
                <span>Transparent Process</span>
              </div>
              
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                From{" "}
                <span className="text-brand-primary">ROM to Retail</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                A streamlined, transparent process designed to get your game from digital files 
                to physical cartridges with minimal hassle. We handle the complexity so you can focus on your game.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Process Timeline */}
        <Section>
          <SectionHeader
            title="Our Process"
            subtitle="How We Work"
            description="Six steps from concept to delivery. Every stage designed with quality and transparency in mind."
          />

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-8 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-primary via-brand-accent to-brand-primary/30 hidden md:block" />

            <div className="space-y-8">
              {processSteps.map((step, index) => (
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
                  <Card className={`md:ml-20 ${index % 2 === 0 ? 'lg:ml-0 lg:mr-12' : 'lg:ml-12 lg:mr-0'}`}>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-bold text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full">
                          Step {index + 1}
                        </span>
                        <span className="text-sm text-muted-foreground">• {step.duration}</span>
                      </div>
                      
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                      <CardDescription>{step.description}</CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {step.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Timeline Info */}
        <Section withGrid className="bg-secondary/20">
          <div className="grid md:grid-cols-3 gap-6">
            {timelineInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center mx-auto">
                      <info.icon className="h-6 w-6 text-brand-primary" />
                    </div>
                    <CardTitle className="text-lg mt-4">{info.title}</CardTitle>
                    <CardDescription>{info.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-12"
          >
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            
            <Link href="/quote">
              <Button
                size="lg"
                className="bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold text-lg px-8 h-14 group"
              >
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
