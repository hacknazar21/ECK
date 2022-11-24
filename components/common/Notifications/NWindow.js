import React, { useContext, useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Link from "next/link";
import Avatar from "../../../src/img/avatars/01.png";
import useHttp from "../../../hooks/hooks.http";
import { AuthContext } from "../../../context/AuthContext";
import NotificationWindow from "./Notification/NotificationWindow";

function NWindow(props) {
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const { request } = useHttp();
  const { token } = useContext(AuthContext);
  function openWindowHandler(event) {
    setIsWindowOpen((prevState) => !prevState);
  }
  useEffect(() => {
    (async () => {
      try {
        const data = await request("/api/notifications/", "GET", null, {
          Authorization: `Bearer ${token}`,
        });
        setNotifications([...data.results]);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [token]);
  async function updateNotifications() {
    try {
      const data = await request("/api/notifications/", "GET", null, {
        Authorization: `Bearer ${token}`,
      });
      setNotifications([...data.results]);
    } catch (e) {
      console.log(e);
    }
  }
  async function readAllClickHandler() {
    try {
      for (const notification of notifications) {
        await request(
          `/api/notifications/${notification.id}/mark_viewed/`,
          "POST",
          {},
          {
            Authorization: `Bearer ${token}`,
          }
        );
      }
      await updateNotifications();
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <button onClick={openWindowHandler} className="header__search-button">
        {notifications.filter((notification) => !notification.is_viewed)
          .length !== 0 && (
          <span className="notifications-count">{notifications.length}</span>
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clipPath="url(#clip0_349_1253)">
            <path
              d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.37 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.64 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16ZM16 17H8V11C8 8.52 9.51 6.5 12 6.5C14.49 6.5 16 8.52 16 11V17Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_349_1253">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <CSSTransition
        in={isWindowOpen}
        classNames={"open"}
        timeout={300}
        mountOnEnter
        unmountOnExit
      >
        <div className="notifications-window">
          <div className="notifications-window__wrapper">
            <header className="notifications-window__header">
              <div className="notifications-window__title">Уведомления</div>
              <button
                onClick={readAllClickHandler}
                className="notifications-window__more-link more-link"
              >
                Прочитать все
              </button>
            </header>
            <section className="notifications-window__notifications">
              {notifications.map((notification) => (
                <NotificationWindow
                  updateNotifications={updateNotifications}
                  notification={notification}
                />
              ))}
              {notifications.length === 0 && (
                <p className={"notifications-window__empty"}>
                  Уведомлений пока нет
                </p>
              )}
            </section>
            <footer className="notifications-window__footer">
              <Link href="/profile/notifications">
                <a className="notifications-window__more-link more-link">
                  Все уведомления
                </a>
              </Link>
            </footer>
          </div>
        </div>
      </CSSTransition>
    </>
  );
}

export default NWindow;
