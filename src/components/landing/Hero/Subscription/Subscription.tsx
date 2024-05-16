import React from 'react';

import { useTranslations } from 'next-intl';
import {
  Controller,
  FormProvider,
  useForm,
} from 'react-hook-form';
import { SiMinutemailer } from 'react-icons/si';

import { cn } from '@/libs/cn';
import styles from '@/src/styles/subscription.module.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';

import {
  subscriptionSchema,
  subscriptionType,
} from './Schema';

export default function Subscription() {
  const t = useTranslations("landing");
  const formState = useForm<subscriptionType>({
    resolver: zodResolver(subscriptionSchema),
  });
  const { register } = formState;
  return (
    <FormProvider {...formState}>
      <form
        onSubmit={formState.handleSubmit(() =>
          console.log("Abdelrahman Ahmed")
        )}
        className="flex gap-3 item-center justify-center lg:justify-start"
      >
        <Controller
          control={formState.control}
          name="email"
          render={({ field, fieldState: { error } }) => (
            <Input
              {...field}
              classNames={{
                inputWrapper: "ltr:pr-0  rtl:pl-0",
              }}
              className="w-[400px]"
              radius="sm"
              size="lg"
              isInvalid={!!error?.message}
              errorMessage={error?.message}
              startContent={
                <div className="ltr:pr-3 text-primary  rtl:pl-3">
                  <SiMinutemailer size="20px" />
                </div>
              }
              placeholder={t("subscribe")}
            />
          )}
        />
        <Button
          type="submit"
          radius="sm"
          size="lg"
          style={{ backgroundColor: "#fff" }}
          className={cn("m-0 font-[600]", styles.box)}
          color="primary"
        >
          {t("subscriptions")}
        </Button>
      </form>
    </FormProvider>
  );
}
