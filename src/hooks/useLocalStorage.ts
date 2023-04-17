import React, { useEffect, useState } from "react";

export const useLocalStorage = (key: string) => {
  const [state, setState] = useState<
    React.Dispatch<React.SetStateAction<string[]>>
  >(() => {
    return JSON.parse(window.localStorage.getItem(key) as string) ?? [];
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  console.log("state", state);

  return [state, setState];
};
