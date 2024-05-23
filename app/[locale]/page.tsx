import { pick } from "lodash";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import Landing from "@/src/components/landing/Landing";

export default async function page() {
  const messages = await getMessages();
  const locale = await getLocale();
  return (
    <NextIntlClientProvider
      messages={pick(messages, ["landing", "contact_form"])}
      locale={locale}
    >
      <Landing key={"landing"} />
    </NextIntlClientProvider>
  );
}
