"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export interface Project {
  title: string;
  description: string;
  category: string;
  image?: string;
}

interface AnimatedCardStackProps {
  projects: Project[];
}

// Replace this URL with the actual path to your uploaded image (e.g., "/ai-by-misha.jpg")
const IMAGE_URL = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="800" height="800"><rect width="800" height="800" fill="%23000000"/><g transform="translate(400, 320)" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="900" fill="%23FFFFFF"><text x="-180" y="0" font-size="140" letter-spacing="-5">AI</text><g transform="translate(0, -50)"><circle cx="0" cy="0" r="70" fill="%23FFD13B"/><circle cx="-25" cy="-15" r="10" fill="%23000000"/><circle cx="25" cy="-15" r="10" fill="%23000000"/><path d="M -35 20 Q 0 60 35 20" stroke="%23000000" stroke-width="14" fill="none" stroke-linecap="round"/></g><text x="180" y="0" font-size="140" letter-spacing="-5">BY</text></g><g transform="translate(400, 480)" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="900" fill="%23FFFFFF"><text x="0" y="0" font-size="200" letter-spacing="-8">MISHA</text></g><g transform="translate(400, 620)" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="bold" fill="%23FFFFFF"><text x="0" y="0" font-size="20" letter-spacing="2">CREATIVE STUDIO</text><text x="0" y="30" font-size="20" letter-spacing="2">EST. 2026</text></g></svg>`;

const positionStyles = [
  { scale: 1, y: 12 },
  { scale: 0.95, y: -16 },
  { scale: 0.9, y: -44 },
]

const exitAnimation = {
  y: 340,
  scale: 1,
  zIndex: 10,
  opacity: 0,
}

const enterAnimation = {
  y: -16,
  scale: 0.9,
  opacity: 0,
}

function CardContent({ project }: { project: Project }) {
  return (
    <div className="flex h-full w-full flex-col gap-4">
      <div className="flex h-[180px] sm:h-[240px] w-full items-center justify-center overflow-hidden rounded-xl bg-black border border-white/5 shrink-0">
        <img
          src={project.image || IMAGE_URL}
          alt={project.title}
          className="h-full w-full select-none object-contain p-4"
        />
      </div>
      <div className="flex w-full items-start justify-between gap-3 px-2 pb-2">
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate font-display font-semibold text-lg text-white">{project.title}</span>
          <span className="text-white/50 text-sm line-clamp-2 mt-1 leading-relaxed">{project.description}</span>
        </div>
        <div className="shrink-0 mt-1">
           <span className="px-3 py-1 text-[10px] font-medium bg-white/10 border border-white/10 rounded-full text-white/80 whitespace-nowrap uppercase tracking-wider">
              {project.category}
           </span>
        </div>
      </div>
    </div>
  )
}

function AnimatedCard({
  project,
  index,
  isAnimating,
}: {
  project: Project
  index: number
  isAnimating: boolean
}) {
  const { scale, y } = positionStyles[index] ?? positionStyles[2]
  const zIndex = index === 0 && isAnimating ? 10 : 3 - index

  const exitAnim = index === 0 ? exitAnimation : undefined
  const initialAnim = index === 2 ? enterAnimation : undefined

  return (
    <motion.div
      key={project.title}
      initial={initialAnim}
      animate={{ y, scale, opacity: 1 }}
      exit={exitAnim}
      transition={{
        type: "spring",
        duration: 1,
        bounce: 0,
      }}
      style={{
        zIndex,
        left: "50%",
        x: "-50%",
        bottom: 0,
      }}
      className="absolute flex h-[320px] w-[calc(100vw-48px)] max-w-[320px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111] p-3 shadow-2xl will-change-transform sm:w-[460px] sm:h-[380px]"
    >
      <CardContent project={project} />
    </motion.div>
  )
}

export function AnimatedCardStack({ projects }: AnimatedCardStackProps) {
  const [queue, setQueue] = useState<Project[]>(projects)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleAnimate = () => {
    if (isAnimating || queue.length <= 1) return;
    setIsAnimating(true)

    setQueue((prev) => {
      const newQueue = [...prev]
      const first = newQueue.shift()
      if (first) newQueue.push(first)
      return newQueue
    })
    
    setTimeout(() => {
        setIsAnimating(false)
    }, 1000)
  }

  if (queue.length === 0) return null;

  return (
    <div className="flex w-full flex-col items-center justify-center py-4">
      <div className="relative h-[380px] w-full max-w-[500px] overflow-hidden sm:h-[460px]">
        <AnimatePresence initial={false}>
          {queue.slice(0, 3).map((project, index) => (
            <AnimatedCard key={project.title} project={project} index={index} isAnimating={isAnimating} />
          ))}
        </AnimatePresence>
      </div>

      <div className="relative z-10 mt-6 flex w-full items-center justify-center">
        <button
          onClick={handleAnimate}
          disabled={isAnimating || queue.length <= 1}
          className="flex h-12 cursor-pointer select-none items-center justify-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/5 px-8 font-medium text-white transition-all hover:bg-white/10 active:scale-[0.98] disabled:opacity-50"
        >
          Next Project
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="square"
          >
            <path d="M9.5 18L15.5 12L9.5 6" />
          </svg>
        </button>
      </div>
    </div>
  )
}
