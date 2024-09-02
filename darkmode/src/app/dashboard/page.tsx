import Link from "next/link";
import React from "react";

type Props = {};

const dashboard = (props: Props) => {
  return (
    <>
      <div className="p-4 bg-white dark:bg-gray-700 dark:text-white">
        <h1 className="text-2xl">Component dashboard</h1>
        <p>This is another test component to check Dark Mode.</p>

        <Link href={"/login"} className="border  my-2 mx-3 ">
          <button className="p-2 ">ir login</button>
        </Link>
      </div>
    </>
  );
};

export default dashboard;
