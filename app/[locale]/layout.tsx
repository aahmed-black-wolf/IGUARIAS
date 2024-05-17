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

export default async function Layout({ children, params: { locale } }: Props) {
  const messages = await getMessages();

  return (
    <html
      className={
        locale === "en" ? fontPoppins.className : fontTajawal.className
      }
      lang={locale}
      dir={locale == "ar" ? "rtl" : "ltr"}
    >
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-BWW76VX6QX"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BWW76VX6QX');
          `,
          }}
        />
      </head>
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
