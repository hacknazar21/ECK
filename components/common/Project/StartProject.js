import React, { useContext } from "react";
import useHttp from "../../../hooks/hooks.http";
import { AuthContext } from "../../../context/AuthContext";
import { useRouter } from "next/router";

function StartProject({ project }) {
  const { request } = useHttp();
  const { token } = useContext(AuthContext);
  const router = useRouter();
  async function startProjectClickHandler(e) {
    e.preventDefault();
    try {
      const headers = {};
      headers["Authorization"] = `Bearer ${token}`;
      headers["Content-Type"] = `application/json`;
      const data = await request(
        `/api/projects/${project?.number}/start_project/`,
        "POST",
        {},
        headers
      );
      router.reload();
    } catch (e) {}
  }

  return (
    <div className="project-modal-team__button project-modal-team__button_margin">
      <button
        onClick={startProjectClickHandler}
        className="window-notification__button window-notification__button_active"
      >
        Начать работу над проектом
      </button>
    </div>
  );
}

export default StartProject;
