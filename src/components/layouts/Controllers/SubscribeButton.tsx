import React from 'react';

import styles from '@/src/styles/subscribe.module.css';
import { Button } from '@nextui-org/button';

type Props = {
  width: number;
  title: string;
  isPending: boolean;
};

export default function SubscribeButton({ width, title, isPending }: Props) {
  return (
    <div>
      <svg
        className={styles.svg}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="highContrastGraphic"
            />
            <feComposite
              in="SourceGraphic"
              in2="highContrastGraphic"
              operator="atop"
            />
          </filter>
        </defs>
      </svg>

      <Button
        color="primary"
        type="submit"
        isLoading={isPending}
        radius="sm"
        size={width > 680 ? "lg" : "md"}
        className="overflow-visible text-white font-[600]"
        id={styles["gooey-button"]}
      >
        {title}
        <span className={styles.bubbles}>
          <span className={styles.bubble}></span>
          <span className={styles.bubble}></span>
          <span className={styles.bubble}></span>
          <span className={styles.bubble}></span>
          <span className={styles.bubble}></span>
          <span className={styles.bubble}></span>
          <span className={styles.bubble}></span>
          <span className={styles.bubble}></span>
          <span className={styles.bubble}></span>
          <span className={styles.bubble}></span>
        </span>
      </Button>
    </div>
  );
}
