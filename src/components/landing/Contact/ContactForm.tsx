import React, { useEffect } from 'react';

import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import {
  FormProvider,
  useForm,
} from 'react-hook-form';

import { useSetter } from '@/src/hooks/useClientApi';
import { tos } from '@/src/hooks/useToast';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@nextui-org/button';

import ContactFields from './ContactFields';
import Country from './Country';
import Message from './Message';
import {
  contactSchema,
  contactType,
} from './Schema';

export default function ContactForm() {
  const formState = useForm<contactType>({
    resolver: zodResolver(contactSchema),
  });
  const { reset, handleSubmit, clearErrors, getValues } = formState;
  const { theme } = useTheme();
  const t = useTranslations("contact_form");
  const t2 = useTranslations("landing");
  const { mutate, isPending, data, isError } = useSetter({
    endPoint: "/contact_us",
  });

  const handleContact = (form: contactType) => {
    mutate({ ...form });
  };

  useEffect(() => {
    if (data && !isPending && !isError) {
      tos(t("contact_message", { email: getValues("email") }), theme);
      reset();
      return;
    }

    if (isError && !isPending) {
      tos(t2("error"), theme, "error");
    }
  }, [data, isError]);

  return (
    <FormProvider {...formState}>
      <form onSubmit={handleSubmit(handleContact)}>
        <div className="flex flex-col gap-[30px] max-w-[90%] lg:max-w-[70%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-[30px] gap-x-[20px] lg:gap-x-[100px]">
            <ContactFields />
            <Country />
          </div>
          <Message />
          <div className=" flex justify-end">
            <Button
              type="submit"
              radius="sm"
              isLoading={isPending}
              size="lg"
              className="w-full dark:text-default-800 lg:w-[200px]"
              color="secondary"
            >
              {t("send")}
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
