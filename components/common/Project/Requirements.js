import React from "react";

function Requirements({ requirements }) {
  return (
    <div className="project-modal__section project-modal__section_border">
      <div className="project-modal__section-box">
        <div className="project-modal__section-title">
          Требования к участнику
        </div>
        <div className="project-modal__section-text">
          <p>{requirements}</p>
        </div>
      </div>
    </div>
  );
}

export default Requirements;
