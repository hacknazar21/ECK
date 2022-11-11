import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Link from "next/link";
import Avatar from "../../../src/img/avatars/01.png";

function NWindow(props) {
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  function openWindowHandler(event) {
    setIsWindowOpen((prevState) => !prevState);
  }

  return (
    <>
      <button onClick={openWindowHandler} className="header__search-button">
        <span className="notifications-count">2</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_349_1253)">
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
              <div className="notifications-window__more-link more-link">
                Прочитать все
              </div>
            </header>
            <section className="notifications-window__notifications">
              <div className="notifications-window__notification window-notification notifications-window__notification_important">
                <div className="window-notification__icon">
                  <img src={Avatar.src} alt="" />
                </div>
                <div className="window-notification__info window-notification-info">
                  <time className="window-notification-info__date">
                    <span>3 дня назад</span>
                    <span>|</span>
                    <span>12:30</span>
                  </time>
                  <h3 className="window-notification-info__title">
                    <span>AUES</span> приглашает вас вступить в команду
                  </h3>
                  <div className="window-notification__actions">
                    <button className="window-notification__button window-notification__button_active">
                      Принять
                    </button>
                    <button className="window-notification__button window-notification__button_no-active">
                      Отклонить
                    </button>
                  </div>
                </div>
              </div>
              <div className="notifications-window__notification window-notification notifications-window__notification_late">
                <div className="window-notification__icon">
                  <img src={Avatar.src} alt="" />
                </div>
                <div className="window-notification__info window-notification-info">
                  <time className="window-notification-info__date">
                    <span>3 дня назад</span>
                    <span>|</span>
                    <span>12:30</span>
                  </time>
                  <h3 className="window-notification-info__title">
                    <span>AUES</span> приглашает вас вступить в команду
                  </h3>
                </div>
              </div>
            </section>
            <footer className="notifications-window__footer">
              <Link href="/profile/executor/notifications">
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
