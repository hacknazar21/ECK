import React, { useContext, useEffect, useState } from "react";
import useHttp from "../../../../../hooks/hooks.http";
import { AuthContext } from "../../../../../context/AuthContext";
import Link from "next/link";
import Popup from "../../../../common/Popup";
import ParticipantCard from "../../../../common/Project/ParticipantCard";
import Loading from "../../../../common/Loading";
import ButtonWithDangerous from "../../../../common/ButtonWithDangerous";
import { useRouter } from "next/router";

function Solutions({ project }) {
  const [solutions, setSolutions] = useState([]);
  const [solution, setSolution] = useState({});
  const [active, setActive] = useState(false);
  const { request, loading } = useHttp();
  const [winner, setWinner] = useState(null);
  const { token } = useContext(AuthContext);
  const router = useRouter();
  async function revisionClickHandler(e) {
    e.preventDefault();
    try {
      await request(
        `/api/projects/solutions/${solution.id}/send_for_revision/`,
        "DELETE",
        null,
        {
          Authorization: `Bearer ${token}`,
        }
      );
      await router.reload();
    } catch (e) {}
  }
  useEffect(() => {
    if (project && project.number)
      (async () => {
        try {
          const data = await request(
            `/api/projects/${project.number}/solutions/`,
            "GET",
            null,
            {
              Authorization: `Bearer ${token}`,
            }
          );
          setSolutions([...data.results]);
        } catch (e) {}
      })();
  }, [project]);
  function solutionClickHandler(solution) {
    setSolution(solution);
    setActive(true);
  }
  async function closeProjectHandler(e) {
    e.preventDefault();
    try {
      await request(`/api/projects/${project?.number}/close`, "DELETE", null, {
        Authorization: `Bearer ${token}`,
      });
      await router.push("/profile/projects/");
    } catch (e) {
      console.log(e);
    }
  }
  function winnerChangeHandler(e, participant, solution_id) {
    setWinner(participant);
    setSolution(solution_id);
  }
  async function setWinnerClickHandler(e) {
    e.preventDefault();
    if (winner) {
      try {
        await request(
          `/api/projects/solutions/${solution}/declare_winner/`,
          "POST",
          null,
          {
            Authorization: `Bearer ${token}`,
          }
        );
        await router.push("/profile/projects/");
      } catch (e) {
        console.log(e);
      }
    }
  }
  return (
    <div className="customer-solutions">
      <Popup setActive={setActive} active={active}>
        <header className="single-team-content-block__header">
          <h3 className="single-team-content__title profile-title">
            Информация о решении
          </h3>
        </header>
        {!!solution?.executor?.user && (
          <div className="project-modal__section project-modal__section_border">
            <div className="projects-card__logo profile-card__logo">
              <div className="projects-card__image profile-card__image">
                <img src={solution?.executor.user.avatar} alt="" />
              </div>
              <Link
                href="/user/[link]"
                as={"/user/" + solution?.executor.user.id}
              >
                <a className="projects-card__name profile-card__name">
                  {solution?.executor.user.display_name}
                </a>
              </Link>
            </div>
          </div>
        )}
        {!!solution?.executor?.team && (
          <div className="project-modal__section project-modal__section_border">
            <div className="projects-card__logo profile-card__logo">
              <div className="projects-card__image profile-card__image">
                <img src={solution?.executor?.team.image} alt="" />
              </div>
              <Link
                href="/team/[link]"
                as={"/team/" + solution?.executor?.team.slug}
              >
                <a className="projects-card__name profile-card__name">
                  {solution?.executor.team.name}
                </a>
              </Link>
            </div>
          </div>
        )}
        {!!solution?.executor?.consortium && (
          <div className="project-modal__section project-modal__section_border project-modal__section_column">
            {solution.executor.consortium.teams.map((team) => (
              <div
                key={team.id}
                className="projects-card__logo profile-card__logo"
              >
                <div className="projects-card__image profile-card__image">
                  <img src={team.image} alt="" />
                </div>
                <Link href="/team/[link]" as={"/team/" + team.slug}>
                  <a className="projects-card__name profile-card__name">
                    {team.name}
                  </a>
                </Link>
              </div>
            ))}
          </div>
        )}
        <div className="project-modal__section project-modal__section_border project-modal__section_wrap">
          <div className="project-modal__section-box">
            {solution?.comment && (
              <div className="project-modal__section-sub-box">
                <div className="project-modal__section-title">Комментарий</div>
                <div className="project-modal__section-text">
                  {solution?.comment}
                </div>
              </div>
            )}
          </div>
          {!!solution?.files?.length && (
            <div className="project-modal__section-box">
              <div className="project-modal__section-title">Документы</div>
              <div className="single-team-page-info__docs">
                {solution?.files.map((document, id) => (
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
        </div>
        <div className="project-modal__section project-modal__section_wrap">
          {solution?.executor?.team && (
            <>
              <div className="project-modal__section-box">
                <div className="project-modal__section-sub-box">
                  <div className="project-modal__section-title">
                    Администратор команды
                  </div>
                  <div className="project-modal__section-text">
                    {solution?.executor?.team.created_by.display_name}
                    {solution?.executor?.team.created_by.full_name ||
                      solution?.executor?.team.created_by.company_name}
                  </div>
                </div>
                <div className="project-modal__section-sub-box">
                  <div className="project-modal__section-title">БИН</div>
                  <div className="project-modal__section-text">
                    {solution?.executor?.team.created_by.iin}
                  </div>
                </div>
              </div>
              <div className="project-modal__section-box">
                <div className="project-modal__section-sub-box">
                  <div className="project-modal__section-title">
                    Электронная почта команды
                  </div>
                  <div className="project-modal__section-text">
                    {solution?.executor?.team.email}
                  </div>
                </div>
                <div className="project-modal__section-sub-box">
                  <div className="project-modal__section-title">
                    Контактные данные администратора
                  </div>
                  <div className="project-modal__section-text">
                    {solution?.executor?.team.created_by.contacts}
                  </div>
                </div>
              </div>
            </>
          )}
          {solution?.executor?.user && (
            <>
              <div className="project-modal__section-box">
                <div className="project-modal__section-sub-box">
                  <div className="project-modal__section-title">
                    {solution?.executor?.user.entity_type === "INDIVIDUAL"
                      ? "Физическое лицо"
                      : "Юридическое лицо"}
                  </div>
                  <div className="project-modal__section-text">
                    {solution?.executor?.user.entity_type === "INDIVIDUAL"
                      ? solution?.executor?.user.full_name
                      : solution?.executor?.user.company_name}
                  </div>
                </div>
                <div className="project-modal__section-sub-box">
                  <div className="project-modal__section-title">
                    {solution?.executor?.user.entity_type === "INDIVIDUAL"
                      ? "ИИН"
                      : "БИН"}
                  </div>
                  <div className="project-modal__section-text">
                    {solution?.executor?.user.iin}
                  </div>
                </div>
              </div>
              <div className="project-modal__section-box">
                <div className="project-modal__section-sub-box">
                  <div className="project-modal__section-title">
                    Электронная почта
                  </div>
                  <div className="project-modal__section-text">
                    {solution?.executor?.user.email}
                  </div>
                </div>
                <div className="project-modal__section-sub-box">
                  <div className="project-modal__section-title">
                    Контактные данные
                  </div>
                  <div className="project-modal__section-text">
                    {solution?.executor?.user.contacts}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        {solution.status !== "REVISION" && (
          <ButtonWithDangerous
            onClick={revisionClickHandler}
            className="button-delete single-team-member__button-delete"
            buttonText={"Доработать"}
            title={"Отправить решение на доработку"}
            description={
              "Вы уверены что хотите отправить решение на доработку?"
            }
          />
        )}
        {solution.status === "REVISION" && (
          <button className="window-notification__button window-notification__button_no-active">
            На доработке
          </button>
        )}
      </Popup>
      {solutions.map((solution) => (
        <ParticipantCard
          key={solution.id}
          button={
            <div className="project-modal-team__button">
              <button
                onClick={() => {
                  solutionClickHandler(solution);
                }}
                className="window-notification__button window-notification__button_active"
              >
                Смотреть решение
              </button>
            </div>
          }
          isRadio={project.project_type === "CONTEST"}
          onRadio={winnerChangeHandler}
          participant={solution.executor}
          solution_id={solution.id}
        />
      ))}
      {solutions.length > 0 && project.project_type === "CONTEST" && (
        <div className="window-notification__buttons mt-20">
          {!!winner && (
            <ButtonWithDangerous
              className="window-notification__button window-notification__button_active"
              onClick={setWinnerClickHandler}
              description={
                "Вы уверены что хотите сделать этого пользователя победителем?"
              }
              title={"Объявление победителя"}
              buttonText={"Сделать победителем"}
              jsxElement={
                <div className="single-team-search__result">
                  <div className="single-team-search__result-icon">
                    <img
                      src={
                        winner?.user?.avatar ||
                        winner?.team?.image ||
                        winner?.consortium?.created_by?.image
                      }
                      alt=""
                    />
                  </div>
                  <div className="single-team-search__result-info">
                    <div className="single-team-search__result-name">
                      {winner?.display_name}
                    </div>
                    <a
                      href={"mailto:" + winner?.email}
                      className="single-team-search__result-email"
                    >
                      {winner?.email}
                    </a>
                  </div>
                </div>
              }
            />
          )}
          {((project.project_type === "CHOICE" &&
            project.status === "IN_PROGRESS") ||
            project.status === "REVIEWS") && (
            <ButtonWithDangerous
              className="window-notification__button window-notification__button_active"
              onClick={closeProjectHandler}
              description={
                "Вы уверены что хотите завершить работу над проектом?"
              }
              title={"Завершить работу"}
              buttonText={"Завершить работу над проектом"}
            />
          )}
        </div>
      )}
      {solutions.length === 0 && !loading && (
        <p>Решения пока никто не подавал</p>
      )}
      {loading && <Loading />}
    </div>
  );
}

export default Solutions;
