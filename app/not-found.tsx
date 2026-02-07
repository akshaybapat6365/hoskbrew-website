import { ArrowLeft } from "lucide-react";

/**
 * Custom 404 page with HoskBrew octopus branding.
 *
 * IMPORTANT: This is a Server Component with NO client-side dependencies.
 * Uses pure CSS animations instead of framer-motion because:
 * - Static export (output: "export") may not hydrate 404 pages
 * - framer-motion's initial={{ opacity: 0 }} renders invisible server HTML
 * - CSS @keyframes work without JS hydration
 */
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md animate-[fadeInUp_0.6s_ease-out_both]">
        <div className="mb-8 animate-[fadeInDown_0.6s_ease-out_both]">
          <div className="animate-[float_4s_ease-in-out_infinite]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/octopus/octopus-color.png"
              alt="HoskBrew Octopus - Page Not Found"
              width={200}
              height={200}
              className="w-40 h-40 mx-auto object-contain"
            />
          </div>
        </div>

        <div className="animate-[fadeInUp_0.6s_ease-out_0.3s_both]">
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
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold px-6 py-3 text-base transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
