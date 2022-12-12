import React, { useContext, useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import useHttp from "../../../hooks/hooks.http";
import Loading from "../Loading";
import Link from "next/link";
import { AuthContext } from "../../../context/AuthContext";
import { useRouter } from "next/router";

function SResult() {
  const router = useRouter();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState({});
  const { loading, request } = useHttp();
  const { token } = useContext(AuthContext);
  const ref = useRef();
  async function searchSubmitHandler(e) {
    e.preventDefault();
    if (search !== "")
      try {
        const headers = {};
        if (token) headers["Authorization"] = `Bearer ${token}`;
        console.log(headers);
        const data = await request(
          "/api/search/?search=" + search,
          "GET",
          null,
          headers
        );
        setResults({ ...data });
      } catch (e) {
        console.log(e.message);
      }
  }
  useEffect(() => {
    setIsSearchOpen(false);
    setResults([]);
  }, [router]);
  return (
    <form ref={ref} onSubmit={searchSubmitHandler}>
      <button
        onClick={() => {
          setIsSearchOpen(true);
        }}
        type={"submit"}
        className="header__search-button"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 21 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.9962 18.2535L15.75 15.0335C17.0101 13.4623 17.6203 11.4681 17.4552 9.46087C17.2901 7.45362 16.3622 5.58592 14.8623 4.2418C13.3624 2.89768 11.4046 2.1793 9.39128 2.23439C7.37801 2.28949 5.46236 3.11385 4.03823 4.53798C2.61409 5.96211 1.78973 7.87777 1.73464 9.89104C1.67955 11.9043 2.39792 13.8622 3.74204 15.3621C5.08616 16.8619 6.95387 17.7898 8.96111 17.9549C10.9684 18.12 12.9626 17.5098 14.5337 16.2497L17.7537 19.4697C17.8351 19.5517 17.9318 19.6168 18.0385 19.6613C18.1451 19.7057 18.2595 19.7286 18.375 19.7286C18.4905 19.7286 18.6049 19.7057 18.7115 19.6613C18.8181 19.6168 18.9149 19.5517 18.9962 19.4697C19.1539 19.3066 19.2421 19.0885 19.2421 18.8616C19.2421 18.6347 19.1539 18.4166 18.9962 18.2535ZM9.62498 16.2497C8.41357 16.2497 7.22936 15.8905 6.22211 15.2175C5.21486 14.5445 4.4298 13.5879 3.96622 12.4687C3.50263 11.3495 3.38133 10.1179 3.61767 8.9298C3.854 7.74167 4.43735 6.6503 5.29395 5.7937C6.15055 4.93711 7.24192 4.35376 8.43005 4.11742C9.61818 3.88109 10.8497 4.00238 11.9689 4.46597C13.0881 4.92956 14.0447 5.71461 14.7177 6.72187C15.3908 7.72912 15.75 8.91332 15.75 10.1247C15.75 11.7492 15.1047 13.3071 13.956 14.4558C12.8073 15.6044 11.2494 16.2497 9.62498 16.2497Z"
            fill="#141414"
          />
        </svg>
      </button>
      <CSSTransition
        in={isSearchOpen}
        classNames={"open"}
        timeout={400}
        mountOnEnter
        unmountOnExit
      >
        <div className={"search-box"}>
          <div
            onClick={() => {
              setIsSearchOpen(false);
              setResults([]);
            }}
            className="search-box__close"
          ></div>
          <div className="search-box__input-box">
            <input
              type="text"
              name="search"
              onInput={(e) => {
                setSearch(e.target.value);
                e.target.value === "" ? setResults({}) : null;
              }}
              placeholder="Введите то что вы искали"
              className="search-box__input"
            />
          </div>
          <div className="search-box__results search-results">
            {loading && <Loading />}
            {results.teams && results.teams?.length !== 0 && (
              <h2 className="search-results__section">Команды</h2>
            )}
            {results.teams &&
              results.teams?.map((team, id) => (
                <div key={id} className="search-results__item">
                  <div className="search-results__item-image">
                    <img src={team.image} alt="" />
                  </div>
                  <h3 className="search-results__item-name">
                    <Link href="/team/[link]" as={"/team/" + team.slug}>
                      <a>{team.name}</a>
                    </Link>
                  </h3>
                </div>
              ))}
            {results.users && results.users?.length !== 0 && (
              <h2 className="search-results__section">Пользователи</h2>
            )}
            {results.users &&
              results.users?.map((user, id) => (
                <div key={id} className="search-results__item">
                  <div className="search-results__item-image">
                    <img src={user.avatar} alt="" />
                  </div>
                  <h3 className="search-results__item-name">
                    <Link href="/user/[link]" as={"/user/" + user.id}>
                      <a>{user.display_name}</a>
                    </Link>
                  </h3>
                </div>
              ))}
            {results.projects && results.projects?.length !== 0 && (
              <h2 className="search-results__section">Проекты</h2>
            )}
            {results.projects &&
              results.projects?.map((project, id) => (
                <div key={id} className="search-results__item">
                  <h3 className="search-results__item-name">
                    <Link
                      href={
                        project.status === "APPLICATION" ||
                        project.status === "DECLARED"
                          ? "/announcements/"
                          : "/projects/"
                      }
                      as={
                        project.status === "APPLICATION" ||
                        project.status === "DECLARED"
                          ? "/announcements/#" + project.number
                          : "/projects/#" + project.number
                      }
                    >
                      <a>{project.title}</a>
                    </Link>
                  </h3>
                </div>
              ))}
          </div>
        </div>
      </CSSTransition>
    </form>
  );
}

export default SResult;
