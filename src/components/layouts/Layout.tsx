"use client";
import 'react-toastify/dist/ReactToastify.css';

import { ReactNode } from 'react';

import { useLocale } from 'next-intl';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useRouter } from 'next/navigation';
import { ToastContainer } from 'react-toastify';

import { NextUIProvider } from '@nextui-org/react';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import ScrollButton from './Controllers/ScrollButton';
import Footer from './Footer';
import Nav from './Headers/Nav/Nav';

const queryClient = new QueryClient();

export default function UILayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const locale = useLocale();
  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider attribute="class" defaultTheme="light">
        <QueryClientProvider client={queryClient}>
          <Nav />
          {children}
          <ToastContainer rtl={locale === "ar"} />
          <ScrollButton />
          <Footer />
        </QueryClientProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
