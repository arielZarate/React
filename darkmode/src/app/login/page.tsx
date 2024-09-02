import Login from "@/components/loginForm/login";
import Link from "next/link";
import React from "react";

type Props = {};

const pageLogin = (props: Props) => {
  return (
    <>
      <div className="mx-auto flex ">
        {" "}
        <Login />
      </div>
    </>
  );
};

export default pageLogin;
