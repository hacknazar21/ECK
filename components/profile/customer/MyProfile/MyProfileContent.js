import React, { useContext, useEffect, useState } from "react";
import Avatar from "../../../../src/img/profile/avatar.png";
import Select from "../../../common/Select/Select";
import Loading from "../../../common/Loading";
import { AuthContext } from "../../../../context/AuthContext";
import File from "../../../common/File";
import Popup from "../../../common/Popup";
import useHttp from "../../../../hooks/hooks.http";
import useForm from "../../../../hooks/hooks.form";
import ImageFile from "../../../common/ImageFile";
import { useRouter } from "next/router";

function MyProfileContent(props) {
  const [isChange, setIsChange] = useState(false);
  const { userData, setUserData } = useContext(AuthContext);
  const [activitiesModal, setActivitiesModal] = useState(false);
  const [activities, setActivities] = useState([]);
  const { request } = useHttp();
  const { formChangeHandler, formSubmitHandler, form, loading } =
    useForm(onSubmitHandler);
  const router = useRouter();
  function onSubmitHandler(data) {
    // setIsChange(false);
    // setUserData((prevState) => ({ ...prevState, ...data }));
    router.reload();
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
    <div className="my-profile__content my-profile-content">
      <div className="my-profile-content__box auth__box">
        <h1 className="my-profile-content__title profile-title">Мой профиль</h1>
        <form
          onSubmit={formSubmitHandler}
          action={"/api/profile/"}
          data-method={"PATCH"}
          className="auth__form"
        >
          <div className="my-profile-content__form my-profile-form">
            <div className="my-profile-form__upload-box">
              <div className="my-profile-form__upload-input-box">
                <ImageFile
                  disabled={!isChange}
                  defaultValue={userData?.avatar}
                  onChange={formChangeHandler}
                />
              </div>
            </div>
            <div className="auth__inputs">
              <div className="auth__input-box">
                <input
                  defaultValue={userData?.company_name}
                  type="text"
                  name={"company_name"}
                  id={"company_name"}
                  onChange={formChangeHandler}
                  disabled={!isChange}
                  required={true}
                  placeholder=" "
                  className="auth__input"
                />
                <label htmlFor="company_name" className="auth__input-label">
                  Наименование вашей компании
                </label>
              </div>
              <div className="auth__input-box">
                <input
                  type="text"
                  defaultValue={userData?.iin}
                  id={"iin"}
                  name={"iin"}
                  disabled={true}
                  placeholder=" "
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
                  onInput={formChangeHandler}
                  placeholder=" "
                  disabled={!isChange}
                  name={"fields_of_activity_list"}
                  className="auth__input"
                />
                <label
                  htmlFor="fields_of_activity_list"
                  className="auth__input-label"
                >
                  {!form.fields_of_activity_list ||
                  form.fields_of_activity_list?.length === 0
                    ? !isChange
                      ? userData?.fields_of_activity
                          .map((field_of_activity) => field_of_activity.name)
                          .join("; ")
                      : "Сфера деятельности"
                    : "Выбрано"}
                </label>
              </div>
              <div className="auth__input-box file">
                <File
                  required={false}
                  isInput={true}
                  name={"certificates"}
                  label={"Лицензии/Сертификаты"}
                  onChange={formChangeHandler}
                  append={
                    <div className="files">
                      <h3 className="files__title">Загруженные документы</h3>
                      {userData?.certificates.map((file, id) => {
                        return (
                          <>
                            <a
                              href={file.file}
                              key={file.id}
                              className="file__item"
                            >
                              {id + 1}. {file.uploaded_name}
                            </a>
                          </>
                        );
                      })}
                    </div>
                  }
                  disabled={!isChange}
                />
              </div>
              <div className="auth__input-box">
                <input
                  id={"job_title"}
                  defaultValue={userData?.job_title}
                  onChange={formChangeHandler}
                  required={true}
                  disabled={!isChange}
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
                  id={"director"}
                  defaultValue={userData?.director}
                  required={true}
                  disabled={!isChange}
                  onInput={formChangeHandler}
                  onChange={formChangeHandler}
                  placeholder=" "
                  name={"director"}
                  className="auth__input"
                />
                <label htmlFor="supervisor" className="auth__input-label">
                  Руководитель
                </label>
              </div>
              <div className="auth__input-box">
                <input
                  type={"email"}
                  id={"email"}
                  defaultValue={userData?.email}
                  required={true}
                  disabled={!isChange}
                  onInput={formChangeHandler}
                  placeholder=" "
                  onChange={formChangeHandler}
                  name={"email"}
                  className="auth__input"
                />
                <label htmlFor="email" className="auth__input-label">
                  Эл. почта
                </label>
              </div>
              <div className="auth__actions">
                {!isChange && (
                  <div
                    onClick={() => {
                      setIsChange(true);
                    }}
                    className="auth__submit-button"
                  >
                    Редактировать профиль
                  </div>
                )}
                {isChange && (
                  <button type={"submit"} className="auth__submit-button">
                    Сохранить
                  </button>
                )}
                {loading && <Loading />}
              </div>
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
            {activities.map((activity, id) => {
              return (
                <Select
                  key={id}
                  defaultValue={userData?.fields_of_activity.map(
                    (field_of_activity) => field_of_activity.id
                  )}
                  saveHead={true}
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
      </div>
    </div>
  );
}
export default MyProfileContent;
