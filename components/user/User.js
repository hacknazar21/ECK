import React, { useContext, useEffect, useState } from "react";
import ProfilePageLayout from "../../layouts/ProfilePageLayout";
import ImageFile from "../common/ImageFile";
import { AuthContext } from "../../context/AuthContext";
import { useRouter } from "next/router";
import useHttp from "../../hooks/hooks.http";
import ActivitiesMenu from "../common/ActivitiesMenu";

function User() {
  const { token } = useContext(AuthContext);
  const [user, setUser] = useState({});
  const { request } = useHttp();
  const router = useRouter();
  const USER_TYPE = { EXECUTOR: "Исполнитель", CUSTOMER: "Заказчик" };
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
                      <ImageFile disabled={true} defaultValue={user.avatar} />
                    </div>
                  </div>
                  <div className="auth__inputs">
                    <div className="auth__input-box">
                      <input
                        defaultValue={USER_TYPE[user.user_type]}
                        disabled={true}
                        placeholder=" "
                        className="auth__input"
                      />
                    </div>
                    <div className="auth__input-box">
                      <input
                        defaultValue={user.full_name || user.company_name}
                        disabled={true}
                        placeholder=" "
                        className="auth__input"
                      />
                    </div>
                    <div className="auth__input-box">
                      <textarea
                        defaultValue={user?.fields_of_activity
                          ?.map((field_of_activity) => field_of_activity.name)
                          .join(" ,")}
                        disabled={true}
                        placeholder=" "
                        className="auth__input"
                      />
                    </div>
                    <div className="auth__input-box">
                      <input
                        defaultValue={user.job_title}
                        disabled={true}
                        placeholder=" "
                        className="auth__input"
                      />
                    </div>
                    <div className="auth__input-box">
                      <input
                        defaultValue={user.director}
                        disabled={true}
                        placeholder=" "
                        className="auth__input"
                      />
                    </div>
                    <div className="auth__input-box">
                      <input
                        defaultValue={user.email}
                        disabled={true}
                        placeholder=" "
                        className="auth__input"
                      />
                    </div>
                  </div>
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
