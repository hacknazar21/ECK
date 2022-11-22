import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Select from "../../common/Select/Select";
import Loading from "../../common/Loading";
import Link from "next/link";
import { motion } from "framer-motion";
import useForm from "../../../hooks/hooks.form";
import { AuthContext } from "../../../context/AuthContext";
import Popup from "../../common/Popup";
import File from "../../common/File";
import useHttp from "../../../hooks/hooks.http";

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
export default function ExecutorUrReg() {
  const router = useRouter();
  const { formChangeHandler, formSubmitHandler, loading, form } =
    useForm(onSuccessReg);
  const [activities, setActivities] = useState([]);
  const [activitiesModal, setActivitiesModal] = useState(false);
  const { request } = useHttp();

  async function onSuccessReg(response) {
    await router.push("/profile/my-profile");
  }

  useEffect(() => {
    (async () => {
      try {
        const data = await request("/api/fields_of_activity/", "GET");
        setActivities(data);
      } catch (e) {}
    })();
  }, []);

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
            <h1 className="auth__title">Данные исполнителя (ЮР. лицо)</h1>
          </div>
          <form
            onSubmit={formSubmitHandler}
            action={"/api/profile"}
            data-method={"PATCH"}
            className="auth__form"
          >
            <div className="auth__inputs">
              <div className="auth__input-box">
                <input
                  id={"company_name"}
                  required={true}
                  onInput={formChangeHandler}
                  placeholder=" "
                  name={"company_name"}
                  className="auth__input"
                />
                <label htmlFor="company_name" className="auth__input-label">
                  Наименование вашей компании
                </label>
              </div>
              <div className="auth__input-box">
                <input
                  id={"iin"}
                  required={true}
                  onInput={formChangeHandler}
                  placeholder=" "
                  name={"iin"}
                  className="auth__input"
                />
                <label htmlFor="iin" className="auth__input-label">
                  БИН
                </label>
              </div>
              <div className="auth__input-box button">
                <input
                  type={"button"}
                  onClick={() => {
                    setActivitiesModal(true);
                  }}
                  id={"fields_of_activity_list"}
                  required={true}
                  onInput={formChangeHandler}
                  placeholder=" "
                  name={"fields_of_activity_list"}
                  className="auth__input"
                />
                <label
                  htmlFor="fields_of_activity_list"
                  className="auth__input-label"
                >
                  {form.fields_of_activity_list?.length > 0
                    ? "Выбрано"
                    : "Сфера деятельности"}
                </label>
              </div>
              <File
                isInput={true}
                name={"certificates"}
                label={"Лицензии/Сертификаты"}
                onChange={formChangeHandler}
              />
              <div className="auth__input-box">
                <input
                  id={"work_experience"}
                  required={true}
                  onInput={formChangeHandler}
                  placeholder=" "
                  name={"work_experience"}
                  className="auth__input"
                />
                <label htmlFor="work_experience" className="auth__input-label">
                  Опыт работы
                </label>
              </div>
              <File
                isInput={true}
                name={"technical_base_files"}
                label={"Наличие мат-тех базы"}
                onChange={formChangeHandler}
              />
              <div className="auth__input-box">
                <input
                  id={"responsible_person"}
                  required={true}
                  onInput={formChangeHandler}
                  placeholder=" "
                  name={"responsible_person"}
                  className="auth__input"
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
                  required={true}
                  onInput={formChangeHandler}
                  placeholder=" "
                  name={"job_title"}
                  className="auth__input"
                />
                <label htmlFor="job_title" className="auth__input-label">
                  Занимаемая должность
                </label>
              </div>
              <div className="auth__input-box">
                <input
                  id={"contacts"}
                  required={true}
                  onInput={formChangeHandler}
                  placeholder=" "
                  name={"contacts"}
                  className="auth__input"
                />
                <label htmlFor="contacts" className="auth__input-label">
                  Контактные данные
                </label>
              </div>
              <div className="auth__input-box">
                <input
                  id={"director"}
                  required={true}
                  onInput={formChangeHandler}
                  placeholder=" "
                  name={"director"}
                  className="auth__input"
                />
                <label htmlFor="director" className="auth__input-label">
                  ФИО руководителя
                </label>
              </div>
              <div className="auth__input-box">
                <input
                  id={"address"}
                  required={true}
                  onInput={formChangeHandler}
                  placeholder=" "
                  name={"address"}
                  className="auth__input"
                />
                <label htmlFor="address" className="auth__input-label">
                  Адрес компании
                </label>
              </div>
              <div className="auth__actions">
                <button type="submit" className="auth__submit-button">
                  Зарегистрироваться
                </button>
                <Link href="/auth/login">
                  <a className="auth__link">Войти</a>
                </Link>
                {loading && <Loading />}
              </div>
            </div>
          </form>
          <div className="auth__info">
            <p>
              Нажимая кнопку «Зарегистрироваться», я соглашаюсь с Публичной
              офертой и правилами сайта, даю согласие на обработку персональных
              данных.
            </p>
          </div>
        </div>
        <Popup active={activitiesModal} setActive={setActivitiesModal}>
          <header className="single-team-content-block__header">
            <h3 className="single-team-content__title profile-title">
              Сферы деятельности
            </h3>
          </header>
          <div className="activities">
            {activities.map((activity, id) => {
              return (
                <Select
                  defaultValue={form?.fields_of_activity_list}
                  saveHead={true}
                  key={id}
                  name={"fields_of_activity_list"}
                  onSelect={formChangeHandler}
                  title={activity.name}
                  multiply={true}
                  items={activity.child_fields.map((child_field) => {
                    return { name: child_field.name, value: child_field.id };
                  })}
                />
              );
            })}
          </div>
        </Popup>
      </motion.div>
    </motion.section>
  );
}
