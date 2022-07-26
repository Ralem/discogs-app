import { useEffect, useRef } from "react";

const useDebounced = <F extends (...args: Parameters<F>) => unknown>(
  fn: F,
  debounceTime = 1000,
) => {
  // using a ref to avoid re-render
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);

  const debounced = (...args: Parameters<F>) => {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      fn(...args);
    }, debounceTime);
  };

  // clear timeout
  useEffect(
    () => () => {
      if (timeoutId.current) clearTimeout(timeoutId.current);
    },
    [],
  );
  return debounced;
};

export default useDebounced;
