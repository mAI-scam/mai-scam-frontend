"use client";

import { createContext, useContext, ReactNode } from "react";
import { useScrollDirection } from "./useScrollDirection";

interface ScrollContextType {
  scrollDirection: "up" | "down" | null;
  isAtTop: boolean;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export function ScrollProvider({ children }: { children: ReactNode }) {
  const scrollState = useScrollDirection();

  return (
    <ScrollContext.Provider value={scrollState}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScrollContext() {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error("useScrollContext must be used within a ScrollProvider");
  }
  return context;
}
