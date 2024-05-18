import { useLocale } from 'next-intl';

import Banner from './Banner';
import Details from './Details';

export default function Hero() {
  const locale = useLocale();
  return (
    <div className=" relative   md:h-[calc(65vh-80px)] mb-[100px] lg:h-[calc(80vh-80px)] flex justify-between">
      <div className="container  relative     mx-auto px-4 xl:p-0 z-[15]">
        <div className="flex flex-col-reverse gap-[30px] lg:gap-[0] lg:flex-row w-full justify-between mt-[40px] lg:mt-[150px]">
          <Details />
          <Banner />
        </div>
      </div>
    </div>
  );
}
