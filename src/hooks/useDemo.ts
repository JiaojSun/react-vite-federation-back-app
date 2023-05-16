import { useEffect, useLayoutEffect, useRef } from 'react';

export function useTimeout(callback, delay) {
  const memorizeCallback = useRef();

  useLayoutEffect(() => {
    memorizeCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay !== null) {
      const timer = setTimeout(() => {
        (memorizeCallback as any).current();
      }, delay);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [delay]);
}
