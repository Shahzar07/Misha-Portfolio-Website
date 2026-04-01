'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import { motion } from 'motion/react'

const nameText = "Misha S.";
const nameVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        }
    }
};

const letterVariants = {
    hidden: { opacity: 0, y: 100, rotateX: -90 },
    visible: { 
        opacity: 1, 
        y: 0, 
        rotateX: 0, 
        transition: { type: "spring" as const, damping: 12, stiffness: 100 } 
    }
};

const subHeadlineText = "Top-Rated Automation & AI Expert | Zapier, n8n, Python & API Specialist.";
const subHeadlineVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.03,
            delayChildren: 1.8,
        }
    }
};

const typeLetterVariants = {
    hidden: { opacity: 0, display: "none" },
    visible: { opacity: 1, display: "inline" }
};

export function Hero() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden pt-20">
                <section>
                    <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
                        <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                                <h1 className="mt-8 max-w-2xl text-balance text-6xl font-display font-bold md:text-7xl lg:mt-16 xl:text-8xl text-white [perspective:1000px]">
                                    <motion.div 
                                        variants={nameVariants}
                                        initial="hidden"
                                        animate="visible"
                                        className="text-white flex flex-wrap overflow-hidden pb-4"
                                    >
                                        {nameText.split("").map((char, index) => (
                                            <motion.span key={index} variants={letterVariants} className="inline-block origin-bottom">
                                                {char === " " ? "\u00A0" : char}
                                            </motion.span>
                                        ))}
                                    </motion.div>
                                </h1>
                                <motion.p 
                                    variants={subHeadlineVariants}
                                    initial="hidden"
                                    animate="visible"
                                    className="mt-6 max-w-2xl text-pretty text-xl md:text-2xl text-white/60 min-h-[4rem]"
                                >
                                    {subHeadlineText.split("").map((char, index) => (
                                        <motion.span key={index} variants={typeLetterVariants}>
                                            {char}
                                        </motion.span>
                                    ))}
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                                        className="inline-block w-[3px] h-[1em] bg-white/80 ml-1 align-middle"
                                    />
                                </motion.p>

                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 2.5, duration: 0.8 }}
                                    className="mt-8 flex items-center gap-4 justify-center lg:justify-start"
                                >
                                    <div className="flex -space-x-3">
                                        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" className="w-10 h-10 rounded-full border-2 border-[#050505] object-cover" />
                                        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client" className="w-10 h-10 rounded-full border-2 border-[#050505] object-cover" />
                                        <img src="https://randomuser.me/api/portraits/men/68.jpg" alt="Client" className="w-10 h-10 rounded-full border-2 border-[#050505] object-cover" />
                                        <img src="https://randomuser.me/api/portraits/women/89.jpg" alt="Client" className="w-10 h-10 rounded-full border-2 border-[#050505] object-cover" />
                                        <div className="w-10 h-10 rounded-full border-2 border-[#050505] bg-white/10 flex items-center justify-center text-xs font-medium backdrop-blur-sm">+40</div>
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <div className="flex items-center gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className="w-4 h-4 text-[#FFD13B] fill-[#FFD13B]" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                            ))}
                                        </div>
                                        <span className="text-white/70 text-sm font-medium mt-0.5">5.0/5 Average Rating</span>
                                    </div>
                                </motion.div>

                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 4, duration: 0.8 }}
                                    className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
                                >
                                    <Button
                                        asChild
                                        size="lg"
                                        className="px-8 py-6 text-base rounded-full">
                                        <Link href="#contact">
                                            <span className="text-nowrap">Automate Your Business</span>
                                        </Link>
                                    </Button>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="px-8 py-6 text-base rounded-full border border-white/10 backdrop-blur-sm">
                                        <Link href="#portfolio">
                                            <span className="text-nowrap">View Projects</span>
                                        </Link>
                                    </Button>
                                </motion.div>
                            </div>
                            <img
                                className="pointer-events-none order-first ml-auto h-56 w-full object-cover invert sm:h-96 lg:absolute lg:inset-0 lg:-right-20 lg:-top-96 lg:order-last lg:h-max lg:w-2/3 lg:object-contain dark:mix-blend-lighten dark:invert-0 opacity-90 saturate-200"
                                src="https://ik.imagekit.io/lrigu76hy/tailark/abstract-bg.jpg?updatedAt=1745733473768"
                                alt="Abstract Object"
                                height="4000"
                                width="3000"
                            />
                        </div>
                    </div>
                </section>
                <section className="bg-[#050505] pb-16 md:pb-32">
                    <div className="group relative m-auto max-w-6xl px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="md:max-w-44 md:border-r border-white/10 md:pr-6 mb-8 md:mb-0">
                                <p className="text-center md:text-end text-sm text-white/50 uppercase tracking-widest font-medium">Expertise in top platforms</p>
                            </div>
                            <div className="relative py-6 md:w-[calc(100%-11rem)] w-full">
                                <InfiniteSlider
                                    durationOnHover={20}
                                    duration={40}
                                    gap={112}>
                                    <div className="flex items-center justify-center">
                                        <img src="https://cdn.simpleicons.org/python/white" alt="Python" className="h-10 w-auto opacity-40 hover:opacity-100 transition-opacity" />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <img src="https://cdn.simpleicons.org/zapier/white" alt="Zapier" className="h-10 w-auto opacity-40 hover:opacity-100 transition-opacity" />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <img src="https://cdn.simpleicons.org/n8n/white" alt="n8n" className="h-10 w-auto opacity-40 hover:opacity-100 transition-opacity" />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <img src="https://cdn.simpleicons.org/make/white" alt="Make" className="h-10 w-auto opacity-40 hover:opacity-100 transition-opacity" />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto opacity-40 hover:opacity-100 transition-opacity fill-white"><title>OpenAI</title><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.073zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.5973 8.3829a.0804.0804 0 0 1 .0332-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66 4.4708 4.4708 0 0 1-.5346.9082l-.142-.0852-4.783-2.7582a.7712.7712 0 0 0-.7806 0zM8.8435 3.1152a4.4708 4.4708 0 0 1 2.8764 1.0408l-.1419.0804-4.7783 2.7582a.7948.7948 0 0 0-.3927.6813V14.413l-2.02-1.1686a.071.071 0 0 1-.038-.052V7.6098a4.504 4.504 0 0 1 4.4945-4.4946zm8.814 8.3828l-5.8144-3.3543 2.0201-1.1685a.0757.0757 0 0 1 .071 0l4.8303 2.7865a4.504 4.504 0 0 1-2.3655 6.4623v-5.6765a.7664.7664 0 0 0-.3879-.6765zM10.117 11.1634v1.6734l-1.4489-.8367v-1.6734zm3.3685 1.9446l-1.449.8367-1.4489-.8367v-1.6734l1.4489-.8366 1.449.8366z"/></svg>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto opacity-40 hover:opacity-100 transition-opacity fill-white"><title>Twilio</title><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.5-6.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm7 0a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm-7-7a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm7 0a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <img src="https://cdn.simpleicons.org/airtable/white" alt="Airtable" className="h-10 w-auto opacity-40 hover:opacity-100 transition-opacity" />
                                    </div>
                                </InfiniteSlider>

                                <div className="bg-gradient-to-r from-[#050505] absolute inset-y-0 left-0 w-20 z-10"></div>
                                <div className="bg-gradient-to-l from-[#050505] absolute inset-y-0 right-0 w-20 z-10"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

const menuItems = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Metrics', href: '#metrics' },
    { name: 'Contact', href: '#contact' },
]

const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="group bg-[#050505]/50 fixed z-50 w-full border-b border-white/5 backdrop-blur-3xl">
                <div className="mx-auto max-w-6xl px-6 transition-all duration-300">
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <span className="font-display font-bold text-xl tracking-tighter">Misha S.</span>
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden text-white">
                                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>

                            <div className="hidden lg:block">
                                <ul className="flex gap-8 text-sm">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-white/60 hover:text-white block duration-150 font-medium">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="bg-[#111] group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-white/10 p-6 shadow-2xl md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-white/60 hover:text-white block duration-150 font-medium"
                                                onClick={() => setMenuState(false)}>
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    size="sm"
                                    className="rounded-full px-6">
                                    <Link href="#contact" onClick={() => setMenuState(false)}>
                                        <span>Book Consultation</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
