import { AuthUserState } from "./";

type AuthUserActionType = { type: "AuthUser - ActionName" };

export const authuserReducer = (
  state: AuthUserState,
  action: AuthUserActionType
): AuthUserState => {
  switch (action.type) {
    case "AuthUser - ActionName":
      return {
        ...state,
      };

    default:
      return state;
  }
};
