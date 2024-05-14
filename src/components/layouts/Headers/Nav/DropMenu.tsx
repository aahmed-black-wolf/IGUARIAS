import React from "react";

import { motion } from "framer-motion";

import { NavbarMenuItem } from "@nextui-org/navbar";
import { Accordion, AccordionItem, Button, Divider } from "@nextui-org/react";

type Props = {
  list: {
    title: string;
    subChild: { label: string; description: string }[];
  }[];
  title: string;
  tr: any;
};

export default function DropMenu({ list, title, tr }: Props) {
  return (
    <NavbarMenuItem>
      <Accordion isCompact>
        <AccordionItem
          aria-label="k-1"
          title={title}
          classNames={{
            title: "text-md",
          }}
        >
          {list.map(({ title, subChild }, index) => (
            <motion.div
              initial={{ y: (index + 1) * 100, opacity: index * 0.2 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { ...tr, delay: (index + 1) * 0.2 },
              }}
              key={index}
            >
              <div className="text-sm font-bold mb-2 p-3">{title}</div>
              {subChild.map(({ label, description }, indx) => (
                <motion.div
                  initial={{ y: (index + 1) * 100, opacity: index * 0.2 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: { ...tr, delay: (index + indx + 2) * 0.2 },
                  }}
                  key={indx}
                >
                  <Button variant="light" className="overflow-hidden underline">
                    {indx + 1} .{" "}
                    {label.length > 30 ? `${label.slice(0, 30)}...` : label}
                  </Button>
                </motion.div>
              ))}
              {index !== list.length - 1 && <Divider className="my-3" />}
            </motion.div>
          ))}
        </AccordionItem>
      </Accordion>
    </NavbarMenuItem>
  );
}
