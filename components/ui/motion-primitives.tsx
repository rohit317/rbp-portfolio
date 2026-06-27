"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function FadeIn({
  children,
  delay = 0,
  duration = 0.8,
  className,
  triggerOnce = false,
  amount = 0.3,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  triggerOnce?: boolean;
  amount?: number;
}): ReactNode {
  const motionProps = triggerOnce
    ? {
        initial: { opacity: 0, y: 12 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount },
      }
    : {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <motion.div
      {...motionProps}
      transition={{ duration, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScaleUnblur({
  children,
  delay = 0,
  duration = 1,
  className,
  triggerOnce = false,
  amount = 0.3,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  triggerOnce?: boolean;
  amount?: number;
}): ReactNode {
  const motionProps = triggerOnce
    ? {
        initial: { opacity: 0, scale: 0.7, filter: "blur(20px)" },
        whileInView: { opacity: 1, scale: 1, filter: "blur(0px)" },
        viewport: { once: true, amount },
      }
    : {
        initial: { opacity: 0, scale: 0.7, filter: "blur(20px)" },
        animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
      };

  return (
    <motion.div
      {...motionProps}
      transition={{ duration, delay, ease: EASE }}
      style={{ transformOrigin: "center" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
