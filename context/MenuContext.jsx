"use client";
import React, { createContext, useState, useContext } from "react";

export const MenuContext = createContext(null);

export const MenuProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <MenuContext.Provider value={{ toggle, open }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => {
  return useContext(MenuContext);
};
