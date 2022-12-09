import React, { useContext, useEffect, useState } from "react";
import useForm from "../../hooks/hooks.form";
import FieldsOfActivities from "../common/FieldsOfActivities";
import File from "../common/File";
import Loading from "../common/Loading";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { AuthContext } from "../../context/AuthContext";
import useHttp from "../../hooks/hooks.http";
import Select from "../common/Select/Select";

const animationAuth = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};
function ProjectJoin({ project }) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const { userData, token } = useContext(AuthContext);
  const { request } = useHttp();
  const [executor, setExecutor] = useState(null);
  const [myTeam, setMyTeam] = useState(null);
  const [teams, setTeams] = useState([]);
  const [consortiumTeams, setConsortiumTeams] = useState([]);
  const { formChangeHandler, formSubmitHandler, loading, form } =
    useForm(onSuccessJoin);
  async function onSuccessJoin(response) {
    await router.push("/announcements");
  }
  useEffect(() => {
    if (userData) {
      setExecutor(userData.id);
      formChangeHandler({
        target: {
          name: "executor",
          type: "select",
          value: userData.id,
        },
      });
      formChangeHandler({
        target: {
          name: "project",
          type: "text",
          value: project?.id || null,
        },
      });
    }
  }, [userData, project]);
  useEffect(() => {
    if (userData)
      (async () => {
        try {
          const headers = {};
          headers["Authorization"] = `Bearer ${token}`;
          const data = await request(
            `/api/teams/?created_by=${userData.id}`,
            "GET",
            null,
            headers
          );
          setMyTeam([...data.results]);
        } catch (e) {
          console.log(e);
        }
      })();
  }, [userData]);
  useEffect(() => {
    if (consortiumTeams && consortiumTeams.length) {
      formChangeHandler({
        target: {
          name: "teams_to_invite",
          type: "select-checkboxes",
          value: consortiumTeams,
        },
      });
    }
  }, [JSON.stringify(consortiumTeams)]);
  useEffect(() => {
    console.log(form);
  }, [form]);
  async function teamsSearchHandler(e) {
    e.preventDefault();
    try {
      const headers = {};
      headers["Authorization"] = `Bearer ${token}`;
      headers["mode"] = "cors";
      const data = await request(
        `/api/projects/${project?.number}/invitable_teams/?search=${search}`,
        "GET",
        null,
        headers
      );
      setTeams([...data.results]);
    } catch (e) {
      console.log(e);
    }
  }
  function searchResultClick(e) {
    e.preventDefault();
    e.target.classList.toggle("checked");
    if (e.target.classList.contains("checked")) {
      setConsortiumTeams((prevState) => [...prevState, this.team_id]);
    } else {
      setConsortiumTeams((prevState) =>
        prevState.filter((executor_id) => this.team_id !== executor_id)
      );
    }
  }

  return (
    <motion.section
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once: true }}
      className="auth"
    >
      <motion.div variants={animationAuth} className="auth__container">
        <div className="auth__box">
          <div className="auth__header">
            <button
              onClick={() => {
                router.back();
              }}
              className="auth__back"
            >
              Вернуться назад
            </button>
            <h1 className="auth__title">Подача заявки</h1>
          </div>
          <form
            onSubmit={formSubmitHandler}
            action={"/api/projects/join"}
            data-method={"POST"}
            className="auth__form"
          >
            <div className="auth__inputs">
              <input
                onChange={formChangeHandler}
                onInput={formChangeHandler}
                type={"hidden"}
                name="project"
                defaultValue={project?.id}
              />
              <input
                onChange={formChangeHandler}
                onInput={formChangeHandler}
                type={"hidden"}
                name="executor"
                defaultValue={executor}
              />
              <input
                type={"hidden"}
                onChange={formChangeHandler}
                onInput={formChangeHandler}
                name="created_by_team"
                defaultValue={myTeam}
              />
              <div className="auth__input-box">
                <input
                  id={"company_name"}
                  disabled={true}
                  defaultValue={userData.company_name}
                  name={"company_name"}
                  className="auth__input"
                />
                <label htmlFor="company_name" className="auth__input-label">
                  Наименование вашей компании
                </label>
              </div>
              <div className="auth__input-box">
                <input
                  defaultValue={userData.iin}
                  disabled={true}
                  name={"iin"}
                  className="auth__input"
                />
                <label htmlFor="iin" className="auth__input-label">
                  БИН
                </label>
              </div>
              <FieldsOfActivities
                form={form}
                disabled={true}
                defaultValues={userData.fields_of_activity}
                formChangeHandler={formChangeHandler}
              />
              <File
                isInput={true}
                name={"certificates"}
                label={
                  "Лицензии/Сертификат/Разрешительные документы (необязательно)"
                }
                onChange={formChangeHandler}
                append={
                  <div className="files">
                    <h3 className="files__title">Загруженные документы</h3>
                    {userData?.certificates?.map((file, id) => {
                      return (
                        <a
                          href={file.file}
                          key={file.id}
                          className="file__item"
                        >
                          {id + 1}. {file.uploaded_name}
                        </a>
                      );
                    })}
                  </div>
                }
              />
              <div className="auth__input-box">
                <input
                  id={"work_experience"}
                  placeholder=" "
                  name={"work_experience"}
                  className="auth__input"
                  disabled={true}
                  defaultValue={userData.work_experience}
                />
                <label htmlFor="work_experience" className="auth__input-label">
                  Опыт работы (необязательно)
                </label>
              </div>
              <File
                isInput={true}
                name={"technical_base_files"}
                label={"Наличие мат-тех базы"}
                onChange={formChangeHandler}
                append={
                  <div className="files">
                    <h3 className="files__title">Загруженные документы</h3>
                    {userData?.technical_base_files?.map((file, id) => {
                      return (
                        <a
                          href={file.file}
                          key={file.id}
                          className="file__item"
                        >
                          {id + 1}. {file.uploaded_name}
                        </a>
                      );
                    })}
                  </div>
                }
              />
              <div className="auth__input-box">
                <input
                  id={"responsible_person"}
                  onInput={formChangeHandler}
                  placeholder=" "
                  name={"responsible_person"}
                  className="auth__input"
                  disabled={true}
                  defaultValue={userData.responsible_person}
                />
                <label
                  htmlFor="responsible_person"
                  className="auth__input-label"
                >
                  ФИО ответственного лица
                </label>
              </div>
              <div className="auth__input-box">
                <input
                  id={"job_title"}
                  onInput={formChangeHandler}
                  placeholder=" "
                  name={"job_title"}
                  className="auth__input"
                  disabled={true}
                  defaultValue={userData.job_title}
                />
                <label htmlFor="job_title" className="auth__input-label">
                  Занимаемая должность
                </label>
              </div>
              <div className="auth__input-box">
                <input
                  id={"contacts"}
                  onInput={formChangeHandler}
                  placeholder=" "
                  name={"contacts"}
                  className="auth__input"
                  disabled={true}
                  defaultValue={userData.contacts}
                />
                <label htmlFor="contacts" className="auth__input-label">
                  Контактные данные
                </label>
              </div>
              <div className="auth__input-box">
                <input
                  id={"director"}
                  placeholder=" "
                  name={"director"}
                  className="auth__input"
                  disabled={true}
                  defaultValue={userData.director}
                />
                <label htmlFor="director" className="auth__input-label">
                  ФИО руководителя
                </label>
              </div>
              <div className="auth__input-box">
                <input
                  id={"address"}
                  placeholder=" "
                  name={"address"}
                  className="auth__input"
                  disabled={true}
                  defaultValue={userData.address}
                />
                <label htmlFor="address" className="auth__input-label">
                  Адрес местонахождения
                </label>
              </div>
              <Select
                name={"created_by_team"}
                onSelect={(e) => {
                  formChangeHandler({ ...e });
                }}
                title={"Выбрать команду"}
                items={[
                  ...(myTeam?.map((team) => ({
                    name: team.name,
                    value: team.id,
                    icon: team.image,
                  })) || []),
                ]} // Array of the select's els in format {name: "", value: ""}...
              />
              <File
                name={"files"}
                classNames={["file_margin_bottom"]}
                label={"Выберите документы"}
                onChange={formChangeHandler}
              />
              <div className="auth__input-box auth__input-box_checkbox">
                <input
                  id={"consortium"}
                  type={"checkbox"}
                  onChange={(e) => {
                    formChangeHandler({
                      target: {
                        type: "checkbox",
                        value: e.target.checked,
                        name: "consortium",
                      },
                    });
                  }}
                  placeholder=" "
                  name={"consortium"}
                />
                <label htmlFor="consortium" className="auth__input-label">
                  Консорциум
                </label>
              </div>
              {form?.checkbox?.consortium && (
                <>
                  <div className="single-team__search-box single-team-search">
                    <button
                      onClick={teamsSearchHandler}
                      className="single-team-search__submit"
                    >
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
                      placeholder="Поиск по названию команды"
                      className="single-team-search__input"
                    />
                  </div>
                  <div className="single-team-search__results">
                    {teams.map((team) => (
                      <div key={team.id} className="single-team-search__result">
                        <div
                          onClick={searchResultClick.bind({
                            team_id: team?.id,
                          })}
                          className="single-team-search__checkbox"
                        >
                          <div className="select__checkbox">
                            <span></span>
                          </div>
                        </div>
                        <div className="single-team-search__result-icon">
                          <img src={team?.image} alt="" />
                        </div>
                        <div className="single-team-search__result-info">
                          <div className="single-team-search__result-name">
                            {team?.name}
                          </div>
                          <a
                            href={"mailto:" + team?.email}
                            className="single-team-search__result-email"
                          >
                            {team?.email}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
              <div className="auth__actions">
                <button type="submit" className="auth__submit-button">
                  Подать заявку
                </button>
                {loading && <Loading />}
              </div>
            </div>
            <input type={"hidden"} name="non_field_errors" />
          </form>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default ProjectJoin;
