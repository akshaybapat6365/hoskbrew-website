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
  ArrowRight,
  Sparkles,
} from "lucide-react";

const mainServices = [
  {
    icon: Gamepad2,
    title: "Cartridge Production",
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
    price: "From $8/unit",
    color: "from-brand-primary/20 to-brand-primary/5",
  },
  {
    icon: Package,
    title: "Packaging & Boxes",
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
    price: "From $3/unit",
    color: "from-brand-accent/20 to-brand-accent/5",
  },
  {
    icon: FileText,
    title: "Manuals & Inserts",
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
    price: "From $1/unit",
    color: "from-purple-500/20 to-purple-500/5",
  },
  {
    icon: Tag,
    title: "Label Printing",
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
    price: "From $0.50/unit",
    color: "from-orange-500/20 to-orange-500/5",
  },
  {
    icon: CheckCircle,
    title: "QA & Testing",
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
    price: "Included",
    color: "from-green-500/20 to-green-500/5",
  },
  {
    icon: Truck,
    title: "Fulfillment",
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
    price: "Varies by destination",
    color: "from-blue-500/20 to-blue-500/5",
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32 bg-gradient-to-br from-brand-primary/5 via-background to-background">
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2344CF6C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-semibold mb-6 border border-brand-primary/20">
                <Sparkles className="h-4 w-4" />
                <span>Full-Service Manufacturing</span>
              </div>
              
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Everything You Need to{" "}
                <span className="text-brand-primary">Bring Your Game to Life</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                From concept to cartridge, we provide complete physical production services. 
                A magical blend of passion and production, delivered with care and built for play.
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
                <Link href="#services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="font-semibold text-lg px-8 h-14"
                  >
                    Explore Services
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Services */}
        <Section id="services">
          <SectionHeader
            title="Core Services"
            subtitle="What We Offer"
            description="Professional white-label manufacturing for every aspect of your physical release."
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-6 lg:gap-8"
          >
            {mainServices.map((service) => (
              <motion.div key={service.title} variants={itemVariants}>
                <Card className="h-full overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <div className={`h-1 bg-gradient-to-r ${service.color}`} />
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center group-hover:bg-brand-primary/20 transition-colors">
                        <service.icon className="h-6 w-6 text-brand-primary" />
                      </div>
                      <Badge variant="secondary" className="font-semibold">
                        {service.price}
                      </Badge>
                    </div>
                    
                    <p className="text-sm font-semibold text-brand-primary mt-4 mb-1">
                      {service.headline}
                    </p>
                    
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    
                    <CardDescription className="mt-2">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm"
                        >
                          <CheckCircle className="h-4 w-4 text-brand-primary shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Section>

        {/* Additional Services */}
        <Section withGrid className="bg-secondary/20">
          <SectionHeader
            title="Additional Services"
            subtitle="Going Further"
            description="Extras to make your release even more special."
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {additionalServices.map((service) => (
              <motion.div key={service.title} variants={itemVariants}>
                <Card className="text-center h-full hover:shadow-md transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center mx-auto">
                      <service.icon className="h-6 w-6 text-brand-primary" />
                    </div>
                    <CardTitle className="text-lg mt-4">
                      {service.title}
                    </CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Section>

        {/* CTA Section */}
        <section className="py-20 bg-brand-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Your Project?
              </h2>
              
              <p className="text-lg text-white/90 mb-8">
                Get a detailed quote within 24 hours. No commitment required.
              </p>
              
              <Link href="/quote">
                <Button
                  size="lg"
                  className="bg-white hover:bg-white/90 text-brand-primary font-semibold text-lg px-8 h-14 group"
                >
                  Request Your Free Quote
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
