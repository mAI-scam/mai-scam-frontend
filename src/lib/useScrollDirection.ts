"use client";

import { useState, useEffect } from "react";

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if at top
      setIsAtTop(currentScrollY <= 10);
      
      // Determine scroll direction
      if (currentScrollY > prevScrollY && currentScrollY > 50) {
        setScrollDirection("down");
      } else if (currentScrollY < prevScrollY) {
        setScrollDirection("up");
      }
      
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  return { scrollDirection, isAtTop };
}
