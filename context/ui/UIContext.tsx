import { createContext } from "react";

interface ContextProps {
  sidemenuOpen: boolean;
  usermenuOpen: boolean;

  // Methods
  closeSideMenu: () => void;
  openSideMenu: () => void;
  closeUserMenu: () => void;
  openUserMenu: () => void;
}

export const UIContext = createContext({} as ContextProps);
