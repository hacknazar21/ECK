import React, { useContext, useEffect, useState } from "react";
import Avatar from "../../src/img/avatars/01.png";
import { useRouter } from "next/router";
import Link from "next/link";
import TabBarItem from "../common/TabBar/TabBarItem";
import TabBar from "../common/TabBar/TabBar";
import STMembersContent from "./STMembersContent";
import STProjectsContent from "./STProjectsContent";
import useHttp from "../../hooks/hooks.http";
import { AuthContext } from "../../context/AuthContext";

const STATUS_JOIN = {
  PENDING: "Отправлено",
  ACCEPTED: "Принято",
  REJECTED: "Отклонено",
};

function STContent({ team }) {
  const router = useRouter();
  const [projects, setProjects] = useState([]);
  const { request } = useHttp();
  const { token, userData } = useContext(AuthContext);
  const [reqStatus, setReqStatus] = useState(null);
  const [reqStatusFormat, setReqStatusFormat] = useState("Отправлено");
  useEffect(() => {
    if (team && team.slug) {
      setReqStatus(team.request_status);
      (async () => {
        try {
          const data = await request(
            "/api/teams/" + team.slug + "/projects/",
            "GET",
            null,
            {
              Authorization: `Bearer ${token}`,
            }
          );
          if (data && data.results) setProjects([...data.results]);
        } catch (e) {}
      })();
    }
  }, [team]);
  useEffect(() => {
    if (reqStatus) {
      if (STATUS_JOIN[reqStatus]) {
        setReqStatusFormat(STATUS_JOIN[reqStatus]);
      }
    }
  }, [reqStatus]);
  function teamJoinClickHandler() {
    if (team && team.id) {
      (async () => {
        try {
          const data = await request(
            "/api/teams/requests/",
            "POST",
            {
              team: team.id,
            },
            {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            }
          );
          setReqStatus(data.status);
        } catch (e) {}
      })();
    }
  }

  return (
    <section className="single-team-page__content profile-content">
      <TabBar
        header={
          <>
            <h1
              onClick={() => {
                router.push("/team/");
              }}
              className="single-team-page-block__title profile-title"
            >
              <button className="single-team-page-block__back back-arrow">
                <span></span>
                <span></span>
              </button>
              Информация о команде
            </h1>
            <div className="single-team-page-block__info single-team-page-block-info">
              <div className="single-team-page-block-info__icon">
                <img src={team.image} alt="" />
              </div>
              <div className="single-team-page-block-info__block">
                <div className="single-team-page-block-info__name">
                  {team.name}
                </div>
                <a
                  href="mailto:test@gmail.com"
                  className="single-team-page-block-info__email"
                >
                  {team.email}
                </a>
              </div>
            </div>
          </>
        }
      >
        <TabBarItem className={"profile-block"} label={"Информация"}>
          <div className="single-team-page-info__block">
            <h2 className="single-team-page-info__title">О компании:</h2>
            <div className="single-team-page-info__text">
              <p>{team.description}</p>
            </div>
          </div>
          {team.documents?.length > 0 && (
            <div className="single-team-page-info__block">
              <h2 className="single-team-page-info__title">
                Документы команды:
              </h2>
              <div className="single-team-page-info__docs">
                {team.documents?.map((document, id) => (
                  <a
                    key={id}
                    href={document.file}
                    target={"_blank"}
                    rel="noreferrer"
                    className="single-team-page-info__doc"
                  >
                    <img src={document.file} alt="" />
                  </a>
                ))}
              </div>
            </div>
          )}
          {team.certificates?.length > 0 && (
            <div className="single-team-page-info__block">
              <h2 className="single-team-page-info__title">
                Сертификаты команды:
              </h2>
              <div className="single-team-page-info__docs">
                {team.certificates?.map((certificate, id) => (
                  <a
                    key={id}
                    href={certificate.file}
                    target={"_blank"}
                    rel="noreferrer"
                    className="single-team-page-info__doc"
                  >
                    <img src={certificate.file} alt="" />
                  </a>
                ))}
              </div>
            </div>
          )}
          {!team.is_team_owner &&
            userData.user_type === "EXECUTOR" &&
            !reqStatus && (
              <button
                onClick={teamJoinClickHandler}
                className="window-notification__button window-notification__button_active"
              >
                Вступить в команду
              </button>
            )}
          {!team.is_team_owner && reqStatus && (
            <button className="window-notification__button window-notification__button_no-active">
              {reqStatusFormat}
            </button>
          )}
        </TabBarItem>
        <TabBarItem className={"profile-block"} label={"Участники"}>
          <STMembersContent members={team.members || []} />
        </TabBarItem>
        <TabBarItem label={"Проекты (" + projects.length + ")"}>
          <STProjectsContent projects={projects} />
        </TabBarItem>
      </TabBar>
    </section>
  );
}

export default STContent;
