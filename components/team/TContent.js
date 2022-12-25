import React, { useContext, useEffect, useState } from "react";
import Notification from "../common/Notifications/Notification/Notification";
import Avatar from "../../src/img/avatars/01.png";
import Link from "next/link";
import TabBarItem from "../common/TabBar/TabBarItem";
import TabBar from "../common/TabBar/TabBar";
import useHttp from "../../hooks/hooks.http";
import { AuthContext } from "../../context/AuthContext";
import Filter from "../common/Filter";

function TContent({ teams, myTeams, setter, url }) {
  const { userData } = useContext(AuthContext);
  return (
    <section className="page__team-page-content team-page-content profile-content">
      <TabBar
        header={
          <h1 className="team-page-content__title profile-title">Команды</h1>
        }
        component={<Filter setter={setter} url={url} />}
      >
        <TabBarItem
          className={"projects-cards profile-cards"}
          label={"Все команды"}
        >
          {teams.map((team) => {
            return (
              <article
                key={team.id}
                className="team-content__card profile-cards__card profile-card team-card"
              >
                <div className="team-card__logo profile-card__logo">
                  <div className="team-card__image profile-card__image">
                    <img src={team.image} alt="" />
                  </div>
                  <div className="team-card__name profile-card__name">
                    {team.name}
                  </div>
                </div>
                <div className="team-card__text profile-card__text">
                  <p>{team.description}</p>
                </div>
                <div className="team-card__members profile-members">
                  <div className="profile-members__title">Всего участников</div>
                  <div className="team-card__members-box profile-members__box">
                    <div className="team-card__icons profile-members__icons">
                      {team.members?.map((member) => (
                        <div
                          key={member.id}
                          className="team-card__icon profile-members__icon"
                        >
                          <img src={member.avatar || Avatar.src} alt="" />
                        </div>
                      ))}
                    </div>
                    <div className="team-card__number profile-members__number">
                      <span>{team.members_count} участников</span>
                    </div>
                  </div>
                </div>
                <div className="window-notification__actions">
                  <Link href="/team/[link]" as={"/team/" + team.slug}>
                    <a className="window-notification__button window-notification__button_active">
                      Смотреть
                    </a>
                  </Link>
                </div>
              </article>
            );
          })}
        </TabBarItem>
        {userData?.user_type === "EXECUTOR" && (
          <TabBarItem
            className={"projects-cards profile-cards"}
            label={"Мои команды"}
          >
            {myTeams.map((team) => {
              return (
                <article
                  key={team.id}
                  className="team-content__card profile-cards__card profile-card team-card"
                >
                  <div className="team-card__logo profile-card__logo">
                    <div className="team-card__image profile-card__image">
                      <img src={team.image} alt="" />
                    </div>
                    <div className="team-card__name profile-card__name">
                      {team.name}
                    </div>
                  </div>
                  <div className="team-card__text profile-card__text">
                    <p>{team.description}</p>
                  </div>
                  <div className="team-card__members profile-members">
                    <div className="profile-members__title">
                      Всего участников
                    </div>
                    <div className="team-card__members-box profile-members__box">
                      <div className="team-card__icons profile-members__icons">
                        {team.members?.map((member) => (
                          <div
                            key={member.id}
                            className="team-card__icon profile-members__icon"
                          >
                            <img src={member.avatar || Avatar.src} alt="" />
                          </div>
                        ))}
                      </div>
                      <div className="team-card__number profile-members__number">
                        <span>{team.members_count} участников</span>
                      </div>
                    </div>
                  </div>
                  <div className="window-notification__actions">
                    <Link href="/team/[link]" as={"/team/" + team.slug}>
                      <a className="window-notification__button window-notification__button_active">
                        Смотреть
                      </a>
                    </Link>
                  </div>
                </article>
              );
            })}
          </TabBarItem>
        )}
      </TabBar>
    </section>
  );
}

export default TContent;
