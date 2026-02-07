"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 3, -3, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/octopus/octopus-color.png"
              alt="HoskBrew Octopus - Page Not Found"
              width={200}
              height={200}
              className="w-40 h-40 mx-auto object-contain"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h1 className="font-heading text-6xl font-bold text-brand-primary mb-4">
            404
          </h1>
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground mb-8">
            Looks like this cartridge wasn&apos;t in our inventory. Let&apos;s
            get you back to solid ground.
          </p>
          <Link href="/">
            <Button
              size="lg"
              className="bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
