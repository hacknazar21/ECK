import React from "react";
import ProfilePageLayout from "../../../layouts/ProfilePageLayout";
import Aside from "../../common/Aside/Aside";
import Link from "next/link";
import STContent from "./Team/STContent";

function SingleTeam({ link }) {
  return (
    <section className="page__my-profile single-team">
      <div className="single-team__container">
        <ProfilePageLayout>
          <Aside>
            <li className={"aside-menu__item"}>
              <Link href={"/profile/executor/my-profile"}>
                <a className="aside-menu__link">Мой профиль</a>
              </Link>
            </li>
            <li className={"aside-menu__item"}>
              <Link href={"/profile/executor/notifications"}>
                <a className="aside-menu__link">Уведомления</a>
              </Link>
            </li>
            <li className={"aside-menu__item active"}>
              <div className="aside-menu__link">Команды</div>
            </li>
            <li className={"aside-menu__item"}>
              <Link href={"/profile/executor/projects"}>
                <a className="aside-menu__link">Мои проекты</a>
              </Link>
            </li>
          </Aside>
          <STContent />
        </ProfilePageLayout>
      </div>
    </section>
  );
}

export default SingleTeam;
