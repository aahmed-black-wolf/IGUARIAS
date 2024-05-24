import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

import { Button } from '@nextui-org/button';

type Props = {
  target: { label: string; href: string; id: string };
};

export const NavItem = ({ target }: Props) => {
  const router = useRouter();
  const locale = useLocale();
  const handleRoute = ({ target }: Props) => {
    router.push(`/${locale}/#${target.id}`);
  };

  return (
    <Button
      className="w-full px-2  text-md justify-start sm:justify-center sm:w-max"
      variant="light"
      onClick={() => handleRoute({ target })}
    >
      {target.label}
    </Button>
  );
};
