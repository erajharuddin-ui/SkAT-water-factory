import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Products } from '@/components/sections/Products';
import { Quality } from '@/components/sections/Quality';
import { Manufacturing } from '@/components/sections/Manufacturing';
import { Distribution } from '@/components/sections/Distribution';
import { CtaBand } from '@/components/sections/CtaBand';
import { Contact } from '@/components/sections/Contact';
import { useScrollReveal } from '@/hooks/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-ink-50 text-ink-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Quality />
        <Manufacturing />
        <Distribution />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
