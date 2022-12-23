import React from "react";
import File from "./File";
import FieldsOfActivities from "./FieldsOfActivities";
import Loading from "./Loading";

function ProfileForm({
  isChange,
  userData,
  formChangeHandler,
  form,
  loading,
  setIsChange,
  isProfile = false,
}) {
  const USER_TYPE = { EXECUTOR: "Исполнитель", CUSTOMER: "Заказчик" };

  return (
    <div className="auth__inputs">
      <div className="auth__input-box">
        <input disabled={true} placeholder=" " className="auth__input" />
        <label>{USER_TYPE[userData.user_type]}</label>
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
          {userData?.user_type === "CUSTOMER" ||
          userData?.entity_type === "LEGAL"
            ? "БИН"
            : "ИИН"}
        </label>
      </div>
      {userData?.user_type === "EXECUTOR" &&
        userData?.entity_type === "INDIVIDUAL" && (
          <>
            <div className="auth__input-box">
              <input
                defaultValue={userData?.full_name}
                type="text"
                name={"full_name"}
                id={"full_name"}
                onChange={formChangeHandler}
                disabled={!isChange}
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
                defaultValue={userData?.education}
                type="text"
                name={"education"}
                id={"education"}
                onChange={formChangeHandler}
                disabled={!isChange}
                required={true}
                placeholder=" "
                className="auth__input"
              />
              <label htmlFor="education" className="auth__input-label">
                Образование
              </label>
            </div>
            <div className="auth__input-box">
              <input
                defaultValue={userData?.educated_at}
                type="text"
                name={"educated_at"}
                id={"educated_at"}
                onChange={formChangeHandler}
                disabled={!isChange}
                required={true}
                placeholder=" "
                className="auth__input"
              />
              <label htmlFor="educated_at" className="auth__input-label">
                Учебное заведение
              </label>
            </div>
            <div className="auth__input-box">
              <input
                defaultValue={userData?.specialty}
                type="text"
                name={"specialty"}
                id={"specialty"}
                onChange={formChangeHandler}
                disabled={!isChange}
                required={true}
                placeholder=" "
                className="auth__input"
              />
              <label htmlFor="specialty" className="auth__input-label">
                Специальность
              </label>
            </div>
            <div className="auth__input-box">
              <input
                defaultValue={userData?.working_at}
                type="text"
                name={"working_at"}
                id={"working_at"}
                onChange={formChangeHandler}
                disabled={!isChange}
                required={true}
                placeholder=" "
                className="auth__input"
              />
              <label htmlFor="working_at" className="auth__input-label">
                Место работы
              </label>
            </div>
          </>
        )}
      {userData?.user_type === "EXECUTOR" && userData?.entity_type === "LEGAL" && (
        <div className="auth__input-box file">
          <File
            required={false}
            isInput={true}
            name={"technical_base_files"}
            label={"Наличие мат-тех базы"}
            onChange={formChangeHandler}
            defaultValues={userData?.technical_base_files}
            disabled={!isChange}
          />
        </div>
      )}
      <FieldsOfActivities
        disabled={!isChange}
        form={form}
        formChangeHandler={formChangeHandler}
        defaultValues={userData?.fields_of_activity}
      />
      <div className="auth__input-box file">
        <File
          required={false}
          isInput={true}
          name={"certificates"}
          label={
            userData?.user_type === "CUSTOMER" ||
            userData?.entity_type === "LEGAL"
              ? "Лицензии/Сертификаты"
              : "Дипломы/Сертификаты"
          }
          onChange={formChangeHandler}
          defaultValues={userData?.certificates}
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

      {userData?.user_type === "CUSTOMER" ||
      userData?.entity_type === "LEGAL" ? (
        <>
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
            <label htmlFor="director" className="auth__input-label">
              Руководитель
            </label>
          </div>
          <div className="auth__input-box">
            <input
              id={"responsible_person"}
              defaultValue={userData?.responsible_person}
              required={true}
              disabled={!isChange}
              onInput={formChangeHandler}
              onChange={formChangeHandler}
              placeholder=" "
              name={"responsible_person"}
              className="auth__input"
            />
            <label htmlFor="responsible_person" className="auth__input-label">
              ФИО ответственного лица
            </label>
          </div>
        </>
      ) : (
        <></>
      )}
      <div className="auth__input-box">
        <input
          id={"contacts"}
          defaultValue={userData?.contacts}
          onChange={formChangeHandler}
          required={true}
          disabled={!isChange}
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
          id={"address"}
          defaultValue={userData?.address}
          required={true}
          disabled={!isChange}
          onInput={formChangeHandler}
          onChange={formChangeHandler}
          placeholder=" "
          name={"address"}
          className="auth__input"
        />
        <label htmlFor="address" className="auth__input-label">
          Адрес
          {userData?.user_type === "CUSTOMER" ||
          userData?.entity_type === "LEGAL"
            ? " компании"
            : ""}
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
      {isProfile && (
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
      )}
    </div>
  );
}

export default ProfileForm;
