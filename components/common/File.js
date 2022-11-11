import React from "react";

function File({ classNames = [] }) {
  const classes = ["file", ...classNames];
  return (
    <div className={classes.join(" ")}>
      <div className="file__box">
        <label htmlFor="docs" className="file__label">
          Выберите документы
        </label>
        <input type="file" id={"docs"} className="file__input" />
      </div>
    </div>
  );
}

export default File;
