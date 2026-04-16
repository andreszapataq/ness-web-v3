"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

type Tag = "div" | "section" | "ul" | "li" | "article";

type GroupProps = {
  children: ReactNode;
  as?: Tag;
  stagger?: number;
  delayChildren?: number;
  className?: string;
  once?: boolean;
  amount?: number;
};

type ItemProps = {
  children: ReactNode;
  as?: Tag;
  y?: number;
  duration?: number;
  className?: string;
};

export function StaggerGroup({
  children,
  as = "div",
  stagger = 0.1,
  delayChildren = 0,
  className,
  once = true,
  amount = 0.15,
}: GroupProps) {
  const Tag = motion[as] as typeof motion.div;
  const variants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: stagger,
        delayChildren,
      },
    },
  };
  return (
    <Tag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount, margin: "0px 0px -10% 0px" }}
    >
      {children}
    </Tag>
  );
}

export function StaggerItem({
  children,
  as = "div",
  y = 24,
  duration = 0.9,
  className,
}: ItemProps) {
  const Tag = motion[as] as typeof motion.div;
  const variants: Variants = {
    hidden: { opacity: 0, y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration, ease: EASE },
    },
  };
  return (
    <Tag className={className} variants={variants}>
      {children}
    </Tag>
  );
}
