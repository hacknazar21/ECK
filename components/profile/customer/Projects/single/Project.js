import React, { useState } from "react";
import Avatar from "../../../../../src/img/avatars/01.png";
import ProfilePageLayout from "../../../../../layouts/ProfilePageLayout";
import Aside from "../../../../common/Aside/Aside";
import PContent from "../PContent";
import Link from "next/link";
import { useRouter } from "next/router";
import TabBar from "../../../../common/TabBar/TabBar";
import TabBarItem from "../../../../common/TabBar/TabBarItem";
import Img1 from "../../../../../src/img/projects/image 13.png";
import Requests from "../../Requests/Requests";
import Solutions from "../../Solutions/Solutions";
import Chat from "../../../../common/Chat/Chat";

function Project(props) {
  const router = useRouter();
  const [inviteClick, setInviteClick] = useState(false);

  function inviteClickHandler(e) {
    setInviteClick(true);
  }
  function searchSubmitHandler(e) {
    e.preventDefault();
  }
  function searchResultClick(e) {
    e.target.classList.toggle("checked");
  }
  return (
    <section className="page__my-profile projects">
      <div className="projects__container">
        <ProfilePageLayout>
          <Aside>
            <li className={"aside-menu__item"}>
              <Link href={"/profile/customer/my-profile"}>
                <a className="aside-menu__link">Мой профиль</a>
              </Link>
            </li>
            <li className={"aside-menu__item"}>
              <Link href={"/profile/customer/notifications"}>
                <a className="aside-menu__link">Уведомления</a>
              </Link>
            </li>
            <li className={"aside-menu__item active"}>
              <div className="aside-menu__link">Мои проекты</div>
            </li>
          </Aside>
          <section className="single-project__content single-project-content profile-content">
            <TabBar
              header={
                <header className="single-project-content-block__header">
                  <h1
                    onClick={() => {
                      router.back();
                    }}
                    className="single-team-content__title profile-title"
                  >
                    <button className="single-team-content-block__back back-arrow">
                      <span></span>
                      <span></span>
                    </button>
                    IBM
                  </h1>
                </header>
              }
              classNames={["profile-block"]}
            >
              <TabBarItem className={"profile-block"} label={"Информация"}>
                <header className="single-team-content-block__header">
                  <h3 className="single-team-content__title profile-title">
                    Информация о проекте
                  </h3>
                </header>
                <div className="projects-content__modal project-modal">
                  <div className="project-modal__type">
                    <div className="project-modal__type-image">
                      <img src={Img1.src} alt="" />
                    </div>
                    <h4 className="project-modal__type-name">
                      Естественные науки, математика и статистика
                    </h4>
                  </div>
                  <div className="projects-card__logo profile-card__logo">
                    <div className="projects-card__image profile-card__image">
                      <img src={Avatar.src} alt="" />
                    </div>
                    <div className="projects-card__name profile-card__name">
                      IBM
                    </div>
                  </div>
                  <div className="project-modal__info">
                    <h2 className="project-modal__info-title">
                      Доработать проект для информации и связи в университете
                    </h2>
                    <div className="project-modal__info-text">
                      <p>
                        Разрабатываем мобильную игру для детей на Unity Хотим
                        внедрить вместо или параллельно с внутриигровой валютой
                        (золото и кристаллы) – свою криптовалюту или токен. Дабы
                        игроки...Разрабатываем мобильную игру для детей на Unity
                        Хотим внедрить вместо или параллельно с внутриигровой
                        валютой (золото и кристаллы) – свою криптовалюту или
                        токен. Дабы игроки...Разрабатываем мобильную игру для
                        детей на Unity Хотим внедрить вместо или параллельно с
                        внутриигровой валютой (золото и кристаллы) – свою
                        криптовалюту или токен. Дабы игроки...
                      </p>
                    </div>
                  </div>
                  <div className="project-modal__section">
                    <div className="project-modal__section-box">
                      <div className="project-modal__section-title">
                        Начало приема заявок
                      </div>
                      <time
                        dateTime={"20/07/2022"}
                        className="project-modal__section-text"
                      >
                        20/07/2022
                      </time>
                    </div>
                    <div className="project-modal__section-box">
                      <div className="project-modal__section-title">
                        Конец приема заявок
                      </div>
                      <time
                        dateTime={"20/07/2022"}
                        className="project-modal__section-text"
                      >
                        27/07/2022
                      </time>
                    </div>
                  </div>
                  <div className="project-modal__section">
                    <div className="project-modal__section-box">
                      <div className="project-modal__progress-bar">
                        <span></span>
                      </div>
                    </div>
                  </div>
                  <div className="project-modal__section">
                    <div className="project-modal__section-box">
                      <div className="project-modal__section-title">
                        Метод участия
                      </div>
                      <div className="project-modal__section-text">
                        Конкурс / Выбор исполнителя
                      </div>
                    </div>
                  </div>
                  <div className="project-modal__section project-modal__section_border">
                    <div className="project-modal__section-box">
                      <div className="project-modal__section-title">
                        Требования к участнику
                      </div>
                      <div className="project-modal__section-text">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet.
                      </div>
                    </div>
                  </div>
                  <div className="project-modal__section project-modal__section_border project-modal__section_wrap">
                    <div className="project-modal__section-box">
                      <div className="project-modal__section-sub-box">
                        <div className="project-modal__section-title">
                          Заказчик
                        </div>
                        <div className="project-modal__section-text">
                          ТОО “Айболит”
                        </div>
                      </div>
                      <div className="project-modal__section-sub-box">
                        <div className="project-modal__section-title">
                          Электронная почта
                        </div>
                        <div className="project-modal__section-text">
                          Test@gmail.com
                        </div>
                      </div>
                      <div className="project-modal__section-sub-box">
                        <div className="project-modal__section-title">
                          Телефон
                        </div>
                        <div className="project-modal__section-text">
                          + 7 727 277 73 43
                        </div>
                      </div>
                    </div>
                    <div className="project-modal__section-box">
                      <div className="project-modal__section-title">
                        Документы
                      </div>
                      <div className="single-team-page-info__docs">
                        <a
                          href={
                            "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3132&q=80"
                          }
                          target={"_blank"}
                          rel="noreferrer"
                          className="single-team-page-info__doc"
                        >
                          <img
                            src={
                              "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3132&q=80"
                            }
                            alt=""
                          />
                        </a>
                        <a
                          href={
                            "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                          }
                          target={"_blank"}
                          rel="noreferrer"
                          className="single-team-page-info__doc"
                        >
                          <img
                            src={
                              "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                            }
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="project-modal-team__button project-modal-team__button_margin">
                    {!inviteClick ? (
                      <button
                        onClick={inviteClickHandler}
                        className="window-notification__button window-notification__button_active"
                      >
                        Пригласить команды
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="project-modal__teams project-modal-teams">
                    {inviteClick ? (
                      <>
                        <h2 className="project-modal-teams__title">
                          Пригласить команды
                        </h2>
                        <form
                          onSubmit={searchSubmitHandler}
                          className="single-team__form"
                        >
                          <div className="single-team__search-box single-team-search">
                            <button
                              type="submit"
                              className="single-team-search__submit"
                            >
                              <svg
                                width="21"
                                height="22"
                                viewBox="0 0 21 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.375 18.875L14.4497 14.9428M16.625 9.6875C16.625 11.66 15.8414 13.5518 14.4466 14.9466C13.0518 16.3414 11.16 17.125 9.1875 17.125C7.21495 17.125 5.3232 16.3414 3.92839 14.9466C2.53359 13.5518 1.75 11.66 1.75 9.6875C1.75 7.71495 2.53359 5.8232 3.92839 4.42839C5.3232 3.03359 7.21495 2.25 9.1875 2.25C11.16 2.25 13.0518 3.03359 14.4466 4.42839C15.8414 5.8232 16.625 7.71495 16.625 9.6875V9.6875Z"
                                  stroke="#8D9CA5"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                />
                              </svg>
                            </button>
                            <input
                              type="text"
                              placeholder="Поиск по названию команды"
                              className="single-team-search__input"
                            />
                          </div>
                          <div className="single-team-search__results">
                            <div
                              onClick={searchResultClick}
                              className="single-team-search__result"
                            >
                              <div className="single-team-search__checkbox">
                                <div className={"select__checkbox"}>
                                  <span></span>
                                </div>
                              </div>
                              <div className="single-team-search__result-icon">
                                <img src={Avatar.src} alt="" />
                              </div>
                              <div className="single-team-search__result-info">
                                <div className="single-team-search__result-name">
                                  Cameron Williamson
                                </div>
                                <a
                                  href={"mailto:sara.cruz@example.com"}
                                  className="single-team-search__result-email"
                                >
                                  sara.cruz@example.com
                                </a>
                              </div>
                            </div>
                            <div
                              onClick={searchResultClick}
                              className="single-team-search__result"
                            >
                              <div className="single-team-search__checkbox">
                                <div className={"select__checkbox"}>
                                  <span></span>
                                </div>
                              </div>
                              <div className="single-team-search__result-icon">
                                <img src={Avatar.src} alt="" />
                              </div>
                              <div className="single-team-search__result-info">
                                <div className="single-team-search__result-name">
                                  Cameron Williamson
                                </div>
                                <a
                                  href={"mailto:sara.cruz@example.com"}
                                  className="single-team-search__result-email"
                                >
                                  sara.cruz@example.com
                                </a>
                              </div>
                            </div>
                            <div
                              onClick={searchResultClick}
                              className="single-team-search__result"
                            >
                              <div className="single-team-search__checkbox">
                                <div className={"select__checkbox"}>
                                  <span></span>
                                </div>
                              </div>
                              <div className="single-team-search__result-icon">
                                <img src={Avatar.src} alt="" />
                              </div>
                              <div className="single-team-search__result-info">
                                <div className="single-team-search__result-name">
                                  Cameron Williamson
                                </div>
                                <a
                                  href={"mailto:sara.cruz@example.com"}
                                  className="single-team-search__result-email"
                                >
                                  sara.cruz@example.com
                                </a>
                              </div>
                            </div>
                            <div
                              onClick={searchResultClick}
                              className="single-team-search__result"
                            >
                              <div className="single-team-search__checkbox">
                                <div className={"select__checkbox"}>
                                  <span></span>
                                </div>
                              </div>
                              <div className="single-team-search__result-icon">
                                <img src={Avatar.src} alt="" />
                              </div>
                              <div className="single-team-search__result-info">
                                <div className="single-team-search__result-name">
                                  Cameron Williamson
                                </div>
                                <a
                                  href={"mailto:sara.cruz@example.com"}
                                  className="single-team-search__result-email"
                                >
                                  sara.cruz@example.com
                                </a>
                              </div>
                            </div>
                            <div
                              onClick={searchResultClick}
                              className="single-team-search__result"
                            >
                              <div className="single-team-search__checkbox">
                                <div className={"select__checkbox"}>
                                  <span></span>
                                </div>
                              </div>
                              <div className="single-team-search__result-icon">
                                <img src={Avatar.src} alt="" />
                              </div>
                              <div className="single-team-search__result-info">
                                <div className="single-team-search__result-name">
                                  Cameron Williamson
                                </div>
                                <a
                                  href={"mailto:sara.cruz@example.com"}
                                  className="single-team-search__result-email"
                                >
                                  sara.cruz@example.com
                                </a>
                              </div>
                            </div>
                          </div>
                        </form>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="project-modal__teams project-modal-teams">
                    <h2 className="project-modal-teams__title">Команды</h2>
                    <div className="project-modal-teams__team project-modal-team">
                      <div className="project-modal-team__content">
                        <div className="project-modal-team__logo profile-card__logo">
                          <div className="project-modal-team__image profile-card__image">
                            <img src={Avatar.src} alt="" />
                          </div>
                          <div className="project-modal-team__name profile-card__name profile-card__name_team">
                            IBM
                          </div>
                        </div>
                        <div className="project-modal-team__logo profile-card__logo">
                          <div className="project-modal-team__image profile-card__image">
                            <img src={Avatar.src} alt="" />
                          </div>
                          <div className="project-modal-team__name profile-card__name profile-card__name_team">
                            IBM
                          </div>
                        </div>
                        <div className="project-modal-team__text">
                          <p>
                            Разрабатываем мобильную игру для детей на Unity
                            Хотим внедрить вместо или параллельно с
                            внутриигровой валютой (золото и кристаллы) – свою
                            криптовалюту или токен. Дабы игроки...Разрабатываем
                            мобильную игру для детей на Unity Хотим внедрить
                            вместо или параллельно с внутриигровой валютой
                            (золото и кристаллы) – свою криптовалюту или токен.
                            Дабы игроки...Разрабатываем мобильную игру для детей
                            на Unity Хотим внедрить вместо или параллельно с
                            внутриигровой валютой (золото и кристаллы) – свою
                            криптовалюту или токен. Дабы игроки...
                          </p>
                        </div>
                        <div className="project-modal-team__button">
                          <Link href="">
                            <a className="window-notification__button window-notification__button_active">
                              Смотреть профиль
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div className="project-modal-team__info">
                        <div className="project-modal-team__tag profile-card__tag">
                          Консорциум
                        </div>
                        <div className="project-modal-team__info-item">
                          Всего:
                          <span>350 человек</span>
                        </div>
                      </div>
                    </div>
                    <div className="project-modal-teams__team project-modal-team">
                      <div className="project-modal-team__content">
                        <div className="project-modal-team__logo profile-card__logo">
                          <div className="project-modal-team__image profile-card__image">
                            <img src={Avatar.src} alt="" />
                          </div>
                          <div className="project-modal-team__name profile-card__name profile-card__name_team">
                            IBM
                          </div>
                        </div>
                        <div className="project-modal-team__text">
                          <p>
                            Разрабатываем мобильную игру для детей на Unity
                            Хотим внедрить вместо или параллельно с
                            внутриигровой валютой (золото и кристаллы) – свою
                            криптовалюту или токен. Дабы игроки...Разрабатываем
                            мобильную игру для детей на Unity Хотим внедрить
                            вместо или параллельно с внутриигровой валютой
                            (золото и кристаллы) – свою криптовалюту или токен.
                            Дабы игроки...Разрабатываем мобильную игру для детей
                            на Unity Хотим внедрить вместо или параллельно с
                            внутриигровой валютой (золото и кристаллы) – свою
                            криптовалюту или токен. Дабы игроки...
                          </p>
                        </div>
                        <div className="project-modal-team__button">
                          <Link href="">
                            <a className="window-notification__button window-notification__button_active">
                              Смотреть профиль
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div className="project-modal-team__info">
                        <div className="project-modal-team__members-box profile-members__box">
                          <div className="project-modal-team__icons profile-members__icons">
                            <div className="project-modal-team__icon profile-members__icon">
                              <img src={Avatar.src} alt="" />
                            </div>
                            <div className="project-modal-team__icon profile-members__icon">
                              <img src={Avatar.src} alt="" />
                            </div>
                            <div className="project-modal-team__icon profile-members__icon">
                              <img src={Avatar.src} alt="" />
                            </div>
                            <div className="project-modal-team__icon profile-members__icon">
                              <img src={Avatar.src} alt="" />
                            </div>
                          </div>
                        </div>
                        <div className="project-modal-team__info-item">
                          + 16 человек
                        </div>
                      </div>
                    </div>
                    <div className="project-modal-teams__team project-modal-team">
                      <div className="project-modal-team__content">
                        <div className="project-modal-team__logo profile-card__logo">
                          <div className="project-modal-team__image profile-card__image">
                            <img src={Avatar.src} alt="" />
                          </div>
                          <div className="project-modal-team__name profile-card__name profile-card__name_team">
                            IBM
                          </div>
                        </div>
                        <div className="project-modal-team__text">
                          <p>
                            Разрабатываем мобильную игру для детей на Unity
                            Хотим внедрить вместо или параллельно с
                            внутриигровой валютой (золото и кристаллы) – свою
                            криптовалюту или токен. Дабы игроки...Разрабатываем
                            мобильную игру для детей на Unity Хотим внедрить
                            вместо или параллельно с внутриигровой валютой
                            (золото и кристаллы) – свою криптовалюту или токен.
                            Дабы игроки...Разрабатываем мобильную игру для детей
                            на Unity Хотим внедрить вместо или параллельно с
                            внутриигровой валютой (золото и кристаллы) – свою
                            криптовалюту или токен. Дабы игроки...
                          </p>
                        </div>
                        <div className="project-modal-team__button">
                          <Link href="">
                            <a className="window-notification__button window-notification__button_active">
                              Смотреть профиль
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div className="project-modal-team__info">
                        <div className="project-modal-team__members-box profile-members__box">
                          <div className="project-modal-team__icons profile-members__icons">
                            <div className="project-modal-team__icon profile-members__icon">
                              <img src={Avatar.src} alt="" />
                            </div>
                            <div className="project-modal-team__icon profile-members__icon">
                              <img src={Avatar.src} alt="" />
                            </div>
                            <div className="project-modal-team__icon profile-members__icon">
                              <img src={Avatar.src} alt="" />
                            </div>
                            <div className="project-modal-team__icon profile-members__icon">
                              <img src={Avatar.src} alt="" />
                            </div>
                          </div>
                        </div>
                        <div className="project-modal-team__info-item">
                          + 16 человек
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabBarItem>
              <TabBarItem className={"profile-block"} label={"Форум"}>
                <Chat />
              </TabBarItem>
              <TabBarItem
                className={"profile-block"}
                label={"Отправленные заявки"}
              >
                <Requests />
              </TabBarItem>
              <TabBarItem className={"profile-block"} label={"Поданые решения"}>
                <Solutions />
              </TabBarItem>
            </TabBar>
          </section>
        </ProfilePageLayout>
      </div>
    </section>
  );
}

export default Project;
