'use client';
import { Counter } from './counter';

export function Metrics() {
  return (
    <section id="metrics" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 md:divide-x divide-white/5">
        <div className="flex flex-col items-center text-center px-4">
          <div className="font-display text-5xl md:text-7xl font-bold mb-2">
            <Counter value={7} suffix="+" />
          </div>
          <span className="text-white/50 text-sm uppercase tracking-wider font-medium">Years Experience</span>
        </div>
        <div className="flex flex-col items-center text-center px-4">
          <div className="font-display text-5xl md:text-7xl font-bold mb-2">
            <Counter value={20} suffix="+" />
          </div>
          <span className="text-white/50 text-sm uppercase tracking-wider font-medium">Enterprise Projects</span>
        </div>
        <div className="flex flex-col items-center text-center px-4">
          <div className="font-display text-5xl md:text-7xl font-bold mb-2">
            <Counter value={50} suffix="%" />
          </div>
          <span className="text-white/50 text-sm uppercase tracking-wider font-medium">Boost in Leads</span>
        </div>
        <div className="flex flex-col items-center text-center px-4">
          <div className="font-display text-5xl md:text-7xl font-bold mb-2">
            <Counter value={70} suffix="%" />
          </div>
          <span className="text-white/50 text-sm uppercase tracking-wider font-medium">Less Manual Work</span>
        </div>
      </div>
    </section>
  );
}
