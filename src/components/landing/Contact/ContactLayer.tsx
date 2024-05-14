import React, { ReactNode } from "react";

import Image from "next/image";

import ContactLayerImage from "@/public/assets/images/layers/contact-layer.svg";

export default function ContactLayer({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <Image
        className="hidden md:block"
        src={ContactLayerImage}
        fill
        alt="ContactLayerImage"
      />
      {children}
    </div>
  );
}
