"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const platforms = [
  {
    name: "NES",
    fullName: "Nintendo Entertainment System",
    year: "1985",
    specs: {
      cpu: "Ricoh 2A03",
      memory: "2KB RAM",
      saveType: "Battery or EEPROM",
      leadTime: "4-6 weeks",
    },
    features: [
      "72-pin cartridge",
      "MMC1/3/5 mapper support",
      "Nametable mirroring",
      "4-screen VRAM options",
    ],
    moq: 100,
  },
  {
    name: "SNES",
    fullName: "Super Nintendo",
    year: "1991",
    specs: {
      cpu: "Ricoh 5A22",
      memory: "128KB RAM",
      saveType: "Battery, EEPROM, or Flash",
      leadTime: "4-6 weeks",
    },
    features: [
      "HiROM/LoROM support",
      "SA-1 coprocessor",
      "Super FX support",
      "DSP-1 compatible",
    ],
    moq: 100,
  },
  {
    name: "Game Boy",
    fullName: "Original Game Boy",
    year: "1989",
    specs: {
      cpu: "Sharp LR35902",
      memory: "8KB RAM",
      saveType: "Battery or EEPROM",
      leadTime: "4-6 weeks",
    },
    features: [
      "MBC1/3/5 mapper support",
      "Rumble pak compatible",
      "Real-time clock (RTC)",
      "Original DMG format",
    ],
    moq: 100,
  },
  {
    name: "Game Boy Color",
    fullName: "Game Boy Color",
    year: "1998",
    specs: {
      cpu: "Sharp LR35902",
      memory: "32KB RAM",
      saveType: "Battery or EEPROM",
      leadTime: "4-6 weeks",
    },
    features: [
      "Full color support",
      "GBC enhanced mode",
      "MBC5 mapper",
      "Infrared port compatible",
    ],
    moq: 100,
  },
  {
    name: "Game Boy Advance",
    fullName: "Game Boy Advance",
    year: "2001",
    specs: {
      cpu: "ARM7TDMI",
      memory: "256KB RAM",
      saveType: "EEPROM, Flash, or SRAM",
      leadTime: "4-6 weeks",
    },
    features: [
      "32-bit processing",
      "RTC support",
      "Rumble & solar sensors",
      "Accelerometer compatible",
    ],
    moq: 100,
  },
  {
    name: "Sega Genesis",
    fullName: "Sega Genesis / Mega Drive",
    year: "1989",
    specs: {
      cpu: "Motorola 68000",
      memory: "64KB RAM",
      saveType: "EEPROM or SRAM",
      leadTime: "4-6 weeks",
    },
    features: [
      "SVP (Virtua Processor)",
      "Sega CD compatible",
      "32X compatible",
      "Multi-cart options",
    ],
    moq: 100,
  },
];

export default function PlatformsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0f1a]">
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold mb-6 border border-blue-500/20">
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
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 01-2 2v4a2 2 0 012 2h14a2 2 0 012-2v-4a2 2 0 01-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
                <span>Multi-Platform Support</span>
              </div>

              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Your Game,{" "}
                <span className="text-brand-primary">Any Platform</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 mb-2 leading-relaxed">
                We manufacture cartridges for all major retro gaming systems.
                Each platform meticulously supported with accurate hardware
                implementation.
              </p>
              <p className="text-brand-primary font-semibold text-lg">
                Do not see yours? We love a challenge.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wide uppercase rounded-full bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
                Systems We Support
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
                Supported Platforms
              </h2>
              <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
                Choose your platform. We handle the technical complexity so you
                can focus on your game.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platforms.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#11192c] rounded-xl border border-slate-800 overflow-hidden hover:border-brand-primary/30 transition-all"
                >
                  <div className="h-1 bg-gradient-to-r from-brand-primary/50 to-brand-primary/20" />

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-heading text-2xl font-bold text-white">
                            {platform.name}
                          </h3>
                          <span className="text-sm text-slate-500">
                            ({platform.year})
                          </span>
                        </div>
                        <p className="text-slate-400 text-sm">
                          {platform.fullName}
                        </p>
                      </div>
                      <span className="px-2 py-1 text-xs font-semibold rounded border border-slate-700 text-slate-300">
                        MOQ: {platform.moq}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-[#0a0f1a] rounded-lg p-3">
                        <div className="text-xs text-slate-500 mb-1 flex items-center gap-1">
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                            />
                          </svg>
                          CPU
                        </div>
                        <div className="text-sm font-medium text-slate-200">
                          {platform.specs.cpu}
                        </div>
                      </div>

                      <div className="bg-[#0a0f1a] rounded-lg p-3">
                        <div className="text-xs text-slate-500 mb-1 flex items-center gap-1">
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                            />
                          </svg>
                          Memory
                        </div>
                        <div className="text-sm font-medium text-slate-200">
                          {platform.specs.memory}
                        </div>
                      </div>

                      <div className="bg-[#0a0f1a] rounded-lg p-3">
                        <div className="text-xs text-slate-500 mb-1 flex items-center gap-1">
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                            />
                          </svg>
                          Save Type
                        </div>
                        <div className="text-sm font-medium text-slate-200">
                          {platform.specs.saveType}
                        </div>
                      </div>

                      <div className="bg-[#0a0f1a] rounded-lg p-3">
                        <div className="text-xs text-slate-500 mb-1 flex items-center gap-1">
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          Lead Time
                        </div>
                        <div className="text-sm font-medium text-slate-200">
                          {platform.specs.leadTime}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-800">
                      <h4 className="text-sm font-semibold text-slate-300 mb-2">
                        Key Features
                      </h4>
                      <ul className="space-y-1">
                        {platform.features.map((feature) => (
                          <li
                            key={feature}
                            className="text-sm text-slate-400 flex items-center gap-2"
                          >
                            <div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
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
