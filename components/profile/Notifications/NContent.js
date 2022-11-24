import React, { useContext, useEffect, useState } from "react";
import Notification from "../../common/Notifications/Notification/Notification";
import TabBar from "../../common/TabBar/TabBar";
import TabBarItem from "../../common/TabBar/TabBarItem";
import useHttp from "../../../hooks/hooks.http";
import { AuthContext } from "../../../context/AuthContext";

function NContent(props) {
  const [notifications, setNotifications] = useState([]);
  const { request } = useHttp();
  const { token } = useContext(AuthContext);

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
  return (
    <section className="page__notifications-content notifications-content profile-content">
      <TabBar
        header={
          <h1 className="notifications-block__title profile-title">
            Мои уведомления
          </h1>
        }
        component={
          <div className="notifications-actions__filter notifications-filter">
            <div className="notifications-filter__side">
              <div className="notifications-filter__input-box">
                <input
                  type="text"
                  className="notifications-filter__input"
                  placeholder={"Поиск"}
                />
                <button className="notifications-filter__submit">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.2825 15.2176L13.5001 12.4576C14.5801 11.1109 15.1032 9.40152 14.9617 7.68103C14.8201 5.96053 14.0248 4.35964 12.7392 3.20753C11.4536 2.05543 9.77541 1.43968 8.04974 1.4869C6.32408 1.53412 4.68209 2.24072 3.46141 3.46141C2.24072 4.68209 1.53412 6.32408 1.4869 8.04974C1.43968 9.77541 2.05543 11.4536 3.20753 12.7392C4.35964 14.0248 5.96053 14.8201 7.68103 14.9617C9.40152 15.1032 11.1109 14.5801 12.4576 13.5001L15.2176 16.2601C15.2873 16.3303 15.3702 16.3861 15.4616 16.4242C15.553 16.4623 15.651 16.4819 15.7501 16.4819C15.8491 16.4819 15.9471 16.4623 16.0385 16.4242C16.1299 16.3861 16.2128 16.3303 16.2825 16.2601C16.4177 16.1202 16.4933 15.9333 16.4933 15.7388C16.4933 15.5443 16.4177 15.3574 16.2825 15.2176ZM8.25005 13.5001C7.2117 13.5001 6.19666 13.1921 5.33331 12.6153C4.46995 12.0384 3.79704 11.2185 3.39968 10.2591C3.00232 9.29983 2.89836 8.24423 3.10093 7.22583C3.3035 6.20743 3.80351 5.27197 4.53774 4.53774C5.27197 3.80351 6.20743 3.3035 7.22583 3.10093C8.24423 2.89836 9.29983 3.00232 10.2591 3.39968C11.2185 3.79704 12.0384 4.46995 12.6153 5.33331C13.1921 6.19666 13.5001 7.2117 13.5001 8.25005C13.5001 9.64244 12.9469 10.9778 11.9624 11.9624C10.9778 12.9469 9.64244 13.5001 8.25005 13.5001Z"
                      fill="#4D97C1"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="notifications-filter__days">
              <div className="notifications-filter__day-box">
                <input
                  type="radio"
                  name="day"
                  id="today"
                  defaultChecked={true}
                  value="today"
                />
                <label className="notifications-filter__day" htmlFor="today">
                  Сегодня
                </label>
              </div>
              <div className="notifications-filter__day-box">
                <input type="radio" name="day" id="week" value="week" />
                <label className="notifications-filter__day" htmlFor="week">
                  Неделя
                </label>
              </div>
              <div className="notifications-filter__day-box">
                <input type="radio" name="day" id="month" value="month" />
                <label className="notifications-filter__day" htmlFor="month">
                  Месяц
                </label>
              </div>
            </div>
          </div>
        }
      >
        <TabBarItem className={"profile-block"} label={"Все"}>
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={
                "notifications-block__notification notification " +
                (notification.is_viewed
                  ? "notifications-block__notification_important"
                  : "")
              }
            >
              <Notification
                updateNotifications={updateNotifications}
                notification={notification}
              />
            </div>
          ))}
          {notifications.length === 0 && "Уведомлений пока нет"}
        </TabBarItem>
        <TabBarItem className={"profile-block"} label={"Непрочитанные"}>
          {notifications
            .filter((notification) => notification.is_viewed)
            .map((notification) => (
              <div
                key={notification.id}
                className={
                  "notifications-block__notification notification notifications-block__notification_important"
                }
              >
                <Notification updateNotifications notification={notification} />
              </div>
            ))}
          {notifications.length === 0 && "Уведомлений пока нет"}
        </TabBarItem>
      </TabBar>
    </section>
  );
}

export default NContent;
