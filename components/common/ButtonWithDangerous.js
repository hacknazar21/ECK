import React, { useState } from "react";
import Popup from "./Popup";

function ButtonWithDangerous({
  buttonText,
  onClick,
  jsxElement,
  title,
  description,
  className,
}) {
  const [active, setActive] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setActive(true);
        }}
        className={className}
      >
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
            onClick={() => {
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