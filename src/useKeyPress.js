import { useEffect } from "react";

export function useKeyPress(key, action) {
  useEffect(
    function () {
      function handleKeyPress(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }
      document.addEventListener("keydown", handleKeyPress);
      return () => document.removeEventListener("keydown", handleKeyPress);
    },
    [action, key]
  );
}
