'use client';
import { motion } from 'motion/react';

const tech = ['Python', 'Zapier', 'n8n', 'Make', 'GoHighLevel', 'Selenium', 'Puppeteer', 'Airtable', 'LLMs', 'Twilio'];

export function TechMarquee() {
  return (
    <div className="relative flex overflow-hidden w-full py-10 bg-[#0a0a0a] border-y border-white/5">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />
      
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ ease: 'linear', duration: 20, repeat: Infinity }}
      >
        {[...tech, ...tech, ...tech, ...tech].map((item, i) => (
          <div key={i} className="flex items-center mx-8">
            <span className="text-2xl font-display font-medium text-white/40 uppercase tracking-wider">{item}</span>
            <span className="mx-8 text-white/20">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
