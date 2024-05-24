import React, {
  useEffect,
  useState,
} from 'react';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { IoMdArrowRoundUp } from 'react-icons/io';

import { transition } from '@/libs/animationt';
import { cn } from '@/libs/cn';
import styles from '@/src/styles/scroll.module.css';
import { Button } from '@nextui-org/button';

export default function ScrollButton() {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const event = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
        return;
      }
      setIsVisible(false);
    };

    window.addEventListener("scroll", event);
    return () => {
      window.removeEventListener("scroll", event);
    };
  }, []);

  return (
    <motion.div
      transition={transition}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0,
        position: "fixed",
      }}
      className=" z-[200] hidden md:block bottom-5 ltr:right-5 rtl:left-5"
    >
      <div>
        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          type="submit"
          radius="full"
          style={{ backgroundColor: "#fff" }}
          className={cn(
            "m-0 font-[600] p-0 min-w-[40px] h-[40px]",
            theme === "dark" ? styles.box : styles.box2
          )}
          color="primary"
        >
          <IoMdArrowRoundUp />
        </Button>
      </div>
    </motion.div>
  );
}
