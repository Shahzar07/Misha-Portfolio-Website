import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, HTMLMotionProps } from "motion/react";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

// CVA for card variants - strictly black and white
const cardVariants = cva(
  "relative flex flex-col justify-between w-full p-8 overflow-hidden rounded-3xl border border-white/5 transition-colors duration-300 ease-in-out group hover:border-white/20 bg-[#111] text-white",
  {
    variants: {
      variant: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ServiceCardProps
  extends Omit<HTMLMotionProps<"div">, "title">,
    VariantProps<typeof cardVariants> {
  /**
   * The main title of the card.
   */
  title: string;
  /**
   * The description of the service.
   */
  description?: string;
  /**
   * The URL the card's link should point to.
   */
  href: string;
  /**
   * The source URL for the decorative image.
   */
  imgSrc?: string;
  /**
   * The alt text for the decorative image, for accessibility.
   */
  imgAlt?: string;
  /**
   * Optional Lucide icon to use instead of an image for a cleaner B&W look.
   */
  icon?: React.ElementType;
}

const ServiceCard = React.forwardRef<HTMLDivElement, ServiceCardProps>(
  ({ className, variant, title, description, href, imgSrc, imgAlt, icon: Icon, ...props }, ref) => {
    
    // Animation variants for Framer Motion
    const cardAnimation = {
      hover: {
        scale: 1.02,
        transition: { duration: 0.3 },
      },
    };

    const imageAnimation = {
      hover: {
        scale: 1.1,
        rotate: 3,
        x: 10,
        transition: { duration: 0.4, ease: "easeInOut" as const },
      },
    };
    
    const arrowAnimation = {
        hover: {
            x: 5,
            transition: { duration: 0.3, ease: "easeInOut" as const, repeat: Infinity, repeatType: "reverse" as const },
        }
    }

    return (
      <motion.div
        className={cn(cardVariants({ variant, className }))}
        ref={ref}
        variants={cardAnimation}
        whileHover="hover"
        {...props}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10 flex flex-col h-full">
          <h3 className="text-2xl font-display font-semibold tracking-tight mb-2">{title}</h3>
          {description && (
            <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-[80%]">{description}</p>
          )}
          <a
            href={href}
            aria-label={`Learn more about ${title}`}
            className="mt-auto flex items-center text-sm font-semibold text-white/80 group-hover:text-white group-hover:underline uppercase tracking-wider"
          >
            LEARN MORE
            <motion.div variants={arrowAnimation}>
                <ArrowRight className="ml-2 h-4 w-4" />
            </motion.div>
          </a>
        </div>
        
        {imgSrc ? (
          <motion.img
            src={imgSrc}
            alt={imgAlt || ""}
            className="absolute -right-8 -bottom-8 w-40 h-40 object-contain opacity-40 group-hover:opacity-100 grayscale contrast-200 brightness-200 mix-blend-screen"
            variants={imageAnimation}
          />
        ) : Icon ? (
          <motion.div
            className="absolute -right-8 -bottom-8 text-white/5 group-hover:text-white/10 transition-colors duration-500"
            variants={imageAnimation}
          >
            <Icon className="w-48 h-48" />
          </motion.div>
        ) : null}
      </motion.div>
    );
  }
);
ServiceCard.displayName = "ServiceCard";

export { ServiceCard };
