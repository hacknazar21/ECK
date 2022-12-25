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
import TContent from "../team/TContent";
import AContent from "./AContent";
import ActivitiesMenu from "../common/ActivitiesMenu";
import useHttp from "../../hooks/hooks.http";
import { AuthContext } from "../../context/AuthContext";

function Announcement(props) {
  const [projects, setProjects] = useState([]);
  const { request } = useHttp();
  const { token } = useContext(AuthContext);
  useEffect(() => {
    if (!!token)
      (async () => {
        try {
          const data = await request(
            "/api/projects/announcements/",
            "GET",
            null,
            {
              Authorization: `Bearer ${token}`,
            }
          );
          setProjects([...data.results]);
        } catch (e) {
          console.log(e);
        }
      })();
  }, [token]);
  return (
    <section className="page__my-profile announcement">
      <div className="announcement__container">
        <ProfilePageLayout>
          <ActivitiesMenu
            setter={(data) => {
              setProjects([...data]);
            }}
            url={"/api/projects/announcements/"}
          />
          <AContent
            projects={projects}
            setter={(data) => {
              setProjects([...data]);
            }}
            url={"/api/projects/announcements/"}
          />
        </ProfilePageLayout>
      </div>
    </section>
  );
}

export default Announcement;
