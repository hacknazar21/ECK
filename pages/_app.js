import "../src/scss/style.scss";
import NextNProgress from "nextjs-progressbar";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import { useEffect, useState } from "react";
import useAuth from "../hooks/hooks.auth";
import useHttp from "../hooks/hooks.http";
import { AuthContext } from "/context/AuthContext";
import { useRouter, Router } from "next/router";
import FourOhOne from "./401";

function MyApp({ Component, pageProps }) {
  const { token, userId, login, logout, refreshToken } = useAuth();
  const isAuth = !!token;
  const [userData, setUserData] = useState({});
  const { request } = useHttp();
  const router = useRouter();
  useEffect(() => {
    (async () => {
      if (isAuth) {
        try {
          const data = await request("/api/profile/", "GET", null, {
            Authorization: `Bearer ${token}`,
          });
          if (data) {
            setUserData(data);
          }
        } catch (e) {
          const error = JSON.parse(e.message);
          if (error?.code === "token_not_valid") {
            try {
              const data = await request(
                "/api/auth/token/refresh",
                "POST",
                {
                  refresh: refreshToken,
                },
                {
                  "Content-Type": "application/json",
                }
              );
              if (data && data.token) {
                await login(data.token, data.refresh);
              } else {
                await logout();
              }
            } catch (e) {
              await logout();
            }
          } else if (error?.code === "user_not_found") {
            await logout();
          }
        }
      }
    })();
  }, [token, router.pathname]);

  useEffect(() => {
    if (!isAuth)
      if (
        router.pathname.indexOf("team") !== -1 ||
        router.pathname.indexOf("announcements") !== -1 ||
        router.pathname.indexOf("profile") !== -1
      ) {
        //router.push("/");
      }
    if (token && !userData?.is_validated)
      if (
        router.pathname.indexOf("team") !== -1 ||
        router.pathname.indexOf("announcements") !== -1 ||
        router.pathname.indexOf("profile") !== -1
      ) {
        //router.push("/");
      }
  }, [router.pathname, token]);
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Многоуровневая интеллектуальная система автоматического обмена
                решениями, новыми технологиями, информационными ресурсами"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextNProgress />
      <AnimatePresence>
        <AuthContext.Provider
          value={{
            token,
            userId,
            login,
            logout,
            isAuth,
            userData,
            setUserData: (data) => {
              setUserData(data);
            },
          }}
        >
          <Component {...pageProps} />
        </AuthContext.Provider>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
