import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { BsMoonStarsFill } from 'react-icons/bs';
import { RiSunLine } from 'react-icons/ri';

import { Button } from '@nextui-org/button';

export const ModeControl = ({ tr }: { tr: any }) => {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      dir="ltr"
      variant="bordered"
      radius="full"
      onClick={() => setTheme(theme == "light" ? "dark" : "light")}
      className="relative text-primary  px-0 min-w-max  border-[1px] overflow-hidden h-[30px]"
    >
      <motion.div
        transition={{ ...tr }}
        initial={{ x: -100 }}
        animate={{ x: theme == "light" ? -100 : 12 }}
      >
        <RiSunLine size={18} />
      </motion.div>
      <motion.div
        transition={{ ...tr }}
        initial={{ x: 100 }}
        animate={{ x: theme == "dark" ? 100 : -12 }}
      >
        <BsMoonStarsFill size={18} />
      </motion.div>
    </Button>
  );
};
