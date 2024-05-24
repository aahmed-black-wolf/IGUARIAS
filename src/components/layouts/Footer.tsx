import React from 'react';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import {
  MdAlternateEmail,
  MdPhone,
} from 'react-icons/md';
import { SiFacebook } from 'react-icons/si';

import { cn } from '@/libs/cn';
import FooterLogo from '@/public/Logo/footer-logo.svg';
import { fontPoppins } from '@/src/config/fonts';
import { siteConfig } from '@/src/config/site';
import { Link } from '@nextui-org/link';

export default function Footer() {
  const t = useTranslations("landing");
  return (
    <div className="bg-drk-800 dark:bg-secondary  mt-[200px]">
      <div className="container bg-drk-800 dark:bg-secondary flex flex-col items-center md:items-start gap-[60px] md:gap-[20px] mx-auto px-4 py-10">
        <div className="mb-[20px] w-full flex justify-end">
          <Image src={FooterLogo} alt="FooterLogo" />
        </div>

        <div className="flex gap-3">
          <div className=" md:text-xl text-center flex-col md:text-left md:flex-row dark:text-default-900 flex gap-2 items-center  text-default-100">
            <div className="text-primary">
              <MdPhone size={20} />
            </div>
            <Link
              dir="ltr"
              href="tel:+351 912-516-252"
              className={cn(
                "text-sm underline text-white ",
                fontPoppins.className
              )}
            >
              +351 912 516 252
            </Link>
          </div>

          <div className=" md:text-xl text-center flex-col md:text-left md:flex-row  flex gap-2 items-center  text-default-100">
            <div className="text-primary">
              <MdAlternateEmail size={20} />
            </div>
            <Link
              dir="ltr"
              href="mailto:info@iguarias.co"
              className={cn(
                "text-sm text-white underline",
                fontPoppins.className
              )}
            >
              info@iguarias.co
            </Link>
          </div>
        </div>

        <div className=" md:text-xl text-center flex-col md:text-left md:flex-row dark:text-default-900 flex gap-2 items-center  text-default-100">
          <div className="text-primary">
            <IoLocationSharp size={20} />
          </div>
          <div className="text-sm">{t("address")}</div>
        </div>
        <div className="flex gap-3 justify-center w-full md:justify-end">
          {siteConfig.links.map((link, index) => (
            <Link
              href={link.url}
              target="_blank"
              key={index}
              className="text-primary-200 px-5 dark:text-default-900"
            >
              <div className="flex text-white items-center gap-2">
                <div>
                  {[<FaLinkedin key={2} />, <SiFacebook key={1} />][index]}
                </div>
                <div>{t(link.label)}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="text-default-200  dark:text-default-600 text-center md:test-left text-sm  p-4 border-t-[1px]">
        {t("copy_rights", { date: new Date().getFullYear() })}
      </div>
    </div>
  );
}
