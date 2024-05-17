import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import {
  usePathname,
  useSearchParams,
} from 'next/navigation';
import { GrLanguage } from 'react-icons/gr';

import { Button } from '@nextui-org/button';

export const LanguageSwitcher = ({ tr }: { tr: any }) => {
  const locale = useLocale();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  let lang = pathname.split("/")[1];
  if (lang === "en") lang = "ar";
  else lang = "en";

  const href = pathname.replace(/^\/(en|ar)/, `/${lang}`);

  return (
    <Button
      dir="ltr"
      variant="bordered"
      radius="full"
      as={Link}
      href={href}
      locale={locale === "ar" ? "en" : "ar"}
      className="relative px-0 min-w-max text-primary border-[1px] overflow-hidden h-[30px]"
    >
      <motion.div
        transition={{ ...tr }}
        initial={{ x: -100 }}
        animate={{ x: locale == "ar" ? -100 : 25 }}
      >
        <div className="flex items-center gap-1">
          <GrLanguage size={15} />
          <div className="font-[600]">AR</div>
        </div>
      </motion.div>
      <motion.div
        transition={{ ...tr }}
        initial={{ x: 100 }}
        animate={{ x: locale == "en" ? 100 : -25 }}
      >
        <div className="flex items-center gap-1">
          <GrLanguage size={15} />
          <div className="font-[600] mt-1">EN</div>
        </div>
      </motion.div>
    </Button>
  );
};
