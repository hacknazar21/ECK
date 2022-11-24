import React, { useContext, useEffect, useState } from "react";
import Avatar from "../../../src/img/avatars/01.png";
import Link from "next/link";
import TabBarItem from "../../common/TabBar/TabBarItem";
import TabBar from "../../common/TabBar/TabBar";
import useHttp from "../../../hooks/hooks.http";
import { AuthContext } from "../../../context/AuthContext";

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
            return (
              <article className="projects-cards__card projects-card profile-cards__card profile-card">
                <h2 className="projects-card__title profile-card__title">
                  {project.title}
                </h2>
                <div className="projects-card__text profile-card__text">
                  <p>{project.description}</p>
                </div>
                {project.participants?.length > 0 && (
                  <div className="projects-card__members projects-card-members profile-members">
                    <div className="projects-card-members__title profile-members__title">
                      Всего участников
                    </div>
                    <div className="projects-card__members-box profile-members__box">
                      <div className="projects-card__icons profile-members__icons">
                        {project.participants?.map((participant, id) => {
                          if (id < 5)
                            return (
                              <div className="projects-card__icon profile-members__icon">
                                <img src={participant.image} alt="" />
                              </div>
                            );
                          else return null;
                        })}
                      </div>
                      <div className="projects-card__number profile-members__number">
                        <span>{project.participants_count} участников</span>
                      </div>
                    </div>
                  </div>
                )}
                <div className="window-notification__actions">
                  <Link
                    href="/profile/customer/projects/[link]"
                    as="/profile/customer/projects/ibm-project-123"
                  >
                    <a className="window-notification__button window-notification__button_active">
                      Смотреть
                    </a>
                  </Link>
                </div>
              </article>
            );
          })}
        </TabBarItem>
        <TabBarItem
          className={"projects-cards profile-cards"}
          label={"Активные"}
        >
          {projects
            ?.filter((project) => project.status === "IN_PROGRESS")
            .map((project) => {
              return (
                <article className="projects-cards__card projects-card profile-cards__card profile-card">
                  <h2 className="projects-card__title profile-card__title">
                    {project.title}
                  </h2>
                  <div className="projects-card__text profile-card__text">
                    <p>{project.description}</p>
                  </div>
                  {project.participants?.length > 0 && (
                    <div className="projects-card__members projects-card-members profile-members">
                      <div className="projects-card-members__title profile-members__title">
                        Всего участников
                      </div>
                      <div className="projects-card__members-box profile-members__box">
                        <div className="projects-card__icons profile-members__icons">
                          {project.participants?.map((participant, id) => {
                            if (id < 5)
                              return (
                                <div className="projects-card__icon profile-members__icon">
                                  <img src={participant.image} alt="" />
                                </div>
                              );
                            else return null;
                          })}
                        </div>
                        <div className="projects-card__number profile-members__number">
                          <span>{project.participants_count} участников</span>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="window-notification__actions">
                    <Link
                      href="/profile/customer/projects/[link]"
                      as="/profile/customer/projects/ibm-project-123"
                    >
                      <a className="window-notification__button window-notification__button_active">
                        Смотреть
                      </a>
                    </Link>
                  </div>
                </article>
              );
            })}
        </TabBarItem>
        <TabBarItem
          className={"projects-cards profile-cards"}
          label={"Завершенные"}
        >
          {projects
            ?.filter((project) => project.status === "FINISHED")
            .map((project) => {
              return (
                <article className="projects-cards__card projects-card profile-cards__card profile-card">
                  <h2 className="projects-card__title profile-card__title">
                    {project.title}
                  </h2>
                  <div className="projects-card__text profile-card__text">
                    <p>{project.description}</p>
                  </div>
                  {project.participants?.length > 0 && (
                    <div className="projects-card__members projects-card-members profile-members">
                      <div className="projects-card-members__title profile-members__title">
                        Всего участников
                      </div>
                      <div className="projects-card__members-box profile-members__box">
                        <div className="projects-card__icons profile-members__icons">
                          {project.participants?.map((participant, id) => {
                            if (id < 5)
                              return (
                                <div className="projects-card__icon profile-members__icon">
                                  <img src={participant.image} alt="" />
                                </div>
                              );
                            else return null;
                          })}
                        </div>
                        <div className="projects-card__number profile-members__number">
                          <span>{project.participants_count} участников</span>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="window-notification__actions">
                    <Link
                      href="/profile/customer/projects/[link]"
                      as="/profile/customer/projects/ibm-project-123"
                    >
                      <a className="window-notification__button window-notification__button_active">
                        Смотреть
                      </a>
                    </Link>
                  </div>
                </article>
              );
            })}
        </TabBarItem>
      </TabBar>
    </section>
  );
}

export default PContent;
