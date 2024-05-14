import Link from "next/link";

import { Button } from "@nextui-org/button";

type Props = {
  target: { label: string; href: string };
};

export const NavItem = ({ target }: Props) => (
  <Button
    className="w-full px-2  text-md justify-start sm:justify-center sm:w-max"
    as={Link}
    href={`#${target.href}`}
    variant="light"
  >
    {target.label}
  </Button>
);
