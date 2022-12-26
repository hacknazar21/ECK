import "../src/scss/style.scss";
import NextNProgress from "nextjs-progressbar";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import { useEffect, useState } from "react";
import useAuth from "../hooks/hooks.auth";
import useHttp from "../hooks/hooks.http";
import { AuthContext } from "/context/AuthContext";
import { useRouter } from "next/router";
import FourOhOne from "./401";
import useFilter from "../hooks/hooks.filter";
import Load from "../components/Load";

function MyApp({ Component, pageProps }) {
  const { token, userId, login, logout, refreshToken } = useAuth();
  const {
    changeFormHandler,
    addChildrenActivity,
    childrenActivity,
    formFilter,
    submitFormHandler,
    clearForm,
  } = useFilter(token);
  const isAuth = !!token;
  const [userData, setUserData] = useState({});
  const { request, loading } = useHttp();
  const router = useRouter();
  const [notifications, setNotifications] = useState([]);
  const [urlCards, setUrlCards] = useState([]);
  const [activities, setActivities] = useState([]);
  const [isPermission, setIsPermission] = useState(true);
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
                "/api/auth/token/refresh/",
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
                await router.reload();
              }
            } catch (e) {
              await logout();
              await router.reload();
            }
          } else if (error?.code === "user_not_found") {
            await logout();
            await router.reload();
          }
        }
      }
    })();
  }, [token, router.pathname]);
  useEffect(() => {
    if (!isAuth && !loading) {
      if (
        router.pathname.indexOf("team") !== -1 ||
        router.pathname.indexOf("announcements") !== -1 ||
        router.pathname.indexOf("profile") !== -1 ||
        router.pathname.indexOf("geography") !== -1
      ) {
        setIsPermission(false);
        return;
      }
    }
    if (token && !userData?.is_validated && !loading)
      if (
        router.pathname.indexOf("team") !== -1 ||
        router.pathname.indexOf("announcements") !== -1 ||
        router.pathname.indexOf("profile") !== -1 ||
        router.pathname.indexOf("geography") !== -1
      ) {
        setIsPermission(false);
        return;
      }
    setIsPermission(true);
  }, [token, router.pathname, userData]);
  useEffect(() => {
    if (!!token) {
      updateNotifications();
      updateUrlCards();
    }
  }, [token]);
  useEffect(() => {
    updateActivities();
  }, []);
  function updateNotifications() {
    (async () => {
      try {
        const data = await request("/api/notifications/recent/", "GET", null, {
          Authorization: `Bearer ${token}`,
        });
        if (data) {
          setNotifications(data.results);
        }
      } catch (e) {}
    })();
  }
  function updateUrlCards() {
    (async () => {
      try {
        const data = await request("/api/content/url-cards/", "GET", null, {
          Authorization: `Bearer ${token}`,
        });
        if (data) setUrlCards([...data]);
      } catch (e) {}
    })();
  }
  function updateActivities() {
    (async () => {
      try {
        const data = await request("/api/fields_of_activity/", "GET");
        setActivities([...data]);
      } catch (e) {
        console.log(e);
      }
    })();
  }
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
        <title>Загрузка...</title>
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
            changeFormHandler,
            addChildrenActivity,
            childrenActivity,
            formFilter,
            submitFormHandler,
            clearForm,
            notifications,
            updateNotifications,
            setNotifications,
            urlCards,
            activities,
          }}
        >
          {!!isPermission && !loading && <Component {...pageProps} />}
          {!!!isPermission && !loading && <FourOhOne />}
          {loading && <Load />}
        </AuthContext.Provider>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
