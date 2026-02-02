"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "What is the minimum order quantity (MOQ)?",
    answer:
      "Our minimum order quantity is 100 units per title. This allows us to maintain quality while keeping costs reasonable for indie developers. For special cases or multiple titles, contact us to discuss options.",
  },
  {
    question: "What does white label mean?",
    answer:
      "White label means we manufacture the product, but your branding appears on it. Your game, your name, your logo. We do not put our branding on your cartridges or packaging unless you specifically request it for attribution.",
  },
  {
    question: "How long does production take?",
    answer:
      "Typical lead time is 4-6 weeks from approved proofs to delivery. This includes PCB production, assembly, testing, and packaging. Rush orders may be available for an additional fee.",
  },
  {
    question: "Can I provide my own artwork?",
    answer:
      "Absolutely! We accept artwork in various formats (AI, PSD, PDF, PNG). Our team will review and optimize your files for print. We can also recommend designers if you need help creating assets.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship worldwide. We have experience with international shipping, customs documentation, and can help ensure your games arrive safely anywhere in the world.",
  },
  {
    question: "What if there is a defect or issue?",
    answer:
      "We stand behind our work. Every unit is tested before shipping. If you receive defective units, we will replace them at no cost. Our defect rate is under 1%, but we are committed to making it right if issues occur.",
  },
];

export function FAQPreviewSection() {
  return (
    <Section id="faq" className="bg-secondary/30">
      <SectionHeader
        subtitle="Common Questions"
        title="Frequently Asked Questions"
        description="Quick answers to the most common questions we receive."
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-lg bg-card px-6 data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="text-left font-heading text-lg font-semibold text-foreground hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mt-12"
      >
        <Link href="/faq">
          <Button variant="outline" size="lg" className="group">
            View All FAQs
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </motion.div>
    </Section>
  );
}
