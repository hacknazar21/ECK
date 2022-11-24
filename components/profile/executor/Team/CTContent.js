import React, { useContext } from "react";
import Avatar from "../../../../src/img/profile/avatar.png";
import Select from "../../../common/Select/Select";
import Loading from "../../../common/Loading";
import { useRouter } from "next/router";
import useForm from "../../../../hooks/hooks.form";
import FieldsOfActivities from "../../../common/FieldsOfActivities";
import File from "../../../common/File";
import ImageFile from "../../../common/ImageFile";

function CTContent(props) {
  const { formSubmitHandler, formChangeHandler, form, loading } =
    useForm(createTeamHandler);
  const router = useRouter();
  function createTeamHandler(data) {
    router.back();
  }
  return (
    <div className="my-profile__content my-profile-content">
      <div className="my-profile-content__box auth__box">
        <h1
          onClick={() => {
            router.back();
          }}
          className="my-profile-content__title profile-title"
        >
          <button className="single-team-content-block__back back-arrow">
            <span></span>
            <span></span>
          </button>
          Создание команды
        </h1>
        <form
          onSubmit={formSubmitHandler}
          action="/api/teams/"
          data-method="POST"
          className="my-profile-content__form my-profile-form"
        >
          <div className="auth__inputs">
            <ImageFile
              onChange={formChangeHandler}
              classNames={["auth__input-box image-file"]}
              name={"image"}
              defaultValue={Avatar.src}
            />
            <div className="auth__input-box">
              <input
                type="text"
                id={"name"}
                name={"name"}
                onInput={formChangeHandler}
                required={true}
                placeholder=" "
                className="auth__input"
              />
              <label htmlFor="name" className="auth__input-label">
                Название команды
              </label>
            </div>
            <div className="auth__input-box">
              <input
                type="text"
                id={"description"}
                name={"description"}
                onInput={formChangeHandler}
                required={true}
                placeholder=" "
                className="auth__input"
              />
              <label htmlFor="description" className="auth__input-label">
                Описание
              </label>
            </div>
            <FieldsOfActivities
              form={form}
              formChangeHandler={formChangeHandler}
            />
            <File
              isInput={true}
              name={"certificates"}
              label={"Лицензии/Сертификаты"}
              onChange={formChangeHandler}
            />
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
              <button type={"submit"} className="auth__submit-button">
                Создать команду
              </button>
              {loading && <Loading />}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CTContent;
