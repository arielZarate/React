import React, { useState } from "react";

//version 2

const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void] => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error para leer localStorage:", error);
      return initialValue;
    }
  });

  //esot modifica el estado del localStorage
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      let valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
      console.error("Error para setear valores en  localStorage:", error); // Manejo de errores en caso de que algo falle
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;

/*

*





















**import { useState } from "react";

const useLocalStorage = <T>(
  key: string,
  initialValue: T
): //devuelve uyn tipo T
[
  T,
  //devuelve una funcion tipo setter
  (value: T | ((val: T) => T)) => void
] => {
  // Obtiene el valor de localStorage o usa el valor inicial si no existe
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // Guarda el valor tanto en el estado como en localStorage
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
 */
