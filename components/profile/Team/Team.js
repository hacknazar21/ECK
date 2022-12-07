import React from "react";
import ProfilePageLayout from "../../../layouts/ProfilePageLayout";
import Aside from "../../common/Aside/Aside";
import TContent from "./TContent";
import ProfileMenu from "../ProfileMenu";

function Team(props) {
  return (
    <section className="page__my-profile notifications">
      <div className="notifications__container">
        <ProfilePageLayout>
          <Aside>
            <ProfileMenu />
          </Aside>
          <TContent />
        </ProfilePageLayout>
      </div>
    </section>
  );
}

export default Team;
