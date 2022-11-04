import React from "react";
import ProfilePageLayout from "../../layouts/ProfilePageLayout";
import Aside from "../common/Aside/Aside";
import TContent from "./TContent";
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
function Team(props) {
  return (
    <section className="page__my-profile team-page">
      <div className="team-page__container">
        <ProfilePageLayout>
          <Aside modificationMenu={"aside-menu__list_columns"}>
            <li className={"aside-menu__item"}>
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
          <TContent />
        </ProfilePageLayout>
      </div>
    </section>
  );
}

export default Team;
