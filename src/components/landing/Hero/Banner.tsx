import Image from 'next/image';

import Hero from '@/public/assets/images/hero/hero.png';

export default function Banner() {
  return (
    <div className="flex-1 flex justify-center  lg:justify-end items-center">
      <div className="hidden lg:block">
        <Image alt="Hero" src={Hero} />
      </div>

      <div className="block lg:hidden">
        <Image alt="Hero" src={Hero} />
      </div>
    </div>
  );
}
