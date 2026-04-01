'use client';
import { CpuArchitecture } from '@/components/ui/cpu-architecture';

export function CpuSection() {
  return (
    <section className="py-32 bg-[#050505] border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center md:text-left">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">The Architecture.</h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto md:mx-0">
            A visual representation of the complex, interconnected systems and data pipelines we build.
          </p>
        </div>
        
        <div className="relative w-full max-w-5xl mx-auto aspect-[2/1] md:aspect-[3/1] rounded-3xl border border-white/10 bg-[#0a0a0a] p-4 md:p-12 shadow-2xl overflow-hidden flex items-center justify-center">
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
          
          <CpuArchitecture 
            text="CORE" 
            className="w-full h-full max-h-[400px]" 
            lineMarkerSize={12}
          />
        </div>
      </div>
    </section>
  );
}
