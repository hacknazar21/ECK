import React from "react";
import Avatar from "../../../../src/img/avatars/01.png";

function TContent(props) {
  return (
    <section className="page__team-content team-content profile-content">
      <div className="team-content__block profile-block team-block">
        <h1 className="team-content__title profile-title">Мои команды</h1>
        <div className="team-content__actions team-actions profile-actions">
          <div className="team-actions__tabs team-tabs profile-tabs">
            <div className="team-tabs__tab profile-tabs__tab">
              <button
                className="team-tabs__tab-button profile-tabs__tab-button active"
                data-tab={"all"}
              >
                Все
              </button>
            </div>
            <div className="team-tabs__tab profile-tabs__tab">
              <button
                className="team-tabs__tab-button profile-tabs__tab-button"
                data-tab={"consortium"}
              >
                Консорциум
              </button>
            </div>
          </div>
          <button className="team-actions__add-btn add-btn">
            <span>
              <span></span>
              <span></span>
            </span>
            Создать новую команду
          </button>
        </div>
      </div>
      <div className="team-content__cards profile-cards">
        <article className="team-content__card profile-cards__card profile-card team-card">
          <div className="team-card__logo profile-card__logo">
            <div className="team-card__image profile-card__image">
              <img src={Avatar.src} alt="" />
            </div>
            <div className="team-card__name profile-card__name">IBM</div>
          </div>
          <h2 className="team-card__title profile-card__title">
            Доработать проект для информации и связи в университете
          </h2>
          <div className="team-card__text profile-card__text">
            <p>
              Разрабатываем мобильную игру для детей на Unity Хотим внедрить
              вместо или параллельно с внутриигровой валютой (золото и
              кристаллы) – свою криптовалюту или токен. Дабы игроки...
            </p>
          </div>
          <div className="team-card__members profile-members">
            <div className="profile-members__title">Всего участников</div>
            <div className="team-card__members-box profile-members__box">
              <div className="team-card__icons profile-members__icons">
                <div className="team-card__icon profile-members__icon">
                  <img src={Avatar.src} alt="" />
                </div>
                <div className="team-card__icon profile-members__icon">
                  <img src={Avatar.src} alt="" />
                </div>
                <div className="team-card__icon profile-members__icon">
                  <img src={Avatar.src} alt="" />
                </div>
                <div className="team-card__icon profile-members__icon">
                  <img src={Avatar.src} alt="" />
                </div>
                <div className="team-card__icon profile-members__icon">
                  <img src={Avatar.src} alt="" />
                </div>
              </div>
              <div className="team-card__number profile-members__number">
                <span>10 участников</span>
              </div>
            </div>
          </div>
          <div className="window-notification__actions">
            <button className="window-notification__button window-notification__button_active">
              Принять
            </button>
          </div>
        </article>
        <article className="team-content__card profile-cards__card profile-card team-card">
          <div className="team-card__logo profile-card__logo">
            <div className="team-card__image profile-card__image">
              <img src={Avatar.src} alt="" />
            </div>
            <div className="team-card__name profile-card__name">IBM</div>
          </div>
          <h2 className="team-card__title profile-card__title">
            Доработать проект для информации и связи в университете
          </h2>
          <div className="team-card__text profile-card__text">
            <p>
              Разрабатываем мобильную игру для детей на Unity Хотим внедрить
              вместо или параллельно с внутриигровой валютой (золото и
              кристаллы) – свою криптовалюту или токен. Дабы игроки...
            </p>
          </div>
          <div className="team-card__members profile-members">
            <div className="profile-members__title">Всего участников</div>
            <div className="team-card__members-box profile-members__box">
              <div className="team-card__icons profile-members__icons">
                <div className="team-card__icon profile-members__icon">
                  <img src={Avatar.src} alt="" />
                </div>
                <div className="team-card__icon profile-members__icon">
                  <img src={Avatar.src} alt="" />
                </div>
                <div className="team-card__icon profile-members__icon">
                  <img src={Avatar.src} alt="" />
                </div>
                <div className="team-card__icon profile-members__icon">
                  <img src={Avatar.src} alt="" />
                </div>
                <div className="team-card__icon profile-members__icon">
                  <img src={Avatar.src} alt="" />
                </div>
              </div>
              <div className="team-card__number profile-members__number">
                <span>10 участников</span>
              </div>
            </div>
          </div>
          <div className="window-notification__actions">
            <button className="window-notification__button window-notification__button_active">
              Принять
            </button>
          </div>
        </article>
        <article className="team-content__card profile-cards__card profile-card team-card">
          <div className="team-card__tag profile-card__tag">Консорциум</div>
          <div className="team-card__logo profile-card__logo">
            <div className="team-card__image profile-card__image">
              <img src={Avatar.src} alt="" />
            </div>
            <div className="team-card__name profile-card__name">IBM</div>
          </div>
          <div className="team-card__logo profile-card__logo">
            <div className="team-card__image profile-card__image">
              <img src={Avatar.src} alt="" />
            </div>
            <div className="team-card__name profile-card__name">IBM</div>
          </div>
          <h2 className="team-card__title profile-card__title">
            Доработать проект для информации и связи в университете
          </h2>
          <div className="team-card__members profile-members">
            <div className="profile-members__title">Всего участников</div>
            <div className="team-card__members-box profile-members__box">
              <div className="team-card__icons profile-members__icons">
                <div className="team-card__icon profile-members__icon">
                  <img src={Avatar.src} alt="" />
                </div>
                <div className="team-card__icon profile-members__icon">
                  <img src={Avatar.src} alt="" />
                </div>
                <div className="team-card__icon profile-members__icon">
                  <img src={Avatar.src} alt="" />
                </div>
                <div className="team-card__icon profile-members__icon">
                  <img src={Avatar.src} alt="" />
                </div>
                <div className="team-card__icon profile-members__icon">
                  <img src={Avatar.src} alt="" />
                </div>
              </div>
              <div className="team-card__number profile-members__number">
                <span>10 участников</span>
              </div>
            </div>
          </div>
          <div className="window-notification__actions">
            <button className="window-notification__button window-notification__button_active">
              Принять
            </button>
          </div>
        </article>
        <article className="team-content__card profile-cards__card profile-card team-card">
          <div className="team-card__logo profile-card__logo">
            <div className="team-card__image profile-card__image">
              <img src={Avatar.src} alt="" />
            </div>
            <div className="team-card__name profile-card__name">IBM</div>
          </div>
          <h2 className="team-card__title profile-card__title">
            Доработать проект для информации и связи в университете
          </h2>
          <div className="team-card__text profile-card__text">
            <p>
              Разрабатываем мобильную игру для детей на Unity Хотим внедрить
              вместо или параллельно с внутриигровой валютой (золото и
              кристаллы) – свою криптовалюту или токен. Дабы игроки...
            </p>
          </div>
          <div className="team-card__members profile-members">
            <div className="profile-members__title">Всего участников</div>
            <div className="team-card__members-box profile-members__box">
              <div className="team-card__icons profile-members__icons">
                <div className="team-card__icon profile-members__icon">
                  <img src={Avatar.src} alt="" />
                </div>
                <div className="team-card__icon profile-members__icon">
                  <img src={Avatar.src} alt="" />
                </div>
                <div className="team-card__icon profile-members__icon">
                  <img src={Avatar.src} alt="" />
                </div>
                <div className="team-card__icon profile-members__icon">
                  <img src={Avatar.src} alt="" />
                </div>
                <div className="team-card__icon profile-members__icon">
                  <img src={Avatar.src} alt="" />
                </div>
              </div>
              <div className="team-card__number profile-members__number">
                <span>10 участников</span>
              </div>
            </div>
          </div>
          <div className="window-notification__actions">
            <button className="window-notification__button window-notification__button_active">
              Принять
            </button>
          </div>
        </article>
        <article className="team-content__card profile-cards__card profile-card team-card">
          <div className="team-card__logo profile-card__logo">
            <div className="team-card__image profile-card__image">
              <img src={Avatar.src} alt="" />
            </div>
            <div className="team-card__name profile-card__name">IBM</div>
          </div>
          <h2 className="team-card__title profile-card__title">
            Доработать проект для информации и связи в университете
          </h2>
          <div className="team-card__text profile-card__text">
            <p>
              Разрабатываем мобильную игру для детей на Unity Хотим внедрить
              вместо или параллельно с внутриигровой валютой (золото и
              кристаллы) – свою криптовалюту или токен. Дабы игроки...
            </p>
          </div>
          <div className="team-card__members profile-members">
            <div className="profile-members__title">Всего участников</div>
            <div className="team-card__members-box profile-members__box">
              <div className="team-card__icons profile-members__icons">
                <div className="team-card__icon profile-members__icon">
                  <img src={Avatar.src} alt="" />
                </div>
                <div className="team-card__icon profile-members__icon">
                  <img src={Avatar.src} alt="" />
                </div>
                <div className="team-card__icon profile-members__icon">
                  <img src={Avatar.src} alt="" />
                </div>
                <div className="team-card__icon profile-members__icon">
                  <img src={Avatar.src} alt="" />
                </div>
                <div className="team-card__icon profile-members__icon">
                  <img src={Avatar.src} alt="" />
                </div>
              </div>
              <div className="team-card__number profile-members__number">
                <span>10 участников</span>
              </div>
            </div>
          </div>
          <div className="window-notification__actions">
            <button className="window-notification__button window-notification__button_active">
              Принять
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}

export default TContent;
