import React from "react";

function Method({ project_type }) {
  return (
    <div className="project-modal__section">
      <div className="project-modal__section-box">
        <div className="project-modal__section-title">Метод участия</div>
        <div className="project-modal__section-text">
          {project_type === "CONTEST" ? "Конкурс" : "Выбор исполнителя"}
        </div>
      </div>
    </div>
  );
}

export default Method;
