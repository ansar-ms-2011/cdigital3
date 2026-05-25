import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "fade" | "zoom";

const offsets: Record<Direction, { x?: number; y?: number; scale?: number }> = {
  up: { y: 28 },
  down: { y: -28 },
  left: { x: 28 },
  right: { x: -28 },
  fade: {},
  zoom: { scale: 0.94 },
};

interface RevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className,
  once = true,
}: RevealProps) {
  const off = offsets[direction];
  const variants: Variants = {
    hidden: { opacity: 0, x: off.x ?? 0, y: off.y ?? 0, scale: off.scale ?? 1 },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.2 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}

export function Stagger({ children, className, stagger = 0.08, delay = 0 }: StaggerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, direction = "up" }: { children: ReactNode; className?: string; direction?: Direction }) {
  const off = offsets[direction];
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, x: off.x ?? 0, y: off.y ?? 0, scale: off.scale ?? 1 },
        show: { opacity: 1, x: 0, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}
