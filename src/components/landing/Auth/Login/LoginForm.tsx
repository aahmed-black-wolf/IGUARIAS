import React, { useState } from 'react';

import {
  Controller,
  FormProvider,
  useForm,
} from 'react-hook-form';
import { FaEyeSlash } from 'react-icons/fa6';
import { IoEyeSharp } from 'react-icons/io5';
import { MdAlternateEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';

import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@nextui-org/input';
import {
  Button,
  Checkbox,
  Link,
} from '@nextui-org/react';

import {
  loginFields,
  loginSchema,
  loginType,
} from './Shema';

const fieldIcons = [
  <MdAlternateEmail key={1} />,
  <RiLockPasswordFill key={2} />,
];

export default function LoginForm() {
  const formMethods = useForm<loginType>({
    resolver: zodResolver(loginSchema),
  });
  const [showPassword, setShowPassword] = useState(false);
  return (
    <FormProvider {...formMethods}>
      <form
        className="flex-1 w-full flex flex-col gap-[20px]"
        onSubmit={formMethods.handleSubmit(() => console.log("Login"))}
      >
        {loginFields.map((field, index) => (
          <Controller
            key={index}
            control={formMethods.control}
            name={field.name as any}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
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
        <div className="flex w-full justify-end items-center">
          <Button
            type="submit"
            radius="sm"
            size="lg"
            className="dark:text-white w-full md:w-max"
            color="secondary"
          >
            LOGIN
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
