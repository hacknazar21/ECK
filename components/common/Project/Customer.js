import React from "react";

function Customer({ customer, documents }) {
  return (
    <div className="project-modal__section project-modal__section_border project-modal__section_wrap">
      <div className="project-modal__section-box">
        <div className="project-modal__section-sub-box">
          <div className="project-modal__section-title">Заказчик</div>
          <div className="project-modal__section-text">
            {customer?.full_name}
          </div>
        </div>
        {customer?.email && (
          <div className="project-modal__section-sub-box">
            <div className="project-modal__section-title">
              Электронная почта
            </div>
            <div className="project-modal__section-text">{customer?.email}</div>
          </div>
        )}
        {customer?.phone_number && (
          <div className="project-modal__section-sub-box">
            <div className="project-modal__section-title">Телефон</div>
            <div className="project-modal__section-text">
              {customer?.phone_number}
            </div>
          </div>
        )}
      </div>
      {documents && (
        <div className="project-modal__section-box">
          <div className="project-modal__section-title">Документы</div>
          <div className="single-team-page-info__docs">
            {documents.map((document) => (
              <a
                href={document.file}
                target={"_blank"}
                rel="noreferrer"
                className="single-team-page-info__doc"
              >
                <img src={document.file} alt="" />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Customer;
