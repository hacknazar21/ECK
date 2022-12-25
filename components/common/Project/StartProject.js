import React, { useContext, useState } from "react";
import useHttp from "../../../hooks/hooks.http";
import { AuthContext } from "../../../context/AuthContext";
import { useRouter } from "next/router";

function StartProject({ project }) {
  const { request } = useHttp();
  const { token } = useContext(AuthContext);
  const router = useRouter();
  const [error, setError] = useState([]);
  async function startProjectClickHandler(e) {
    e.preventDefault();
    try {
      const headers = {};
      headers["Authorization"] = `Bearer ${token}`;
      headers["Content-Type"] = `application/json`;
      await request(
        `/api/projects/${project?.number}/start_project/`,
        "POST",
        {},
        headers
      );
      router.reload();
    } catch (e) {
      const errors = JSON.parse(e.message);
      setError(errors);
    }
  }

  return (
    <>
      <div className="project-modal-team__button project-modal-team__button_margin">
        <button
          onClick={startProjectClickHandler}
          className="window-notification__button window-notification__button_active"
        >
          Начать работу над проектом
        </button>
      </div>
      {!!error.length && <p className="error">{error.join(", ")}</p>}
    </>
  );
}

export default StartProject;
