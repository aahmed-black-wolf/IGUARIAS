import React from 'react';

import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import {
  FormProvider,
  useForm,
} from 'react-hook-form';
import { toast } from 'react-toastify';

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
  const { reset, handleSubmit, clearErrors } = formState;
  const { theme } = useTheme();
  const t = useTranslations("contact_form");
  const handleContact = (data: contactType) => {
    toast(t("contact_message"), {
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
