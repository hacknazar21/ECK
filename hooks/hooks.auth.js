import { useState, useCallback, useEffect } from "react";

const storageName = "mamaOrganicUserData";
const useAuth = () => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  const login = useCallback(async (jwtToken, id) => {
    await setToken(jwtToken);
    await setUserId(id);
    localStorage.setItem(
      storageName,
      JSON.stringify({ userId: id, token: jwtToken })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem(storageName);
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));
    if (data && data.token) {
      setToken(data.token);
      setUserId(data.userId);
    }
  }, [login]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));
    if (data && data.token) {
      setToken(data.token);
      setUserId(data.userId);
    }
    console.log(data);
  }, []);

  return { login, logout, token, userId };
};
export default useAuth;
