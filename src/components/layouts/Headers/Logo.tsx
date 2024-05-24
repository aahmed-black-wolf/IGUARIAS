"use client";

import {
  useEffect,
  useState,
} from 'react';

import { useLocale } from 'next-intl';
import { useTheme } from 'next-themes';
import Image from 'next/image';

import DarkLogoIcon from '@/public/Logo/dark-logo.svg';
import LightLogoIcon from '@/public/Logo/logo.svg';
import { Link } from '@nextui-org/link';

export default function Logo() {
  const { theme } = useTheme();
  const [isMount, setIsMounted] = useState(false);
  const locale = useLocale();

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <>
      {isMount && (
        <Link href={`/${locale}`}>
          {theme === "light" && (
            <Image
              width={90}
              height={85}
              src={LightLogoIcon}
              alt="LightLogoIcon"
            />
          )}
          {theme == "dark" && (
            <Image
              width={90}
              height={85}
              src={DarkLogoIcon}
              alt="DarkLogoIcon"
            />
          )}
        </Link>
      )}
    </>
  );
}
