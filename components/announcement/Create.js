import { useRouter } from "next/router";
import Loading from "../common/Loading";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Select from "../common/Select/Select";
import DatePicker, { registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";
registerLocale("ru", ru);
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import File from "../common/File";
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
  const formChangeHandler = (e) => {};
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [projectEndDate, setProjectEndDate] = useState(null);
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
            <div className="auth__form">
              <div className="auth__inputs">
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
                    onSelect={formChangeHandler} // Callback on select...
                    name={"type"} // The name of the select...
                    selectClass={""} // Set custom class name for select...
                    items={[{ name: "Программирование", value: "programming" }]} // Array of the select's els in format {name: "", value: ""}...
                  />
                </div>
                <div className="auth__input-box">
                  <input
                    type="text"
                    id={"title"}
                    placeholder={" "}
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
                    placeholder={" "}
                    required={true}
                    className="auth__input"
                  />
                  <label htmlFor="description" className="auth__input-label">
                    Описание заказа
                  </label>
                </div>
                <div className="auth__input-box">
                  <Select
                    name={"field_of_activity"}
                    onSelect={formChangeHandler}
                    title={"Сфера деятельности"}
                    multiply={true}
                    items={[
                      { name: "Рисование", value: "draw" },
                      { name: "Программирование", value: "programming" },
                    ]}
                  />
                </div>
                <div className="auth__input-box">
                  <DatePicker
                    locale="ru"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    placeholderText="Начало приема заявок"
                  />
                </div>
                <div className="auth__input-box">
                  <DatePicker
                    locale="ru"
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    placeholderText="Конечный срок приема заявок"
                  />
                </div>
                <div className="auth__input-box">
                  <DatePicker
                    locale="ru"
                    selected={projectEndDate}
                    onChange={(date) => setProjectEndDate(date)}
                    placeholderText="Конечный срок работы над проектом"
                  />
                </div>
                <div className="auth__input-box">
                  <textarea
                    id={"requirements"}
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
                  <File />
                </div>
              </div>
            </div>
            <div className="auth__actions">
              <button className="auth__submit-button">
                Опубликовать обьявление
              </button>
              <Loading />
            </div>
          </div>
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
}
