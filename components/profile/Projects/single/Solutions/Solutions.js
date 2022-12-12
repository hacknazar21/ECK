import React, { useContext, useEffect, useState } from "react";
import Avatar from "../../../../../src/img/avatars/02.png";
import Popup from "../../../../common/Popup";
import useHttp from "../../../../../hooks/hooks.http";
import { AuthContext } from "../../../../../context/AuthContext";

function Solutions({ project }) {
  const [active, setActive] = useState(false);
  const [solutions, setSolutions] = useState([]);
  const { request } = useHttp();
  const { token } = useContext(AuthContext);
  useEffect(() => {
    if (project && project.number)
      (async () => {
        try {
          const data = await request(
            `/api/projects/${project.number}/solutions/`,
            "GET",
            null,
            {
              Authorization: `Bearer ${token}`,
            }
          );
          setSolutions([...data.results]);
        } catch (e) {}
      })();
  }, [project]);
  return (
    <div className="customer-solutions">
      {solutions.map((solution) => {
        if (solution.executor.team) {
          return (
            <div
              key={solution.id}
              className="customer-solutions__request customer-solution"
            >
              <div className="customer-solution__side">
                <div className="customer-solution__radio">
                  <input
                    type="radio"
                    id={"team_2"}
                    className="customer-solution__button customer-solution__button_radio"
                    name={"winner"}
                  />
                  <label htmlFor="team_2"></label>
                </div>
                <div className="customer-solution__teams">
                  <div className="customer-solution__team">
                    <div className="customer-solution__icon">
                      <img src={solution.executor.team.image} alt="" />
                    </div>
                    <div className="customer-solution__name">
                      {solution.executor.team.name}
                    </div>
                  </div>
                </div>
              </div>
              <div className="customer-solution__info">
                <div className="project-modal-team__members-box profile-members__box">
                  <div className="project-modal-team__icons profile-members__icons">
                    {solution.executor.team.members?.map((member) => (
                      <div
                        key={member.id}
                        className="project-modal-team__icon profile-members__icon"
                      >
                        <img src={member.avatar} alt="" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="project-modal-team__info-item">
                  + {solution.executor.team.members_count} человек
                </div>
              </div>
            </div>
          );
        } else if (solution.executor.user) {
          return (
            <div
              key={solution.id}
              className="customer-solutions__request customer-solution"
            >
              <div className="customer-solution__side">
                <div className="customer-solution__radio">
                  <input
                    type="radio"
                    id={"team_2"}
                    className="customer-solution__button customer-solution__button_radio"
                    name={"winner"}
                  />
                  <label htmlFor="team_2"></label>
                </div>
                <div className="customer-solution__teams">
                  <div className="customer-solution__team">
                    <div className="customer-solution__icon">
                      <img src={solution.executor.user.avatar} alt="" />
                    </div>
                    <div className="customer-solution__name">
                      {solution.executor.user.display_name}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        } else if (solution.executor.consortium) {
          return (
            <div
              key={solution.id}
              className="customer-solutions__request customer-solution"
            >
              <div className="customer-solution__side">
                <div className="customer-solution__radio">
                  <input
                    type="radio"
                    id={"team_1"}
                    className="customer-solution__button customer-solution__button_radio"
                    name={"winner"}
                  />
                  <label htmlFor="team_1"></label>
                </div>
                <div className="customer-solution__teams">
                  {solution.executor.consortium.teams.map((team) => (
                    <div key={team.id} className="customer-solution__team">
                      <div className="customer-solution__icon">
                        <img src={team.image} alt="" />
                      </div>
                      <div className="customer-solution__name">{team.name}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="customer-solution__info">
                <div className="project-modal-team__tag profile-card__tag">
                  Консорциум
                </div>
                <div className="project-modal-team__info-item">
                  Всего:
                  <span>
                    {solution.executor.consortium.teams?.length} команд
                  </span>
                </div>
              </div>
            </div>
          );
        }
      })}

      <button className="window-notification__button window-notification__button_active">
        Сделать победителем
      </button>
      <Popup active={active} setActive={setActive}></Popup>
    </div>
  );
}

export default Solutions;
