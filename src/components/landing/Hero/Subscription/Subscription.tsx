import React, {
  useEffect,
  useState,
} from 'react';

import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import Confetti from 'react-confetti';
import {
  FormProvider,
  useForm,
} from 'react-hook-form';
import { SiMinutemailer } from 'react-icons/si';

import { cn } from '@/libs/cn';
import { useSetter } from '@/src/hooks/useClientApi';
import { tos } from '@/src/hooks/useToast';
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
  const { mutate, isPending, data, isError } = useSetter({
    endPoint: "/subscribe",
  });
  const { height, width } = useWindowSize();
  const formMethods = useForm<subscriptionType>({
    resolver: zodResolver(subscriptionSchema),
  });
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = formMethods;

  const handleSubscription = (form: subscriptionType) => {
    mutate({ email: form.email });
  };

  useEffect(() => {
    if (data && !isPending && !isError) {
      tos(t("congratulations_message", { email: getValues("email") }), theme);
      setIsDone(true);
      reset();
      return;
    }

    if (!isPending && isError) {
      tos(
        t("congratulations_error_message", { email: getValues("email") }),
        theme
      );
      reset();
    }
  }, [data, isError]);

  return (
    <>
      <FormProvider {...formMethods}>
        <form
          onSubmit={handleSubmit(handleSubscription)}
          className="flex flex-col gap-3 item-center justify-center lg:justify-start"
        >
          <div className="flex gap-2 justify-center lg:justify-start items-start">
            <Input
              {...register("email")}
              isReadOnly={isPending}
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
              isLoading={isPending}
              radius="sm"
              size={width > 680 ? "lg" : "md"}
              style={{ backgroundColor: "#fff" }}
              className={cn(
                "m-0 font-[600]",
                theme === "dark" ? styles.box : styles.box2
              )}
              color="primary"
            >
              {!isPending && t("subscriptions")}
            </Button>
          </div>
          <div className="flex justify-between md:justify-around md:ltr:pr-[100px] md:rtl:pl-[100px] lg:ltr:pr-0 lg:rtl:pl-0  lg:justify-start">
            <Checkbox
              {...register("terms")}
              isReadOnly={isPending}
              isInvalid={!!errors["terms"]?.message}
              onValueChange={(val) => setValue("terms", val)}
              size="sm"
            >
              <div className="md:text-xs text-[10px] w-max flex gap-2 items-center">
                <span>{t("privacy_policy_agree")}</span>{" "}
                <Link
                  className="text-xs text-drk-900 font-[600] dark:text-primary underline"
                  href="/ar/terms"
                >
                  {t("privacy_policy")}
                </Link>
              </div>
            </Checkbox>
          </div>
          <div className={cn("hidden", isDone && "hidden lg:block")}>
            <Confetti
              run={isDone}
              width={width - 300}
              height={height}
              recycle={false}
              numberOfPieces={3000}
            />
          </div>
        </form>
      </FormProvider>
    </>
  );
}
