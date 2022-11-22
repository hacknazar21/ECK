import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";
import Select from "../../common/Select/Select";
import Loading from "../../common/Loading";
import Link from "next/link";
import { motion } from "framer-motion";
import useHttp from "../../../hooks/hooks.http";
import { Validation } from "../../../helpers/validation";
import { AuthContext } from "../../../context/AuthContext";
import useForm from "../../../hooks/hooks.form";

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
export default function FirstStep() {
  const router = useRouter();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isCode, setIsCode] = useState(false);
  const { login } = useContext(AuthContext);
  const { formChangeHandler, formSubmitHandler, form, loading } = useForm(
    onSuccessRegister,
    {
      radio: {
        user_type: "CUSTOMER",
      },
      select: {
        entity_type: "INDIVIDUAL",
      },
    }
  );
  const [type, setType] = useState("CUSTOMER");

  async function onSuccessRegister(response) {
    if (isCode) {
      return router.push(
        form.radio.user_type === "CUSTOMER"
          ? "/auth/registration/customer-reg"
          : form.select.entity_type === "INDIVIDUAL"
          ? "/auth/registration/executor-reg-fiz"
          : "/auth/registration/executor-reg-ur"
      );
    }
    login(response.access, response.refresh);
    setIsCode(true);
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
            <h1 className="auth__title">Регистрация</h1>
          </div>
          <form
            onSubmit={formSubmitHandler}
            action={
              !isCode
                ? "/api/auth/register/"
                : "/api/auth/email_confirmation/confirm/"
            }
            data-method={"POST"}
            className="auth__form"
          >
            <div className="auth__inputs">
              <div className="auth__input-box">
                <input type="hidden" name={"detail"} />
              </div>
              <div className="auth__input-box">
                <div className="auth__input-checkboxes">
                  <div className="auth__input-checkbox-box">
                    <input
                      type="radio"
                      id="CUSTOMER"
                      onChange={formChangeHandler}
                      defaultValue={"CUSTOMER"}
                      defaultChecked={form.radio.user_type === "CUSTOMER"}
                      name="user_type"
                      className="auth__input-checkbox"
                    />
                    <label
                      onClick={() => {
                        setType("CUSTOMER");
                      }}
                      htmlFor="CUSTOMER"
                      className="auth__label-checkbox"
                    >
                      Заказчик
                    </label>
                  </div>
                  <div className="auth__input-checkbox-box">
                    <input
                      type="radio"
                      id="EXECUTOR"
                      defaultValue={"EXECUTOR"}
                      onChange={formChangeHandler}
                      name="user_type"
                      className="auth__input-checkbox"
                    />
                    <label
                      onClick={() => {
                        setType("EXECUTOR");
                      }}
                      htmlFor="EXECUTOR"
                      className="auth__label-checkbox"
                    >
                      Исполнитель
                    </label>
                  </div>
                </div>
              </div>
              {type !== "CUSTOMER" ? (
                <div className="auth__input-box">
                  <Select
                    name={"entity_type"}
                    onSelect={formChangeHandler}
                    title={"Физ. лицо / Юр. лицо "}
                    items={[
                      { name: "Физ. лицо", value: "INDIVIDUAL" },
                      { name: "Юр. лицо", value: "LEGAL" },
                    ]}
                  />
                </div>
              ) : (
                ""
              )}
              <div className="auth__input-box">
                <input
                  type="email"
                  id={"email"}
                  name={"email"}
                  required={true}
                  onInput={formChangeHandler}
                  placeholder=" "
                  className="auth__input"
                />
                <label htmlFor="email" className="auth__input-label">
                  Эл. почта
                </label>
              </div>
              <div className="auth__input-box">
                <input
                  type={isShowPassword ? "text" : "password"}
                  id={"password"}
                  name={"password"}
                  required={true}
                  onInput={formChangeHandler}
                  placeholder=" "
                  className="auth__input"
                />
                <label htmlFor="password" className="auth__input-label">
                  Пароль
                </label>
                {isShowPassword ? (
                  <span
                    onClick={() => {
                      setIsShowPassword(false);
                    }}
                    className="auth__password-eye"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M14.6134 7.73317C13.2667 4.6065 10.7334 2.6665 8.00004 2.6665C5.26671 2.6665 2.73338 4.6065 1.38671 7.73317C1.35 7.81728 1.33105 7.90807 1.33105 7.99984C1.33105 8.09161 1.35 8.18239 1.38671 8.2665C2.73338 11.3932 5.26671 13.3332 8.00004 13.3332C10.7334 13.3332 13.2667 11.3932 14.6134 8.2665C14.6501 8.18239 14.669 8.09161 14.669 7.99984C14.669 7.90807 14.6501 7.81728 14.6134 7.73317ZM8.00004 11.9998C5.88671 11.9998 3.88671 10.4732 2.73338 7.99984C3.88671 5.5265 5.88671 3.99984 8.00004 3.99984C10.1134 3.99984 12.1134 5.5265 13.2667 7.99984C12.1134 10.4732 10.1134 11.9998 8.00004 11.9998ZM8.00004 5.33317C7.47263 5.33317 6.95706 5.48957 6.51852 5.78259C6.07999 6.0756 5.7382 6.49208 5.53637 6.97935C5.33453 7.46662 5.28172 8.0028 5.38462 8.52008C5.48751 9.03736 5.74149 9.51252 6.11443 9.88546C6.48737 10.2584 6.96252 10.5124 7.4798 10.6153C7.99709 10.7182 8.53326 10.6653 9.02053 10.4635C9.5078 10.2617 9.92428 9.91989 10.2173 9.48136C10.5103 9.04283 10.6667 8.52725 10.6667 7.99984C10.6667 7.29259 10.3858 6.61432 9.88566 6.11422C9.38556 5.61412 8.70729 5.33317 8.00004 5.33317ZM8.00004 9.33317C7.73634 9.33317 7.47855 9.25497 7.25928 9.10846C7.04002 8.96196 6.86912 8.75372 6.7682 8.51008C6.66729 8.26645 6.64088 7.99836 6.69233 7.73972C6.74378 7.48108 6.87077 7.2435 7.05724 7.05703C7.24371 6.87056 7.48128 6.74357 7.73992 6.69212C7.99857 6.64068 8.26665 6.66708 8.51029 6.768C8.75392 6.86891 8.96216 7.03981 9.10867 7.25908C9.25518 7.47834 9.33338 7.73613 9.33338 7.99984C9.33338 8.35346 9.1929 8.6926 8.94285 8.94265C8.6928 9.19269 8.35367 9.33317 8.00004 9.33317Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                ) : (
                  <span
                    onClick={() => {
                      setIsShowPassword(true);
                    }}
                    className="auth__password-eye"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.29329 4.05329C7.52714 4.01745 7.76339 3.99962 7.99996 3.99996C10.12 3.99996 12.1133 5.52663 13.2733 7.99996C13.0959 8.37636 12.8955 8.74149 12.6733 9.09329C12.6027 9.2025 12.5657 9.32995 12.5666 9.45996C12.5681 9.60545 12.6172 9.74646 12.7063 9.86148C12.7954 9.97649 12.9197 10.0592 13.0602 10.097C13.2007 10.1347 13.3497 10.1255 13.4845 10.0707C13.6193 10.0158 13.7324 9.91843 13.8066 9.79329C14.1172 9.30525 14.3871 8.7924 14.6133 8.25996C14.6491 8.17678 14.6675 8.08718 14.6675 7.99663C14.6675 7.90608 14.6491 7.81648 14.6133 7.73329C13.2666 4.60663 10.7333 2.66663 7.99996 2.66663C7.68707 2.66505 7.37468 2.69183 7.06663 2.74663C6.97908 2.76151 6.89532 2.79349 6.82013 2.84075C6.74494 2.888 6.6798 2.9496 6.62842 3.02203C6.57704 3.09446 6.54042 3.1763 6.52067 3.26288C6.50092 3.34946 6.49841 3.43908 6.51329 3.52663C6.52818 3.61418 6.56016 3.69793 6.60741 3.77312C6.65467 3.84831 6.71627 3.91346 6.7887 3.96484C6.86112 4.01622 6.94297 4.05283 7.02954 4.07258C7.11612 4.09234 7.20575 4.09484 7.29329 4.07996V4.05329ZM2.47329 1.52663C2.41114 1.46447 2.33734 1.41516 2.25613 1.38152C2.17491 1.34788 2.08787 1.33057 1.99996 1.33057C1.91205 1.33057 1.82501 1.34788 1.74379 1.38152C1.66258 1.41516 1.58879 1.46447 1.52663 1.52663C1.40109 1.65216 1.33057 1.82243 1.33057 1.99996C1.33057 2.1775 1.40109 2.34776 1.52663 2.47329L3.59329 4.53329C2.65034 5.44098 1.89987 6.52929 1.38663 7.73329C1.34992 7.8174 1.33097 7.90819 1.33097 7.99996C1.33097 8.09173 1.34992 8.18252 1.38663 8.26663C2.73329 11.3933 5.26663 13.3333 7.99996 13.3333C9.19803 13.325 10.3678 12.9683 11.3666 12.3066L13.5266 14.4733C13.5886 14.5358 13.6623 14.5854 13.7436 14.6192C13.8248 14.6531 13.912 14.6705 14 14.6705C14.088 14.6705 14.1751 14.6531 14.2563 14.6192C14.3376 14.5854 14.4113 14.5358 14.4733 14.4733C14.5358 14.4113 14.5854 14.3376 14.6192 14.2563C14.6531 14.1751 14.6705 14.088 14.6705 14C14.6705 13.912 14.6531 13.8248 14.6192 13.7436C14.5854 13.6623 14.5358 13.5886 14.4733 13.5266L2.47329 1.52663ZM6.71329 7.65329L8.34663 9.28663C8.23395 9.31894 8.11717 9.33466 7.99996 9.33329C7.64634 9.33329 7.3072 9.19282 7.05715 8.94277C6.8071 8.69272 6.66663 8.35358 6.66663 7.99996C6.66526 7.88275 6.68098 7.76597 6.71329 7.65329ZM7.99996 12C5.87996 12 3.88663 10.4733 2.73329 7.99996C3.16402 7.04913 3.77534 6.19101 4.53329 5.47329L5.71329 6.66663C5.43613 7.17249 5.33045 7.75459 5.41213 8.3256C5.49381 8.89661 5.75844 9.42574 6.16631 9.83361C6.57419 10.2415 7.10331 10.5061 7.67432 10.5878C8.24533 10.6695 8.82743 10.5638 9.33329 10.2866L10.3933 11.3333C9.66736 11.7605 8.84224 11.9904 7.99996 12Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                )}
              </div>
              <div className="auth__input-box">
                <input
                  type={isShowPassword ? "text" : "password"}
                  id={"password_check"}
                  name={"password_check"}
                  required={true}
                  placeholder=" "
                  onInput={formChangeHandler}
                  className="auth__input"
                />
                <label htmlFor="password_check" className="auth__input-label">
                  Повторите пароль
                </label>
                {isShowPassword ? (
                  <span
                    onClick={() => {
                      setIsShowPassword(false);
                    }}
                    className="auth__password-eye"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M14.6134 7.73317C13.2667 4.6065 10.7334 2.6665 8.00004 2.6665C5.26671 2.6665 2.73338 4.6065 1.38671 7.73317C1.35 7.81728 1.33105 7.90807 1.33105 7.99984C1.33105 8.09161 1.35 8.18239 1.38671 8.2665C2.73338 11.3932 5.26671 13.3332 8.00004 13.3332C10.7334 13.3332 13.2667 11.3932 14.6134 8.2665C14.6501 8.18239 14.669 8.09161 14.669 7.99984C14.669 7.90807 14.6501 7.81728 14.6134 7.73317ZM8.00004 11.9998C5.88671 11.9998 3.88671 10.4732 2.73338 7.99984C3.88671 5.5265 5.88671 3.99984 8.00004 3.99984C10.1134 3.99984 12.1134 5.5265 13.2667 7.99984C12.1134 10.4732 10.1134 11.9998 8.00004 11.9998ZM8.00004 5.33317C7.47263 5.33317 6.95706 5.48957 6.51852 5.78259C6.07999 6.0756 5.7382 6.49208 5.53637 6.97935C5.33453 7.46662 5.28172 8.0028 5.38462 8.52008C5.48751 9.03736 5.74149 9.51252 6.11443 9.88546C6.48737 10.2584 6.96252 10.5124 7.4798 10.6153C7.99709 10.7182 8.53326 10.6653 9.02053 10.4635C9.5078 10.2617 9.92428 9.91989 10.2173 9.48136C10.5103 9.04283 10.6667 8.52725 10.6667 7.99984C10.6667 7.29259 10.3858 6.61432 9.88566 6.11422C9.38556 5.61412 8.70729 5.33317 8.00004 5.33317ZM8.00004 9.33317C7.73634 9.33317 7.47855 9.25497 7.25928 9.10846C7.04002 8.96196 6.86912 8.75372 6.7682 8.51008C6.66729 8.26645 6.64088 7.99836 6.69233 7.73972C6.74378 7.48108 6.87077 7.2435 7.05724 7.05703C7.24371 6.87056 7.48128 6.74357 7.73992 6.69212C7.99857 6.64068 8.26665 6.66708 8.51029 6.768C8.75392 6.86891 8.96216 7.03981 9.10867 7.25908C9.25518 7.47834 9.33338 7.73613 9.33338 7.99984C9.33338 8.35346 9.1929 8.6926 8.94285 8.94265C8.6928 9.19269 8.35367 9.33317 8.00004 9.33317Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                ) : (
                  <span
                    onClick={() => {
                      setIsShowPassword(true);
                    }}
                    className="auth__password-eye"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.29329 4.05329C7.52714 4.01745 7.76339 3.99962 7.99996 3.99996C10.12 3.99996 12.1133 5.52663 13.2733 7.99996C13.0959 8.37636 12.8955 8.74149 12.6733 9.09329C12.6027 9.2025 12.5657 9.32995 12.5666 9.45996C12.5681 9.60545 12.6172 9.74646 12.7063 9.86148C12.7954 9.97649 12.9197 10.0592 13.0602 10.097C13.2007 10.1347 13.3497 10.1255 13.4845 10.0707C13.6193 10.0158 13.7324 9.91843 13.8066 9.79329C14.1172 9.30525 14.3871 8.7924 14.6133 8.25996C14.6491 8.17678 14.6675 8.08718 14.6675 7.99663C14.6675 7.90608 14.6491 7.81648 14.6133 7.73329C13.2666 4.60663 10.7333 2.66663 7.99996 2.66663C7.68707 2.66505 7.37468 2.69183 7.06663 2.74663C6.97908 2.76151 6.89532 2.79349 6.82013 2.84075C6.74494 2.888 6.6798 2.9496 6.62842 3.02203C6.57704 3.09446 6.54042 3.1763 6.52067 3.26288C6.50092 3.34946 6.49841 3.43908 6.51329 3.52663C6.52818 3.61418 6.56016 3.69793 6.60741 3.77312C6.65467 3.84831 6.71627 3.91346 6.7887 3.96484C6.86112 4.01622 6.94297 4.05283 7.02954 4.07258C7.11612 4.09234 7.20575 4.09484 7.29329 4.07996V4.05329ZM2.47329 1.52663C2.41114 1.46447 2.33734 1.41516 2.25613 1.38152C2.17491 1.34788 2.08787 1.33057 1.99996 1.33057C1.91205 1.33057 1.82501 1.34788 1.74379 1.38152C1.66258 1.41516 1.58879 1.46447 1.52663 1.52663C1.40109 1.65216 1.33057 1.82243 1.33057 1.99996C1.33057 2.1775 1.40109 2.34776 1.52663 2.47329L3.59329 4.53329C2.65034 5.44098 1.89987 6.52929 1.38663 7.73329C1.34992 7.8174 1.33097 7.90819 1.33097 7.99996C1.33097 8.09173 1.34992 8.18252 1.38663 8.26663C2.73329 11.3933 5.26663 13.3333 7.99996 13.3333C9.19803 13.325 10.3678 12.9683 11.3666 12.3066L13.5266 14.4733C13.5886 14.5358 13.6623 14.5854 13.7436 14.6192C13.8248 14.6531 13.912 14.6705 14 14.6705C14.088 14.6705 14.1751 14.6531 14.2563 14.6192C14.3376 14.5854 14.4113 14.5358 14.4733 14.4733C14.5358 14.4113 14.5854 14.3376 14.6192 14.2563C14.6531 14.1751 14.6705 14.088 14.6705 14C14.6705 13.912 14.6531 13.8248 14.6192 13.7436C14.5854 13.6623 14.5358 13.5886 14.4733 13.5266L2.47329 1.52663ZM6.71329 7.65329L8.34663 9.28663C8.23395 9.31894 8.11717 9.33466 7.99996 9.33329C7.64634 9.33329 7.3072 9.19282 7.05715 8.94277C6.8071 8.69272 6.66663 8.35358 6.66663 7.99996C6.66526 7.88275 6.68098 7.76597 6.71329 7.65329ZM7.99996 12C5.87996 12 3.88663 10.4733 2.73329 7.99996C3.16402 7.04913 3.77534 6.19101 4.53329 5.47329L5.71329 6.66663C5.43613 7.17249 5.33045 7.75459 5.41213 8.3256C5.49381 8.89661 5.75844 9.42574 6.16631 9.83361C6.57419 10.2415 7.10331 10.5061 7.67432 10.5878C8.24533 10.6695 8.82743 10.5638 9.33329 10.2866L10.3933 11.3333C9.66736 11.7605 8.84224 11.9904 7.99996 12Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                )}
              </div>
              {isCode && (
                <div className="auth__input-box">
                  <input
                    type={"text"}
                    id={"code"}
                    name={"code"}
                    required={true}
                    placeholder=" "
                    onInput={formChangeHandler}
                    className="auth__input"
                  />
                  <label htmlFor="code" className="auth__input-label">
                    Введите код верификации
                  </label>
                </div>
              )}
              <div className="auth__actions">
                {isCode && (
                  <button className="auth__submit-button">Далее</button>
                )}
                {!isCode && (
                  <button className="auth__submit-button">
                    Отправить код подтверждения
                  </button>
                )}
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
      </motion.div>
    </motion.section>
  );
}
