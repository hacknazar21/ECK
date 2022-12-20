import React, { useContext, useEffect, useState } from "react";
import Avatar from "../../../../../src/img/avatars/02.png";
import useHttp from "../../../../../hooks/hooks.http";
import { AuthContext } from "../../../../../context/AuthContext";
import { useRouter } from "next/router";
const STATUS_JOIN = {
  PENDING: {
    name: "Отправлено",
    class: "customer-request__status_sended",
  },
  ACCEPTED: {
    name: "Принято",
    class: "customer-request__status_success",
  },
  REJECTED: {
    name: "Отклонено",
    class: "customer-request__status_error",
  },
};
function Invites({ project }) {
  const { request } = useHttp();
  const { token } = useContext(AuthContext);
  const [invites, setInvites] = useState([]);
  useEffect(() => {
    if (project)
      (async () => {
        try {
          const headers = {};
          if (token) headers["Authorization"] = `Bearer ${token}`;
          const data = await request(
            `/api/projects/invites/?project__number=${project.number}`,
            "GET",
            null,
            headers
          );
          setInvites(data.results);
        } catch (e) {
          console.log(e);
        }
      })();
  }, [project]);
  return (
    <div className="customer-requests">
      {invites.map((invite, id) => (
        <div
          key={invite.id + id}
          className="customer-requests__request customer-request"
        >
          <div className="customer-request__info">
            <div className="customer-request__icon">
              <img
                src={
                  invite.executor?.team?.image || invite.executor?.user?.avatar
                }
                alt=""
              />
            </div>
            <div className="customer-request__name">
              {invite.executor?.team?.name ||
                invite.executor?.user?.display_name}
            </div>
          </div>
          <div
            className={
              "customer-request__status " + STATUS_JOIN[invite.status]?.class
            }
          >
            {STATUS_JOIN[invite.status]?.name}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Invites;
