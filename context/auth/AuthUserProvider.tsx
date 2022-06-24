import { FC, useReducer } from "react";
import { AuthUserContext, authUserReducer } from "./";

export interface AuthUserState {
  authuser: any;
  loading: boolean;
}

interface Props {
  children?: React.ReactNode | undefined;
}

const AuthUser_INITIAL_STATE: AuthUserState = {
  authuser: null,
  loading: true,
};

export const AuthUserProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(authUserReducer, AuthUser_INITIAL_STATE);

  return (
    <AuthUserContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </AuthUserContext.Provider>
  );
};
