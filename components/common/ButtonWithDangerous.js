import React, { useState } from "react";
import Popup from "./Popup";

function ButtonWithDangerous({
  buttonText,
  onClick,
  jsxElement,
  title,
  description,
  className,
  buttonIcon,
}) {
  const [active, setActive] = useState(false);
  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          setActive(true);
        }}
        className={className}
      >
        {buttonIcon}
        {buttonText}
      </button>
      <Popup active={active} setActive={setActive}>
        <header className="single-team-content-block__header">
          <h1 className="single-team-content__title profile-title">{title}</h1>
        </header>
        <div className="single-team-remove-info">
          <p>{description}</p>
        </div>
        {jsxElement}
        <div className="window-notification__actions single-team-content__main-actions">
          <button
            onClick={(e) => {
              e.preventDefault();
              setActive(false);
            }}
            className="window-notification__button window-notification__button_active"
          >
            Нет
          </button>
          <button
            onClick={(e) => {
              onClick(e);
              setActive(false);
            }}
            className="window-notification__button window-notification__button_active"
          >
            Да
          </button>
        </div>
      </Popup>
    </>
  );
}

export default ButtonWithDangerous;
