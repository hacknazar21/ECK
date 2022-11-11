import React from "react";
import Spoiler from "../../../common/Spoiler";
import Notification from "../../../common/Notifications/Notification/Notification";
import TabBarItem from "../../../common/TabBar/TabBarItem";
import TabBar from "../../../common/TabBar/TabBar";

function NContent(props) {
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
                  placeholder={"Поиск обьявлений"}
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
              <button className="notifications-filter__item">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.25 1.5H3.75C3.15326 1.5 2.58097 1.73705 2.15901 2.15901C1.73705 2.58097 1.5 3.15326 1.5 3.75V4.6275C1.49989 4.93721 1.56372 5.2436 1.6875 5.5275V5.5725C1.79346 5.81323 1.94354 6.032 2.13 6.2175L6.75 10.8075V15.75C6.74974 15.8775 6.78198 16.0029 6.84365 16.1144C6.90533 16.226 6.99442 16.3199 7.1025 16.3875C7.22186 16.4615 7.35958 16.5005 7.5 16.5C7.61741 16.4993 7.73301 16.471 7.8375 16.4175L10.8375 14.9175C10.9612 14.8552 11.0652 14.7598 11.138 14.642C11.2108 14.5242 11.2496 14.3885 11.25 14.25V10.8075L15.84 6.2175C16.0265 6.032 16.1765 5.81323 16.2825 5.5725V5.5275C16.4166 5.24582 16.4907 4.93933 16.5 4.6275V3.75C16.5 3.15326 16.2629 2.58097 15.841 2.15901C15.419 1.73705 14.8467 1.5 14.25 1.5ZM9.9675 9.9675C9.89799 10.0376 9.843 10.1207 9.80567 10.2121C9.76835 10.3034 9.74943 10.4013 9.75 10.5V13.785L8.25 14.535V10.5C8.25057 10.4013 8.23165 10.3034 8.19433 10.2121C8.157 10.1207 8.10201 10.0376 8.0325 9.9675L4.0575 6H13.9425L9.9675 9.9675ZM15 4.5H3V3.75C3 3.55109 3.07902 3.36032 3.21967 3.21967C3.36032 3.07902 3.55109 3 3.75 3H14.25C14.4489 3 14.6397 3.07902 14.7803 3.21967C14.921 3.36032 15 3.55109 15 3.75V4.5Z"
                    fill="#4D97C1"
                  />
                </svg>
              </button>
            </div>
            <div className="notifications-filter__days">
              <button className="notifications-filter__day">Сегодня</button>
              <button className="notifications-filter__day">Неделя</button>
              <button className="notifications-filter__day active">
                Месяц
              </button>
            </div>
          </div>
        }
        classNames={["profile-block"]}
      >
        <TabBarItem className={"profile-block"} label={"Все"}>
          <div className="notifications-block__notification notification notifications-block__notification_important">
            <Notification />
          </div>
          <div className="notifications-block__notification notification notifications-block__notification_important">
            <Notification />
          </div>
          <div className="notifications-block__notification notification">
            <Notification />
          </div>
        </TabBarItem>
        <TabBarItem className={"profile-block"} label={"Непрочитанные"}>
          <div className="notifications-block__notification notification notifications-block__notification_important">
            <Notification />
          </div>
          <div className="notifications-block__notification notification notifications-block__notification_important">
            <Notification />
          </div>
        </TabBarItem>
      </TabBar>
    </section>
  );
}

export default NContent;
