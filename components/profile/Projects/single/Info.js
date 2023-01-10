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
import ButtonWithDangerous from "../../../common/ButtonWithDangerous";
import useHttp from "../../../../hooks/hooks.http";
import { useRouter } from "next/router";

function Info({ project }) {
  const [fields, setFields] = useState({});
  const { request } = useHttp();
  const router = useRouter();
  const { userData, token, isAuth } = useContext(AuthContext);
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
  async function deleteProjectHandler(e) {
    e.preventDefault();
    try {
      await request(`/api/projects/${project?.number}/`, "DELETE", null, {
        Authorization: `Bearer ${token}`,
      });
      await router.push("/profile/projects");
    } catch (e) {
      await router.push("/profile/projects");
    }
  }
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
        {project.is_project_creator &&
          (project.status === "DECLARED" ||
            project.status === "APPLICATION") && (
            <ButtonWithDangerous
              className="button-delete single-team-member__button-delete mb-30"
              buttonIcon={
                <span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 13.5C7.69891 13.5 7.88968 13.421 8.03033 13.2803C8.17098 13.1397 8.25 12.9489 8.25 12.75V8.25C8.25 8.05109 8.17098 7.86032 8.03033 7.71967C7.88968 7.57902 7.69891 7.5 7.5 7.5C7.30109 7.5 7.11032 7.57902 6.96967 7.71967C6.82902 7.86032 6.75 8.05109 6.75 8.25V12.75C6.75 12.9489 6.82902 13.1397 6.96967 13.2803C7.11032 13.421 7.30109 13.5 7.5 13.5ZM15 4.5H12V3.75C12 3.15326 11.7629 2.58097 11.341 2.15901C10.919 1.73705 10.3467 1.5 9.75 1.5H8.25C7.65326 1.5 7.08097 1.73705 6.65901 2.15901C6.23705 2.58097 6 3.15326 6 3.75V4.5H3C2.80109 4.5 2.61032 4.57902 2.46967 4.71967C2.32902 4.86032 2.25 5.05109 2.25 5.25C2.25 5.44891 2.32902 5.63968 2.46967 5.78033C2.61032 5.92098 2.80109 6 3 6H3.75V14.25C3.75 14.8467 3.98705 15.419 4.40901 15.841C4.83097 16.2629 5.40326 16.5 6 16.5H12C12.5967 16.5 13.169 16.2629 13.591 15.841C14.0129 15.419 14.25 14.8467 14.25 14.25V6H15C15.1989 6 15.3897 5.92098 15.5303 5.78033C15.671 5.63968 15.75 5.44891 15.75 5.25C15.75 5.05109 15.671 4.86032 15.5303 4.71967C15.3897 4.57902 15.1989 4.5 15 4.5ZM7.5 3.75C7.5 3.55109 7.57902 3.36032 7.71967 3.21967C7.86032 3.07902 8.05109 3 8.25 3H9.75C9.94891 3 10.1397 3.07902 10.2803 3.21967C10.421 3.36032 10.5 3.55109 10.5 3.75V4.5H7.5V3.75ZM12.75 14.25C12.75 14.4489 12.671 14.6397 12.5303 14.7803C12.3897 14.921 12.1989 15 12 15H6C5.80109 15 5.61032 14.921 5.46967 14.7803C5.32902 14.6397 5.25 14.4489 5.25 14.25V6H12.75V14.25ZM10.5 13.5C10.6989 13.5 10.8897 13.421 11.0303 13.2803C11.171 13.1397 11.25 12.9489 11.25 12.75V8.25C11.25 8.05109 11.171 7.86032 11.0303 7.71967C10.8897 7.57902 10.6989 7.5 10.5 7.5C10.3011 7.5 10.1103 7.57902 9.96967 7.71967C9.82902 7.86032 9.75 8.05109 9.75 8.25V12.75C9.75 12.9489 9.82902 13.1397 9.96967 13.2803C10.1103 13.421 10.3011 13.5 10.5 13.5Z"
                      fill="#E22D38"
                    />
                  </svg>
                </span>
              }
              onClick={deleteProjectHandler}
              description={"Вы уверены что хотите удалить проект?"}
              title={"Удалить проект"}
              buttonText={"Удалить проект"}
            />
          )}
        {project.participants && project.participants.length > 0 && (
          <Participants participants={project.participants} />
        )}
      </div>
    </>
  );
}

export default Info;
