import { Droplets } from 'lucide-react';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-aqua-500 shadow-glow">
        <Droplets className="h-5 w-5 text-white" strokeWidth={2.4} />
        <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-aqua-300 ring-2 ring-white" />
      </div>
      <div className="leading-tight">
        <p className="font-display text-lg font-extrabold tracking-tight text-ink-900">
          SKAT
        </p>
        <p className="-mt-0.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-600">
          Water Factory
        </p>
      </div>
    </div>
  );
}
