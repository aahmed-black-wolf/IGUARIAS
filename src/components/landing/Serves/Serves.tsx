import React from 'react';

import { useTranslations } from 'next-intl';

import Head from '@/src/components/layouts/Heads/Head';

import Card from './Card';
import { cardsMockDate } from './mock';

const headProps = {
  title: "we_offer",
  sub: "best_services",
  slug: "category",
};

export default function Serves() {
  const t = useTranslations("landing");
  return (
    <div className="container mx-auto">
      <Head
        title={t(headProps.title)}
        sub={t(headProps.sub)}
        slug={t(headProps.slug)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-[60px]	md:gap-[30px] px-4 lg:grid-cols-4">
        {cardsMockDate.map(({ title, description, src }, index) => (
          <Card
            key={index}
            title={t(title)}
            description={t(description)}
            src={src}
          />
        ))}
      </div>
    </div>
  );
}
