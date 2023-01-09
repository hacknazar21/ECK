import React from "react";
import ProfilePageLayout from "../../../layouts/ProfilePageLayout";
import CTContent from "./CTContent";
import ProfileMenu from "../ProfileMenu";

function Team(props) {
  return (
    <section className="page__my-profile notifications">
      <div className="notifications__container">
        <ProfilePageLayout>
          <ProfileMenu />
          <CTContent />
        </ProfilePageLayout>
      </div>
    </section>
  );
}

export default Team;
