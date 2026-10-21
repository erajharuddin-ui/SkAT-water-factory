import { Truck, Map, Store, Building2, Clock, Route } from 'lucide-react';

const DELIVERY_IMG =
  'https://images.pexels.com/photos/15379824/pexels-photo-15379824.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const CHANNELS = [
  {
    icon: Store,
    title: 'Retail & Kirana',
    body: 'Stocked with local shops and convenience stores for easy everyday purchase.',
  },
  {
    icon: Building2,
    title: 'Offices & Institutions',
    body: 'Bulk supply contracts for offices, schools, hospitals and events.',
  },
  {
    icon: Truck,
    title: 'Doorstep Delivery',
    body: 'Scheduled home delivery for 20L jars and recurring family orders.',
  },
];

const STATS = [
  { icon: Route, value: 'Wide', label: 'Regional reach' },
  { icon: Clock, value: 'On-time', label: 'Scheduled dispatch' },
  { icon: Map, value: 'Kendrapara', label: 'Hub & growing' },
];

export function Distribution() {
  return (
    <section id="distribution" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="reveal relative order-2 lg:order-1">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-100 to-aqua-100 blur-xl" />
            <div className="overflow-hidden rounded-[1.75rem] border border-ink-100 shadow-card">
              <img
                src={DELIVERY_IMG}
                alt="Delivery truck on the road"
                className="h-[440px] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 left-2 right-2 grid grid-cols-3 gap-3 rounded-2xl border border-ink-100 bg-white p-4 shadow-card-hover sm:left-6 sm:right-6">
              {STATS.map((s) => (
                <div key={s.label} className="text-center">
                  <s.icon className="mx-auto h-5 w-5 text-brand-600" />
                  <p className="mt-1.5 font-display text-base font-extrabold text-ink-900">
                    {s.value}
                  </p>
                  <p className="text-[11px] font-medium text-ink-500">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="reveal inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-700">
              Distribution
            </span>
            <h2 className="reveal mt-5 text-balance text-3xl font-extrabold text-ink-900 sm:text-4xl lg:text-[2.75rem]">
              Reaching you, wherever you are
            </h2>
            <p className="reveal mt-5 text-lg leading-relaxed text-ink-600">
              From our Kendrapara hub, SKAT Water is built to move fast and
              reliably. A growing network of retail partners, institutional
              contracts and doorstep delivery keeps pure water always within
              reach.
            </p>

            <div className="mt-9 space-y-4">
              {CHANNELS.map((c) => (
                <div
                  key={c.title}
                  className="reveal group flex gap-4 rounded-2xl border border-ink-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-card"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-aqua-500 text-white shadow-glow">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink-900">
                      {c.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-600">
                      {c.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
