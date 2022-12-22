import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";

const storageName = "eckUserData";
const useAuth = () => {
  const [token, setToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const router = useRouter();
  const login = useCallback(async (jwtToken, refresh) => {
    await setToken(jwtToken);
    await setRefreshToken(refresh);
    localStorage.setItem(
      storageName,
      JSON.stringify({ refreshToken: refresh, token: jwtToken })
    );
  }, []);

  const logout = useCallback(async () => {
    setToken(null);
    setRefreshToken(null);
    localStorage.removeItem(storageName);
    await router.push("/");
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));
    if (data && data.token) {
      setToken(data.token);
      setRefreshToken(data.refreshToken);
    }
  }, [login]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));

    if (data && data.token) {
      setToken(data.token);
      setRefreshToken(data.refreshToken);
    }
  }, []);

  return { login, logout, token, refreshToken };
};
export default useAuth;
