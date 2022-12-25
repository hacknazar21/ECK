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
  changeFormHandler: noop1,
  addChildrenActivity: noop1,
  childrenActivity: [],
  formFilter: {},
  submitFormHandler: noop1,
  clearForm: noop,
  notifications: [],
  updateNotifications: noop,
  setNotifications: noop1,
  urlCards: [],
  activities: [],
});
