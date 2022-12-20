import React, { useContext, useEffect, useState } from "react";
import InviteTeam from "../../../common/Project/InviteTeam";
import ProgressDate from "../../../common/Project/ProgressDate";
import Requirements from "../../../common/Project/Requirements";
import Method from "../../../common/Project/Method";
import Customer from "../../../common/Project/Customer";
import Participants from "../../../common/Project/Participants";
import { AuthContext } from "../../../../context/AuthContext";
import Link from "next/link";
import StartProject from "../../../common/Project/StartProject";

function Info({ project }) {
  const [fields, setFields] = useState({});
  const { userData, isAuth } = useContext(AuthContext);
  useEffect(() => {
    if (project && project?.fields_of_activity) {
      const parents = [];
      const arr = project?.fields_of_activity?.map((field_of_activity, id) => {
        const same = project?.fields_of_activity.filter(
          (field_of_activity_f) =>
            field_of_activity_f.parent_field?.name ===
            field_of_activity.parent_field?.name
        );
        if (parents.indexOf(same[0].parent_field) === -1) {
          parents.push(same[0].parent_field);
          return {
            image: same[0].parent_field?.image,
            parent_field: same[0].parent_field,
            name: same.map((sameItem) => sameItem.name),
          };
        }
        return null;
      });
      setFields((prevState) => ({
        ...prevState,
        ...{
          [project.id]: [...arr.filter((item) => item !== null)],
        },
      }));
    }
  }, [project]);
  return (
    <>
      <header className="single-team-content-block__header">
        <h3 className="single-team-content__title profile-title">
          Информация о проекте №{project.number}
        </h3>
      </header>
      <div className="projects-content__modal project-modal">
        {!isAuth && (
          <div className="project-modal__demo">
            <p>Демо-режим просмотра</p>
          </div>
        )}
        {fields[project.id]?.map((field_of_activity, id) => (
          <div key={id} className="project-modal__type">
            {field_of_activity.image && (
              <div className="project-modal__type-image">
                <img src={field_of_activity.parent_field.image} alt="" />
              </div>
            )}
            <h4 className="project-modal__type-name">
              {field_of_activity.parent_field.name},{" "}
              {field_of_activity.name.join(", ")}
            </h4>
          </div>
        ))}
        <div className="project-modal__type">
          <h4 className="project-modal__type-name">Создатель</h4>
        </div>
        <div className="projects-card__logo profile-card__logo">
          <div className="projects-card__image profile-card__image">
            <img src={project.created_by?.avatar} alt="" />
          </div>
          <Link href="/user/[link]" as={"/user/" + project.created_by?.id}>
            <a className="projects-card__name profile-card__name">
              {project.created_by?.full_name}
            </a>
          </Link>
        </div>
        <div className="project-modal__info">
          <h2 className="project-modal__info-title">{project.title}</h2>
          <div className="project-modal__info-text">
            <p>{project.description}</p>
          </div>
        </div>
        {project?.project_type === "CONTEST" && (
          <ProgressDate
            application_end={project.application_end_date}
            application_start={project.application_start_date}
            status={project.status}
            deadline={project.deadline}
            review_end={project.review_end_date}
            end={project.end_date}
          />
        )}
        <Method project_type={project.project_type} />
        <Requirements requirements={project.requirements} />
        <Customer customer={project.created_by} documents={project.documents} />
        {project.project_type === "CHOICE" &&
          project.status === "DECLARED" &&
          project.is_project_creator && (
            <>
              <InviteTeam
                project_number={project.number}
                project_id={project.id}
              />
              <StartProject project={project} />
            </>
          )}

        {project.project_type === "CONTEST" &&
          userData.user_type === "EXECUTOR" &&
          project.status === "APPLICATION" && (
            <div className="project-modal-team__button project-modal-team__button_margin">
              <Link
                href="/projects/[link]/join"
                as={"/projects/" + project.number + "/join"}
              >
                <a className="window-notification__button window-notification__button_active">
                  Подать заявку
                </a>
              </Link>
            </div>
          )}
        {project.participants && project.participants.length > 0 && (
          <Participants participants={project.participants} />
        )}
      </div>
    </>
  );
}

export default Info;
