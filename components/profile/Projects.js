import React from "react";
import ProfilePageLayout from "../../layouts/ProfilePageLayout";
import Aside from "../common/Aside/Aside";
import PContent from "./Projects/PContent";
import ProfileMenu from "./ProfileMenu";

function Projects(props) {
  return (
    <section className="page__my-profile projects">
      <div className="projects__container">
        <ProfilePageLayout>
          <Aside>
            <ProfileMenu />
          </Aside>
          <PContent />
        </ProfilePageLayout>
      </div>
    </section>
  );
}

export default Projects;
