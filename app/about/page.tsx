import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-foreground">
                About Us
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                HOSKBREW isn't just about making things. It's about helping
                creatives bring their homebrew and retro-inspired ideas to life.
                It's a magical blend of passion and production, delivered with
                care and built for play.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
