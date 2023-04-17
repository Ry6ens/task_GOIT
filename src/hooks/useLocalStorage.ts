import { useState, useEffect, useCallback } from "react";

type ReturnType<T> = [T, React.Dispatch<React.SetStateAction<T>>];

export const useLocalStorage = <T>(
  key: string,
  initialValue?: T
): ReturnType<T> => {
  const [state, setState] = useState<T>(() => {
    const value = localStorage.getItem(key);
    if (value) {
      return value ? JSON.parse(value) : initialValue;
    }
    return initialValue;
  });

  // save the new value when it changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  // memoize a storage watcher callback back
  const storageWatcher = useCallback(
    (e: StorageEvent) => {
      if (e.newValue) {
        // update ours if we
        setState((currState) => {
          const newDat = JSON.parse(e.newValue || "null");
          return newDat === state ? newDat : currState;
        });
      }
    },
    [state]
  );

  // install the watcher
  useEffect(() => {
    window.addEventListener("storage", storageWatcher);
    // stop listening on remove
    return () => {
      window.removeEventListener("storage", storageWatcher);
    };
  }, [state]);

  return [state, setState];
};
