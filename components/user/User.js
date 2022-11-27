import React, { useContext, useEffect, useState } from "react";
import ProfilePageLayout from "../../layouts/ProfilePageLayout";
import Aside from "../common/Aside/Aside";
import Img1 from "../../src/img/aside/01.png";
import Img2 from "../../src/img/aside/02.png";
import Img3 from "../../src/img/aside/03.png";
import Img4 from "../../src/img/aside/04.png";
import Img5 from "../../src/img/aside/05.png";
import Img6 from "../../src/img/aside/06.png";
import Img7 from "../../src/img/aside/07.png";
import Img8 from "../../src/img/aside/08.png";
import Img9 from "../../src/img/aside/09.png";
import Img10 from "../../src/img/aside/10.png";
import Loading from "../common/Loading";
import ImageFile from "../common/ImageFile";
import FieldsOfActivities from "../common/FieldsOfActivities";
import File from "../common/File";
import { AuthContext } from "../../context/AuthContext";
import { useRouter } from "next/router";
import useHttp from "../../hooks/hooks.http";

function User() {
  const { token } = useContext(AuthContext);
  const [user, setUser] = useState({});
  const { request } = useHttp();
  const router = useRouter();
  useEffect(() => {
    console.log(router.query);
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
  }, [token]);

  return (
    <section className="page__my-profile team-page">
      <div className="team-page__container">
        <ProfilePageLayout>
          <Aside modificationMenu={"aside-menu__list_columns"}>
            <li className={"aside-menu__item active"}>
              <button className="aside-menu__link">
                <img src={Img1.src} alt="" />
              </button>
            </li>
            <li className={"aside-menu__item"}>
              <button className="aside-menu__link">
                <img src={Img2.src} alt="" />
              </button>
            </li>
            <li className={"aside-menu__item"}>
              <button className="aside-menu__link">
                <img src={Img3.src} alt="" />
              </button>
            </li>
            <li className={"aside-menu__item"}>
              <button className="aside-menu__link">
                <img src={Img4.src} alt="" />
              </button>
            </li>
            <li className={"aside-menu__item"}>
              <button className="aside-menu__link">
                <img src={Img5.src} alt="" />
              </button>
            </li>
            <li className={"aside-menu__item"}>
              <button className="aside-menu__link">
                <img src={Img6.src} alt="" />
              </button>
            </li>
            <li className={"aside-menu__item"}>
              <button className="aside-menu__link">
                <img src={Img7.src} alt="" />
              </button>
            </li>
            <li className={"aside-menu__item"}>
              <button className="aside-menu__link">
                <img src={Img8.src} alt="" />
              </button>
            </li>
            <li className={"aside-menu__item"}>
              <button className="aside-menu__link">
                <img src={Img9.src} alt="" />
              </button>
            </li>
            <li className={"aside-menu__item"}>
              <button className="aside-menu__link">
                <img src={Img10.src} alt="" />
              </button>
            </li>
          </Aside>
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
                        defaultValue={user.full_name}
                        disabled={true}
                        placeholder=" "
                        className="auth__input"
                      />
                    </div>
                    <div className="auth__input-box">
                      <input
                        defaultValue={user.full_name}
                        disabled={true}
                        placeholder=" "
                        className="auth__input"
                      />
                    </div>
                    <div className="auth__input-box">
                      <input
                        defaultValue={user.full_name}
                        disabled={true}
                        placeholder=" "
                        className="auth__input"
                      />
                    </div>
                    <div className="auth__input-box">
                      <input
                        defaultValue={user.full_name}
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
