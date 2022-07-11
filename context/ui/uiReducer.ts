import { UIState } from "./";

type UIActionType =
  | { type: "UI - Open Sidebar" }
  | { type: "UI - Close Sidebar" }
  | { type: "UI - Open UserMenu" }
  | { type: "UI - Close UserMenu" };
export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case "UI - Open Sidebar":
      return {
        ...state,
        sidemenuOpen: true,
      };

    case "UI - Close Sidebar":
      return {
        ...state,
        sidemenuOpen: false,
      };
    case "UI - Open UserMenu":
      return {
        ...state,
        usermenuOpen: true,
      };

    case "UI - Close UserMenu":
      return {
        ...state,
        usermenuOpen: false,
      };

    default:
      return state;
  }
};
