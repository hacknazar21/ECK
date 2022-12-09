import React, { useContext, useEffect, useState } from "react";
import ProfilePageLayout from "../../layouts/ProfilePageLayout";
import PContent from "./PContent";
import ActivitiesMenu from "../common/ActivitiesMenu";
import useHttp from "../../hooks/hooks.http";
import { AuthContext } from "../../context/AuthContext";

function Projects() {
  const [projects, setProjects] = useState([]);
  const { request } = useHttp();
  const { token } = useContext(AuthContext);
  useEffect(() => {
    (async () => {
      try {
        const headers = {};
        if (token) headers["Authorization"] = `Bearer ${token}`;
        const data = await request("/api/projects/", "GET", null, headers);
        setProjects([...data.results]);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [token]);
  useEffect(() => {
    console.log(projects);
  }, [projects]);
  return (
    <section className="page__my-profile team-page">
      <div className="team-page__container">
        <ProfilePageLayout>
          <ActivitiesMenu
            url={"/api/projects/"}
            setter={(data) => {
              console.log(data);
              setProjects([...data]);
            }}
          />
          <PContent
            projects={projects}
            url={"/api/projects/"}
            setter={(data) => {
              console.log(data);
              setProjects([...data]);
            }}
          />
        </ProfilePageLayout>
      </div>
    </section>
  );
}

export default Projects;
