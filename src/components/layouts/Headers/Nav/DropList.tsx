import { MdKeyboardArrowDown } from "react-icons/md";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  NavbarItem,
} from "@nextui-org/react";

type Props = {
  list: {
    title: string;
    subChild: { label: string; description: string }[];
  }[];
  title: string;
};

export default function DropList({ list, title }: Props) {
  return (
    <Dropdown
      showArrow
      classNames={{
        base: "before:bg-default-200", // change arrow background
        content:
          "py-1 px-1 border border-default-200 bg-gradient-to-tr from-white to-default-200 dark:from-default-50 dark:to-black",
      }}
    >
      <NavbarItem>
        <DropdownTrigger>
          <Button
            disableRipple
            className="p-0 bg-transparent data-[hover=true]:bg-transparent"
            // endContent={}
            radius="sm"
            variant="light"
            endContent={<MdKeyboardArrowDown />}
          >
            {title}
          </Button>
        </DropdownTrigger>
      </NavbarItem>

      <DropdownMenu
        onAction={(target) => alert(target)}
        variant="faded"
        aria-label="Dropdown menu with description"
      >
        {list.map((target, index) => (
          <DropdownSection
            key={index}
            showDivider={index !== list.length - 1}
            title={target.title}
          >
            {target.subChild.map((child, indx) => (
              <DropdownItem key={indx} description={child.description}>
                {child.label}
              </DropdownItem>
            ))}
          </DropdownSection>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
