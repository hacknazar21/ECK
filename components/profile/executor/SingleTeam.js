import React from "react";
import ProfilePageLayout from "../../../layouts/ProfilePageLayout";
import Aside from "../../common/Aside/Aside";
import Link from "next/link";
import STContent from "./Team/STContent";
import ProfileMenu from "../ProfileMenu";

function SingleTeam({ link }) {
  return (
    <section className="page__my-profile single-team">
      <div className="single-team__container">
        <ProfilePageLayout>
          <Aside>
            <ProfileMenu />
          </Aside>
          <STContent />
        </ProfilePageLayout>
      </div>
    </section>
  );
}

export default SingleTeam;
