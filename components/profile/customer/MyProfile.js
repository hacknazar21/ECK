import React from "react";
import Aside from "../../common/Aside/Aside";
import ProfilePageLayout from "../../../layouts/ProfilePageLayout";
import MyProfileContent from "./MyProfile/MyProfileContent";
import Link from "next/link";

function MyProfile(props) {
  return (
    <section className="page__my-profile my-profile">
      <div className="my-profile__container">
        <ProfilePageLayout>
          <Aside>
            <li className={"aside-menu__item active"}>
              <div className="aside-menu__link">Мой профиль</div>
            </li>
            <li className={"aside-menu__item"}>
              <Link href={"/profile/customer/notifications"}>
                <a className="aside-menu__link">Уведомления</a>
              </Link>
            </li>
            <li className={"aside-menu__item"}>
              <Link href={"/profile/customer/projects"}>
                <a className="aside-menu__link">Мои проекты</a>
              </Link>
            </li>
          </Aside>
          <MyProfileContent />
        </ProfilePageLayout>
      </div>
    </section>
  );
}

export default MyProfile;
