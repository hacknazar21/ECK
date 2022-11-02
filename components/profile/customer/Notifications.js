import React from "react";
import ProfilePageLayout from "../../../layouts/ProfilePageLayout";
import Aside from "../../common/Aside/Aside";
import MyProfileContent from "./MyProfile/MyProfileContent";
import NContent from "./Notifications/NContent";
import Link from "next/link";

function Notifications(props) {
  return (
    <section className="page__my-profile notifications">
      <div className="notifications__container">
        <ProfilePageLayout>
          <Aside>
            <li className={"aside-menu__item"}>
              <Link href={"/profile/customer/my-profile"}>
                <a className="aside-menu__link">Мой профиль</a>
              </Link>
            </li>
            <li className={"aside-menu__item active"}>
              <div className="aside-menu__link">Уведомления</div>
            </li>
            <li className={"aside-menu__item"}>
              <Link href={"/profile/customer/my-profile"}>
                <a className="aside-menu__link">Мои проекты</a>
              </Link>
            </li>
          </Aside>
          <NContent />
        </ProfilePageLayout>
      </div>
    </section>
  );
}

export default Notifications;
