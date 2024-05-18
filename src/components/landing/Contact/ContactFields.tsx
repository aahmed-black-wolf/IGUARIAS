import React from 'react';

import { useTranslations } from 'next-intl';
import {
  Controller,
  useFormContext,
} from 'react-hook-form';

import {
  Input,
  Select,
  SelectItem,
} from '@nextui-org/react';

import { fieldsLabels } from './Schema';

export default function ContactFields() {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext();
  const t = useTranslations("contact_form");

  return (
    <>
      <Controller
        control={control}
        name="gender"
        render={({ field, fieldState: { error } }) => (
          <Select
            {...field}
            isInvalid={!!error?.message}
            errorMessage={error?.message && t(error?.message)}
            selectedKeys={[field.value || "male"]}
            variant="bordered"
            labelPlacement="outside"
            label={t("gender")}
            size="lg"
            radius="sm"
            placeholder={t("select_gender")}
          >
            <SelectItem key="male" value="male">
              Male
            </SelectItem>
            <SelectItem key="female" value="female">
              Female
            </SelectItem>
            <SelectItem key="other" value="other">
              Other..
            </SelectItem>
          </Select>
        )}
      />

      {fieldsLabels.map((target, index) => (
        <Input
          {...register(target.name)}
          key={index}
          isInvalid={!!errors[target.name]?.message}
          //  @ts-ignore
          errorMessage={
            errors[target.name]?.message && t(errors[target.name]?.message)
          }
          size="lg"
          radius="sm"
          label={t(target.label)}
          labelPlacement="outside"
          placeholder={t("field_goes")}
          color="primary"
          variant="bordered"
          className="h-[50px]"
          classNames={{
            label: "text-default-900",
          }}
        />
      ))}
    </>
  );
}
