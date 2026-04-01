import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'Misha S. | Automation & AI Expert',
  description: 'Top-Rated Automation & AI Expert | Zapier, n8n, Python & API Specialist.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-[#050505] text-white antialiased selection:bg-white/20`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
