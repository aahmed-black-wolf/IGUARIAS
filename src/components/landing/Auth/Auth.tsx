import React from 'react';

import Image from 'next/image';

import authImage from '@/public/assets/images/auth/auth.webp';

import LoginForm from './Login/LoginForm';
import SignUp from './SignUp/SignUp';

export default function Auth({ authPage }: { authPage: "login" | "signup" }) {
  return (
    <div className="min-h-[300px] gap-5 flex flex-col-reverse md:flex-row justify-between">
      {authPage === "login" ? <LoginForm /> : <SignUp />}
      <div className="flex justify-center items-center">
        <Image
          className="w-[60%] max-h-[300px] md:w-[300px]"
          src={authImage}
          alt="authImage"
        />
      </div>
    </div>
  );
}
