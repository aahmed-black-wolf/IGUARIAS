import React from "react";

import { useTranslations } from "next-intl";

import Head from "@/src/components/layouts/Heads/Head";

import Card from "./Card";
import { serviceMockDate } from "./mock";

const headProps = {
  title: "we_offer",
  sub: "best_services",
  slug: "category",
};

export default function Service() {
  const t = useTranslations("landing");
  return (
    <div className="container px-4 flex justify-center flex-col items-center mx-auto">
      <Head
        title={t(headProps.title)}
        sub={t(headProps.sub)}
        slug={t(headProps.slug)}
      />
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-[50px]">
        {serviceMockDate.map(({ title, description, src }, index) => (
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
