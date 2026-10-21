import { Target, Eye, Leaf, MapPin } from 'lucide-react';

const FACTORY_IMG =
  'https://images.pexels.com/photos/5123347/pexels-photo-5123347.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const PILLARS = [
  {
    icon: Target,
    title: 'Our Mission',
    body: 'To deliver safe, great-tasting packaged drinking water that every family, shop and institution can trust — produced with rigorous hygiene and modern technology.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    body: 'To become Odisha\u2019s most dependable packaged-water brand, recognised for purity, consistency and responsible manufacturing.',
  },
  {
    icon: Leaf,
    title: 'Our Promise',
    body: 'Every bottle and jar passes multi-stage purification and lab testing before it leaves our facility — nothing ships unverified.',
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="reveal relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-100 to-aqua-100 blur-xl" />
            <div className="overflow-hidden rounded-[1.75rem] border border-ink-100 shadow-card">
              <img
                src={FACTORY_IMG}
                alt="Water treatment and purification facility"
                className="h-[440px] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 max-w-[220px] rounded-2xl border border-ink-100 bg-white p-5 shadow-card-hover sm:right-6">
              <div className="flex items-center gap-2 text-brand-700">
                <MapPin className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-wide">
                  Location
                </span>
              </div>
              <p className="mt-2 font-display text-base font-bold text-ink-900">
                Kendrapara, Odisha
              </p>
              <p className="mt-1 text-sm text-ink-500">
                Proposed state-of-the-art bottling facility.
              </p>
            </div>
          </div>

          <div>
            <span className="reveal inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-700">
              About Us
            </span>
            <h2 className="reveal mt-5 text-balance text-3xl font-extrabold text-ink-900 sm:text-4xl lg:text-[2.75rem]">
              A new standard for pure drinking water in Odisha
            </h2>
            <p className="reveal mt-5 text-lg leading-relaxed text-ink-600">
              SKAT Water Factory Pvt. Ltd. is setting up a modern packaged
              drinking water facility in Kendrapara, Odisha. We blend advanced
              purification technology with strict quality discipline to bring
              water that is crisp, clean and consistently safe — in sizes that
              fit every need.
            </p>

            <div className="mt-9 space-y-4">
              {PILLARS.map((p) => (
                <div
                  key={p.title}
                  className="reveal flex gap-4 rounded-2xl border border-ink-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-card"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-aqua-500 text-white shadow-glow">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink-900">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-600">
                      {p.body}
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
