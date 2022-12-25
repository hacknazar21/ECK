import React, { useContext, useEffect, useState } from "react";
import ProfilePageLayout from "../../layouts/ProfilePageLayout";
import PContent from "./PContent";
import ActivitiesMenu from "../common/ActivitiesMenu";
import useHttp from "../../hooks/hooks.http";
import { AuthContext } from "../../context/AuthContext";

function Projects() {
  const [projects, setProjects] = useState([]);
  const { request } = useHttp();
  useEffect(() => {
    (async () => {
      try {
        const data = await request("/api/projects/");
        setProjects([...data.results]);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <section className="page__my-profile team-page">
      <div className="team-page__container">
        <ProfilePageLayout>
          <ActivitiesMenu
            url={"/api/projects/"}
            setter={(data) => {
              setProjects([...data]);
            }}
          />
          <PContent
            projects={projects}
            url={"/api/projects/"}
            setter={(data) => {
              setProjects([...data]);
            }}
          />
        </ProfilePageLayout>
      </div>
    </section>
  );
}

export default Projects;
