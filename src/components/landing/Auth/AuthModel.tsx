import React, { Dispatch, SetStateAction, useState } from "react";

import Popup from "@/src/components/layouts/Popup";
import { Button } from "@nextui-org/button";

import Auth from "./Auth";

type AuthTitleProps = {
  setAuthPage: Dispatch<SetStateAction<"login" | "signup">>;
  authPage: "login" | "signup";
};
const AuthTitle: React.FC<AuthTitleProps> = ({
  setAuthPage,
  authPage,
}: AuthTitleProps) => {
  const handleNavigation = () => {
    const nextPage = authPage === "login" ? "signup" : "login";
    setAuthPage(nextPage);
  };

  return (
    <div className="flex text-sm items-center gap-1">
      <div>{authPage === "login" ? "Don't have " : "Have"} an account ?</div>
      <Button
        onClick={handleNavigation}
        color="primary"
        variant="light"
        className="p-0 px-2 min-w-max underline"
      >
        {authPage === "login" ? "create account" : "Login"}
      </Button>
    </div>
  );
};
const AuthModel: React.FC = () => {
  const [authPage, setAuthPage] = useState<"login" | "signup">("login");

  return (
    <Popup
      size="3xl"
      title={<AuthTitle authPage={authPage} setAuthPage={setAuthPage} />}
      body={<Auth authPage={authPage} />}
    >
      <Button color="primary">Login</Button>
    </Popup>
  );
};

export default AuthModel;
