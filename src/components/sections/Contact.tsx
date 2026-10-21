import { useState, type FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Globe } from 'lucide-react';

const EMAIL = 'skatfoodsfactory@gmail.com';
const PHONE_KSA = '+966510196892';
const PHONE_INDIA = '+918144277473';

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${form.name || 'a visitor'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-white to-brand-50/60 py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-water-grid [background-size:24px_24px] opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="reveal inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-700">
            Contact
          </span>
          <h2 className="reveal mt-5 text-balance text-3xl font-extrabold text-ink-900 sm:text-4xl lg:text-[2.75rem]">
            Let's talk pure water
          </h2>
          <p className="reveal mt-4 text-lg text-ink-600">
            For enquiries, partnerships, bulk orders or distribution — reach out
            and our team will respond promptly.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Contact info */}
          <div className="reveal lg:col-span-2">
            <div className="flex h-full flex-col gap-5 rounded-3xl border border-ink-100 bg-white p-7 shadow-card">
              <h3 className="font-display text-xl font-bold text-ink-900">
                Reach us directly
              </h3>

              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-start gap-4 rounded-2xl border border-ink-100 p-4 transition-all hover:border-brand-200 hover:bg-brand-50/50"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-aqua-500 text-white">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-ink-400">
                    Email
                  </p>
                  <p className="mt-0.5 break-all font-semibold text-ink-800 group-hover:text-brand-700">
                    {EMAIL}
                  </p>
                </div>
              </a>

              <div className="rounded-2xl border border-ink-100 p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-ink-400">
                  Phone
                </p>
                <div className="mt-3 space-y-3">
                  <a
                    href={`tel:${PHONE_KSA}`}
                    className="group flex items-center gap-3"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-700">
                      <Phone className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-semibold text-ink-800 group-hover:text-brand-700">
                        {PHONE_KSA}
                      </p>
                      <p className="text-xs text-ink-500">KSA</p>
                    </div>
                  </a>
                  <a
                    href={`tel:${PHONE_INDIA}`}
                    className="group flex items-center gap-3"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-700">
                      <Phone className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-semibold text-ink-800 group-hover:text-brand-700">
                        {PHONE_INDIA}
                      </p>
                      <p className="text-xs text-ink-500">India</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-ink-100 p-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-aqua-50 text-aqua-700">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-ink-400">
                      Proposed Facility
                    </p>
                    <p className="mt-0.5 font-semibold text-ink-800">
                      Kendrapara, Odisha, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-auto flex items-center gap-2 rounded-2xl bg-gradient-to-r from-brand-50 to-aqua-50 p-4 text-sm text-ink-600">
                <Globe className="h-4 w-4 text-brand-600" />
                Serving communities across Odisha & beyond.
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="reveal lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-ink-100 bg-white p-7 shadow-card lg:p-8"
            >
              <h3 className="font-display text-xl font-bold text-ink-900">
                Send us a message
              </h3>
              <p className="mt-1 text-sm text-ink-500">
                Fill in your details and we'll get back to you.
              </p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <Field label="Full name">
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Your name"
                    className={inputCls}
                  />
                </Field>
                <Field label="Phone">
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={update('phone')}
                    placeholder="Your phone"
                    className={inputCls}
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Email">
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    placeholder="you@example.com"
                    className={inputCls}
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Message">
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={update('message')}
                    placeholder="Tell us what you need — product, quantity, location\u2026"
                    className={`${inputCls} resize-none`}
                  />
                </Field>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 px-6 py-3.5 text-base font-semibold text-white shadow-glow transition-transform hover:scale-[1.01] sm:w-auto"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>

              {sent && (
                <div className="mt-5 flex items-center gap-2 rounded-xl border border-brand-200 bg-brand-50 px-4 py-3 text-sm font-medium text-brand-700">
                  <CheckCircle2 className="h-5 w-5" />
                  Your email app should now be open with your message ready to
                  send.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

const inputCls =
  'w-full rounded-xl border border-ink-200 bg-ink-50/40 px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 transition-all focus:border-brand-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-100';

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink-500">
        {label}
      </span>
      {children}
    </label>
  );
}
