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

const caseStudies = [
  {
    title: "Cosmic Explorer",
    developer: "Stellar Soft",
    platform: "Game Boy Color",
    problem:
      "Developer needed a physical release for Kickstarter backers with limited budget.",
    solution:
      "100-unit run with custom labels, simple boxes, and printed manuals.",
    runSize: "100 units",
    deliverables: [
      "Cartridges",
      "Custom labels",
      "Folded boxes",
      "Instruction manuals",
    ],
    testimonial:
      "Hoskbrew made the process incredibly smooth. The quality exceeded expectations.",
  },
  {
    title: "Dungeon Delver",
    developer: "Pixel Forge",
    platform: "NES",
    problem: "Complex mapper requirements and battery-backed saves needed.",
    solution:
      "Custom PCB with MMC3 mapper, battery save support, and premium CIB packaging.",
    runSize: "500 units",
    deliverables: [
      "Custom PCBs",
      "Premium boxes",
      "Full-color manuals",
      "Map inserts",
      "Stickers",
    ],
    testimonial:
      "The technical expertise was impressive. Everything works perfectly on real hardware.",
  },
  {
    title: "Cyber Ninjas",
    developer: "Neon Games",
    platform: "Sega Genesis",
    problem: "Tight deadline for convention debut with multiple SKUs needed.",
    solution: "Rush production with standard and limited editions.",
    runSize: "250 + 50 LE",
    deliverables: [
      "Cartridges",
      "Standard & LE boxes",
      "Manuals",
      "Art cards",
      "Patches",
    ],
    testimonial:
      "They delivered on time for our convention. The rush service was a lifesaver.",
  },
];

const galleryItems = [
  { title: "NES Cartridge Close-up", platform: "NES", type: "Macro" },
  { title: "Game Boy Box Set", platform: "Game Boy", type: "Product" },
  { title: "Genesis Collection", platform: "Sega Genesis", type: "Collection" },
  { title: "SNES Label Detail", platform: "SNES", type: "Macro" },
  { title: "GBC Color Lineup", platform: "Game Boy Color", type: "Collection" },
  { title: "Manual Interior", platform: "Multi", type: "Detail" },
  { title: "Box Protectors", platform: "Multi", type: "Accessories" },
  { title: "Cartridge Labels", platform: "Multi", type: "Detail" },
  { title: "Full CIB Set", platform: "NES", type: "Product" },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Section>
          <SectionHeader
            title="Portfolio"
            subtitle="Our Work"
            description="Quality craftsmanship on every project. Browse our past productions and case studies."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
            {galleryItems.map((item, index) => (
              <div
                key={item.title}
                className={`group relative overflow-hidden rounded-xl aspect-square cursor-pointer ${
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 group-hover:opacity-30 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className={`${index === 0 ? "w-32 h-40" : "w-20 h-24"} bg-primary/30 rounded`}
                  />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3
                    className={`font-bold text-white ${index === 0 ? "text-2xl" : "text-lg"}`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-white/80 ${index === 0 ? "text-base" : "text-sm"}`}
                  >
                    {item.platform} • {item.type}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section withGrid className="bg-muted/30">
          <SectionHeader
            title="Case Studies"
            subtitle="Success Stories"
            description="Real projects, real challenges, real solutions."
          />

          <div className="grid lg:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <Card key={study.title} className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge>{study.platform}</Badge>
                    <span className="text-sm text-muted-foreground">
                      {study.runSize}
                    </span>
                  </div>
                  <CardTitle>{study.title}</CardTitle>
                  <CardDescription>by {study.developer}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-1">Challenge</h4>
                    <p className="text-sm text-muted-foreground">
                      {study.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-1">Solution</h4>
                    <p className="text-sm text-muted-foreground">
                      {study.solution}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Deliverables</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.deliverables.map((item) => (
                        <span
                          key={item}
                          className="text-xs px-2 py-1 bg-muted rounded-full"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <blockquote className="border-l-2 border-primary pl-4 italic text-sm text-muted-foreground">
                    "{study.testimonial}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
