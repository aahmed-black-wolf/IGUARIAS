import React from 'react';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { SiFacebook } from 'react-icons/si';

import FooterLogo from '@/public/Logo/footer-logo.svg';
import { siteConfig } from '@/src/config/site';
import { Button } from '@nextui-org/button';

export default function Footer() {
  const t = useTranslations("landing");
  return (
    <div className="bg-drk-800 dark:bg-secondary  mt-[200px]">
      <div className="container bg-drk-800 dark:bg-secondary flex flex-col items-center md:items-start gap-[60px] md:gap-[30px] mx-auto px-4 py-10">
        <Image src={FooterLogo} alt="FooterLogo" />
        <div className=" md:text-xl text-center flex-col md:text-left md:flex-row dark:text-default-900 flex gap-2 items-center  text-default-100">
          <div>
            <IoLocationSharp size={25} />
          </div>
          <div>{t("address")}</div>
        </div>
        <div className="flex gap-3 justify-center w-full md:justify-end">
          {siteConfig.links.map((link, index) => (
            <Button
              key={index}
              color="secondary"
              className="dark:bg-drk-900 dark:text-default-900"
              startContent={
                [<FaLinkedin key={2} />, <SiFacebook key={1} />][index]
              }
            >
              {t(link.label)}
            </Button>
          ))}
        </div>
      </div>
      <div className="text-default-200  dark:text-default-600 text-center md:test-left text-sm  p-4 border-t-[1px]">
        {t("copy_rights", { date: new Date().getFullYear() })}
      </div>
    </div>
  );
}
