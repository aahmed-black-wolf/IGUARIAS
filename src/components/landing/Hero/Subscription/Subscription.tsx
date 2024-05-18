import React, { useState } from 'react';

import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import Confetti from 'react-confetti';
import {
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
  const { theme } = useTheme();
  const [isDone, setIsDone] = useState(false);
  const { height, width } = useWindowSize();
  const formMethods = useForm<subscriptionType>({
    resolver: zodResolver(subscriptionSchema),
  });
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = formMethods;
  const handleSubscription = (data: subscriptionType) => {
    setIsDone(true);
    toast(t("congratulations_message"), {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme,
    });
    setTimeout(() => setIsDone(false), 5000);
    reset();
  };

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={handleSubmit(handleSubscription)}
        className="flex flex-col gap-3 item-center justify-center lg:justify-start"
      >
        <div className="flex gap-2 items-center">
          <Input
            {...register("email")}
            classNames={{
              inputWrapper: "ltr:pr-0  rtl:pl-0",
            }}
            className="w-[300px] lg:w-[400px]"
            radius="sm"
            size={width > 680 ? "lg" : "md"}
            isInvalid={!!errors["email"]?.message}
            errorMessage={errors["email"]?.message}
            startContent={
              <div className="ltr:pr-3 text-primary  rtl:pl-3">
                <SiMinutemailer size="20px" />
              </div>
            }
            placeholder={t("subscribe")}
          />

          <Button
            type="submit"
            radius="sm"
            size={width > 680 ? "lg" : "md"}
            style={{ backgroundColor: "#fff" }}
            className={cn(
              "m-0 font-[600]",
              theme === "dark" ? styles.box : styles.box2
            )}
            color="primary"
          >
            {t("subscriptions")}
          </Button>
        </div>
        <Checkbox
          {...register("terms")}
          isInvalid={!!errors["terms"]?.message}
          onValueChange={(val) => setValue("terms", val)}
          size="sm"
        >
          <div className="md:text-xs text-[10px] w-max flex gap-2 items-center">
            <span>{t("privacy_policy_agree")}</span>{" "}
            <Link
              className="text-xs text-drk-900 font-[600] dark:text-primary underline"
              href="/#/terms"
            >
              {t("privacy_policy")}
            </Link>
          </div>
        </Checkbox>
        <div className={cn("hidden", isDone && "block")}>
          <Confetti
            width={width - 300}
            height={height}
            recycle={false}
            numberOfPieces={3000}
          />
        </div>
      </form>
    </FormProvider>
  );
}
