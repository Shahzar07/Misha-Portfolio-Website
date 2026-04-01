'use client';
import { ServiceCard } from './ui/service-card';

const services = [
  {
    title: "AI & LLM Agents",
    description: "Custom conversational bots and intelligent pipelines powered by OpenAI, Anthropic, and open-source models.",
    href: "#contact",
    imgSrc: "https://lftz25oez4aqbxpq.public.blob.vercel-storage.com/image-DFiJBJyUFg9QYTZOWEFeeza18HBnty.png",
    imgAlt: "AI Agents",
  },
  {
    title: "Workflow Automation",
    description: "Seamless data flow across your SaaS stack using Zapier, n8n, and Make.",
    href: "#contact",
    imgSrc: "https://lftz25oez4aqbxpq.public.blob.vercel-storage.com/image-SxvnIpN2RVwLK77XxK3MnVCU6Xgc29.png",
    imgAlt: "Workflow Automation",
  },
  {
    title: "API Integrations",
    description: "Bespoke middleware and API bridges for complex system synchronization.",
    href: "#contact",
    imgSrc: "https://lftz25oez4aqbxpq.public.blob.vercel-storage.com/image-J7XYh5Cix5CceVeAtkuVXYSGgrhjDL.png",
    imgAlt: "API Integrations",
  },
  {
    title: "RPA & Web Scraping",
    description: "Automated data extraction and browser interactions using Python, Selenium, and Puppeteer.",
    href: "#contact",
    imgSrc: "https://lftz25oez4aqbxpq.public.blob.vercel-storage.com/image-nY3Stc1545aP21dAi1IEbYlnc4rovS.png",
    imgAlt: "RPA & Web Scraping",
  }
];

export function ServicesBento() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-16 text-center md:text-left">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">The Engine.</h2>
        <p className="text-white/50 text-lg max-w-xl mx-auto md:mx-0">Architecting scalable, automated systems that eliminate manual work and accelerate growth.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, i) => (
          <ServiceCard
            key={i}
            title={service.title}
            description={service.description}
            href={service.href}
            imgSrc={service.imgSrc}
            imgAlt={service.imgAlt}
            className="min-h-[280px]"
          />
        ))}
      </div>
    </section>
  );
}
