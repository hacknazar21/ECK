import React from "react";
import ProfilePageLayout from "../../layouts/ProfilePageLayout";
import Aside from "../common/Aside/Aside";
import MyProfileContent from "./MyProfile/MyProfileContent";
import NContent from "./Notifications/NContent";
import Link from "next/link";
import ProfileMenu from "./ProfileMenu";

function Notifications(props) {
  return (
    <section className="page__my-profile notifications">
      <div className="notifications__container">
        <ProfilePageLayout>
          <Aside>
            <ProfileMenu />
          </Aside>
          <NContent />
        </ProfilePageLayout>
      </div>
    </section>
  );
}

export default Notifications;
