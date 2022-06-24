import { createContext } from "react";

interface ContextProps {
  authuser: any;
  loading: boolean;
  auth: any;
}

export const AuthUserContext = createContext({} as ContextProps);
