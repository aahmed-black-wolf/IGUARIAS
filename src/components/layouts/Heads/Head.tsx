import React from "react";

import { cn } from "@/libs/cn";

type Props = {
  slug?: string;
  title?: string;
  sub?: string;
  isInline?: boolean;
};

export default function Head({ slug, title, sub, isInline }: Props) {
  return (
    <div
      className={cn(
        "container mt-[200px] lg:mt-[300px] mb-[75px] mx-auto w-full  flex justify-center flex-col gap-[10px] items-center",
        isInline && "flex  text-center  justify-start lg:items-start"
      )}
    >
      <div
        className={cn(
          "text-drk-700  text-sm md:text-md  dark:text-default-900  font-[600]",
          isInline && "w-full text-center lg:text-right  ltr:text-left "
        )}
      >
        {slug}
      </div>
      <div
        className={cn(
          "font-bold  text-drk-900  text-center dark:text-default-900 text-[2rem]  lg:text-[3rem]",
          isInline &&
            " lg:leading-[67px] lg:text-right  text-center  ltr:text-left  w-[85%] md:w-[60%] lg:w-[40%]"
        )}
      >
        <span className="mr-[5px]">{title}</span>{" "}
        <span className="text-primary">{sub}</span>
      </div>
    </div>
  );
}
