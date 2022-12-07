import React, { useContext, useEffect, useState } from "react";
import Avatar from "../../../src/img/avatars/01.png";
import Link from "next/link";
import TabBarItem from "../../common/TabBar/TabBarItem";
import TabBar from "../../common/TabBar/TabBar";
import useHttp from "../../../hooks/hooks.http";
import { AuthContext } from "../../../context/AuthContext";
import ProjectCard from "./ProjectCard";

function PContent(props) {
  const [projects, setProjects] = useState([]);
  const { request } = useHttp();
  const { token } = useContext(AuthContext);
  useEffect(() => {
    (async () => {
      try {
        const data = await request("/api/profile/projects/", "GET", null, {
          Authorization: `Bearer ${token}`,
        });
        setProjects([...data.results]);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [token]);

  return (
    <section className="projects__content projects-content profile-content">
      <TabBar
        header={
          <header className="projects-content-block__header">
            <h1 className="projects-content-block__title profile-title">
              Мои проекты
            </h1>
          </header>
        }
      >
        <TabBarItem
          label={"Все проекты"}
          className={"projects-cards profile-cards"}
        >
          {projects?.map((project) => {
            return <ProjectCard project={project} />;
          })}
        </TabBarItem>
        <TabBarItem
          className={"projects-cards profile-cards"}
          label={"Активные"}
        >
          {projects
            ?.filter((project) => project.status === "IN_PROGRESS")
            .map((project) => {
              return <ProjectCard project={project} />;
            })}
        </TabBarItem>
        <TabBarItem
          className={"projects-cards profile-cards"}
          label={"Завершенные"}
        >
          {projects
            ?.filter((project) => project.status === "FINISHED")
            .map((project) => {
              return <ProjectCard project={project} />;
            })}
        </TabBarItem>
      </TabBar>
    </section>
  );
}

export default PContent;
