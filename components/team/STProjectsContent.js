import React from "react";
import Avatar from "../../src/img/avatars/01.png";
import { useRouter } from "next/router";
import Link from "next/link";

function STContent(props) {
  const router = useRouter();
  const { link } = router.query;
  return (
    <div className="single-team-page__content single-team-page-content profile-content">
      <div className="single-team-page-content-content__block single-team-page-block profile-block">
        <h1
          onClick={() => {
            router.back();
          }}
          className="single-team-page-block__title profile-title"
        >
          <button className="single-team-page-block__back back-arrow">
            <span></span>
            <span></span>
          </button>
          Информация о команде
        </h1>
        <div className="single-team-page-block__info single-team-page-block-info">
          <div className="single-team-page-block-info__icon">
            <img src={Avatar.src} alt="" />
          </div>
          <div className="single-team-page-block-info__block">
            <div className="single-team-page-block-info__name">AUES</div>
            <a
              href="https://www.aues.kz"
              className="single-team-page-block-info__site"
            >
              www.aues.kz
            </a>
            <a
              href="mailto:test@gmail.com"
              className="single-team-page-block-info__email"
            >
              test@gmail.com
            </a>
          </div>
        </div>
        <div className="single-team-page-block__actions  team-page-actions">
          <div className="single-team-page-actions__tabs single-team-page-tabs profile-tabs">
            <div className="single-team-page__tab profile-tabs__tab">
              <Link href="/team/[link]/" as={"/team/" + link + "/"}>
                <a className="single-team-page-tabs__tab-button profile-tabs__tab-button">
                  Информация
                </a>
              </Link>
            </div>
            <div className="single-team-page-tabs__tab profile-tabs__tab">
              <Link
                href="/team/[link]/members"
                as={"/team/" + link + "/members"}
              >
                <a className="single-team-page-tabs__tab-button profile-tabs__tab-button">
                  Участники
                </a>
              </Link>
            </div>
            <div className="single-team-page-tabs__tab profile-tabs__tab">
              <button className="single-team-page-tabs__tab-button profile-tabs__tab-button active">
                Проекты (10)
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="projects-cards profile-cards">
        <article className="projects-cards__card projects-card profile-cards__card green-card profile-card">
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
          <div className="projects-card__days-count profile-card__days-count">
            Осталось:
            <span>7 дней</span>
          </div>
        </article>
        <article className="projects-cards__card projects-card profile-cards__card red-card profile-card">
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
          <div className="projects-card__days-count profile-card__days-count">
            Осталось:
            <span>1 дней</span>
          </div>
        </article>
        <article className="projects-cards__card projects-card profile-cards__card green-card profile-card">
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
          <div className="projects-card__days-count profile-card__days-count">
            Осталось:
            <span>7 дней</span>
          </div>
        </article>
        <article className="projects-cards__card projects-card profile-cards__card green-card profile-card">
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
          <div className="projects-card__days-count profile-card__days-count">
            Осталось:
            <span>7 дней</span>
          </div>
        </article>
        <article className="projects-cards__card projects-card profile-cards__card red-card profile-card">
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
          <div className="projects-card__days-count profile-card__days-count">
            Осталось:
            <span>1 дней</span>
          </div>
        </article>
        <article className="projects-cards__card projects-card profile-cards__card green-card profile-card">
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
          <div className="projects-card__days-count profile-card__days-count">
            Осталось:
            <span>7 дней</span>
          </div>
        </article>
      </div>
    </div>
  );
}

export default STContent;
