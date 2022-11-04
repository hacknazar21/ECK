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
              <button className="single-team-page-tabs__tab-button profile-tabs__tab-button active">
                Участники
              </button>
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
        <div className="single-team-content-block__members single-team-members">
          <article className="single-team-members__member single-team-member">
            <div className="single-team-member__info">
              <div className="single-team-member__icon">
                <img src={Avatar.src} alt="" />
              </div>
              <div className="single-team-member__name-box">
                <div className="single-team-member__name">Kiril Bledniy</div>
                <a
                  href="mailto:test@gmail.com"
                  className="single-team-member__email"
                >
                  test@gmail.com
                </a>
              </div>
              <div className="single-team-member__role">Администратор</div>
            </div>
          </article>
          <article className="single-team-members__member single-team-member">
            <div className="single-team-member__info">
              <div className="single-team-member__icon">
                <img src={Avatar.src} alt="" />
              </div>
              <div className="single-team-member__name-box">
                <div className="single-team-member__name">Albert Flores</div>
                <a
                  href="mailto:jackson.graham@example.com"
                  className="single-team-member__email"
                >
                  jackson.graham@example.com
                </a>
              </div>
            </div>
            <div className="single-team-member__actions">
              <button className="window-notification__button window-notification__button_active">
                Смотреть профиль
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default STContent;
