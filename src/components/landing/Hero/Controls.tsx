import React from 'react';

import { useTranslations } from 'next-intl';
import { FaPlay } from 'react-icons/fa';

import { Button } from '@nextui-org/button';

import Popup from '../../layouts/Popup';
import Booking from '../Booking/Booking';

export default function Controls() {
  const t = useTranslations("landing");

  return (
    <div className="flex justify-center lg:justify-start gap-10 lg:gap-6 ">
      <Popup title="Easy and simple" body={<Booking />}>
        <Button
          color="primary"
          className="font-[700] min-w-[150px]  h-[50px]"
          variant="shadow"
        >
          {t("discover")}
        </Button>
      </Popup>
      <div className="flex items-center gap-3">
        <Button
          id="watch"
          color="secondary"
          variant="shadow"
          className="lg:min-w-[50px] min-w-[40px] h-[40px] rounded-[50px] lg:h-[50px] p-0"
        >
          <FaPlay />
        </Button>
        <Button
          as={"label"}
          variant="light"
          htmlFor="watch"
          className="text-secondary p-0 text-sm lg:text-md dark:text-default-900"
        >
          {t("watch_us")}
        </Button>
      </div>
    </div>
  );
}
