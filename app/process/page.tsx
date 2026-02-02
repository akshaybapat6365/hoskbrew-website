"use client";

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
} from "lucide-react";

const processSteps = [
  {
    icon: MessageSquare,
    title: "Initial Consultation",
    description:
      "Start by requesting a quote. We'll discuss your project requirements, platform, quantity, and timeline.",
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
      "Work with our design team or provide your own assets. We'll optimize everything for print and production.",
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
        <Section>
          <SectionHeader
            title="Our Process"
            subtitle="How We Work"
            description="A streamlined, transparent process designed to get your game from digital files to physical cartridges with minimal hassle."
          />

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={step.title} className="relative md:pl-24">
                  <div className="hidden md:flex absolute left-0 w-16 h-16 rounded-full bg-primary items-center justify-center">
                    <step.icon className="h-6 w-6 text-primary-foreground" />
                  </div>

                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <div className="md:hidden w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                            <step.icon className="h-5 w-5 text-primary-foreground" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-mono text-primary">
                                Step {index + 1}
                              </span>
                              <span className="text-sm text-muted-foreground">
                                • {step.duration}
                              </span>
                            </div>
                            <CardTitle className="text-xl mt-1">
                              {step.title}
                            </CardTitle>
                          </div>
                        </div>
                      </div>
                      <CardDescription className="mt-2">
                        {step.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {step.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section withGrid className="bg-muted/30">
          <div className="grid md:grid-cols-3 gap-6">
            {timelineInfo.map((info) => (
              <Card key={info.title} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg mt-4">{info.title}</CardTitle>
                  <CardDescription>{info.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <h3 className="text-xl font-bold mb-4">Ready to Start?</h3>
            <Link href="/quote">
              <Button size="lg">Request a Quote</Button>
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
