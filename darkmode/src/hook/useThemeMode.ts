import React, { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

//tipado
type Theme = "light" | "dark";

const useThemeMode = () => {
  //aca le paso al locaStorage los theme que quiera
  const [themeMode, setThemeMode] = useLocalStorage<Theme>(
    "ThemeMode",
    "light"
  );

  useEffect(() => {
    //aca estaria lo mas importante setea la classList
    //    const bodyClass = document.documentElement.classList;
    const bodyClass = window.document.body.classList;

    themeMode === "dark" ? bodyClass.add("dark") : bodyClass.remove("dark");
  }, [themeMode]);

  const resetThemeMode = () => {
    setThemeMode("light");
    localStorage.removeItem("ThemeMode");
  };

  return [themeMode, setThemeMode, resetThemeMode];
};

export default useThemeMode;

/**
 * 
 * 
 * 
 * 
 * 
 * 
 * import React, { useEffect, useState } from "react";

type ThemeMode = "dark" | "light";

const useThemeMode = () => {
  // Usa el hook useState para manejar el estado de darkMode como un string "dark" o "light"
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    const storedMode = localStorage.getItem("themeMode");
    return storedMode ? (JSON.parse(storedMode) as ThemeMode) : "light";
  });

  useEffect(() => {
    if (themeMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Guarda el estado del tema en localStorage
    localStorage.setItem("themeMode", JSON.stringify(themeMode));
  }, [themeMode]);

  // Función para cambiar el tema
  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  // Función para resetear el tema a "light"
  const resetThemeMode = () => {
    setThemeMode("light");
    localStorage.removeItem("themeMode");
  };

  return {
    themeMode,
    setThemeMode,
    toggleTheme,
    resetThemeMode,
  };
};

export default useThemeMode;
 * 
 */
