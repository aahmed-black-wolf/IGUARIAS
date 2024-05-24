"use client";
import { useLocale } from 'next-intl';
import { useTheme } from 'next-themes';
import Markdown from 'react-markdown';

import { cn } from '@/libs/cn';
import {
  PRIVACY,
  PRIVACY_AR,
} from '@/markdown/privacy';

export default function Terms() {
  const { theme } = useTheme();
  const locale = useLocale();
  return (
    <div className="container  mx-auto py-[60px] px-4">
      <Markdown className={cn("prose ", theme == "dark" && "prose-invert")}>
        {locale === "en" ? PRIVACY : PRIVACY_AR}
      </Markdown>
    </div>
  );
}
