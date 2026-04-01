'use client';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import confetti from 'canvas-confetti';

export function Contact() {
  const [phone, setPhone] = useState<string | undefined>();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [submittedName, setSubmittedName] = useState<string>('');
  const [nameInput, setNameInput] = useState('');
  const [nextUrl, setNextUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setNextUrl(`${window.location.origin}${window.location.pathname}?submitted=true`);
      
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('submitted') === 'true') {
        setStatus('success');
        const nameParam = urlParams.get('name');
        if (nameParam) setSubmittedName(nameParam);
        
        // Trigger elegant confetti
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

        const interval: any = setInterval(function() {
          const timeLeft = animationEnd - Date.now();

          if (timeLeft <= 0) {
            return clearInterval(interval);
          }

          const particleCount = 50 * (timeLeft / duration);
          confetti({
            ...defaults, particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            colors: ['#000000', '#333333', '#666666', '#999999', '#cccccc']
          });
          confetti({
            ...defaults, particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            colors: ['#000000', '#333333', '#666666', '#999999', '#cccccc']
          });
        }, 250);

        // Clean up URL
        window.history.replaceState({}, document.title, window.location.pathname);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
       setNextUrl(`${window.location.origin}${window.location.pathname}?submitted=true&name=${encodeURIComponent(nameInput)}`);
    }
  }, [nameInput]);

  const handleSubmit = () => {
    // We don't prevent default, we let the form submit natively to formsubmit.co
    // This ensures the activation email is sent and the user sees the activation page.
    setStatus('loading');
  };

  return (
    <section id="contact" className="py-32 bg-white text-black rounded-t-[3rem] md:rounded-t-[5rem] relative z-20 mt-[-2rem]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">
            Let&apos;s transform your workflow into a fully automated, AI-powered system.
          </h2>
          
          <div className="flex flex-col gap-4 mt-12">
            <a href="#" className="text-lg font-medium flex items-center gap-2 hover:opacity-70 transition-opacity">
              Upwork Profile <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#" className="text-lg font-medium flex items-center gap-2 hover:opacity-70 transition-opacity">
              Fiverr Profile <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#" className="text-lg font-medium flex items-center gap-2 hover:opacity-70 transition-opacity">
              LinkedIn <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="bg-gray-50 p-8 md:p-12 rounded-3xl">
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-6 py-12 animate-in fade-in zoom-in duration-500">
              <CheckCircle2 className="w-20 h-20 text-green-500" />
              <h3 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
                Thank You, {submittedName.split(' ')[0]}!
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                I truly appreciate you taking the time to reach out. Your message has been successfully received, and I will personally get back to you as soon as possible.
              </p>
              <button 
                onClick={() => { setStatus('idle'); setSubmittedName(''); }}
                className="mt-8 text-black font-medium underline underline-offset-4 hover:opacity-70 transition-opacity"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form 
              className="flex flex-col gap-8" 
              action="https://formsubmit.co/husainmurtazaupwork@gmail.com" 
              method="POST"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Contact Form Submission" />
              <input type="hidden" name="_next" value={nextUrl} />
              <input type="hidden" name="phone" value={phone || 'Not provided'} />

              <div className="relative">
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  className="peer w-full border-b-2 border-gray-200 bg-transparent py-4 text-xl focus:border-black focus:outline-none transition-colors placeholder-transparent" 
                  placeholder="Name"
                  required
                />
                <label 
                  htmlFor="name" 
                  className="absolute left-0 top-4 text-gray-400 text-xl transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-black peer-valid:-top-4 peer-valid:text-sm"
                >
                  Your Name
                </label>
              </div>
              
              <div className="relative">
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  className="peer w-full border-b-2 border-gray-200 bg-transparent py-4 text-xl focus:border-black focus:outline-none transition-colors placeholder-transparent" 
                  placeholder="Email"
                  required
                />
                <label 
                  htmlFor="email" 
                  className="absolute left-0 top-4 text-gray-400 text-xl transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-black peer-valid:-top-4 peer-valid:text-sm"
                >
                  Email Address
                </label>
              </div>

              <div className="relative flex flex-col gap-2">
                <label className="text-sm text-gray-500 font-medium transition-all">Phone / WhatsApp Number</label>
                <PhoneInput
                  international
                  defaultCountry="US"
                  value={phone}
                  onChange={setPhone}
                  className="w-full border-b-2 border-gray-200 bg-transparent py-2 text-xl focus-within:border-black transition-colors"
                />
              </div>

              <div className="relative">
                <textarea 
                  id="project" 
                  name="project"
                  rows={4}
                  className="peer w-full border-b-2 border-gray-200 bg-transparent py-4 text-xl focus:border-black focus:outline-none transition-colors placeholder-transparent resize-none" 
                  placeholder="Project Details"
                  required
                />
                <label 
                  htmlFor="project" 
                  className="absolute left-0 top-4 text-gray-400 text-xl transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-black peer-valid:-top-4 peer-valid:text-sm"
                >
                  Tell me about your project
                </label>
              </div>

              {status === 'error' && (
                <p className="text-red-500 text-sm">Something went wrong. Please try again later.</p>
              )}

              <button 
                type="submit"
                disabled={status === 'loading'}
                className="bg-black text-white rounded-full py-5 px-8 text-lg font-medium hover:bg-gray-900 transition-colors mt-4 flex items-center justify-center gap-2 group disabled:opacity-70"
              >
                {status === 'loading' ? (
                  <>
                    Sending...
                    <Loader2 className="w-5 h-5 animate-spin" />
                  </>
                ) : (
                  <>
                    Book Free Consultation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-32 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Misha S. All rights reserved.</p>
        <p>Engineered for scale.</p>
      </div>
    </section>
  );
}
