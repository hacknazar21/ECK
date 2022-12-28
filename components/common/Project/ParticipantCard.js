import React from "react";
import Link from "next/link";

function ParticipantCard({
  participant,
  isRadio = false,
  button,
  onRadio = (e, participant, solution_id) => {},
  solution_id,
}) {
  return (
    <div className="project-modal-teams__team project-modal-team">
      {isRadio && (
        <div className="customer-solution__radio">
          <input
            onChange={(e) => {
              onRadio(e, participant, solution_id);
            }}
            type="radio"
            id={participant.id}
            className="customer-solution__button customer-solution__button_radio"
            name={"winner"}
          />
          <label htmlFor={participant.id}></label>
        </div>
      )}
      <div className="project-modal-team__content">
        {participant.consortium &&
          participant.consortium.teams?.map((team) => (
            <div
              key={team.id}
              className="project-modal-team__logo profile-card__logo"
            >
              <div className="project-modal-team__image profile-card__image">
                <img src={team?.image} alt="" />
              </div>
              <div className="project-modal-team__name profile-card__name profile-card__name_team">
                {team?.name}
              </div>
            </div>
          ))}
        {participant.team && (
          <>
            <div className="project-modal-team__logo profile-card__logo">
              <div className="project-modal-team__image profile-card__image">
                <img src={participant.team?.image} alt="" />
              </div>
              <div className="project-modal-team__name profile-card__name profile-card__name_team">
                {participant?.team.name}
              </div>
            </div>
            <div className="project-modal-team__text">
              <p>{participant.team?.description}</p>
            </div>
            {!button && (
              <div className="project-modal-team__button">
                <Link
                  href="/team/[link]"
                  as={"/team/" + participant.team?.slug}
                >
                  <a className="window-notification__button window-notification__button_active">
                    Смотреть профиль
                  </a>
                </Link>
              </div>
            )}
            {button}
          </>
        )}
        {participant.user && (
          <>
            <div className="project-modal-team__logo profile-card__logo">
              <div className="project-modal-team__image profile-card__image">
                <img src={participant.user?.avatar} alt="" />
              </div>
              <div className="project-modal-team__name profile-card__name profile-card__name_team">
                {participant?.display_name}
              </div>
            </div>
            {!button && (
              <div className="project-modal-team__button">
                <Link href="/user/[link]" as={"/user/" + participant?.id}>
                  <a className="window-notification__button window-notification__button_active">
                    Смотреть профиль
                  </a>
                </Link>
              </div>
            )}
            {button}
          </>
        )}
        {participant.consortium && !!button && <>{button}</>}
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
              {participant.team.members?.map((member, id) => (
                <div
                  key={id}
                  className="project-modal-team__icon profile-members__icon"
                >
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
  );
}

export default ParticipantCard;
