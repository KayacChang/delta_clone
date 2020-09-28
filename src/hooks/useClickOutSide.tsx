import { useCallback } from "react";

export default function useClickOutSide(func: () => void) {
  return useCallback((ref: HTMLDivElement) => {
    if (!ref) return;

    const onMouseDown = (event: Event) =>
      !ref.contains(event.target as Node) && func();

    document.addEventListener("mousedown", onMouseDown);

    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [func]);
}
