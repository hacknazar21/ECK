import React from "react";
import Avatar from "../../../../src/img/avatars/01.png";

function PContent(props) {
  return (
    <section className="projects__content projects-content profile-content">
      <div className="projects-content-block profile-block">
        <header className="projects-content-block__header">
          <h1 className="projects-content-block__title profile-title">
            Мои проекты
          </h1>
          <div className="projects-content-block__actions projects-content-actions profile-actions">
            <div className="projects-content-actions__tabs projects-content-actions-tabs profile-tabs">
              <div className="projects-content-actions-tabs_tab profile-tabs__tab">
                <button className="projects-content-actions-tabs__tab-button profile-tabs__tab-button active">
                  Все проекты
                </button>
                <button className="projects-content-actions-tabs__tab-button profile-tabs__tab-button">
                  Активные
                </button>
                <button className="projects-content-actions-tabs__tab-button profile-tabs__tab-button">
                  Завершенные
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className="projects-cards profile-cards">
        <article className="projects-cards__card projects-card profile-cards__card profile-card">
          <div className="projects-card__logo profile-card__logo">
            <div className="projects-card__image profile-card__image">
              <img src={Avatar.src} alt="" />
            </div>
            <div className="projects-card__name profile-card__name">IBM</div>
          </div>
          <h2 className="projects-card__title profile-card__title">
            Доработать проект для информации и связи в университете
          </h2>
          <div className="projects-card__text profile-card__text">
            <p>
              Разрабатываем мобильную игру для детей на Unity Хотим внедрить
              вместо или параллельно с внутриигровой валютой (золото и
              кристаллы) – свою криптовалюту или токен. Дабы игроки...
            </p>
          </div>
          <div className="projects-card__members projects-card-members profile-members">
            <div className="projects-card-members__title profile-members__title">
              Всего участников
            </div>
            <div className="projects-card__members-box profile-members__box">
              <div className="projects-card__icons profile-members__icons">
                <div className="projects-card__icon profile-members__icon">
                  <img src={Avatar.src} alt="" />
                </div>
                <div className="projects-card__icon profile-members__icon">
                  <img src={Avatar.src} alt="" />
                </div>
                <div className="projects-card__icon profile-members__icon">
                  <img src={Avatar.src} alt="" />
                </div>
                <div className="projects-card__icon profile-members__icon">
                  <img src={Avatar.src} alt="" />
                </div>
                <div className="projects-card__icon profile-members__icon">
                  <img src={Avatar.src} alt="" />
                </div>
              </div>
              <div className="projects-card__number profile-members__number">
                <span>10 участников</span>
              </div>
            </div>
          </div>
          <div className="window-notification__actions">
            <button className="window-notification__button window-notification__button_active">
              Смотреть
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}

export default PContent;
