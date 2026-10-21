import { Factory, Cog, PackageCheck, Recycle, Gauge, Layers } from 'lucide-react';

const PLANT_IMG =
  'https://images.pexels.com/photos/4741906/pexels-photo-4741906.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const STEPS = [
  {
    n: '01',
    title: 'Automated Filling',
    body: 'Closed-loop, touch-free filling lines eliminate human contact and keep every bottle sterile.',
  },
  {
    n: '02',
    title: 'In-line Inspection',
    body: 'Sensors check fill level, cap torque and seal integrity on every unit before it moves on.',
  },
  {
    n: '03',
    title: 'Batch Coding',
    body: 'Each pack is marked with a manufacturing date, batch ID and best-before for full traceability.',
  },
  {
    n: '04',
    title: 'Palletised Dispatch',
    body: 'Finished goods are shrink-wrapped and staged in a clean dispatch area for scheduled delivery.',
  },
];

const SPECS = [
  { icon: Cog, label: 'Modern automated lines' },
  { icon: Gauge, label: 'Controlled fill accuracy' },
  { icon: Recycle, label: 'Eco-conscious packaging' },
  { icon: Layers, label: 'Scalable capacity' },
];

export function Manufacturing() {
  return (
    <section
      id="manufacturing"
      className="relative overflow-hidden bg-ink-950 py-24 text-white lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <img
          src={PLANT_IMG}
          alt=""
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/85 to-ink-950" />
        <div className="absolute inset-0 bg-water-grid [background-size:24px_24px] opacity-30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="reveal inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-aqua-200 backdrop-blur">
            <Factory className="h-3.5 w-3.5" />
            Manufacturing
          </span>
          <h2 className="reveal mt-5 text-balance text-3xl font-extrabold sm:text-4xl lg:text-[2.75rem]">
            A facility engineered for consistency
          </h2>
          <p className="reveal mt-5 text-lg leading-relaxed text-ink-200">
            Our proposed Kendrapara plant is designed around hygienic,
            automated production — minimising human handling and maximising
            consistency across every bottle and jar we ship.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="reveal group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all hover:bg-white/10"
            >
              <span className="font-display text-5xl font-extrabold text-gradient bg-gradient-to-br from-aqua-300 to-brand-400">
                {s.n}
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-200">
                {s.body}
              </p>
              <div className="mt-5 h-0.5 w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-aqua-400 to-brand-500 transition-transform duration-500 group-hover:scale-x-100" />
            </div>
          ))}
        </div>

        <div className="reveal mt-10 flex flex-wrap items-center gap-3">
          {SPECS.map((s) => (
            <span
              key={s.label}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-ink-100 backdrop-blur"
            >
              <s.icon className="h-4 w-4 text-aqua-300" />
              {s.label}
            </span>
          ))}
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-aqua-500 px-4 py-2 text-sm font-semibold text-ink-950">
            <PackageCheck className="h-4 w-4" />
            Made in Odisha
          </span>
        </div>
      </div>
    </section>
  );
}
