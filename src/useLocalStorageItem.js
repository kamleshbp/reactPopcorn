import { useEffect, useState } from "react";

export function useLocalStorageItem(initialVal, key) {
  const [value, setValue] = useState(function () {
    return JSON.parse(localStorage.getItem(key)) || initialVal;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [key, value]
  );

  return [value, setValue];
}
