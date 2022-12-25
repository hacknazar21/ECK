import React, { useContext, useEffect, useState } from "react";
import useHttp from "../../../../../hooks/hooks.http";
import { AuthContext } from "../../../../../context/AuthContext";
import Link from "next/link";
import Popup from "../../../../common/Popup";
import ParticipantCard from "../../../../common/Project/ParticipantCard";
import Loading from "../../../../common/Loading";
import ButtonWithDangerous from "../../../../common/ButtonWithDangerous";

function Solutions({ project }) {
  const [solutions, setSolutions] = useState([]);
  const [solution, setSolution] = useState({});
  const [active, setActive] = useState(false);
  const { request, loading } = useHttp();
  const { token } = useContext(AuthContext);

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
                  {solution?.executor?.team.name}
                </a>
              </Link>
            </div>
          </div>
        )}
        <div className="project-modal__section project-modal__section_border project-modal__section_wrap">
          <div className="project-modal__section-box">
            {solution?.executor?.user?.work_experience && (
              <div className="project-modal__section-sub-box">
                <div className="project-modal__section-title">Опыт работы</div>
                <div className="project-modal__section-text">
                  {solution?.executor.user?.work_experience}
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
          <div className="project-modal__section-box">
            <div className="project-modal__section-sub-box">
              <div className="project-modal__section-title">
                Ответственное лицо
              </div>
              <div className="project-modal__section-text">ewgegwe</div>
            </div>
            <div className="project-modal__section-sub-box">
              <div className="project-modal__section-title">
                Занимаемая должность
              </div>
              <div className="project-modal__section-text">ewgegwe</div>
            </div>
            <div className="project-modal__section-sub-box">
              <div className="project-modal__section-title">
                Контактные данные
              </div>
              <div className="project-modal__section-text">ewgegwe</div>
            </div>
          </div>
          <div className="project-modal__section-box">
            <div className="project-modal__section-sub-box">
              <div className="project-modal__section-title">Руководитель</div>
              <div className="project-modal__section-text">ewgegwe</div>
            </div>
            <div className="project-modal__section-sub-box">
              <div className="project-modal__section-title">Адрес</div>
              <div className="project-modal__section-text">ewgegwe</div>
            </div>
            <div className="project-modal__section-sub-box">
              <div className="project-modal__section-title">Бин</div>
              <div className="project-modal__section-text">ewgegwe</div>
            </div>
          </div>
        </div>
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
          isRadio={true}
          participant={solution.executor}
        />
      ))}
      {solutions.length > 0 && project.project_type === "CONTEST" && (
        <div className="window-notification__buttons mt-20">
          <button className="window-notification__button window-notification__button_active">
            Сделать победителем
          </button>
          {project.status === "REVIEWS" && (
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
