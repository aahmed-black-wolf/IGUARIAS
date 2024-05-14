import './global.css';

import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import UILayout from '@/src/components/layouts/Layout';
import {
  fontPoppins,
  fontTajawal,
} from '@/src/config/fonts';
import { siteConfig } from '@/src/config/site';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: "IGUARIAS - %s",
  },
  description: siteConfig.description,
};

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

// const locales = ["en", "ar"];

// export function generateStaticParams() {
//   return locales.map((locale) => ({ locale }));
// }
export default async function Layout({ children, params: { locale } }: Props) {
  const messages = await getMessages();
  // unstable_setRequestLocale(locale);

  return (
    <html
      className={
        locale === "en" ? fontPoppins.className : fontTajawal.className
      }
      lang={locale}
      dir={locale == "ar" ? "rtl" : "ltr"}
    >
      <body>
        <UILayout>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </UILayout>
      </body>
    </html>
  );
}
