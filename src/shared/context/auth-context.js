import { createContext } from "react";

export const AuthenticateContext = createContext({
  isLoggedIn: false,
  userId: null,
  login: () => {},
  logout: () => {},
});
