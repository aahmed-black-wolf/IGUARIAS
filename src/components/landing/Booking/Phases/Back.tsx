import React from "react";

import { IoIosArrowBack } from "react-icons/io";

import { Button } from "@nextui-org/button";

export default function Back() {
  return (
    <Button
      variant="bordered"
      color="primary"
      radius="full"
      className=" text-[1.5rem] min-w-max absolute bottom-[20px] left-[20px]"
      startContent={<IoIosArrowBack />}
    />
  );
}
