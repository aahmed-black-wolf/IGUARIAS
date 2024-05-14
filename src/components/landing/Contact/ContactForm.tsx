import React from 'react';

import { useTranslations } from 'next-intl';
import {
  FormProvider,
  useForm,
} from 'react-hook-form';

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
  const t = useTranslations("contact_form");
  return (
    <FormProvider {...formState}>
      <form onSubmit={formState.handleSubmit(() => console.log("Done"))}>
        <div className="flex flex-col gap-[30px] max-w-[90%] lg:max-w-[70%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-[30px] gap-x-[100px]">
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
