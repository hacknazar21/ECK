import React from "react";
import ProfilePageLayout from "../../../layouts/ProfilePageLayout";
import Aside from "../../common/Aside/Aside";
import Link from "next/link";
import PContent from "./Projects/PContent";

function Projects(props) {
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
          <PContent />
        </ProfilePageLayout>
      </div>
    </section>
  );
}

export default Projects;
