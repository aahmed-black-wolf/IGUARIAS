import React, { useState } from 'react';

import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import Confetti from 'react-confetti';
import {
  Controller,
  FormProvider,
  useForm,
} from 'react-hook-form';
import { SiMinutemailer } from 'react-icons/si';
import { toast } from 'react-toastify';

import { cn } from '@/libs/cn';
import useWindowSize from '@/src/hooks/useWindowSize';
import styles from '@/src/styles/subscription.module.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import {
  Checkbox,
  Link,
} from '@nextui-org/react';

import {
  subscriptionSchema,
  subscriptionType,
} from './Schema';

export default function Subscription() {
  const t = useTranslations("landing");
  const { themes, theme } = useTheme();
  const [isDone, setIsDone] = useState(false);
  const { height, width } = useWindowSize();
  const formMethods = useForm<subscriptionType>({
    resolver: zodResolver(subscriptionSchema),
  });
  const { control, reset, handleSubmit } = formMethods;

  const handleSubscription = (data: subscriptionType) => {
    setIsDone(true);
    toast.info(t("congratulations_message"), {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme,
    });

    reset();
  };

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={handleSubmit(handleSubscription)}
        className="flex  gap-3 item-center justify-center lg:justify-start"
      >
        <div className="flex flex-col gap-3">
          <Controller
            control={control}
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
          <Controller
            control={control}
            name="terms"
            render={({ field, fieldState: { error } }) => (
              <Checkbox
                isSelected={field.value}
                isInvalid={!!error?.message}
                onValueChange={field.onChange}
                size="sm"
              >
                <div className="md:text-xs text-[10px] w-max flex gap-2 items-center">
                  <span> You agree to our Terms of Service and</span>{" "}
                  <Link className="text-xs" href="/#/terms">
                    Privacy and Policy
                  </Link>
                </div>
              </Checkbox>
            )}
          />
        </div>
        <Button
          type="submit"
          radius="sm"
          size="lg"
          style={{ backgroundColor: "#fff" }}
          className={cn(
            "m-0 font-[600]",
            theme === "dark" ? styles.box : styles.box2
          )}
          color="primary"
        >
          {t("subscriptions")}
        </Button>

        <Confetti
          run={isDone}
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={3000}
        />
      </form>
    </FormProvider>
  );
}
