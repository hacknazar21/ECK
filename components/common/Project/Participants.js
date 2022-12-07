import React from "react";
import Avatar from "../../../src/img/avatars/01.png";
import Link from "next/link";

function Participants({ participants }) {
  return (
    <div className="project-modal__teams project-modal-teams">
      <h2 className="project-modal-teams__title">Участники</h2>
      {participants?.map((participant) => (
        <div className="project-modal-teams__team project-modal-team">
          <div className="project-modal-team__content">
            {participant.consortium &&
              participant.consortium.teams?.map((team) => (
                <div className="project-modal-team__logo profile-card__logo">
                  <div className="project-modal-team__image profile-card__image">
                    <img src={team?.image} alt="" />
                  </div>
                  <div className="project-modal-team__name profile-card__name profile-card__name_team">
                    {team?.name}
                  </div>
                </div>
              ))}
            {participant.user && (
              <>
                <div className="project-modal-team__logo profile-card__logo">
                  <div className="project-modal-team__image profile-card__image">
                    <img src={participant.user?.avatar} alt="" />
                  </div>
                  <div className="project-modal-team__name profile-card__name profile-card__name_team">
                    {participant.user?.full_name}
                  </div>
                </div>
              </>
            )}
            {participant.team && (
              <>
                <div className="project-modal-team__logo profile-card__logo">
                  <div className="project-modal-team__image profile-card__image">
                    <img src={participant.team?.image} alt="" />
                  </div>
                  <div className="project-modal-team__name profile-card__name profile-card__name_team">
                    {participant.team?.name}
                  </div>
                </div>
                <div className="project-modal-team__text">
                  <p>{participant.team?.description}</p>
                </div>
              </>
            )}
            <div className="project-modal-team__button">
              <Link href="">
                <a className="window-notification__button window-notification__button_active">
                  Смотреть профиль
                </a>
              </Link>
            </div>
          </div>
          {participant.consortium && (
            <div className="project-modal-team__info">
              <div className="project-modal-team__tag profile-card__tag">
                Консорциум
              </div>
              <div className="project-modal-team__info-item">
                Всего:
                <span>{participant.consortium.teams_count} команд</span>
              </div>
            </div>
          )}
          {participant.team && (
            <div className="project-modal-team__info">
              <div className="project-modal-team__members-box profile-members__box">
                <div className="project-modal-team__icons profile-members__icons">
                  {participant.team.members?.map((member) => (
                    <div className="project-modal-team__icon profile-members__icon">
                      <img src={member.avatar} alt="" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="project-modal-team__info-item">
                {participant.team.members_count} человек
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Participants;
