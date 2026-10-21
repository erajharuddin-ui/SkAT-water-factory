import { Check } from 'lucide-react';

type Product = {
  size: string;
  name: string;
  tagline: string;
  features: string[];
  accent: string;
  featured?: boolean;
};

const PRODUCTS: Product[] = [
  {
    size: '250 ml',
    name: 'Sip Pack',
    tagline: 'On-the-go hydration for a quick, refreshing burst.',
    features: ['Pocket friendly', 'Events & travel', 'Recyclable bottle'],
    accent: 'from-aqua-400 to-aqua-500',
  },
  {
    size: '500 ml',
    name: 'Everyday Bottle',
    tagline: 'The perfect companion for work, school and the gym.',
    features: ['Easy-grip design', 'Sealed cap', 'Best seller'],
    accent: 'from-brand-400 to-brand-500',
    featured: true,
  },
  {
    size: '1 Litre',
    name: 'Family Pack',
    tagline: 'Ideal for meals at home or sharing at the table.',
    features: ['Reusable cap', 'Table-ready', 'Great value'],
    accent: 'from-brand-500 to-brand-600',
  },
  {
    size: '20 Litre',
    name: 'Jar',
    tagline: 'Bulk supply for homes, offices and institutions.',
    features: ['Food-grade jar', 'Dispenser-ready', 'Doorstep delivery'],
    accent: 'from-brand-700 to-ink-800',
  },
];

export function Products() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-gradient-to-b from-brand-50/60 to-white py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="reveal inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-700">
            Our Products
          </span>
          <h2 className="reveal mt-5 text-balance text-3xl font-extrabold text-ink-900 sm:text-4xl lg:text-[2.75rem]">
            Pure water in every size you need
          </h2>
          <p className="reveal mt-4 text-lg text-ink-600">
            From a quick sip to a 20-litre jar, every SKAT pack is filled with
            the same rigorously purified, great-tasting water.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p) => (
            <article
              key={p.size}
              className={`reveal group relative flex flex-col overflow-hidden rounded-3xl border bg-white p-6 transition-all duration-300 hover:-translate-y-2 ${
                p.featured
                  ? 'border-brand-300 shadow-card-hover ring-1 ring-brand-200'
                  : 'border-ink-100 shadow-card hover:shadow-card-hover'
              }`}
            >
              {p.featured && (
                <span className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-brand-500 to-aqua-400 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                  Popular
                </span>
              )}

              {/* Bottle / jar visual */}
              <div className="relative mx-auto mb-6 flex h-36 items-end justify-center">
                <div
                  className={`relative rounded-b-xl rounded-t-md bg-gradient-to-b ${p.accent} shadow-lg transition-transform duration-500 group-hover:scale-[1.05]`}
                  style={bottleStyle(p.size)}
                >
                  <div className="absolute inset-x-2 top-3 h-px bg-white/40" />
                  <div className="absolute inset-x-2 top-6 h-px bg-white/30" />
                  <span className="absolute inset-0 grid place-items-center font-display text-xs font-bold text-white/95">
                    {p.size}
                  </span>
                </div>
                <div className="absolute bottom-0 h-2 w-20 rounded-full bg-ink-900/10 blur-sm" />
              </div>

              <h3 className="font-display text-xl font-bold text-ink-900">
                {p.name}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
                {p.tagline}
              </p>

              <ul className="mt-5 space-y-2.5">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm font-medium text-ink-700"
                  >
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-50 text-brand-600">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center justify-between border-t border-ink-100 pt-4">
                <span className="font-display text-lg font-extrabold text-brand-700">
                  {p.size}
                </span>
                <a
                  href="#contact"
                  className="text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
                >
                  Enquire →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function bottleStyle(size: string): React.CSSProperties {
  switch (size) {
    case '250 ml':
      return { width: '46px', height: '96px', borderRadius: '10px 10px 14px 14px' };
    case '500 ml':
      return { width: '54px', height: '116px', borderRadius: '12px 12px 16px 16px' };
    case '1 Litre':
      return { width: '62px', height: '132px', borderRadius: '12px 12px 18px 18px' };
    case '20 Litre':
      return { width: '82px', height: '128px', borderRadius: '18px 18px 22px 22px' };
    default:
      return { width: '54px', height: '116px' };
  }
}
