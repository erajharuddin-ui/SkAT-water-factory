import { Droplets, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

const SPLASH_IMG =
  'https://images.pexels.com/photos/1535086/pexels-photo-1535086.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const DROPLET_IMG =
  'https://images.pexels.com/photos/8349867/pexels-photo-8349867.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-ink-950 via-brand-950 to-brand-900 pt-28 pb-24 text-white lg:pt-36 lg:pb-32"
    >
      {/* Background visuals */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-brand-500/30 blur-3xl" />
        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-aqua-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl" />
        <img
          src={SPLASH_IMG}
          alt=""
          className="absolute right-0 top-0 hidden h-full w-1/2 object-cover opacity-20 mix-blend-screen lg:block"
        />
        <div className="absolute inset-0 bg-water-grid [background-size:22px_22px] opacity-40" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-7">
          <span className="reveal inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-aqua-200 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Proposed Facility · Kendrapara, Odisha
          </span>

          <h1 className="reveal mt-6 max-w-2xl text-balance text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            Pure Water,
            <br />
            <span className="text-gradient bg-gradient-to-r from-aqua-300 via-brand-300 to-aqua-200">
              Bottled with Trust
            </span>
          </h1>

          <p className="reveal mt-6 max-w-xl text-lg leading-relaxed text-ink-100/90">
            SKAT Water Factory Pvt. Ltd. brings meticulously purified packaged
            drinking water to every home and business — from a sip to a
            20-litre jar, crafted with uncompromising quality standards.
          </p>

          <div className="reveal mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#products"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-aqua-400 px-6 py-3.5 text-base font-semibold text-ink-950 shadow-glow transition-transform hover:scale-[1.04]"
            >
              Explore Products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Our Story
            </a>
          </div>

          <dl className="reveal mt-12 grid max-w-lg grid-cols-3 gap-4">
            {[
              { v: '4', l: 'Pack Sizes' },
              { v: '100%', l: 'Safe & Pure' },
              { v: '24/7', l: 'Supply Ready' },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
              >
                <dt className="font-display text-3xl font-extrabold text-white">
                  {s.v}
                </dt>
                <dd className="mt-1 text-xs font-medium uppercase tracking-wide text-aqua-200">
                  {s.l}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="reveal lg:col-span-5">
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-aqua-400/40 to-brand-500/40 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/20 shadow-2xl">
              <img
                src={DROPLET_IMG}
                alt="A pure water droplet creating a splash"
                className="h-[420px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl border border-white/15 bg-ink-950/60 p-4 backdrop-blur">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-aqua-400">
                  <Droplets className="h-5 w-5 text-white" />
                </span>
                <div>
                  <p className="font-display text-sm font-bold text-white">
                    Multi-stage Purification
                  </p>
                  <p className="text-xs text-ink-200">
                    RO · UV · Ozonation
                  </p>
                </div>
                <ShieldCheck className="ml-auto h-6 w-6 text-aqua-300" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 leading-none">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="h-16 w-full sm:h-24"
          aria-hidden="true"
        >
          <path
            fill="#f4f8fc"
            d="M0,64 C240,120 480,8 720,40 C960,72 1200,128 1440,72 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
    </section>
  );
}
