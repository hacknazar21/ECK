import React from "react";
import Avatar from "../../src/img/avatars/01.png";
import { useRouter } from "next/router";
import Link from "next/link";
import TabBarItem from "../common/TabBar/TabBarItem";
import TabBar from "../common/TabBar/TabBar";
import STMembersContent from "./STMembersContent";
import STProjectsContent from "./STProjectsContent";

function STContent({ team }) {
  const router = useRouter();
  const { link } = router.query;
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
                {team.documents?.map((document) => (
                  <a
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
        </TabBarItem>
        <TabBarItem className={"profile-block"} label={"Участники"}>
          <STMembersContent members={team.members || []} />
        </TabBarItem>
        <TabBarItem label={"Проекты (10)"}>
          <STProjectsContent />
        </TabBarItem>
      </TabBar>
    </section>
  );
}

export default STContent;
