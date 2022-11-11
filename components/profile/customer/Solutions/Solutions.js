import React, { useState } from "react";
import Avatar from "../../../../src/img/avatars/02.png";
import Popup from "../../../common/Popup";

function Solutions(props) {
  const [active, setActive] = useState(false);
  return (
    <div className="customer-solutions">
      <div className="customer-solutions__request customer-solution">
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
            <div className="customer-solution__team">
              <div className="customer-solution__icon">
                <img src={Avatar.src} alt="" />
              </div>
              <div className="customer-solution__name">Название команды</div>
            </div>
            <div className="customer-solution__team">
              <div className="customer-solution__icon">
                <img src={Avatar.src} alt="" />
              </div>
              <div className="customer-solution__name">Название команды</div>
            </div>
          </div>
        </div>
        <div className="customer-solution__info">
          <div className="project-modal-team__tag profile-card__tag">
            Консорциум
          </div>
          <div className="project-modal-team__info-item">
            Всего:
            <span>350 человек</span>
          </div>
        </div>
      </div>
      <div className="customer-solutions__request customer-solution">
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
                <img src={Avatar.src} alt="" />
              </div>
              <div className="customer-solution__name">Название команды</div>
            </div>
          </div>
        </div>
        <div className="customer-solution__info">
          <div className="project-modal-team__members-box profile-members__box">
            <div className="project-modal-team__icons profile-members__icons">
              <div className="project-modal-team__icon profile-members__icon">
                <img src={Avatar.src} alt="" />
              </div>
              <div className="project-modal-team__icon profile-members__icon">
                <img src={Avatar.src} alt="" />
              </div>
              <div className="project-modal-team__icon profile-members__icon">
                <img src={Avatar.src} alt="" />
              </div>
              <div className="project-modal-team__icon profile-members__icon">
                <img src={Avatar.src} alt="" />
              </div>
            </div>
          </div>
          <div className="project-modal-team__info-item">+ 16 человек</div>
        </div>
      </div>
      <button className="window-notification__button window-notification__button_active">
        Сделать победителем
      </button>
      <Popup active={active} setActive={setActive}></Popup>
    </div>
  );
}

export default Solutions;
