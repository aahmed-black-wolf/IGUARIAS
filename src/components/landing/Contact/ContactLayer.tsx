import React, { ReactNode } from 'react';

import Image from 'next/image';

import ContactLayerImage from '@/public/assets/images/layers/contact-layer.svg';

export default function ContactLayer({ children }: { children: ReactNode }) {
  return (
    <div id="contact_us" className="relative">
      <Image
        className="hidden lg:block z-[-1]"
        src={ContactLayerImage}
        fill
        alt="ContactLayerImage"
      />
      {children}
    </div>
  );
}
