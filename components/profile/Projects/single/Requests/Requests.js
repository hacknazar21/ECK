import React from "react";
import Avatar from "../../../../../src/img/avatars/02.png";
function Requests({ project_number }) {
  return (
    <div className="customer-requests">
      <div className="customer-requests__request customer-request">
        <div className="customer-request__info">
          <div className="customer-request__icon">
            <img src={Avatar.src} alt="" />
          </div>
          <div className="customer-request__name">Название команды</div>
        </div>
        <div className="customer-request__status customer-request__status_success">
          Приглашено
        </div>
      </div>
      <div className="customer-requests__request customer-request">
        <div className="customer-request__info">
          <div className="customer-request__icon">
            <img src={Avatar.src} alt="" />
          </div>
          <div className="customer-request__name">Название команды</div>
        </div>
        <div className="customer-request__status customer-request__status_error">
          Приглашено
        </div>
      </div>
      <div className="customer-requests__request customer-request">
        <div className="customer-request__info">
          <div className="customer-request__icon">
            <img src={Avatar.src} alt="" />
          </div>
          <div className="customer-request__name">Название команды</div>
        </div>
        <div className="customer-request__status customer-request__status_sended">
          Приглашено
        </div>
      </div>
    </div>
  );
}

export default Requests;
