"use client";

import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Section, SectionHeader } from "@/components/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Wrench, Users, Globe } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Made with Care",
    description:
      "Every cartridge is assembled and tested by hand. We treat your game like it's our own.",
  },
  {
    icon: Wrench,
    title: "Technical Excellence",
    description:
      "Deep understanding of retro hardware ensures your game works perfectly on original consoles.",
  },
  {
    icon: Users,
    title: "Developer First",
    description:
      "We're indie developers too. We understand the challenges and joys of bringing games to life.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "We ship games worldwide. Your audience is global, and so are we.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Section>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wide uppercase rounded-full bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Makers, Builders,{" "}
              <span className="text-brand-primary">Gamers</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              HoskBrew was born from a simple belief: indie developers deserve
              the same quality physical releases as the big publishers. We are a
              small team with deep roots in the retro gaming community,
              passionate about helping creators bring their games to life in
              physical form.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 rounded-2xl" />
              <div className="absolute inset-4 bg-card border border-border rounded-xl flex items-center justify-center overflow-hidden">
                <Image
                  src="/octopus/octopus-color.png"
                  alt="HoskBrew Octopus Mascot"
                  width={300}
                  height={300}
                  className="w-48 h-48 object-contain"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                What started as a personal project to produce a few cartridges
                for friends quickly grew into something bigger. We saw a gap in
                the market: small indie developers wanted physical releases but
                were shut out by high minimum orders and impersonal service.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                So we built HoskBrew to be different. Lower minimums. Personal
                service. Obsessive quality. We handle every project with the
                care it deserves, whether it&apos;s someone&apos;s first game or
                their tenth.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A magical blend of passion and production, delivered with care
                and built for play. We craft, print, and forge what&apos;s
                missing — then make it yours.
              </p>
            </div>
          </div>
        </Section>

        <Section withGrid className="bg-muted/30">
          <SectionHeader
            title="Our Values"
            subtitle="What We Believe"
            description="The principles that guide everything we do."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-brand-primary" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Section>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <p className="text-muted-foreground mb-8">
              Have questions? Want to discuss a project? We&apos;d love to hear
              from you.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto">
              <Card>
                <CardContent className="pt-6 text-center">
                  <p className="font-semibold mb-1">Email</p>
                  <p className="text-sm text-muted-foreground">
                    hello@hoskbrew.com
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <p className="font-semibold mb-1">Response Time</p>
                  <p className="text-sm text-muted-foreground">
                    Within 24 hours
                  </p>
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
