import React from "react";

import Image from "next/image";

import { useGBookingContext } from "../Booking";
import { selectionsOptions } from "./mock";

export default function Selection() {
  const { setPhase, setPreviousPhase } = useGBookingContext();

  const handleSelections = (value: any) => {
    setPhase("boarding");
    setPreviousPhase(value);
  };

  return (
    <div className="flex py-6  flex-col gap-[30px] cursor-pointer">
      {selectionsOptions.map((target, index) => (
        <div
          key={index}
          onClick={() => handleSelections(target.value)}
          className="flex rounded-md group gap-6 hover:bg-primary hover:text-default-200 ease-in-out font-[500] border-[1px] border-primary p-4 items-center"
        >
          <div className="flex  justify-center items-center">
            <Image
              style={{ transition: "ease .3s" }}
              className="group-hover:scale-[1.2]"
              width={60}
              src={target.icon}
              alt="Icon"
            />
          </div>
          <div>{target.title}</div>
        </div>
      ))}
    </div>
  );
}
