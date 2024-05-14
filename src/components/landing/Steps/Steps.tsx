import React from 'react';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

import TravelImage from '@/public/assets/images/serves/animated-travel.png';
import Head from '@/src/components/layouts/Heads/Head';

import Card from './Card';
import { mockStepsData } from './mock';

export default function Steps() {
  const t = useTranslations("landing");
  return (
    <div className="container mx-auto px-4">
      <div className="hidden md:block">
        <Head
          isInline
          title={t("book_title")}
          slug={t("book_slug")}
          sub={t("book_sub")}
        />
      </div>

      <div className="md:hidden block">
        <Head
          title={t("book_title")}
          slug={t("book_slug")}
          sub={t("book_sub")}
        />
      </div>
      <div className="flex flex-col-reverse gap-[60px] lg:gap-0 lg:flex-row justify-between items-end w-full ">
        <div className="flex max-w-[800px] flex-col gap-[60px]">
          {mockStepsData.map(({ description, src, title }, index) => (
            <Card
              key={index}
              title={t(title)}
              description={t(description)}
              src={src}
            />
          ))}
        </div>
        <div className=" min-w-[300px] lg:min-w-[600px]  lg:flex justify-center items-center">
          <div className="flex w-full justify-start item-start">
            <Image src={TravelImage} alt="TravelGif" />
          </div>
        </div>
      </div>
    </div>
  );
}
