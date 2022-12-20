import React, { useContext, useEffect, useState } from "react";
import Avatar from "../../../../../src/img/avatars/02.png";
import useHttp from "../../../../../hooks/hooks.http";
import { AuthContext } from "../../../../../context/AuthContext";
import Link from "next/link";
import Loading from "../../../../common/Loading";
function Requests({ project }) {
  const { request, loading } = useHttp();
  const { token } = useContext(AuthContext);
  const [requests, setRequests] = useState([]);
  useEffect(() => {
    if (project)
      (async () => {
        try {
          const headers = {};
          if (token) headers["Authorization"] = `Bearer ${token}`;

          const data = await request(
            `/api/projects/requests/?project__number=${project.number}`,
            "GET",
            null,
            headers
          );
          setRequests(data.results);
        } catch (e) {
          console.log(e);
        }
      })();
  }, [project]);
  async function actionsClickHandler() {
    try {
      const headers = {};
      if (token) headers["Authorization"] = `Bearer ${token}`;
      const method = this.type === "accept" ? "POST" : "DELETE";
      const data = await request(
        `/api/projects/requests/${this.request_id}/${this.type}/`,
        method,
        null,
        headers
      );
      setRequests(data.results);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="customer-requests">
      {loading && <Loading />}
      {requests
        .filter((request) => request.status === "PENDING")
        .map((request) => {
          if (request.executor.user) {
            return (
              <div
                key={request.executor.user.id}
                className="customer-requests__request customer-request"
              >
                <div className="customer-request__info">
                  <div className="customer-request__icon">
                    <img src={request.executor.user.avatar} alt="" />
                  </div>
                  <Link
                    href={"/user/[link]"}
                    as={"/user/" + request.executor.user.id}
                  >
                    <a className="customer-request__name">
                      {request.executor?.user?.display_name}
                    </a>
                  </Link>
                </div>
                <div className="window-notification__actions">
                  <button
                    onClick={actionsClickHandler.bind({
                      type: "accept",
                      request_id: request.id,
                    })}
                    className="window-notification__button window-notification__button_active"
                  >
                    Принять
                  </button>
                  <button
                    onClick={actionsClickHandler.bind({
                      type: "reject",
                      request_id: request.id,
                    })}
                    className="window-notification__button window-notification__button_no-active"
                  >
                    Отклонить
                  </button>
                </div>
              </div>
            );
          } else if (request.executor.team) {
            return (
              <div
                key={request.executor.team.id}
                className="customer-requests__request customer-request"
              >
                <div className="customer-request__info">
                  <div className="customer-request__icon">
                    <img src={request.executor.team.image} alt="" />
                  </div>
                  <Link
                    href="/team/[link]"
                    as={"/team/" + request.executor.team.slug}
                  >
                    <a className="customer-request__name">
                      {request.executor?.team?.name}
                    </a>
                  </Link>
                </div>
                <div className="window-notification__actions">
                  <button
                    onClick={actionsClickHandler.bind({
                      type: "accept",
                      request_id: request.id,
                    })}
                    className="window-notification__button window-notification__button_active"
                  >
                    Принять
                  </button>
                  <button
                    onClick={actionsClickHandler.bind({
                      type: "reject",
                      request_id: request.id,
                    })}
                    className="window-notification__button window-notification__button_no-active"
                  >
                    Отклонить
                  </button>
                </div>
              </div>
            );
          }
        })}
      {requests.filter((request) => request.status === "PENDING").length ===
        0 && "Заявок нет"}
    </div>
  );
}

export default Requests;
