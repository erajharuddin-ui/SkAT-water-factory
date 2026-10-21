import { Droplets, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { Logo } from '@/components/Logo';

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'products', label: 'Products' },
  { id: 'quality', label: 'Quality & Safety' },
  { id: 'manufacturing', label: 'Manufacturing' },
  { id: 'distribution', label: 'Distribution' },
  { id: 'contact', label: 'Contact' },
];

const EMAIL = 'skatfoodsfactory@gmail.com';
const PHONE_KSA = '+966510196892';
const PHONE_INDIA = '+918144277473';

export function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative overflow-hidden bg-ink-950 text-ink-200">
      <div className="pointer-events-none absolute inset-0 bg-water-grid [background-size:22px_22px] opacity-20" />
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 py-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white/5 p-2 ring-1 ring-white/10">
              <Logo className="brightness-0 invert" />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-300">
              SKAT Water Factory Pvt. Ltd. — pure, safe and refreshing packaged
              drinking water from our proposed facility in Kendrapara, Odisha.
            </p>

            <div className="mt-6 flex items-center gap-2 rounded-xl bg-white/5 px-4 py-3 text-sm text-ink-200 ring-1 ring-white/10">
              <Droplets className="h-4 w-4 text-aqua-300" />
              Every drop, bottled with trust.
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-white">
              Explore
            </h4>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((n) => (
                <li key={n.id}>
                  <button
                    onClick={() => scrollTo(n.id)}
                    className="text-sm text-ink-300 transition-colors hover:text-aqua-300"
                  >
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-white">
              Get in touch
            </h4>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 text-sm text-ink-300 transition-colors hover:text-aqua-300"
                >
                  <Mail className="h-4 w-4 text-aqua-300" />
                  {EMAIL}
                </a>
              </li>
              <li className="space-y-2">
                <a
                  href={`tel:${PHONE_KSA}`}
                  className="flex items-center gap-3 text-sm text-ink-300 transition-colors hover:text-aqua-300"
                >
                  <Phone className="h-4 w-4 text-aqua-300" />
                  {PHONE_KSA} <span className="text-ink-500">(KSA)</span>
                </a>
                <a
                  href={`tel:${PHONE_INDIA}`}
                  className="flex items-center gap-3 text-sm text-ink-300 transition-colors hover:text-aqua-300"
                >
                  <Phone className="h-4 w-4 text-aqua-300" />
                  {PHONE_INDIA} <span className="text-ink-500">(India)</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-ink-300">
                <MapPin className="h-4 w-4 text-aqua-300" />
                Kendrapara, Odisha, India
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 sm:flex-row">
          <p className="text-xs text-ink-400">
            © {new Date().getFullYear()} SKAT Water Factory Pvt. Ltd. All rights
            reserved.
          </p>
          <button
            onClick={() => scrollTo('home')}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-ink-200 transition-colors hover:bg-white/10"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
