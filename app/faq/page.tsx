"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Section, SectionHeader } from "@/components/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail } from "lucide-react";

const faqCategories = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "What is the minimum order quantity (MOQ)?",
        a: "Our minimum order quantity is 100 units per title. This allows us to maintain quality while keeping costs reasonable for indie developers. For special cases or multiple titles, contact us to discuss options.",
      },
      {
        q: "What does 'white label' mean?",
        a: "White label means we manufacture the product, but your branding appears on it. Your game, your name, your logo. We don't put our branding on your cartridges or packaging unless you specifically request it for attribution.",
      },
      {
        q: "Do I need to provide my own artwork?",
        a: "You can provide your own artwork, or we can connect you with designers who specialize in retro game packaging. If you provide artwork, we'll review and optimize it for print at no extra cost.",
      },
    ],
  },
  {
    category: "Production & Timeline",
    questions: [
      {
        q: "How long does production take?",
        a: "Typical lead time is 4-6 weeks from approved proofs to delivery. This includes PCB production, assembly, testing, and packaging. Rush orders may be available for an additional fee.",
      },
      {
        q: "Can I order a sample or prototype first?",
        a: "Yes! We highly recommend ordering a prototype run (usually 3-5 units) to verify everything works perfectly before committing to a full production run.",
      },
      {
        q: "What if I need to make changes after approving proofs?",
        a: "Changes after proof approval may incur additional costs and delays depending on the production stage. We'll always communicate clearly about any impacts before proceeding.",
      },
    ],
  },
  {
    category: "Shipping & Logistics",
    questions: [
      {
        q: "Do you ship internationally?",
        a: "Yes, we ship worldwide. We have experience with international shipping, customs documentation, and can help ensure your games arrive safely anywhere in the world.",
      },
      {
        q: "Can you ship directly to my customers?",
        a: "Absolutely. We offer fulfillment services where we ship directly to your customers. This is perfect for Kickstarter campaigns or direct-to-consumer sales.",
      },
      {
        q: "How are the games packaged for shipping?",
        a: "We use sturdy boxes with appropriate padding to ensure your games arrive in perfect condition. Bulk orders are palletized for protection.",
      },
    ],
  },
  {
    category: "Quality & Support",
    questions: [
      {
        q: "What if there's a defect or issue?",
        a: "We stand behind our work. Every unit is tested before shipping. If you receive defective units, we'll replace them at no cost. Our defect rate is under 1%, but we're committed to making it right if issues occur.",
      },
      {
        q: "Are your cartridges compatible with original hardware?",
        a: "Yes! Every cartridge is tested on original hardware to ensure full compatibility. We don't just test one unit—we verify that your specific ROM works correctly on actual consoles.",
      },
      {
        q: "What kind of warranty do you offer?",
        a: "We offer a 1-year warranty against manufacturing defects. This covers issues like failed saves, boot problems, or physical defects that weren't present at delivery.",
      },
    ],
  },
  {
    category: "Technical",
    questions: [
      {
        q: "What file formats do you accept?",
        a: "For ROMs: .nes, .sfc/smc, .gb, .gbc, .gba, .gen, or raw binary. For artwork: AI, PSD, PDF, PNG (300 DPI minimum). We can work with most standard formats.",
      },
      {
        q: "Can you handle special hardware features?",
        a: "Yes! We support various mappers, coprocessors, battery saves, and other special features. Contact us about your specific requirements.",
      },
      {
        q: "Do you offer flash cart options?",
        a: "We can produce flash carts for certain platforms. These are great for development or for games that receive post-release updates.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Section>
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="FAQ"
            description="Everything you need to know about working with Hoskbrew."
          />

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {faqCategories.map((category) => (
                <div key={category.category}>
                  <h2 className="text-xl font-bold mb-4">
                    {category.category}
                  </h2>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`${category.category}-${index}`}
                      >
                        <AccordionTrigger className="text-left">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Still have questions?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Can't find the answer you're looking for? Reach out to our
                    team directly.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-primary" />
                      <span>hello@hoskbrew.com</span>
                    </div>
                  </div>
                  <Link href="/quote">
                    <Button className="w-full">Contact Us</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
