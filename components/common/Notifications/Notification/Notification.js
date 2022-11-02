import React from "react";
import Spoiler from "../../Spoiler";
import Avatar from "../../../../src/img/avatars/01.png";
function Notification(props) {
  return (
    <article className="notification__item notification-item">
      <Spoiler
        spoilerClass={"notification-item__spoiler"}
        isLoaded={true}
        content={
          <div className="notification-item__content">
            <div className="notification-item__logo">
              <div className="notification-item__logo-image">
                <img src={Avatar.src} alt="" />
              </div>
              <div className="notification-item__logo-name">IBM</div>
            </div>
            <h2 className="notification-item__content-title">
              Доработать проект для информации и связи в университете
            </h2>
            <div className="notification-item__content-text">
              <p>
                Разрабатываем мобильную игру для детей на Unity Хотим внедрить
                вместо или параллельно с внутриигровой валютой (золото и
                кристаллы) – свою криптовалюту или токен. Дабы игроки...
              </p>
            </div>
            <div className="notification-item__content-members notification-item-members">
              <div className="notification-item-members__icons">
                <div className="notification-item-members__icon">
                  <img src={Avatar.src} alt="" />
                </div>
                <div className="notification-item-members__icon">
                  <img src={Avatar.src} alt="" />
                </div>
                <div className="notification-item-members__icon">
                  <img src={Avatar.src} alt="" />
                </div>
                <div className="notification-item-members__icon">
                  <img src={Avatar.src} alt="" />
                </div>
                <div className="notification-item-members__icon">
                  <img src={Avatar.src} alt="" />
                </div>
              </div>
            </div>
            <div className="window-notification__actions">
              <button className="window-notification__button window-notification__button_active">
                Принять
              </button>
              <button className="window-notification__button window-notification__button_no-active">
                Отклонить
              </button>
            </div>
          </div>
        }
        title={
          <div className="notification-item__header">
            <time className="notification-item__time">
              <span>3 дня назад</span>
              <span>|</span>
              <span>12:30</span>
            </time>
            <h3 className="notification-item__title">
              AUES приглашает вас вступить в команду
            </h3>
          </div>
        }
      />
    </article>
  );
}

export default Notification;
