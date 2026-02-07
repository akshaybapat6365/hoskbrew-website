import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Hoskbrew | Physical Game Manufacturing for Indie Developers",
  description:
    "Professional white-label game cartridge manufacturing. NES, SNES, Game Boy, Genesis & more. Low minimum orders starting at 100 units.",
  keywords: [
    "game manufacturing",
    "retro game production",
    "cartridge manufacturing",
    "indie game publishing",
    "physical game release",
    "NES cartridges",
    "SNES cartridges",
    "Game Boy cartridges",
  ],
  authors: [{ name: "Hoskbrew" }],
  openGraph: {
    title: "Hoskbrew | Physical Game Manufacturing",
    description:
      "Turn your indie game into a real cartridge. Professional manufacturing with low minimum orders.",
    type: "website",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
