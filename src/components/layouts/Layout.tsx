"use client";
import { ReactNode } from 'react';

import { ThemeProvider } from 'next-themes';
import { useRouter } from 'next/navigation';

import { NextUIProvider } from '@nextui-org/react';

export default function UILayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  return (
    <NextUIProvider navigate={router.push}>
      <ThemeProvider attribute="class" defaultTheme="light">
        {children}
      </ThemeProvider>
    </NextUIProvider>
  );
}
