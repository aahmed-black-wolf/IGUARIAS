import React from 'react';

import { useTranslations } from 'next-intl';
import { MdOutlineAlternateEmail } from 'react-icons/md';

import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';

export default function Subscription() {
  const t = useTranslations("landing");
  return (
    <div className="flex gap-3 item-center">
      <Input
        classNames={{
          inputWrapper: "ltr:pr-0 rtl:pl-0",
        }}
        className="w-[400px]"
        radius="sm"
        size="lg"
        startContent={<MdOutlineAlternateEmail size="20px" />}
        placeholder={t("subscribe")}
      />
      <Button radius="sm" size="lg" className="m-0 font-[600]" color="primary">
        {t("subscriptions")}
      </Button>
    </div>
  );
}
