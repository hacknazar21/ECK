import React, { useContext, useState } from "react";
import Avatar from "../../../src/img/avatars/01.png";
import useHttp from "../../../hooks/hooks.http";
import { AuthContext } from "../../../context/AuthContext";

function InviteTeam({ project_number, project_id }) {
  const [inviteClick, setInviteClick] = useState(false);
  const [executors, setExecutors] = useState([]);
  const [inviteExecutors, setInviteExecutors] = useState([]);
  const { request } = useHttp();
  const { token } = useContext(AuthContext);
  const [search, setSearch] = useState("");
  function inviteClickHandler(e) {
    setInviteClick(true);
  }
  async function searchSubmitHandler(e) {
    e.preventDefault();
    try {
      const headers = {};
      headers["Authorization"] = `Bearer ${token}`;
      const data = await request(
        `/api/projects/${project_number}/invitable_executors/?search=${search}`,
        "GET",
        null,
        headers
      );
      setExecutors([...data.results]);
    } catch (e) {
      console.log(e);
    }
  }
  function searchResultClick(e) {
    e.preventDefault();
    e.target.classList.toggle("checked");
    if (e.target.classList.contains("checked")) {
      setInviteExecutors((prevState) => [...prevState, this.executor_id]);
    } else {
      setInviteExecutors((prevState) =>
        prevState.filter((executor_id) => this.executor_id !== executor_id)
      );
    }
  }

  async function inviteExecutorsClick(e) {
    e.preventDefault();
    try {
      for (const inviteExecutor of inviteExecutors) {
        const headers = {};
        headers["Authorization"] = `Bearer ${token}`;
        headers["Content-Type"] = `application/json`;
        await request(
          `/api/projects/invites/`,
          "POST",
          {
            project: project_id,
            executor: inviteExecutor,
            message: null,
          },
          headers
        );
      }
      setInviteClick(false);
      setInviteExecutors([]);
    } catch (e) {}
  }

  return (
    <>
      <div className="project-modal-team__button project-modal-team__button_margin">
        {!inviteClick ? (
          <button
            onClick={inviteClickHandler}
            className="window-notification__button window-notification__button_active"
          >
            Пригласить исполнителей
          </button>
        ) : (
          ""
        )}
      </div>
      <div className="project-modal__teams project-modal-teams">
        {inviteClick ? (
          <>
            <h2 className="project-modal-teams__title">
              Пригласить исполнителей
            </h2>
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
                  type="text"
                  onInput={(e) => {
                    setSearch(e.target.value);
                  }}
                  placeholder="Поиск по названию команды или имени исполнителя"
                  className="single-team-search__input"
                />
              </div>
              <div className="single-team-search__results">
                {executors.map((executor, id) => (
                  <div key={id} className="single-team-search__result">
                    <div
                      onClick={searchResultClick.bind({
                        executor_id: executor.user?.id || executor.team?.id,
                      })}
                      className="single-team-search__checkbox"
                    >
                      <div className="select__checkbox">
                        <span></span>
                      </div>
                    </div>
                    <div className="single-team-search__result-icon">
                      <img
                        src={executor.user?.avatar || executor.team?.image}
                        alt=""
                      />
                    </div>
                    <div className="single-team-search__result-info">
                      <div className="single-team-search__result-name">
                        {executor.user?.full_name || executor.team?.name}
                      </div>
                      <a
                        href={
                          "mailto:" + executor.user?.email ||
                          executor.team?.email
                        }
                        className="single-team-search__result-email"
                      >
                        {executor.user?.email || executor.team?.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={inviteExecutorsClick}
                className="window-notification__button window-notification__button_active"
              >
                Пригласить
              </button>
            </form>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default InviteTeam;
