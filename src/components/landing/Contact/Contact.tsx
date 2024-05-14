"use client";

import { useTranslations } from 'next-intl';

import Head from '../../layouts/Heads/Head';
import ContactForm from './ContactForm';
import ContactLayer from './ContactLayer';

export default function Contact() {
  const t = useTranslations("landing");
  return (
    <ContactLayer>
      <div className="container px-4 mx-auto ">
        <Head slug="" sub={t("touch")} title={t("get_in")} />
        <ContactForm />
      </div>
    </ContactLayer>
  );
}
