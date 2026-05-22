import { useEffect, useState } from "react";
import { useLocation } from "react-router";

export interface UseIsOverDarkProps {
  ref?: React.RefObject<HTMLElement | null>;
}

export default function useIsOverDark({ ref }: UseIsOverDarkProps) {
  const [isOverDark, setIsOverDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    function isPointOverDark(x: number, y: number) {
      const stack = document.elementsFromPoint(x, y);
      for (const el of stack) {
        if (el?.closest("[data-dark]")) return true;
      }
      return false;
    }

    function update() {
      setIsScrolled(window.scrollY > 0);

      const header = ref?.current;
      if (!header) return;
      const rect = header.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.bottom + 1;
      setIsOverDark(isPointOverDark(x, y));
    }

    // Run once now and again on next frame to catch route paint
    update();
    const raf = requestAnimationFrame(update);
    window.addEventListener("scroll", update, { passive: true });
    document.addEventListener("scroll", update, { passive: true, capture: true });
    window.addEventListener("touchmove", update, { passive: true });
    window.addEventListener("wheel", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", update);
      document.removeEventListener("scroll", update, { capture: true });
      window.removeEventListener("touchmove", update);
      window.removeEventListener("wheel", update);
      window.removeEventListener("resize", update);
    };
  }, [location.pathname]);

  return { isOverDark, isScrolled };
}