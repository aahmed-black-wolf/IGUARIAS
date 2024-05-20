import React from "react";

import { useTranslations } from "next-intl";

import Card from "./Card";
import { aboutMockData } from "./mock";

export default function About() {
  const t = useTranslations("landing");
  return (
    <div
      id="about_us"
      className="bg-cover mt-[200px] bg-fixed relative  bg-no-repeat py-20 bg-[url('/assets/images/hero/about.jpg')]"
    >
      <div className="absolute inset-0 z-[2] bg-[#191d33da]"></div>
      <div className="flex container z-[4]  relative px-4 mx-auto flex-col gap-[30px]">
        <div className="flex justify-center lg:justify-start gap-2 items-center font-[600] lg:text-[3rem] mb-[40px] text-[2.5rem]">
          <div className="text-[#c8cbdf]">{t("about_title")}</div>
          <div className="text-primary">{t("about_sub")}</div>
        </div>
        <div className="grid gap-[50px]  grid-cols-1 w-full">
          {aboutMockData.map(({ title, description, src }, index) => (
            <Card
              key={index}
              index={index}
              title={t(title)}
              description={t(description)}
              src={src}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
