"use client";
import React, { createContext, useContext, useState } from "react";

const AppContenxt = createContext<any>(false);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AppContenxt.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </AppContenxt.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContenxt);
}
