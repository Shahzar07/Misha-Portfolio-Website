'use client';
import { useState, useMemo } from 'react';
import { AnimatedCardStack } from '@/components/ui/animate-card-animation';
import { cn } from '@/lib/utils';

const projects = [
  { title: "Customer Support AI Agent", description: "24/7 conversational LLM bot integrated via Vapi.", category: "AI & LLM Agents" },
  { title: "Real Estate Lead Qualification Bot", description: "AI-driven pre-screening and booking system.", category: "AI & LLM Agents" },
  { title: "E-commerce Recommendation Engine", description: "Machine learning bot for personalized upselling.", category: "AI & LLM Agents" },
  { title: "Automated HR Onboarding AI", description: "Chatbot to guide new hires through documentation.", category: "AI & LLM Agents" },
  { title: "Financial Data Processing LLM", description: "AI pipeline for summarizing complex PDF reports.", category: "AI & LLM Agents" },
  { title: "SaaS User Onboarding Flow", description: "End-to-end n8n automation for new signups.", category: "Workflow Automation" },
  { title: "Cross-Platform CRM Sync", description: "Zapier architecture connecting Salesforce, Slack, and Gmail.", category: "Workflow Automation" },
  { title: "Automated Financial Reporting", description: "Make.com workflow for weekly accounting dashboards.", category: "Workflow Automation" },
  { title: "Airtable Inventory Management", description: "Real-time database syncing for retail operations.", category: "Workflow Automation" },
  { title: "GoHighLevel Marketing Funnel", description: "Automated email/SMS sequence triggered by user behavior.", category: "Workflow Automation" },
  { title: "Twilio SMS Booking System", description: "Automated appointment reminders and confirmations.", category: "Workflow Automation" },
  { title: "Odoo ERP Custom Workflow", description: "Award-winning automation for resource planning.", category: "Workflow Automation" },
  { title: "Shopify Post-Purchase Automation", description: "Review generation and upselling sequence.", category: "Workflow Automation" },
  { title: "Competitor Price Tracking Scraper", description: "Python/BeautifulSoup script updating Google Sheets daily.", category: "Python & Scraping" },
  { title: "B2B Lead Generation Engine", description: "Selenium scraper extracting targeted contacts from directories.", category: "Python & Scraping" },
  { title: "Social Media Sentiment Analyzer", description: "Python script scraping mentions and running NLP.", category: "Python & Scraping" },
  { title: "Real Estate Property Aggregator", description: "Automated daily extraction of MLS listings.", category: "Python & Scraping" },
  { title: "Automated PDF Data Extractor", description: "OCR pipeline converting invoices into structured JSON.", category: "Python & Scraping" },
  { title: "Crypto Market Alert Script", description: "Real-time price tracking and automated Slack notifications.", category: "Python & Scraping" },
  { title: "Job Board Aggregator Bot", description: "Scraping niche job sites for specific tech roles.", category: "Python & Scraping" },
  { title: "Custom Stripe to Accounting Bridge", description: "Seamless financial data API integration.", category: "API Integrations" },
  { title: "Healthcare EHR Sync", description: "Secure API bridging patient data with scheduling software.", category: "API Integrations" },
  { title: "EdTech Course Enrollment API", description: "Connecting LMS platforms with payment gateways.", category: "API Integrations" },
  { title: "Logistics Tracking API", description: "Real-time shipment status integrated into client dashboards.", category: "API Integrations" },
  { title: "Custom Weather Alert Integration", description: "API connecting weather data to agricultural software.", category: "API Integrations" },
  { title: "Automated Invoice Generator", description: "RPA bot extracting email data and generating PDFs.", category: "RPA & Browser Auto" },
  { title: "Sales Rep Chrome Extension", description: "Custom tool for quick CRM data entry directly from the browser.", category: "RPA & Browser Auto" },
  { title: "Puppeteer UI Testing Suite", description: "Automated visual regression testing for SaaS platforms.", category: "RPA & Browser Auto" },
  { title: "Bulk Outreach Automation Bot", description: "Simulating human browser behavior for ethical networking.", category: "RPA & Browser Auto" },
  { title: "Legacy System Data Migration", description: "RPA bot moving records from outdated software to cloud databases.", category: "RPA & Browser Auto" }
];

const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

export function PortfolioVault() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="portfolio" className="relative py-32 bg-[#0a0a0a] border-y border-white/5 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-white/40 animate-pulse"></span>
              The Vault
            </div>
            
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
              Engineered <br/>
              <span className="text-white/40">for scale.</span>
            </h2>
            
            <p className="text-white/50 text-lg mb-10 leading-relaxed max-w-md">
              Browse through my arsenal of enterprise-grade AI agents, workflow automations, and data extraction pipelines.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                    activeCategory === category 
                      ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]" 
                      : "bg-[#111] text-white/60 border-white/10 hover:border-white/30 hover:text-white hover:bg-[#1a1a1a]"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-8 w-full border-t border-white/10 pt-8">
              <div>
                <div className="text-4xl font-display font-bold text-white mb-2">30+</div>
                <div className="text-xs text-white/50 uppercase tracking-widest font-medium">Projects Shipped</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-white mb-2">100%</div>
                <div className="text-xs text-white/50 uppercase tracking-widest font-medium">Client Success</div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end w-full">
            <AnimatedCardStack projects={filteredProjects} />
          </div>

        </div>
      </div>
    </section>
  );
}
