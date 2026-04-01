import { Hero } from '@/components/hero';
import { ServicesBento } from '@/components/services-bento';
import { PortfolioVault } from '@/components/portfolio-vault';
import { Testimonials } from '@/components/testimonials';
import { Metrics } from '@/components/metrics';
import { Contact } from '@/components/contact';

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-white/20">
      <Hero />
      <ServicesBento />
      <PortfolioVault />
      <Testimonials />
      <Metrics />
      <Contact />
    </main>
  );
}
