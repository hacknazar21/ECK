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
import FieldsOfActivities from "../common/FieldsOfActivities";
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
  const { formChangeHandler, formSubmitHandler, loading, form } =
    useForm(submitAfterHandler);

  function submitAfterHandler(data) {
    router.push("/announcements");
  }
  function pickDateHandler(date) {
    this?.set(date);
    formChangeHandler({
      target: {
        type: "text",
        name: this?.name,
        value: `${new Date(date).getFullYear()}-${
          new Date(date).getMonth() + 1 < 10
            ? "0" + new Date(date).getMonth() + 1
            : new Date(date).getMonth() + 1
        }-${new Date(date).getDate()}`,
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
                  <input type="hidden" name={"project_type"} />
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
                <FieldsOfActivities
                  form={form}
                  formChangeHandler={formChangeHandler}
                />
                {form?.select?.project_type === "CONTEST" && (
                  <>
                    <div className="auth__input-box">
                      <DatePicker
                        locale="ru"
                        selected={startDate}
                        autocomplete={"off"}
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
                        autocomplete={"off"}
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
                        autocomplete={"off"}
                        selected={projectEndDate}
                        onChange={pickDateHandler.bind({
                          name: "deadline",
                          set: setProjectEndDate,
                        })}
                        name={"deadline"}
                        placeholderText="Конечный срок работы над проектом"
                      />
                    </div>
                  </>
                )}
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
                  <File name={"documents"} onChange={formChangeHandler} />
                </div>
                <div className="auth__input-box">
                  <input type={"hidden"} name={"detail"} />
                </div>
                <div className="auth__actions">
                  <button className="auth__submit-button">
                    Опубликовать обьявление
                  </button>
                  {loading && <Loading />}
                </div>
              </div>
            </form>
          </div>
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
}
