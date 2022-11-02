import { useRouter } from "next/router";
import { useState, useTransition } from "react";
import Loading from "../common/Loading";
import { motion, AnimatePresence } from "framer-motion";
import Message from "../common/Message";
import SuccessIcon from "../../src/img/message/success.svg";
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
export default function Support() {
  const router = useRouter();
  const [isSubmit, setIsSubmit] = useState(false);

  function submitSupportHandler(event) {
    setIsSubmit(true);
  }

  return (
    <>
      {!isSubmit ? (
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
                  <button
                    onClick={() => {
                      router.back();
                    }}
                    className="auth__back"
                  >
                    Вернуться назад
                  </button>
                  <h1 className="auth__title">Техподдержка</h1>
                </div>
                <div className="auth__form">
                  <div className="auth__inputs">
                    <div className="auth__input-box">
                      <input
                        type="text"
                        id={"email"}
                        required={true}
                        placeholder=" "
                        className="auth__input"
                      />
                      <label htmlFor="email" className="auth__input-label">
                        ФИО
                      </label>
                    </div>
                    <div className="auth__input-box">
                      <input
                        type="text"
                        id={"email"}
                        required={true}
                        placeholder=" "
                        className="auth__input"
                      />
                      <label htmlFor="email" className="auth__input-label">
                        Эл. почта
                      </label>
                    </div>
                    <div className="auth__input-box">
                      <textarea
                        id={"password"}
                        required={true}
                        placeholder=" "
                        className="auth__input"
                      />
                      <label htmlFor="password" className="auth__input-label">
                        Комментарий
                      </label>
                    </div>
                  </div>
                </div>
                <div className="auth__actions">
                  <button
                    onClick={submitSupportHandler}
                    className="auth__submit-button"
                  >
                    Отправить
                  </button>
                  <Loading />
                </div>
                <div className="auth__info">
                  <p>
                    Нажимая кнопку «Отправить», я соглашаюсь с Публичной офертой
                    и правилами сайта, даю согласие на обработку персональных
                    данных.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.section>
        </AnimatePresence>
      ) : (
        <motion.section
          className="auth"
          key={router.asPath}
          initial={"in"}
          animate={"inactive"}
          exit={"out"}
        >
          <motion.div variants={animationAuth} className="auth__container">
            <div className="auth__box auth__box_message">
              <Message
                message={
                  "Спасибо за ваше обращение, мы ответим в течении 24 часов"
                }
                icon={SuccessIcon.src}
              />
            </div>
          </motion.div>
        </motion.section>
      )}
    </>
  );
}
