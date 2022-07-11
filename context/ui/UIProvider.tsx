import { FC, useReducer } from "react";
import { UIContext, uiReducer } from "./";

export interface UIState {
  sidemenuOpen: boolean;
  usermenuOpen: boolean;
}

interface Props {
  children?: React.ReactNode | undefined;
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  usermenuOpen: false,
};

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({ type: "UI - Open Sidebar" });
  };

  const closeSideMenu = () => dispatch({ type: "UI - Close Sidebar" });

  const closeUserMenu = () => dispatch({ type: "UI - Close UserMenu" });

  const openUserMenu = () => {
    dispatch({ type: "UI - Open UserMenu" });
  };
  return (
    <UIContext.Provider
      value={{
        ...state,

        // Methods
        closeSideMenu,
        openSideMenu,
        closeUserMenu,
        openUserMenu,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
