import React, { useContext, useEffect, useState } from "react";
import Avatar from "../../../src/img/profile/avatar.png";
import Select from "../../common/Select/Select";
import Loading from "../../common/Loading";
import { AuthContext } from "../../../context/AuthContext";
import File from "../../common/File";
import Popup from "../../common/Popup";
import useHttp from "../../../hooks/hooks.http";
import useForm from "../../../hooks/hooks.form";
import ImageFile from "../../common/ImageFile";
import { useRouter } from "next/router";
import FieldsOfActivities from "../../common/FieldsOfActivities";
import ProfileForm from "../../common/ProfileForm";

function MyProfileContent(props) {
  const [isChange, setIsChange] = useState(false);
  const { userData, setUserData } = useContext(AuthContext);
  const { formChangeHandler, formSubmitHandler, form, loading } =
    useForm(onSubmitHandler);

  function onSubmitHandler(data) {
    setUserData(data);
    setIsChange(false);
  }

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
            <ProfileForm
              isChange={isChange}
              formChangeHandler={formChangeHandler}
              userData={userData}
              form={form}
              loading={loading}
              setIsChange={setIsChange}
              isProfile={true}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
export default MyProfileContent;
