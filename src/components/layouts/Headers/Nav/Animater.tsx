import React, { ReactNode, useRef, useState } from "react";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";

import { cn } from "@/libs/cn";

const tr = {
  duration: 0.5,
  ease: "circInOut",
  type: "spring",
  damping: 20,
  stiffness: 200,
};

type Props = {
  children: ReactNode;
  isAds?: boolean;
};

export default function Animater({ children, isAds }: Props) {
  const { scrollY } = useScroll();
  const [isScrollDown, setIsScrollDown] = useState(true);
  const prevScrollY = useRef<number>(0);
  const [isInTop, setIsInTop] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if ((latest > 100 && latest < prevScrollY.current) || latest === 0) {
      setIsScrollDown(true);
    } else {
      setIsScrollDown(false);
    }
    if (latest === 0) {
      setIsInTop(true);
    } else {
      setIsInTop(false);
    }
    prevScrollY.current = latest;
  });

  if (isAds)
    return (
      <motion.div
        animate={{
          y: isScrollDown ? (isInTop ? 0 : 65) : -100,
          top: 0,
          position: "sticky",
        }}
        transition={tr}
        className={cn(!isInTop && "shadow-md", "z-[100]")}
      >
        {children}
      </motion.div>
    );

  return (
    <motion.div
      animate={{
        y: isScrollDown ? 0 : -100,
        top: 0,
        position: "sticky",
      }}
      transition={tr}
      className={cn(!isInTop && "shadow-md", "z-[100]")}
    >
      {children}
    </motion.div>
  );
}
