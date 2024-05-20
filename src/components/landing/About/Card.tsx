import React from "react";

import Image, { StaticImageData } from "next/image";

import { cn } from "@/libs/cn";

type Props = {
  src: StaticImageData;
  title: string;
  description: string;
  index: number;
};
export default function Card({ src, title, description, index }: Props) {
  return (
    <div
      className={cn(
        "flex",
        index !== 0 && "lg:ltr:ml-[100px]   lg:rtl:mr-[100px] "
      )}
    >
      <div className="flex flex-col lg:flex-row justify-center items-center gap-[30px]">
        <Image width={200} height={80} src={src} alt={`${src}`} />
        <div className="flex flex-col gap-3">
          <div className="text-2xl text-white text-center lg:text-start font-[600]">
            {title}
          </div>
          <div className="max-w-[600px] text-white text-center lg:text-start text-xs lg:text-sm">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}
