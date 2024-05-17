import { useLocale } from 'next-intl';
import Image from 'next/image';

import HeroLayerTwo from '@/public/assets/images/hero/hero-layer-two.png';
import HeroLayer from '@/public/assets/images/hero/hero-layer.png';

import Banner from './Banner';
import Details from './Details';

export default function Hero() {
  const locale = useLocale();
  return (
    <div className=" relative   md:h-[calc(65vh-80px)] mb-[100px] lg:h-[calc(90vh-80px)] flex justify-between">
      <div className="container  relative overflow-hidden    mx-auto px-4 xl:p-0 z-[15]">
        <div className="flex flex-col-reverse gap-[30px] lg:gap-[0] lg:flex-row w-full justify-between mt-[40px] lg:mt-[150px]">
          <Details />
          <Banner />
        </div>
      </div>
      <div className="absolute hidden lg:block w-[800px] h-[800px] rtl:left-0 ltr:right-0 top-0 z-[10]">
        <Image
          alt="HeroLayer"
          src={locale === "en" ? HeroLayer : HeroLayerTwo}
          fill
        />
      </div>
    </div>
  );
}
