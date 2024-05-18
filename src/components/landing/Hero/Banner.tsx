"use client";
import { useTheme } from 'next-themes';
import Image from 'next/image';

import HeroDark from '@/public/assets/images/hero/hero-dark.gif';
import HeroLight from '@/public/assets/images/hero/hero-light.gif';

export default function Banner() {
  const { theme } = useTheme();
  return (
    <div className="flex-1 flex justify-center  lg:justify-end items-center">
      <div className="dark:hidden block">
        <Image alt="Hero" src={HeroLight} />
      </div>

      <div className=" hidden  dark:block">
        <Image alt="Hero" src={HeroDark} />
      </div>
    </div>
  );
}
