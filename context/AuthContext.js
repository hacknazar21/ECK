import { createContext } from "react";
function noop() {}
function noop1(state) {}
function noop2(token, refresh) {}
export const AuthContext = createContext({
  token: null,
  userId: null,
  login: noop2,
  logout: noop,
  isAuth: false,
  userData: null,
  setUserData: noop1,
});
