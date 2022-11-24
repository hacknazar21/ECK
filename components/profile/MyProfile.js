import React from "react";
import Aside from "../common/Aside/Aside";
import ProfilePageLayout from "../../layouts/ProfilePageLayout";
import MyProfileContent from "./MyProfile/MyProfileContent";
import ProfileMenu from "./ProfileMenu";

function MyProfile(props) {
  return (
    <section className="page__my-profile my-profile">
      <div className="my-profile__container">
        <ProfilePageLayout>
          <Aside>
            <ProfileMenu />
          </Aside>
          <MyProfileContent />
        </ProfilePageLayout>
      </div>
    </section>
  );
}

export default MyProfile;
