import "react-international-phone/style.css";

import React, { useState } from "react";

import { Controller, FormProvider, useForm } from "react-hook-form";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

import PhoneNumber from "@/src/components/layouts/Common/PhoneNumber";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Checkbox, Link } from "@nextui-org/react";

import { signUpFields, signUpSchema } from "./Schema";

const fieldIcons = [
  <BsFillPersonVcardFill key={1} />,
  <MdOutlineAlternateEmail key={3} />,
  <RiLockPasswordFill key={4} />,
  <RiLockPasswordFill key={5} />,
];

export default function SignUp() {
  const formMethods = useForm({
    resolver: zodResolver(signUpSchema),
  });
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormProvider {...formMethods}>
      <form
        className="flex-1 w-full flex flex-col gap-[20px]"
        onSubmit={formMethods.handleSubmit(() => console.log("Signup"))}
      >
        <div className="max-h-[300px] sm:max-h-max sm:overflow-hidden  px-2 overflow-x-hidden overflow-auto flex flex-col gap-[20px]">
          <Controller
            name="phone"
            control={formMethods.control}
            render={({ field, fieldState: { error } }) => (
              <PhoneNumber
                ref={field.ref}
                phone={field.value}
                phoneError={error?.message}
                setPhone={field.onChange}
              />
            )}
          />
          {signUpFields.map((field, index) => (
            <Controller
              key={index}
              name={field.name}
              control={formMethods.control}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <Input
                  {...field}
                  radius="sm"
                  endContent={
                    field.type === "password" && value?.length > 0 ? (
                      <Button
                        variant="light"
                        className="p-0 min-w-max h-max"
                        onClick={() => setShowPassword(!showPassword)}
                        startContent={
                          showPassword ? <IoEyeSharp /> : <FaEyeSlash />
                        }
                      />
                    ) : (
                      fieldIcons[index]
                    )
                  }
                  isInvalid={!!error}
                  errorMessage={error?.message}
                  type={
                    field.type === "password" && !showPassword
                      ? "password"
                      : "text"
                  }
                  label={field.label}
                  onChange={(e) => onChange(e.target.value)}
                />
              )}
            />
          ))}

          <Controller
            control={formMethods.control}
            name="terms"
            render={({ field, fieldState: { error } }) => (
              <Checkbox
                isSelected={field.value}
                isInvalid={!!error?.message}
                onValueChange={field.onChange}
              >
                <div className="md:text-xs text-[10px] w-max flex gap-2 items-center">
                  <span> You agree to our Terms of Service and</span>{" "}
                  <Link className="text-xs" href="/#/terms">
                    Privacy and Policy
                  </Link>
                </div>
              </Checkbox>
            )}
          />
        </div>
        <div className="flex w-full justify-end items-center">
          <Button
            type="submit"
            radius="sm"
            size="lg"
            className="dark:text-white w-full md:w-max"
            color="secondary"
          >
            SIGN UP
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
