import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function QuotePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-foreground">
                Get Quote
              </h1>
              <div className="space-y-3 text-lg text-muted-foreground">
                <p>hello@hoskbrew.com</p>
                <p>Worldwide Shipping</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
