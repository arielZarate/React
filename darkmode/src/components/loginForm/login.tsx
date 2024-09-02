"use client";
import Link from "next/link";
import React from "react";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-700 dark:text-white min-w-full">
      <h1 className="text-2xl">Component login</h1>
      <p>This is a test component to check Dark Mode.</p>

      <Link href={"/dashboard"} className="border  my-2 ">
        <button className="p-2 ">ir dashboard</button>
      </Link>
    </div>
  );
};

export default Login;
