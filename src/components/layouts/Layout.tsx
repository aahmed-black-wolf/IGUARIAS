"use client";
import 'react-toastify/dist/ReactToastify.css';

import { ReactNode } from 'react';

import { useLocale } from 'next-intl';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useRouter } from 'next/navigation';
import { ToastContainer } from 'react-toastify';

import { NextUIProvider } from '@nextui-org/react';

export default function UILayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const locale = useLocale();
  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider attribute="class" defaultTheme="light">
        {children}
        <ToastContainer rtl={locale === "ar"} />
      </NextThemesProvider>
    </NextUIProvider>
  );
}
