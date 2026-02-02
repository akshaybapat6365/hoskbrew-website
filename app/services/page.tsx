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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Gamepad2,
  Package,
  FileText,
  Tag,
  CheckCircle,
  Truck,
  Shield,
  Zap,
  Palette,
  Camera,
} from "lucide-react";

const mainServices = [
  {
    icon: Gamepad2,
    title: "Cartridge Production",
    description:
      "Complete PCB design and manufacturing for all major retro platforms. We use high-quality components that meet or exceed original specifications.",
    features: [
      "Custom PCB layout and design",
      "EPROM/Flash programming",
      "Battery-backed saves (if needed)",
      "MMC/banked memory support",
      "100% tested on original hardware",
    ],
    price: "From $8/unit",
  },
  {
    icon: Package,
    title: "Packaging & Boxes",
    description:
      "Premium retail packaging that protects your game and showcases it beautifully. Various styles to match your game's aesthetic.",
    features: [
      "NES/SNES style boxes",
      "Sega clamshell cases",
      "Game Boy plastic cases",
      "Custom die-cut designs",
      "Spot UV and foil options",
    ],
    price: "From $3/unit",
  },
  {
    icon: FileText,
    title: "Manuals & Inserts",
    description:
      "Professional instruction manuals and promotional materials printed on high-quality paper stock.",
    features: [
      "Full-color printing",
      "Various paper weights",
      "Saddle-stitched or folded",
      "Multi-language support",
      "Custom sizes available",
    ],
    price: "From $1/unit",
  },
  {
    icon: Tag,
    title: "Label Printing",
    description:
      "High-quality cartridge labels with vibrant colors and durable finishes that stand the test of time.",
    features: [
      "Glossy or matte finish",
      "Weatherproof vinyl",
      "Scratch-resistant coating",
      "Precise die-cutting",
      "Full color CMYK",
    ],
    price: "From $0.50/unit",
  },
  {
    icon: CheckCircle,
    title: "QA & Testing",
    description:
      "Rigorous quality assurance ensures every unit works perfectly before it reaches your customers.",
    features: [
      "100% functional testing",
      "Save battery verification",
      "Visual quality inspection",
      "Packaging integrity check",
      "Compatibility verification",
    ],
    price: "Included",
  },
  {
    icon: Truck,
    title: "Fulfillment",
    description:
      "Flexible shipping options whether you want bulk delivery or direct-to-customer fulfillment.",
    features: [
      "Worldwide shipping",
      "Tracked & insured",
      "Bulk or individual",
      "Customs documentation",
      "Drop-shipping available",
    ],
    price: "Varies by destination",
  },
];

const additionalServices = [
  {
    icon: Palette,
    title: "Design Services",
    description:
      "Need help with artwork? Our design team can create labels, manuals, and packaging that captures your game's spirit.",
  },
  {
    icon: Camera,
    title: "Product Photography",
    description:
      "Professional product photos for your store or marketing materials.",
  },
  {
    icon: Shield,
    title: "Warranty Program",
    description: "Extended warranty options for your customers' peace of mind.",
  },
  {
    icon: Zap,
    title: "Rush Production",
    description:
      "Need it fast? Expedited production available for tight deadlines.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Section>
          <SectionHeader
            title="Our Services"
            subtitle="What We Offer"
            description="From concept to cartridge, we provide everything you need to bring your game to life in physical form."
          />

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {mainServices.map((service, index) => (
              <Card key={service.title} className="h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary">{service.price}</Badge>
                  </div>
                  <CardTitle className="mt-4">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm"
                      >
                        <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Section withGrid className="bg-muted/30">
          <SectionHeader
            title="Additional Services"
            subtitle="Extras"
            description="Going the extra mile to make your release special."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service) => (
              <Card key={service.title} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg mt-4">
                    {service.title}
                  </CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/quote">
              <Button size="lg">Get a Custom Quote</Button>
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
