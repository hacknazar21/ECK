import React, { useContext, useEffect, useState } from "react";
import Notification from "../common/Notifications/Notification/Notification";
import Avatar from "../../src/img/avatars/01.png";
import Link from "next/link";
import Img1 from "../../src/img/projects/image 13.png";
import Popup from "../common/Popup";
import useHttp from "../../hooks/hooks.http";
import { AuthContext } from "../../context/AuthContext";
import ProgressDate from "../common/Project/ProgressDate";
import Info from "../profile/Projects/single/Info";
import { useRouter } from "next/router";
import Filter from "../common/Filter";

function AContent({ projects, setter, url }) {
  const [active, setActive] = useState(false);
  const [project, setProject] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const { userData } = useContext(AuthContext);
  const [fields, setFields] = useState({});
  const router = useRouter();
  function openPopupClickHandler(e) {
    setProject(projects.filter((project) => project.id === this?.project)[0]);
    setActive(true);
  }
  useEffect(() => {
    const parents = [];
    for (const project1 of projects) {
      const arr = project1?.fields_of_activity?.map((field_of_activity, id) => {
        const same = project1.fields_of_activity.filter(
          (field_of_activity_f) =>
            field_of_activity_f.parent_field.name ===
            field_of_activity.parent_field.name
        );
        if (parents.indexOf(same[0].parent_field) === -1) {
          parents.push(same[0].parent_field);
          return {
            image: same[0].parent_field.image,
            parent_field: same[0].parent_field,
            name: same.map((sameItem) => sameItem.name),
          };
        }
        return null;
      });

      setFields((prevState) => ({
        ...prevState,
        ...{
          [project1.id]: [...arr.filter((item) => item !== null)],
        },
      }));
    }
  }, [projects]);
  useEffect(() => {
    const currentIndex = projects.indexOf(project);
    if (currentIndex !== -1) {
      setCurrentIndex(currentIndex);
    }
  }, [project]);

  useEffect(() => {
    if (window.location.hash && projects.length) {
      console.log(projects[0].number, window.location.hash);
      setProject(
        projects.filter(
          (project) => project.number === window.location.hash.replace("#", "")
        )[0]
      );
      setActive(true);
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
        console.log("next");
        break;
    }
  }

  return (
    <section className="page__team-page-content team-page-content profile-content">
      <div className="team-page-content__block profile-block team-page-block">
        <h1 className="team-page-content__title profile-title">Объявления</h1>
        <div className="team-page-block__actions  team-page-actions">
          <Filter setter={setter} url={url}>
            {userData.user_type === "CUSTOMER" && (
              <Link href="/announcements/create">
                <a className="team-actions__add-btn add-btn">
                  <span>
                    <span></span>
                    <span></span>
                  </span>
                  Добавить объявление
                </a>
              </Link>
            )}
          </Filter>
        </div>
      </div>
      <div className="projects-cards profile-cards">
        {projects.map((project) => {
          const daysCount = new Date(
            new Date(project.application_end_date) - new Date()
          ).getDate();
          return (
            <article
              key={project.id}
              onClick={openPopupClickHandler.bind({ project: project.id })}
              className={
                "projects-cards__card projects-card profile-cards__card profile-card " +
                (daysCount >= 4 ? "green-card" : "red-card")
              }
            >
              <h2 className="projects-card__title profile-card__title">
                {project.title}
              </h2>
              <div className="projects-card__text profile-card__text">
                <p>{project.description}</p>
              </div>
              <div className="projects-card__days-count profile-card__days-count">
                Осталось:
                <span>{daysCount} дней</span>
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

export default AContent;
