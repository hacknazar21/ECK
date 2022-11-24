import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Avatar from "../../../../src/img/avatars/01.png";
import { useRouter } from "next/router";
import Popup from "../../../common/Popup";
import TabBarItem from "../../../common/TabBar/TabBarItem";
import TabBar from "../../../common/TabBar/TabBar";
import useHttp from "../../../../hooks/hooks.http";
import { AuthContext } from "../../../../context/AuthContext";
function STContent(props) {
  const router = useRouter();
  const { request } = useHttp();
  const { token } = useContext(AuthContext);
  const { link } = router.query;

  const [active, setActive] = useState(false);
  const [removeActive, setRemoveActive] = useState(false);
  const [removeInfo, setRemoveInfo] = useState(null);
  const [teamInfo, setTeamInfo] = useState({});
  const [members, setMembers] = useState([]);
  const [requests, setRequests] = useState([]);

  const [searchMemberValue, setSearchMemberValue] = useState("");
  const [searchedMembers, setSearchedMembers] = useState([]);
  const [membersToInvite, setMembersToInvite] = useState([]);
  async function searchSubmitHandler(e) {
    e.preventDefault();
    setMembersToInvite([]);
    try {
      const data = await request(
        "/api/search/?search=" + searchMemberValue,
        "GET",
        null,
        {
          Authorization: `Bearer ${token}`,
        }
      );
      setSearchedMembers([...data.users]);
    } catch (e) {}
  }
  function removeMemberHandler(e) {
    const card = e.target.closest(".single-team-members__member");
    if (card) {
      const name = card.querySelector(".single-team-member__name")?.innerText;
      const email = card.querySelector(".single-team-member__email")?.innerText;
      const src = card.querySelector(".single-team-member__icon img")?.src;
      if (name && email && src) {
        setRemoveInfo({
          name,
          email,
          src,
        });
        setRemoveActive(true);
      }
    }
  }

  useEffect(() => {
    (async () => {
      try {
        const data = await request("/api/teams/" + link, "GET", null, {
          Authorization: `Bearer ${token}`,
        });
        setTeamInfo({ ...data });
        const dataMembers = await request(
          "/api/teams/" + link + "/members",
          "GET",
          null,
          {
            Authorization: `Bearer ${token}`,
          }
        );
        setMembers([...dataMembers.results]);
        const dataRequests = await request(
          "/api/teams/invites/?team=" + data.id,
          "GET",
          null,
          {
            Authorization: `Bearer ${token}`,
          }
        );
        setRequests([...dataRequests.results]);
      } catch (e) {}
    })();
  }, [token]);

  async function inviteClickHandler() {
    try {
      for (const memberToInvite of membersToInvite) {
        const data = await request(
          "/api/teams/invites/",
          "POST",
          {
            team: teamInfo.id,
            user: memberToInvite,
          },
          {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          }
        );
        console.log(data);
      }
    } catch (e) {}
  }

  return (
    <section className="single-team__content single-team-content profile-content">
      <TabBar
        header={
          <h1
            onClick={() => {
              router.push("/profile/team/");
            }}
            className="single-team-content__title profile-title"
          >
            <button className="single-team-content-block__back back-arrow">
              <span></span>
              <span></span>
            </button>
            {teamInfo?.name}
          </h1>
        }
      >
        <TabBarItem className={"profile-block"} label={"Участники"}>
          {members.map((member) => (
            <article
              key={member.id}
              className="single-team-members__member single-team-member"
            >
              <div className="single-team-member__info">
                <div className="single-team-member__icon">
                  <img src={member.avatar} alt="" />
                </div>
                <div className="single-team-member__name-box">
                  <div className="single-team-member__name">
                    {member.full_name}
                  </div>
                  <a
                    href={"mailto:" + member.email}
                    className="single-team-member__email"
                  >
                    {member.email}
                  </a>
                </div>
                {member.is_admin && (
                  <div className="single-team-member__role">Администратор</div>
                )}
              </div>
              {teamInfo.is_team_owner && !member.is_admin && (
                <div className="single-team-member__actions">
                  <button
                    onClick={removeMemberHandler}
                    className="button-delete single-team-member__button-delete"
                  >
                    <span>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.5 13.5C7.69891 13.5 7.88968 13.421 8.03033 13.2803C8.17098 13.1397 8.25 12.9489 8.25 12.75V8.25C8.25 8.05109 8.17098 7.86032 8.03033 7.71967C7.88968 7.57902 7.69891 7.5 7.5 7.5C7.30109 7.5 7.11032 7.57902 6.96967 7.71967C6.82902 7.86032 6.75 8.05109 6.75 8.25V12.75C6.75 12.9489 6.82902 13.1397 6.96967 13.2803C7.11032 13.421 7.30109 13.5 7.5 13.5ZM15 4.5H12V3.75C12 3.15326 11.7629 2.58097 11.341 2.15901C10.919 1.73705 10.3467 1.5 9.75 1.5H8.25C7.65326 1.5 7.08097 1.73705 6.65901 2.15901C6.23705 2.58097 6 3.15326 6 3.75V4.5H3C2.80109 4.5 2.61032 4.57902 2.46967 4.71967C2.32902 4.86032 2.25 5.05109 2.25 5.25C2.25 5.44891 2.32902 5.63968 2.46967 5.78033C2.61032 5.92098 2.80109 6 3 6H3.75V14.25C3.75 14.8467 3.98705 15.419 4.40901 15.841C4.83097 16.2629 5.40326 16.5 6 16.5H12C12.5967 16.5 13.169 16.2629 13.591 15.841C14.0129 15.419 14.25 14.8467 14.25 14.25V6H15C15.1989 6 15.3897 5.92098 15.5303 5.78033C15.671 5.63968 15.75 5.44891 15.75 5.25C15.75 5.05109 15.671 4.86032 15.5303 4.71967C15.3897 4.57902 15.1989 4.5 15 4.5ZM7.5 3.75C7.5 3.55109 7.57902 3.36032 7.71967 3.21967C7.86032 3.07902 8.05109 3 8.25 3H9.75C9.94891 3 10.1397 3.07902 10.2803 3.21967C10.421 3.36032 10.5 3.55109 10.5 3.75V4.5H7.5V3.75ZM12.75 14.25C12.75 14.4489 12.671 14.6397 12.5303 14.7803C12.3897 14.921 12.1989 15 12 15H6C5.80109 15 5.61032 14.921 5.46967 14.7803C5.32902 14.6397 5.25 14.4489 5.25 14.25V6H12.75V14.25ZM10.5 13.5C10.6989 13.5 10.8897 13.421 11.0303 13.2803C11.171 13.1397 11.25 12.9489 11.25 12.75V8.25C11.25 8.05109 11.171 7.86032 11.0303 7.71967C10.8897 7.57902 10.6989 7.5 10.5 7.5C10.3011 7.5 10.1103 7.57902 9.96967 7.71967C9.82902 7.86032 9.75 8.05109 9.75 8.25V12.75C9.75 12.9489 9.82902 13.1397 9.96967 13.2803C10.1103 13.421 10.3011 13.5 10.5 13.5Z"
                          fill="#E22D38"
                        />
                      </svg>
                    </span>
                    Удалить
                  </button>
                </div>
              )}
            </article>
          ))}
          <div className="window-notification__actions single-team-content__main-actions">
            {teamInfo.is_team_owner && (
              <button
                onClick={() => {
                  setActive(true);
                }}
                className="window-notification__button window-notification__button_active"
              >
                Пригласить в команду
              </button>
            )}
            {teamInfo.is_team_owner && (
              <button className="window-notification__button window-notification__button_no-active">
                Распустить команду
              </button>
            )}
            {!teamInfo.is_team_owner && (
              <button className="window-notification__button window-notification__button_no-active">
                Покинуть команду
              </button>
            )}
          </div>
        </TabBarItem>
        {teamInfo.is_team_owner && (
          <TabBarItem className={"profile-block"} label={"Заявки"}>
            {requests.map((request) => (
              <article
                key={request.id}
                className="single-team-members__member single-team-member"
              >
                <div className="single-team-member__info">
                  <div className="single-team-member__icon">
                    <img src={Avatar.src} alt="" />
                  </div>
                  <div className="single-team-member__name-box">
                    <div className="single-team-member__name">
                      Albert Flores
                    </div>
                    <a
                      href="mailto:jackson.graham@example.com"
                      className="single-team-member__email"
                    >
                      jackson.graham@example.com
                    </a>
                  </div>
                </div>
                <div className="single-team-member__actions">
                  <button className="window-notification__button window-notification__button_active">
                    Принять запрос
                  </button>
                  <button className="window-notification__button window-notification__button_no-active">
                    Отклонить
                  </button>
                </div>
              </article>
            ))}
            {requests.length === 0 && "Заявок пока нет"}
          </TabBarItem>
        )}
      </TabBar>
      <Popup setActive={setActive} active={active}>
        <header className="single-team-content-block__header">
          <h1 className="single-team-content__title profile-title">
            Приглашение в команду
          </h1>
        </header>
        <form onSubmit={searchSubmitHandler} className="single-team__form">
          <div className="single-team__search-box single-team-search">
            <button type="submit" className="single-team-search__submit">
              <svg
                width="21"
                height="22"
                viewBox="0 0 21 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.375 18.875L14.4497 14.9428M16.625 9.6875C16.625 11.66 15.8414 13.5518 14.4466 14.9466C13.0518 16.3414 11.16 17.125 9.1875 17.125C7.21495 17.125 5.3232 16.3414 3.92839 14.9466C2.53359 13.5518 1.75 11.66 1.75 9.6875C1.75 7.71495 2.53359 5.8232 3.92839 4.42839C5.3232 3.03359 7.21495 2.25 9.1875 2.25C11.16 2.25 13.0518 3.03359 14.4466 4.42839C15.8414 5.8232 16.625 7.71495 16.625 9.6875V9.6875Z"
                  stroke="#8D9CA5"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <input
              onInput={(e) => {
                setSearchMemberValue(e.target.value);
              }}
              type="text"
              placeholder="Введите почту или имя пользователя"
              className="single-team-search__input"
            />
          </div>
          <div className="single-team-search__results">
            {searchedMembers.map((searchedMember) => (
              <div
                key={searchedMember.id}
                onClick={(e) => {
                  !e.target.classList.contains("checked")
                    ? setMembersToInvite((prevState) => [
                        ...prevState,
                        searchedMember.id,
                      ])
                    : setMembersToInvite((prevState) => {
                        return prevState.filter(
                          (member) => searchedMember.id !== member
                        );
                      });
                  e.target.classList.toggle("checked");
                }}
                className="single-team-search__result"
              >
                <div className="single-team-search__result-icon">
                  <img src={searchedMember.avatar} alt="" />
                </div>
                <div className="single-team-search__result-info">
                  <div className="single-team-search__result-name">
                    {searchedMember.display_name}
                  </div>
                  <a
                    href={"mailto:" + searchedMember.email}
                    className="single-team-search__result-email"
                  >
                    {searchedMember.email}
                  </a>
                </div>
              </div>
            ))}
            {searchedMembers.length === 0 && (
              <div className="single-team-search__result">
                <div className="single-team-search__result-info">
                  <div className="single-team-search__result-name">
                    Пользователь не найден
                  </div>
                </div>
              </div>
            )}
          </div>
        </form>
        <div className="window-notification__actions single-team-content__main-actions">
          <button
            onClick={inviteClickHandler}
            className="window-notification__button window-notification__button_active"
          >
            Пригласить в команду
          </button>
        </div>
      </Popup>
      <Popup setActive={setRemoveActive} active={removeActive}>
        <header className="single-team-content-block__header">
          <h1 className="single-team-content__title profile-title">
            Удалить из команды
          </h1>
        </header>
        <div className="single-team-remove-info">
          <p>Вы точно хотите удалить этого пользователя из команды ?</p>
        </div>
        <div className="single-team-search__result">
          <div className="single-team-search__result-icon">
            <img src={removeInfo?.src} alt="" />
          </div>
          <div className="single-team-search__result-info">
            <div className="single-team-search__result-name">
              {removeInfo?.name}
            </div>
            <a
              href={"mailto:" + removeInfo?.email}
              className="single-team-search__result-email"
            >
              {removeInfo?.email}
            </a>
          </div>
        </div>
        <div className="window-notification__actions single-team-content__main-actions">
          <button
            onClick={() => {
              setRemoveActive(false);
            }}
            className="window-notification__button window-notification__button_active"
          >
            Нет
          </button>
          <button className="window-notification__button window-notification__button_active">
            Да
          </button>
        </div>
      </Popup>
    </section>
  );
}

export default STContent;
