import React from "react";

import Image, { StaticImageData } from "next/image";

type Props = {
  src: StaticImageData;
  title: string;
  description: string;
};

export default function Card({ src, title, description }: Props) {
  return (
    <div className="flex md:flex-row text-center flex-col md:text-start justify-center  gap-6 items-center md:items-start  md:justify-start">
      <div className="min-w-[70px] flex relative justify-center items-center h-[60px]">
        <Image src={src} alt={`${src}`} fill />
      </div>
      <div className="flex flex-col text-sm md:text-md px-2 gap-1">
        <div className="font-[600] lg:text-lg">{title}</div>
        <div className="text-default-400">{description}</div>
      </div>
    </div>
  );
}
