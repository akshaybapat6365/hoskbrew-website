import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Logo } from "@/components/logo";

const footerLinks = {
  services: [
    { label: "Cartridge Production", href: "/services" },
    { label: "Packaging & Boxes", href: "/services" },
    { label: "Manuals & Inserts", href: "/services" },
    { label: "Label Printing", href: "/services" },
  ],
  products: [
    { label: "Crystal Mines", href: "/products/crystal-mines" },
    { label: "HoskBrew Services", href: "/products/hoskbrew" },
    { label: "All Productions", href: "/portfolio" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Process", href: "/process" },
    { label: "FAQ", href: "/faq" },
    { label: "Get a Quote", href: "/quote" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Logo variant="full" asLink={false} />
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
                <MapPin className="h-4 w-4 text-primary" />
                <span>Worldwide Shipping</span>
              </div>
              <div className="mt-4">
                <Image
                  src="/octopus/octopus-color.png"
                  alt="HoskBrew Octopus"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
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
              Products
            </h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
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
