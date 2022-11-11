import React from "react";
import Avatar from "../../src/img/avatars/01.png";
import { useRouter } from "next/router";
import Link from "next/link";

function STContent(props) {
  const router = useRouter();
  const { link } = router.query;
  return (
    <div className="profile-cards">
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
            вместо или параллельно с внутриигровой валютой (золото и кристаллы)
            – свою криптовалюту или токен. Дабы игроки...
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
            вместо или параллельно с внутриигровой валютой (золото и кристаллы)
            – свою криптовалюту или токен. Дабы игроки...
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
            вместо или параллельно с внутриигровой валютой (золото и кристаллы)
            – свою криптовалюту или токен. Дабы игроки...
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
            вместо или параллельно с внутриигровой валютой (золото и кристаллы)
            – свою криптовалюту или токен. Дабы игроки...
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
            вместо или параллельно с внутриигровой валютой (золото и кристаллы)
            – свою криптовалюту или токен. Дабы игроки...
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
            вместо или параллельно с внутриигровой валютой (золото и кристаллы)
            – свою криптовалюту или токен. Дабы игроки...
          </p>
        </div>
        <div className="projects-card__days-count profile-card__days-count">
          Осталось:
          <span>7 дней</span>
        </div>
      </article>
    </div>
  );
}

export default STContent;
