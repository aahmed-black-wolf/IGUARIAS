import React from 'react';

import { useTranslations } from 'next-intl';
import {
  Controller,
  useFormContext,
} from 'react-hook-form';

import { Textarea } from '@nextui-org/input';

export default function Message() {
  const formState = useFormContext();
  const t = useTranslations("contact_form");
  return (
    <Controller
      control={formState.control}
      name="message"
      render={({ field, formState: { errors } }) => (
        <Textarea
          {...field}
          label={t("message")}
          variant="bordered"
          labelPlacement="outside"
          placeholder={t("your_message")}
          radius="sm"
          color="primary"
          isInvalid={!!errors.message?.message}
          //@ts-ignore
          errorMessage={errors.message?.message}
          classNames={{
            label: "text-default-900",
            input: "min-h-[200px] p-6 text-lg",
          }}
        />
      )}
    />
  );
}
