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
              <button className="single-team-page-tabs__tab-button profile-tabs__tab-button active">
                Информация
              </button>
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
              <Link
                href="/team/[link]/projects"
                as={"/team/" + link + "/projects"}
              >
                <a className="single-team-page-tabs__tab-button profile-tabs__tab-button">
                  Проекты (10)
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="single-team-page-content__info single-team-page-info">
          <div className="single-team-page-info__block">
            <h2 className="single-team-page-info__title">О компании:</h2>
            <div className="single-team-page-info__text">
              <p>
                Разрабатываем мобильную игру для детей на Unity Хотим внедрить
                вместо или параллельно с внутриигровой валютой (золото и
                кристаллы) – свою криптовалюту или токен. Дабы
                игроки...Разрабатываем мобильную игру для детей на Unity Хотим
                внедрить вместо или параллельно с внутриигровой валютой (золото
                и кристаллы) – свою криптовалюту или токен. Дабы
                игроки...Разрабатываем мобильную игру для детей на Unity Хотим
                внедрить вместо или параллельно с внутриигровой валютой (золото
                и кристаллы) – свою криптовалюту или токен. Дабы игроки...
                Разрабатываем мобильную игру для детей на Unity Хотим внедрить
                вместо или параллельно с внутриигровой валютой (золото и
                кристаллы) – свою криптовалюту или токен. Дабы
                игроки...Разрабатываем мобильную игру для детей на Unity Хотим
                внедрить вместо или параллельно с внутриигровой валютой (золото
                и кристаллы) – свою криптовалюту или токен. Дабы
                игроки...Разрабатываем мобильную игру для детей на Unity Хотим
                внедрить вместо или параллельно с внутриигровой валютой (золото
                и кристаллы) – свою криптовалюту или токен. Дабы игроки...
              </p>
            </div>
          </div>
          <div className="single-team-page-info__block">
            <h2 className="single-team-page-info__title">Документы команды:</h2>
            <div className="single-team-page-info__docs">
              <a
                href={
                  "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3132&q=80"
                }
                target={"_blank"}
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
      </div>
    </div>
  );
}

export default STContent;
