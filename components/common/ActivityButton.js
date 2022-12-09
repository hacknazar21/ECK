import React, { useState } from "react";

function ActivityButton({ activity }) {
  const [pressed, setPressed] = useState(false);
  return (
    <li
      key={activity.id}
      className={"aside-menu__item" + " " + (pressed ? "active" : "")}
    >
      <button
        onClick={activityClickHandler.bind({ id: activity.id })}
        className="aside-menu__link"
      >
        <img src={activity.image} alt="" />
      </button>
    </li>
  );
}

export default ActivityButton;
