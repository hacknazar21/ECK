import React from "react";
import File from "../../../common/File";

function Report(props) {
  return (
    <div className="report">
      <h2 className="report__title">Прикрепите решение по проекту</h2>
      <File classNames={["report__file"]} />
      <button className="window-notification__button window-notification__button_active">
        Завершить работу над проектом
      </button>
    </div>
  );
}

export default Report;
