import Image from "next/image";

import HeroBoy from "@/public/assets/images/hero/hero-boy.png";

export default function Banner() {
  return (
    <div className="flex-1 flex justify-center  lg:justify-end items-center">
      <div className="hidden lg:block">
        <Image width={600} alt="HeroBoy" src={HeroBoy} />
      </div>

      <div className="block lg:hidden">
        <Image width={300} alt="HeroBoy" src={HeroBoy} />
      </div>
    </div>
  );
}
