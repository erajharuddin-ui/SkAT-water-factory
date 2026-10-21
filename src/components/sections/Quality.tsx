import { ShieldCheck, FlaskConical, BadgeCheck, Droplets, Wind, Beaker } from 'lucide-react';

const LAB_IMG =
  'https://images.pexels.com/photos/7298554/pexels-photo-7298554.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const STAGES = [
  {
    icon: Droplets,
    title: 'Source Pre-treatment',
    body: 'Raw water is filtered through sand and carbon to remove suspended solids, chlorine and odour.',
  },
  {
    icon: Wind,
    title: 'Reverse Osmosis',
    body: 'High-pressure RO membranes strip out dissolved salts, heavy metals and microscopic impurities.',
  },
  {
    icon: Beaker,
    title: 'UV & Ozonation',
    body: 'Ultraviolet and ozone treatment neutralise bacteria and viruses without any chemical residue.',
  },
  {
    icon: FlaskConical,
    title: 'Lab Testing',
    body: 'Every batch is tested for pH, TDS and microbial safety before it is approved for filling.',
  },
];

const BADGES = [
  'ISI-grade quality benchmarks',
  'Food-grade, BPA-free packaging',
  'Regular microbial & chemical tests',
  'Sealed, tamper-evident caps',
];

export function Quality() {
  return (
    <section id="quality" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="reveal inline-flex items-center gap-2 rounded-full bg-aqua-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-aqua-700">
              Quality & Safety
            </span>
            <h2 className="reveal mt-5 text-balance text-3xl font-extrabold text-ink-900 sm:text-4xl lg:text-[2.75rem]">
              Purity you can verify, safety you can trust
            </h2>
            <p className="reveal mt-5 text-lg leading-relaxed text-ink-600">
              Quality is not a final check — it is built into every step. Our
              multi-stage purification and in-house lab testing make certain
              that each drop meets stringent safety benchmarks before it reaches
              you.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {STAGES.map((s) => (
                <div
                  key={s.title}
                  className="reveal rounded-2xl border border-ink-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-card"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-aqua-400 to-brand-500 text-white">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-ink-900">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-aqua-100 to-brand-100 blur-xl" />
            <div className="overflow-hidden rounded-[1.75rem] border border-ink-100 shadow-card">
              <img
                src={LAB_IMG}
                alt="Laboratory water quality testing equipment"
                className="h-[460px] w-full object-cover"
              />
            </div>

            <div className="absolute -left-3 top-10 rounded-2xl border border-ink-100 bg-white p-4 shadow-card-hover sm:left-6">
              <div className="flex items-center gap-2 text-aqua-700">
                <BadgeCheck className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-wide">
                  Batch Verified
                </span>
              </div>
              <p className="mt-1.5 font-display text-2xl font-extrabold text-ink-900">
                100%
              </p>
              <p className="text-xs text-ink-500">tested before dispatch</p>
            </div>

            <div className="absolute -bottom-4 right-2 max-w-[240px] rounded-2xl border border-ink-100 bg-white p-5 shadow-card-hover sm:right-6">
              <div className="flex items-center gap-2 text-brand-700">
                <ShieldCheck className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-wide">
                  Safety Standards
                </span>
              </div>
              <ul className="mt-3 space-y-1.5">
                {BADGES.map((b) => (
                  <li key={b} className="text-xs font-medium text-ink-600">
                    • {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
