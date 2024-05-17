import React from 'react';

import { useTranslations } from 'next-intl';
import { useFormContext } from 'react-hook-form';

import { Textarea } from '@nextui-org/input';

export default function Message() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const t = useTranslations("contact_form");
  return (
    <Textarea
      {...register("message")}
      isInvalid={!!errors["message"]?.message}
      //  @ts-ignore
      errorMessage={errors["message"]?.message}
      label={t("message")}
      variant="bordered"
      labelPlacement="outside"
      placeholder={t("your_message")}
      radius="sm"
      color="primary"
      classNames={{
        label: "text-default-900",
        input: "min-h-[200px] p-6 text-lg",
      }}
    />
  );
}
