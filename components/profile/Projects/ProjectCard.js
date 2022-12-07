import React from "react";
import Link from "next/link";

function ProjectCard({ project }) {
  return (
    <article
      key={project.id}
      className="projects-cards__card projects-card profile-cards__card profile-card"
    >
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
                      <img
                        src={
                          participant.team?.image || participant.user?.avatar
                        }
                        alt=""
                      />
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
          href="/profile/projects/[link]"
          as={"/profile/projects/" + project.number}
        >
          <a className="window-notification__button window-notification__button_active">
            Смотреть
          </a>
        </Link>
      </div>
    </article>
  );
}

export default ProjectCard;
