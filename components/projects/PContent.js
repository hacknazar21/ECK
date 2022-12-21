import React, { useEffect, useState, useContext } from "react";
import Popup from "../common/Popup";
import useHttp from "../../hooks/hooks.http";
import { AuthContext } from "../../context/AuthContext";
import Info from "../profile/Projects/single/Info";
import { useRouter } from "next/router";
import Filter from "../common/Filter";

function PContent({ projects, url, setter }) {
  const [active, setActive] = useState(false);
  const [project, setProject] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const currentIndex = projects.indexOf(project);
    if (currentIndex !== -1) {
      setCurrentIndex(currentIndex);
    }
  }, [project]);
  useEffect(() => {
    if (window.location.hash && projects && projects.length) {
      const prj = projects.filter(
        (project) => project?.number === window.location.hash.replace("#", "")
      )[0];
      if (prj) {
        setProject({ ...prj });
        setActive(true);
      }
    }
  }, [router, projects]);

  function changeModalClickHandler(e) {
    e.stopPropagation();
    switch (this?.type) {
      case "prev":
        const prevIndex = currentIndex - 1;
        if (prevIndex < 0) {
          break;
        }
        setProject(projects[prevIndex]);
        break;
      case "next":
        const nextIndex = currentIndex + 1;
        if (nextIndex >= projects?.length) {
          break;
        }
        setProject(projects[nextIndex]);
        break;
    }
  }
  function openPopupClickHandler(e) {
    setProject(projects.filter((project) => project.id === this?.project)[0]);
    setActive(true);
  }

  return (
    <section className="page__projects-content projects-content profile-content">
      <div className="projects-content__block profile-block projects-block">
        <h1 className="projects-content__title profile-title">Проекты</h1>
        <div className="projects-block__actions projects-actions">
          <Filter
            url={url}
            setter={setter}
            status={[
              {
                name: "В работе",
                value: "IN_PROGRESS",
              },
              {
                name: "Просмотр решений",
                value: "REVIEW",
              },
              {
                name: "Завершено",
                value: "FINISHED",
              },
              {
                name: "Не состоявшийся",
                value: "FAILED",
              },
            ]}
          />
        </div>
      </div>
      <div className="projects-cards profile-cards">
        {projects.map((project) => {
          return (
            <article
              key={project.id}
              onClick={openPopupClickHandler.bind({ project: project.id })}
              className={
                "projects-cards__card projects-card profile-cards__card active profile-card"
              }
            >
              <h2 className="projects-card__title profile-card__title">
                <span></span>
                Активный проект
              </h2>
              <h2 className="projects-card__title profile-card__title">
                {project.title}
              </h2>
              <div className="projects-card__text profile-card__text">
                <p>{project.description}</p>
              </div>
              <div className="projects-card__members projects-card-members profile-members">
                <div className="projects-card-members__title profile-members__title">
                  {project.project_type === "CONTEST"
                    ? "Конкурс"
                    : "Выбор исполнителя"}
                </div>
              </div>
              <div className="single-team-member__actions">
                <button
                  onClick={openPopupClickHandler}
                  className="window-notification__button window-notification__button_active"
                >
                  Смотреть проект
                </button>
              </div>
            </article>
          );
        })}
      </div>
      <Popup
        active={active}
        buttons={
          <div className="project-modal__buttons">
            <button
              onClick={changeModalClickHandler.bind({ type: "prev" })}
              className="project-modal__button project-modal__button_prev"
            >
              <span></span>
              <span></span>
            </button>
            <button
              onClick={changeModalClickHandler.bind({ type: "next" })}
              className="project-modal__button project-modal__button_next"
            >
              <span></span>
              <span></span>
            </button>
          </div>
        }
        setActive={setActive}
      >
        <Info project={project} />
      </Popup>
    </section>
  );
}

export default PContent;
