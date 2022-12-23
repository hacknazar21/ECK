import React, { useContext, useEffect, useState } from "react";
import ProfilePageLayout from "../../layouts/ProfilePageLayout";
import ImageFile from "../common/ImageFile";
import { AuthContext } from "../../context/AuthContext";
import { useRouter } from "next/router";
import useHttp from "../../hooks/hooks.http";
import ActivitiesMenu from "../common/ActivitiesMenu";
import ProfileForm from "../common/ProfileForm";
import File from "../common/File";
import FieldsOfActivities from "../common/FieldsOfActivities";
import Loading from "../common/Loading";

function User() {
  const { token } = useContext(AuthContext);
  const [userData, setUser] = useState({});
  const { request } = useHttp();
  const router = useRouter();
  useEffect(() => {
    const { link } = router.query;
    (async () => {
      try {
        const data = await request(
          "/api/auth/users/" + link + "/",
          "GET",
          null,
          {
            Authorization: `Bearer ${token}`,
          }
        );
        setUser(data);
      } catch (e) {}
    })();
  }, [token, router]);

  return (
    <section className="page__my-profile team-page">
      <div className="team-page__container">
        <ProfilePageLayout>
          <ActivitiesMenu />
          <div className="my-profile__content my-profile-content">
            <div className="my-profile-content__box auth__box">
              <h1
                onClick={() => {
                  router.back();
                }}
                className="single-team-content__title profile-title"
              >
                <button className="single-team-content-block__back back-arrow">
                  <span></span>
                  <span></span>
                </button>
                Профиль участника
              </h1>
              <div className="auth__form">
                <div className="my-profile-content__form my-profile-form">
                  <div className="my-profile-form__upload-box">
                    <div className="my-profile-form__upload-input-box">
                      <ImageFile
                        disabled={true}
                        defaultValue={userData.avatar}
                      />
                    </div>
                  </div>

                  <ProfileForm
                    isChange={false}
                    formChangeHandler={() => {}}
                    form={{}}
                    loading={false}
                    userData={userData}
                    setIsChange={() => {}}
                  />
                </div>
              </div>
            </div>
          </div>
        </ProfilePageLayout>
      </div>
    </section>
  );
}

export default User;
