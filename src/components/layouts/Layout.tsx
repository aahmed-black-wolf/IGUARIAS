"use client";
import 'react-toastify/dist/ReactToastify.css';

import { ReactNode } from 'react';

import { ThemeProvider } from 'next-themes';
import { useRouter } from 'next/navigation';
import { ToastContainer } from 'react-toastify';

import { NextUIProvider } from '@nextui-org/react';

export default function UILayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  return (
    <NextUIProvider navigate={router.push}>
      <ThemeProvider attribute="class" defaultTheme="light">
        {children}
        <ToastContainer />
      </ThemeProvider>
    </NextUIProvider>
  );
}
