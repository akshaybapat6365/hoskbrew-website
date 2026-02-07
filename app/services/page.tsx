"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Cartridge Production",
    price: "From $8/unit",
    headline: "Homebrews for real hardware",
    description:
      "Complete PCB design and manufacturing for all major retro platforms. We use high-quality components that meet or exceed original specifications.",
    features: [
      "Custom PCB layout and design",
      "EPROM/Flash programming",
      "Battery-backed saves (if needed)",
      "MMC/banked memory support",
      "100% tested on original hardware",
    ],
  },
  {
    title: "Packaging & Boxes",
    price: "From $3/unit",
    headline: "Dream project with no vessel?",
    description:
      "Premium retail packaging that protects your game and showcases it beautifully. We craft, print, and forge what is missing, then make it yours.",
    features: [
      "NES/SNES style boxes",
      "Sega clamshell cases",
      "Game Boy plastic cases",
      "Custom die-cut designs",
      "Spot UV and foil options",
    ],
  },
  {
    title: "Manuals & Inserts",
    price: "From $1/unit",
    headline: "Complete the experience",
    description:
      "Professional instruction manuals and promotional materials printed on high-quality paper stock. The finishing touch your game deserves.",
    features: [
      "Full-color printing",
      "Various paper weights",
      "Saddle-stitched or folded",
      "Multi-language support",
      "Custom sizes available",
    ],
  },
  {
    title: "Label Printing",
    price: "From $0.50/unit",
    headline: "Premium presentation",
    description:
      "High-quality cartridge labels with vibrant colors and durable finishes that stand the test of time. Weatherproof and fade-resistant.",
    features: [
      "Glossy or matte finish",
      "Weatherproof vinyl",
      "Scratch-resistant coating",
      "Precise die-cutting",
      "Full color CMYK",
    ],
  },
  {
    title: "QA & Testing",
    price: "Included",
    headline: "Built to last",
    description:
      "Rigorous quality assurance ensures every unit works perfectly before it reaches your customers. Premium quality, guaranteed.",
    features: [
      "100% functional testing",
      "Save battery verification",
      "Visual quality inspection",
      "Packaging integrity check",
      "Compatibility verification",
    ],
  },
  {
    title: "Fulfillment",
    price: "Varies by destination",
    headline: "Delivered with care",
    description:
      "Flexible shipping options whether you want bulk delivery or direct-to-customer fulfillment. Worldwide delivery with tracking.",
    features: [
      "Worldwide shipping",
      "Tracked & insured",
      "Bulk or individual",
      "Customs documentation",
      "Drop-shipping available",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-br from-brand-primary/5 via-background to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-semibold mb-6 border border-brand-primary/20">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
                <span>Full-Service Manufacturing</span>
              </div>

              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Everything You Need to{" "}
                <span className="text-brand-primary">
                  Bring Your Game to Life
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                From concept to cartridge, we provide complete physical
                production services. A magical blend of passion and production,
                delivered with care and built for play.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/quote">
                  <Button
                    size="lg"
                    className="bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold text-lg px-8 h-14 group"
                  >
                    Get Your Free Quote
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="font-semibold text-lg px-8 h-14"
                >
                  Explore Services
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wide uppercase rounded-full bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
                What We Offer
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Core Services
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Professional white-label manufacturing for every aspect of your
                physical release.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-12">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6 pb-12 border-b border-border last:border-0">
                    <div className="md:w-48 shrink-0">
                      <div className="text-3xl font-bold text-brand-primary mb-1">
                        {service.price}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {service.title}
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="font-heading text-xl font-semibold text-brand-primary mb-2">
                        {service.headline}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {service.description}
                      </p>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <svg
                              className="h-4 w-4 text-brand-primary shrink-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
