"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

type Tag = "div" | "section" | "article" | "header" | "ul" | "li" | "p" | "h2" | "h3" | "span";

type RevealProps = {
  children: ReactNode;
  as?: Tag;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
};

export function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 24,
  duration = 0.9,
  className,
  once = true,
  amount = 0.15,
}: RevealProps) {
  const Tag = motion[as] as typeof motion.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount, margin: "0px 0px -10% 0px" }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </Tag>
  );
}
