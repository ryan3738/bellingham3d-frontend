import { useEffect } from 'react';

interface HookInterface {
  ref: React.RefObject<HTMLInputElement>;
  handler: (event) => void;
}

export const useOnClickOutside = ({ ref, handler }: HookInterface): void => {
  useEffect(() => {
    const listener = (event): void => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mouseup', listener);
    return () => {
      document.removeEventListener('mouseup', listener);
    };
  }, [ref, handler]);
};
