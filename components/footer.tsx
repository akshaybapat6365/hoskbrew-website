import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const footerLinks = {
  services: [
    { label: "Cartridge Production", href: "/services" },
    { label: "Packaging & Boxes", href: "/packaging" },
    { label: "Manuals & Inserts", href: "/services" },
    { label: "Label Printing", href: "/services" },
  ],
  platforms: [
    { label: "NES & Famicom", href: "/platforms" },
    { label: "SNES", href: "/platforms" },
    { label: "Game Boy / Color", href: "/platforms" },
    { label: "Sega Genesis", href: "/platforms" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Process", href: "/process" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "FAQ", href: "/faq" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="relative h-16 w-48">
                <Image
                  src="/logo.svg"
                  alt="Hoskbrew"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-6 max-w-sm">
              Professional white-label physical game manufacturing for indie
              developers. Turn your digital game into a tangible collectible.
            </p>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@hoskbrew.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Worldwide Shipping</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">
              Platforms
            </h4>
            <ul className="space-y-2">
              {footerLinks.platforms.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Hoskbrew. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/quote">
              <Button variant="outline" size="sm">
                Request Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
