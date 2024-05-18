import './global.css';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import Meta from '@/src/components/layouts/Heads/Meta';
import UILayout from '@/src/components/layouts/Layout';
import {
  fontPoppins,
  fontTajawal,
} from '@/src/config/fonts';

export default async function Layout({ children, params: { locale } }: any) {
  const messages = await getMessages(locale);

  return (
    <html
      className={
        locale === "en" ? fontPoppins.className : fontTajawal.className
      }
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <Meta locale={locale} />
      <body>
        <NextIntlClientProvider messages={messages}>
          <UILayout>{children}</UILayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
