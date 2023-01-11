import React, { useEffect, useState } from "react";

function ProgressDate({
  application_start,
  application_end,
  review_end,
  end,
  deadline,
  status,
}) {
  const [minDate, setMinDate] = useState("0");
  const [maxDate, setMaxDate] = useState("0");
  const [labelMin, setLabelMin] = useState("");
  const [labelMax, setLabelMax] = useState("");
  useEffect(() => {
    if (status === "IN_PROGRESS") {
      setMinDate(application_end);
      setMaxDate(deadline);
      setLabelMin("Начало выполнения");
      setLabelMax("Конец выполнения");
    } else if (status === "REVIEW") {
      setMinDate(deadline);
      setMaxDate(review_end);
      setLabelMin("Начало проверки");
      setLabelMax("Конец проверки");
    } else {
      setMinDate(application_start);
      setMaxDate(application_end);
      setLabelMin("Начало приема заявок");
      setLabelMax("Конец приема заявок");
    }
  }, [status]);
  if (status !== "FINISHED")
    return (
      <>
        <div className="project-modal__section">
          <div className="project-modal__section-box">
            <div className="project-modal__section-title">{labelMin}</div>
            <time
              dateTime={minDate?.split("-").join("/")}
              className="project-modal__section-text"
            >
              {new Date(minDate?.split("-").join("/")).getDate().toString()
                .length === 1 && "0"}
              {new Date(minDate?.split("-").join("/")).getDate()}/
              {new Date(minDate?.split("-").join("/")).getMonth().toString()
                .length === 1 && "0"}
              {new Date(minDate?.split("-").join("/")).getMonth() + 1}/
              {new Date(minDate?.split("-").join("/")).getFullYear()}
            </time>
          </div>
          <div className="project-modal__section-box">
            <div className="project-modal__section-title">{labelMax}</div>
            <time
              dateTime={maxDate?.split("-").join("/")}
              className="project-modal__section-text"
            >
              {new Date(maxDate?.split("-").join("/")).getDate().toString()
                .length === 1 && "0"}
              {new Date(maxDate?.split("-").join("/")).getDate()}/
              {new Date(maxDate?.split("-").join("/")).getMonth().toString()
                .length === 1 && "0"}
              {new Date(maxDate?.split("-").join("/")).getMonth() + 1}/
              {new Date(maxDate?.split("-").join("/")).getFullYear()}
            </time>
          </div>
        </div>
        <div className="project-modal__section">
          <div className="project-modal__section-box">
            <div className="project-modal__progress-bar">
              <span
                style={{
                  width:
                    Math.abs(
                      (new Date(minDate) - new Date()) /
                        (new Date(maxDate) - new Date(minDate))
                    ) *
                      100 +
                    "%",
                }}
              ></span>
            </div>
          </div>
        </div>
      </>
    );
  else return <></>;
}

export default ProgressDate;
