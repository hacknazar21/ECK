import React from "react";
import Link from "next/link";

function Customer({ customer, documents }) {
  return (
    <div className="project-modal__section project-modal__section_border project-modal__section_wrap">
      <div className="project-modal__section-box">
        <div className="project-modal__section-sub-box">
          <div className="project-modal__section-title">Заказчик</div>
          <Link href="/user/[link]" as={"/user/" + customer?.id}>
            <a className="project-modal__section-text">{customer?.full_name}</a>
          </Link>
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
            {documents.map((document, id) => (
              <a
                key={id}
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
