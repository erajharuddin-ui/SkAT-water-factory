import { Droplets, ArrowRight } from 'lucide-react';

export function CtaBand() {
  return (
    <section className="relative px-4 py-6 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-brand-700 via-brand-600 to-aqua-600 px-6 py-12 text-white shadow-glow sm:px-12 sm:py-14">
        <div className="pointer-events-none absolute inset-0 bg-water-grid [background-size:22px_22px] opacity-30" />
        <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-aqua-300/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-12 left-10 h-48 w-48 rounded-full bg-brand-300/30 blur-3xl" />

        <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/15 backdrop-blur">
              <Droplets className="h-6 w-6 text-white" />
            </span>
            <div>
              <h3 className="font-display text-2xl font-extrabold leading-tight sm:text-3xl">
                Ready to stock pure, trusted water?
              </h3>
              <p className="mt-2 max-w-xl text-sm text-ink-100/90 sm:text-base">
                Partner with SKAT Water Factory for retail, bulk and doorstep
                supply across Odisha.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-semibold text-brand-700 shadow-lg transition-transform hover:scale-[1.04]"
          >
            Contact Us
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
