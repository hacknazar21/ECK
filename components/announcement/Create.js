import { useRouter } from "next/router";
import Loading from "../common/Loading";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Select from "../common/Select/Select";
import DatePicker, { registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";
registerLocale("ru", ru);
import "react-datepicker/dist/react-datepicker.css";
import { useContext, useEffect, useState } from "react";
import File from "../common/File";
import useForm from "../../hooks/hooks.form";
import Popup from "../common/Popup";
import { AuthContext } from "../../context/AuthContext";
import useHttp from "../../hooks/hooks.http";
const animationAuth = {
  in: {
    x: -200,
    opacity: 0,
  },
  inactive: {
    x: 0,
    opacity: 1,
  },
  out: {
    opacity: 0,
    x: 200,
  },
};
export default function Create() {
  const router = useRouter();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [projectEndDate, setProjectEndDate] = useState(null);
  const [activitiesModal, setActivitiesModal] = useState(false);
  const [activities, setActivities] = useState([]);
  const { formChangeHandler, formSubmitHandler, loading, form } = useForm();
  const { userData } = useContext(AuthContext);
  const { request } = useHttp();

  useEffect(() => {
    (async () => {
      try {
        const data = await request("/api/fields_of_activity/", "GET");

        setActivities(data);
      } catch (e) {}
    })();
  }, []);
  useEffect(() => {
    console.log(form);
  }, [JSON.stringify(form)]);
  function pickDateHandler(date) {
    this?.set(date);
    formChangeHandler({
      target: {
        type: "text",
        name: this?.name,
        value: date.toISOString().slice(0, 10),
      },
    });
  }
  return (
    <AnimatePresence>
      <motion.section
        className="auth"
        key={router.asPath}
        initial={"in"}
        animate={"inactive"}
        exit={"out"}
      >
        <motion.div variants={animationAuth} className="auth__container">
          <div className="auth__box">
            <div className="auth__header">
              <h1
                onClick={() => {
                  router.back();
                }}
                className="single-team-page-block__title profile-title"
              >
                <button className="single-team-page-block__back back-arrow">
                  <span></span>
                  <span></span>
                </button>
                Создание объявления
              </h1>
            </div>
            <form
              action={"/api/projects/"}
              method={"POST"}
              data-method={"POST"}
              onSubmit={formSubmitHandler}
              className="auth__form"
            >
              <div className="auth__inputs">
                <div className="auth__input-box">
                  <input type={"hidden"} name={"detail"} />
                </div>
                <div className="auth__input-box">
                  <input
                    type="text"
                    id={"id"}
                    defaultValue={"Номер обьявления - №134 560 233"}
                    className="auth__input"
                    disabled={true}
                  />
                  <label htmlFor="email" className="auth__input-label">
                    Эл. почта
                  </label>
                </div>
                <div className="auth__input-box">
                  <Select
                    title={"Тип обьявления"}
                    onSelect={formChangeHandler}
                    name={"project_type"}
                    selectClass={""}
                    items={[
                      { name: "Конкурс", value: "CONTEST" },
                      { name: "Выбор исполнителя", value: "CHOICE" },
                    ]}
                  />
                </div>
                <div className="auth__input-box">
                  <input
                    type="text"
                    id={"title"}
                    name={"title"}
                    placeholder={" "}
                    onInput={formChangeHandler}
                    required={true}
                    className="auth__input"
                  />
                  <label htmlFor="title" className="auth__input-label">
                    Заголовок заказа
                  </label>
                </div>
                <div className="auth__input-box">
                  <textarea
                    id={"description"}
                    name={"description"}
                    onInput={formChangeHandler}
                    placeholder={" "}
                    required={true}
                    className="auth__input"
                  />
                  <label htmlFor="description" className="auth__input-label">
                    Описание заказа
                  </label>
                </div>
                <div className="auth__input-box button">
                  <input
                    type={"button"}
                    onClick={() => {
                      setActivitiesModal(true);
                    }}
                    id={"fields_of_activity_list"}
                    onInput={formChangeHandler}
                    placeholder=" "
                    name={"fields_of_activity_list"}
                    className="auth__input"
                  />
                  <label
                    htmlFor="fields_of_activity_list"
                    className="auth__input-label"
                  >
                    {!form.fields_of_activity_list ||
                    form.fields_of_activity_list?.length === 0
                      ? "Сфера деятельности"
                      : "Выбрано"}
                  </label>
                </div>
                <div className="auth__input-box">
                  <DatePicker
                    locale="ru"
                    selected={startDate}
                    name={"application_start_date"}
                    onChange={pickDateHandler.bind({
                      name: "application_start_date",
                      set: setStartDate,
                    })}
                    placeholderText="Начало приема заявок"
                  />
                </div>
                <div className="auth__input-box">
                  <DatePicker
                    locale="ru"
                    selected={endDate}
                    onChange={pickDateHandler.bind({
                      name: "application_end_date",
                      set: setEndDate,
                    })}
                    name={"application_end_date"}
                    placeholderText="Конечный срок приема заявок"
                  />
                </div>
                <div className="auth__input-box">
                  <DatePicker
                    locale="ru"
                    selected={projectEndDate}
                    onChange={pickDateHandler.bind({
                      name: "deadline",
                      set: setProjectEndDate,
                    })}
                    name={"deadline"}
                    placeholderText="Конечный срок работы над проектом"
                  />
                </div>
                <div className="auth__input-box">
                  <textarea
                    id={"requirements"}
                    name={"requirements"}
                    onInput={formChangeHandler}
                    placeholder={" "}
                    required={true}
                    className="auth__input"
                  />
                  <label htmlFor="requirements" className="auth__input-label">
                    Требования к заказчику
                  </label>
                </div>
                <div className="auth__input-box">
                  <label className="auth__input-label">
                    Прикрепить документы
                  </label>
                  <File name={"documents"} onChange={formChangeHandler} />
                </div>
                <div className="auth__actions">
                  <button className="auth__submit-button">
                    Опубликовать обьявление
                  </button>
                  {loading && <Loading />}
                </div>
              </div>
            </form>
            <Popup active={activitiesModal} setActive={setActivitiesModal}>
              <header className="single-team-content-block__header">
                <h3 className="single-team-content__title profile-title">
                  Сферы деятельности
                </h3>
              </header>
              <div className="activities">
                {activities.map((activity) => {
                  return (
                    <Select
                      defaultValue={
                        form["select-checkboxes"]?.fields_of_activity_list
                      }
                      saveHead={true}
                      name={"fields_of_activity_list"}
                      onSelect={formChangeHandler}
                      title={activity.name}
                      multiply={true}
                      items={activity.child_fields.map((child_field) => {
                        return {
                          name: child_field.name,
                          value: child_field.id,
                        };
                      })}
                    />
                  );
                })}
              </div>
            </Popup>
          </div>
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
}
