import React from 'react';

import Image, { StaticImageData } from 'next/image';

type Props = {
  src: StaticImageData;
  title: string;
  description: string;
};

export default function Card({ src, title, description }: Props) {
  return (
    <div className="max-w-[340px] min-h-[340px] dark:border-default-200 dark:border-[1px] p-2 shadow-medium rounded-[50px] rounded-tl-none rounded-br-none justify-center text-center items-center flex flex-col gap-[30px]">
      <div>
        <Image width={100} src={src} alt={`${src}`} />
      </div>
      <div className="flex flex-col gap-[10px]">
        <div className="font-[600]">{title}</div>
        <div className="text-default-600 text-sm">{description}</div>
      </div>
    </div>
  );
}
