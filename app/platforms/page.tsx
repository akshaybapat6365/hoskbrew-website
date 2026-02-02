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
import { CheckCircle, Cpu, Battery, Save } from "lucide-react";

const platforms = [
  {
    name: "NES",
    fullName: "Nintendo Entertainment System",
    color: "bg-red-500",
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

export default function PlatformsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Section>
          <SectionHeader
            title="Supported Platforms"
            subtitle="Systems We Support"
            description="We manufacture cartridges for all major retro gaming platforms. Each system is meticulously supported with accurate hardware implementation."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform) => (
              <Card key={platform.name} className="h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div
                      className={`w-16 h-20 ${platform.color} rounded opacity-20`}
                    />
                    <div className="flex gap-2">
                      <Badge variant="outline">MOQ: {platform.moq}</Badge>
                    </div>
                  </div>
                  <div className="mt-4">
                    <CardTitle className="text-2xl">{platform.name}</CardTitle>
                    <CardDescription>{platform.fullName}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="flex items-center gap-1 text-muted-foreground mb-1">
                        <Cpu className="h-3 w-3" />
                        <span>CPU</span>
                      </div>
                      <span className="font-medium">{platform.specs.cpu}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-muted-foreground mb-1">
                        <Battery className="h-3 w-3" />
                        <span>Memory</span>
                      </div>
                      <span className="font-medium">
                        {platform.specs.memory}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-muted-foreground mb-1">
                        <Save className="h-3 w-3" />
                        <span>Save Type</span>
                      </div>
                      <span className="font-medium">
                        {platform.specs.saveType}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-muted-foreground mb-1">
                        <CheckCircle className="h-3 w-3" />
                        <span>Lead Time</span>
                      </div>
                      <span className="font-medium">{platform.leadTime}</span>
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
                          <div className="w-1 h-1 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Section withGrid className="bg-muted/30">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              Don't See Your Platform?
            </h2>
            <p className="text-muted-foreground mb-6">
              We can support additional systems and custom formats. Contact us
              to discuss your specific requirements—we love a challenge!
            </p>
            <Link href="/quote">
              <Button size="lg">Contact Us</Button>
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
