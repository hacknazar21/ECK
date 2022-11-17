import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Select from "../../common/Select/Select";
import Loading from "../../common/Loading";
import Link from "next/link";
import { motion } from "framer-motion";

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
  const [form, setForm] = useState({
    person: "customer",
    email: "",
    password: "",
    password_check: "",
    face: "",
  });

  function formChangeHandler(event) {
    setForm((prevState) => {
      prevState[event.target.name] = event.target.value;
      return { ...prevState };
    });
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
            <h1 className="auth__title">Данные исполнителя (ЮР. лицо)</h1>
          </div>
          <div className="auth__form">
            <div className="auth__inputs">
              <div className="auth__input-box">
                <input
                  type="text"
                  id={"FIO"}
                  required={true}
                  onInput={formChangeHandler}
                  name={"FIO"}
                  placeholder=" "
                  className="auth__input"
                />
                <label htmlFor="FIO" className="auth__input-label">
                  ФИО
                </label>
              </div>
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
                <input
                  id={"licences"}
                  required={true}
                  onInput={formChangeHandler}
                  placeholder=" "
                  name={"licences"}
                  className="auth__input"
                />
                <label htmlFor="licences" className="auth__input-label">
                  Лицензии/Сертификаты
                </label>
              </div>
              <div className="auth__input-box">
                <input
                  id={"experience"}
                  required={true}
                  onInput={formChangeHandler}
                  placeholder=" "
                  name={"experience"}
                  className="auth__input"
                />
                <label htmlFor="experience" className="auth__input-label">
                  Опыт работы
                </label>
              </div>
              <div className="auth__input-box">
                <input
                  id={"diplomas"}
                  required={true}
                  onInput={formChangeHandler}
                  placeholder=" "
                  name={"diplomas"}
                  className="auth__input"
                />
                <label htmlFor="diplomas" className="auth__input-label">
                  Диплом/Сертификаты
                </label>
              </div>
              <div className="auth__input-box">
                <input
                  id={"math_tech"}
                  required={true}
                  onInput={formChangeHandler}
                  placeholder=" "
                  name={"math_tech"}
                  className="auth__input"
                />
                <label htmlFor="math_tech" className="auth__input-label">
                  Наличие мат-тех базы
                </label>
              </div>
              <div className="auth__input-box">
                <input
                  id={"experience"}
                  required={true}
                  onInput={formChangeHandler}
                  placeholder=" "
                  name={"experience"}
                  className="auth__input"
                />
                <label htmlFor="FIO_responsible" className="auth__input-label">
                  ФИО ответственного лица
                </label>
              </div>
              <div className="auth__input-box">
                <input
                  id={"position"}
                  required={true}
                  onInput={formChangeHandler}
                  placeholder=" "
                  name={"position"}
                  className="auth__input"
                />
                <label htmlFor="position" className="auth__input-label">
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
                  id={"FIO_supervisor"}
                  required={true}
                  onInput={formChangeHandler}
                  placeholder=" "
                  name={"FIO_supervisor"}
                  className="auth__input"
                />
                <label htmlFor="FIO_supervisor" className="auth__input-label">
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
            </div>
          </div>
          <div className="auth__actions">
            <button className="auth__submit-button">Зарегистрироваться</button>
            <Link href="/auth/login">
              <a className="auth__link">Войти</a>
            </Link>
            <Loading />
          </div>
          <div className="auth__info">
            <p>
              Нажимая кнопку «Зарегистрироваться», я соглашаюсь с Публичной
              офертой и правилами сайта, даю согласие на обработку персональных
              данных.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
