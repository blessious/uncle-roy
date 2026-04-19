import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "scale" | "blur";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: Direction;
  distance?: number;
  once?: boolean;
  amount?: number;
  as?: "div" | "section" | "article" | "span" | "li";
}

const make = (direction: Direction, distance: number): Variants => {
  const map: Record<Direction, { x?: number; y?: number; scale?: number; filter?: string }> = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    scale: { scale: 0.92 },
    blur: { y: distance / 2, filter: "blur(12px)" },
  };
  const from = map[direction];
  return {
    hidden: { opacity: 0, ...from },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
    },
  };
};

export const Reveal = ({
  children,
  className,
  delay = 0,
  duration = 0.8,
  direction = "up",
  distance = 32,
  once = true,
  amount = 0.2,
  as = "div",
}: RevealProps) => {
  const prefersReduced = useReducedMotion();
  const Comp = motion[as] as typeof motion.div;

  if (prefersReduced) {
    return <Comp className={className}>{children}</Comp>;
  }

  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={make(direction, distance)}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Comp>
  );
};

export const StaggerGroup = ({
  children,
  className,
  stagger = 0.1,
  delay = 0,
  amount = 0.2,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  amount?: number;
  as?: "div" | "section" | "ul";
}) => {
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </Comp>
  );
};

export const StaggerItem = ({
  children,
  className,
  direction = "up",
  distance = 28,
  duration = 0.7,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  distance?: number;
  duration?: number;
  as?: "div" | "article" | "li" | "span";
}) => {
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp
      className={className}
      variants={{
        hidden: { opacity: 0, y: direction === "up" ? distance : direction === "down" ? -distance : 0, x: direction === "left" ? distance : direction === "right" ? -distance : 0, scale: direction === "scale" ? 0.92 : 1 },
        visible: { opacity: 1, y: 0, x: 0, scale: 1 },
      }}
      transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Comp>
  );
};
