"use client";

import useThemeMode from "@/hook/useThemeMode";
import { FaMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";
const DarkModeSwitcher = () => {
  const [themeMode, setThemeMode] = useThemeMode();

  //el theme es el estado del useTheme hook

  return (
    <div className="m-5 w-10">
      <li className="list-none">
        <label
          className={`relative m-0 block h-7.5 w-14 rounded-full ${
            themeMode === "dark" ? "bg-primary" : "bg-stroke"
          }`}
        >
          <input
            type="checkbox"
            onChange={() => {
              if (typeof setThemeMode === "function") {
                setThemeMode(themeMode === "light" ? "dark" : "light");
              }
            }}
            className="dur absolute top-0 z-50 m-0 h-full w-full cursor-pointer opacity-0"
          />
          <span
            className={`absolute left-[3px] top-1/2 flex h-6 w-6 -translate-y-1/2 translate-x-0 items-center justify-center rounded-full bg-white shadow-switcher duration-75 ease-linear ${
              themeMode === "dark" && "!right-[3px] !translate-x-full"
            }`}
          >
            <span className="dark:hidden">
              <GoSun size={16} color="black" />
            </span>
            <span className="hidden dark:inline-block">
              <FaMoon size={16} color="#969AA1" />
            </span>
          </span>
        </label>
      </li>
    </div>
  );
};

export default DarkModeSwitcher;

/**
 * 
 "use client";

import { useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";
import useTheme from "@/hook/useThemeMode";

const DarkModeSwitcher = () => {
  const [themeMode, setThemeMode] = useTheme();

  console.log(themeMode);

  const handleThemeMode = () => {
    if (typeof setThemeMode === "function") {
      setThemeMode(themeMode === "light" ? "dark" : "light");
    }
  };

  return (
    <div className="flex  text-slate-700  mx-20">
      {themeMode === "dark" ? (
        <button
          type="button"
          onClick={handleThemeMode}
          className="p-2 bg-gray-700 rounded-full"
        >
          <FaMoon size={20} color="green" />
        </button>
      ) : (
        <button
          type="button"
          onClick={handleThemeMode}
          className="p-2 bg-slate-200 rounded-full border border-slate-800"
        >
          <GoSun size={20} className="text-slate-800" />
        </button>
      )}
    </div>
  );
};

export default DarkModeSwitcher;
 * 
 */

/**
 * 
 * "use client";

import { FaMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";
import useTheme from "@/hook/useThemeMode";
import { useEffect } from "react";

const DarkModeSwitcher = () => {
  const { themeMode, toggleThemeMode } = useTheme();
  console.log("estado del boton", themeMode);

  return (
    <li className="list-none">
      <label
        className={`relative m-0 border block h-10 w-14 rounded-full ${
          themeMode === "dark" ? "bg-gray-700" : "bg-white"
        }`}
      >
        <input
          type="checkbox"
          onChange={toggleThemeMode}
          checked={themeMode === "dark"} // Asegúrate de que el checkbox refleje el estado actual
          className="absolute top-0 z-50 m-0 h-full w-full cursor-pointer opacity-0"
        />
        <span
          className={`absolute left-[3px] top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full shadow-switcher duration-300 ease-linear ${
            themeMode === "dark"
              ? "!right-[3px] translate-x-full bg-green-500"
              : "translate-x-0 bg-gray-400 p-1"
          }`}
        >
          {themeMode === "dark" ? (
            <FaMoon size={16} color="green" />
          ) : (
            <GoSun size={20} className="text-slate-100" />
          )}
        </span>
      </label>
    </li>
  );
};

export default DarkModeSwitcher;
 * 
 */

/*

==========V3==============
"use client";

import { useEffect, useState } from "react";
//import useColorMode from "@/hooks/useColorMode";
import { FaMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";

//esta es la V3
const DarkModeSwitcher = () => {
  const [theme, setTheme] = useState(() => {
    const storeMode = localStorage.getItem("darkMode");

    return storeMode === "true";
  });

  useEffect(() => {
    //  localStorage.setItem("darkMode", theme);
    document.documentElement.classList.toggle("dark", theme);
    localStorage.setItem("darkMode", theme.toString());
  }, [theme]);

  function handleToggle() {
    //podria hacer todo aca y modificar dese aca la clase donde documentElement del dom
    setTheme((prevTheme) => !prevTheme);
  }
  return (
    <li className="list-none ">
      <label
        className={` relative m-0  border border-slate-  block h-10 w-14 rounded-full ${
          theme ? "bg-gray-700" : "bg-white"
        }`}
      >
        <input
          type="checkbox"
          onChange={handleToggle}
          className="dur absolute top-0 z-50 m-0 h-full w-full cursor-pointer opacity-0  "
        />

        <span
          className={`absolute left-[3px] top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full  shadow-switcher duration-300 ease-linear  ${
            theme
              ? "!right-[3px] translate-x-full bg-green-500"
              : "translate-x-0 bg-gray-400 p-1 "
          }`}
        >
          {theme ? (
            <FaMoon size={16} color="green" className="" />
          ) : (
            <GoSun size={20} className="text-slate-100 " />
          )}
        </span>
      </label>
    </li>
  );
};

export default DarkModeSwitcher;
*/

/*

=================v2============

"use client";

import { useEffect, useState } from "react";
//import useColorMode from "@/hooks/useColorMode";
import { FaMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";

//esta es la V3
const DarkModeSwitcher = () => {
  const [theme, setTheme] = useState(() => {
    const storeMode = localStorage.getItem("darkMode");

    return storeMode === "true";
  });

  useEffect(() => {
    //  localStorage.setItem("darkMode", theme);
    document.documentElement.classList.toggle("dark", theme);
    localStorage.setItem("darkMode", theme.toString());
  }, [theme]);

  function handleToggle() {
    //podria hacer todo aca y modificar dese aca la clase donde documentElement del dom
    setTheme((prevTheme) => !prevTheme);
  }
  return (
    <li className="list-none ">
      <label
        className={` relative m-0  border border-slate-  block h-10 w-14 rounded-full ${
          theme ? "bg-gray-700" : "bg-white"
        }`}
      >
        <input
          type="checkbox"
          onChange={handleToggle}
          className="dur absolute top-0 z-50 m-0 h-full w-full cursor-pointer opacity-0  "
        />

        <span
          className={`absolute left-[3px] top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full  shadow-switcher duration-300 ease-linear  ${
            theme
              ? "!right-[3px] translate-x-full bg-green-500"
              : "translate-x-0 bg-gray-400 p-1 "
          }`}
        >
          {theme ? (
            <FaMoon size={16} color="green" className="" />
          ) : (
            <GoSun size={20} className="text-slate-100 " />
          )}
        </span>
      </label>
    </li>
  );
};

export default DarkModeSwitcher;






*/

/*
=======v2  con useEffect==================


"use client";

import { useEffect, useState } from "react";
//import useColorMode from "@/hooks/useColorMode";
import { FaMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";

const DarkModeSwitcher = () => {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark");
  }, [theme]);

  function handleToggle() {
    //podria hacer todo aca y modificar dese aca la clase donde documentElement del dom
    setTheme((prevTheme) => !prevTheme);
  }
  return (
    <li className="list-none ">
      <label
        className={` relative m-0  border border-slate-  block h-10 w-14 rounded-full ${
          theme ? "bg-gray-700" : "bg-white"
        }`}
      >
        <input
          type="checkbox"
          onChange={handleToggle}
          className="dur absolute top-0 z-50 m-0 h-full w-full cursor-pointer opacity-0  "
        />

        <span
          className={`absolute left-[3px] top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full  shadow-switcher duration-300 ease-linear  ${
            theme
              ? "!right-[3px] translate-x-full bg-green-500"
              : "translate-x-0 bg-gray-400 p-1 "
          }`}
        >
          {theme ? (
            <FaMoon size={16} color="green" className="" />
          ) : (
            <GoSun size={20} className="text-slate-100 " />
          )}
        </span>
      </label>
    </li>
  );
};

export default DarkModeSwitcher;

*/

/**
 * 
 ========V1================

 EN ESTA VERSION ESTA TODA LA LOGICA DENTRO DEL SWITCH
 * 
 "use client";

import { useState } from "react";
//import useColorMode from "@/hooks/useColorMode";
import { FaMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";

const DarkModeSwitcher = () => {
  const [theme, setTheme] = useState(false);

  function handleToggle() {
    setTheme(!theme);
    document.documentElement.classList.toggle("dark");
  }
  return (
    <li className="list-none ">
      <label
        className={` relative m-0  border border-slate-  block h-10 w-14 rounded-full ${
          theme ? "bg-gray-700" : "bg-white"
        }`}
      >
        <input
          type="checkbox"
          onChange={handleToggle}
          className="dur absolute top-0 z-50 m-0 h-full w-full cursor-pointer opacity-0  "
        />

        <span
          className={`absolute left-[3px] top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full  shadow-switcher duration-300 ease-linear  ${
            theme
              ? "!right-[3px] translate-x-full bg-green-500"
              : "translate-x-0 bg-gray-400 p-1 "
          }`}
        >
          {theme ? (
            <FaMoon size={16} color="green" className="" />
          ) : (
            <GoSun size={20} className="text-slate-100 " />
          )}
        </span>
      </label>
    </li>
  );
};

export default DarkModeSwitcher;

 * 
 */
