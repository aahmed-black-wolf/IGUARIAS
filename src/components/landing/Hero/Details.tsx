"use client";
import {
  useLocale,
  useTranslations,
} from 'next-intl';

import {
  fontCairo,
  fontVolkhov,
} from '@/src/config/fonts';
import { cn } from '@nextui-org/react';

import Subscription from './Subscription/Subscription';

export default function Details() {
  const t = useTranslations("landing");
  const locale = useLocale();
  return (
    <section className="flex justify-center lg:justify-start flex-1 gap-8 flex-col">
      <div className="text-sm text-center lg:text-start font-bold text-secondary dark:text-default-900">
        {t("hero_title")}
      </div>
      <h2
        className={cn(
          "text-[2rem]  md:text-[3rem] text-center lg:text-start lg:text-[4.3rem]  rtl:md:leading-[67px] leading-[33px] ltr:md:leading-[47px] rtl:lg:leading-[90px] ltr:lg:leading-[63px] capitalize dark:text-primary font-bold w-full lg:max-w-[80%]",
          locale === "en" ? fontVolkhov.className : fontCairo.className
        )}
      >
        <strong className="text-primary  dark:text-default-900">
          {t("lisbon")}
        </strong>{" "}
        {t("lisbon_label")}
      </h2>
      <h1 className="text-default-500 text-center lg:text-sm lg:text-start font-[600] inline-block w-full leading-[25px]  lg:w-[80%] text-xs">
        {t("about_company")}
      </h1>
      <Subscription />
    </section>
  );
}
