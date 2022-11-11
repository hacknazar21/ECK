import React from "react";
import Avatar from "../../../../src/img/profile/avatar.png";
import Select from "../../../common/Select/Select";
import Loading from "../../../common/Loading";
function MyProfileContent(props) {
  const formChangeHandler = (event) => {};

  return (
    <div className="my-profile__content my-profile-content">
      <div className="my-profile-content__box auth__box">
        <h1 className="my-profile-content__title profile-title">Мой профиль</h1>
        <div className="my-profile-content__form my-profile-form">
          <div className="my-profile-form__upload-box">
            <div className="my-profile-form__upload-input-box">
              <input
                type="file"
                id="avatar"
                name={"avatar"}
                className="my-profile-form__upload-input"
              />
              <label htmlFor="avatar" className="my-profile-form__upload-label">
                <div className="my-profile-form__image-preview">
                  <img src={Avatar.src} alt="" />
                </div>
                Нажмите чтобы зарузить фото
              </label>
            </div>
          </div>
          <div className="auth__inputs">
            <div className="auth__input-box">
              <input
                defaultValue={"Фоменко Николай Евгеньевич"}
                type="text"
                id={"full_name"}
                required={true}
                placeholder=" "
                className="auth__input"
              />
              <label htmlFor="full_name" className="auth__input-label">
                ФИО
              </label>
            </div>
            <div className="auth__input-box">
              <input
                type="text"
                id={"BIN"}
                required={true}
                placeholder=" "
                className="auth__input"
              />
              <label htmlFor="BIN" className="auth__input-label">
                БИН
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
                type="text"
                id={"licence"}
                required={true}
                placeholder=" "
                className="auth__input"
              />
              <label htmlFor="licence" className="auth__input-label">
                Сертификат/лицензия
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
                id={"supervisor"}
                required={true}
                onInput={formChangeHandler}
                placeholder=" "
                name={"supervisor"}
                className="auth__input"
              />
              <label htmlFor="supervisor" className="auth__input-label">
                Руководитель
              </label>
            </div>
            <div className="auth__input-box">
              <input
                id={"email"}
                required={true}
                onInput={formChangeHandler}
                placeholder=" "
                name={"email"}
                className="auth__input"
              />
              <label htmlFor="email" className="auth__input-label">
                Эл. почта
              </label>
            </div>
            <div className="auth__actions">
              <button className="auth__submit-button">
                Редактировать профиль
              </button>
              <Loading />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfileContent;
