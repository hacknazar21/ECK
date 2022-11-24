import React, { useContext, useEffect, useState } from "react";
import Avatar from "../../../../src/img/avatars/01.png";
import Link from "next/link";
import TabBarItem from "../../../common/TabBar/TabBarItem";
import TabBar from "../../../common/TabBar/TabBar";
import useHttp from "../../../../hooks/hooks.http";
import { AuthContext } from "../../../../context/AuthContext";

function TContent(props) {
  const [teams, setTeams] = useState([]);
  const { request } = useHttp();
  const { token } = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      try {
        const data = await request("/api/profile/teams/", "GET", null, {
          Authorization: `Bearer ${token}`,
        });
        setTeams([...data.results]);
        console.log(data);
      } catch (e) {}
    })();
  }, [token]);

  return (
    <section className="page__team-content team-content profile-content">
      <TabBar
        header={
          <h1 className="notifications-block__title profile-title">
            Мои команды
          </h1>
        }
        alignToButtons={
          <Link href="/profile/team/create">
            <a className="team-actions__add-btn add-btn">
              <span>
                <span></span>
                <span></span>
              </span>
              Создать новую команду
            </a>
          </Link>
        }
      >
        <TabBarItem className={"projects-cards profile-cards"} label={"Все"}>
          {teams.map((team) => {
            return (
              <article className="team-content__card profile-cards__card profile-card team-card">
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
                        <div className="team-card__icon profile-members__icon">
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
                  <Link
                    href="/profile/team/[link]"
                    as={"/profile/team/" + team.slug}
                  >
                    <a className="window-notification__button window-notification__button_active">
                      Смотреть
                    </a>
                  </Link>
                </div>
              </article>
            );
          })}
        </TabBarItem>
        <TabBarItem
          className={"projects-cards profile-cards"}
          label={"Консорциум"}
        >
          <article className="team-content__card profile-cards__card profile-card team-card">
            <div className="team-card__tag profile-card__tag">Консорциум</div>
            <div className="team-card__logo profile-card__logo">
              <div className="team-card__image profile-card__image">
                <img src={Avatar.src} alt="" />
              </div>
              <div className="team-card__name profile-card__name">IBM</div>
            </div>
            <div className="team-card__logo profile-card__logo">
              <div className="team-card__image profile-card__image">
                <img src={Avatar.src} alt="" />
              </div>
              <div className="team-card__name profile-card__name">IBM</div>
            </div>
            <h2 className="team-card__title profile-card__title">
              Доработать проект для информации и связи в университете
            </h2>
            <div className="team-card__members profile-members">
              <div className="profile-members__title">Всего участников</div>
              <div className="team-card__members-box profile-members__box">
                <div className="team-card__icons profile-members__icons">
                  <div className="team-card__icon profile-members__icon">
                    <img src={Avatar.src} alt="" />
                  </div>
                  <div className="team-card__icon profile-members__icon">
                    <img src={Avatar.src} alt="" />
                  </div>
                  <div className="team-card__icon profile-members__icon">
                    <img src={Avatar.src} alt="" />
                  </div>
                  <div className="team-card__icon profile-members__icon">
                    <img src={Avatar.src} alt="" />
                  </div>
                  <div className="team-card__icon profile-members__icon">
                    <img src={Avatar.src} alt="" />
                  </div>
                </div>
                <div className="team-card__number profile-members__number">
                  <span>10 участников</span>
                </div>
              </div>
            </div>
            <div className="window-notification__actions">
              <button className="window-notification__button window-notification__button_active">
                Смотреть проект
              </button>
            </div>
          </article>
        </TabBarItem>
      </TabBar>
    </section>
  );
}

export default TContent;
