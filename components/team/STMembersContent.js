import React from "react";
import Avatar from "../../src/img/avatars/01.png";
import { useRouter } from "next/router";
import Link from "next/link";

function STContent(props) {
  const router = useRouter();
  const { link } = router.query;
  return (
    <>
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
    </>
  );
}

export default STContent;
