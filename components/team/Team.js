import React, { useContext, useEffect, useState } from "react";
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
import useHttp from "../../hooks/hooks.http";
import { AuthContext } from "../../context/AuthContext";
import ActivitiesMenu from "../common/ActivitiesMenu";
function Team(props) {
  const [teams, setTeams] = useState([]);
  const { request } = useHttp();
  const { token } = useContext(AuthContext);
  const [myTeams, setMyTeams] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const data = await request("/api/teams/", "GET", null, {
          Authorization: `Bearer ${token}`,
        });
        setTeams([...data.results]);
        const dataItem = await request("/api/profile/teams/", "GET", null, {
          Authorization: `Bearer ${token}`,
        });
        setMyTeams([...dataItem.results]);
      } catch (e) {}
    })();
  }, [token]);
  return (
    <section className="page__my-profile team-page">
      <div className="team-page__container">
        <ProfilePageLayout>
          <ActivitiesMenu
            url={"/api/teams/"}
            setter={(data) => {
              setTeams([...data]);
            }}
          />
          <TContent
            url={"/api/teams/"}
            setter={(data) => {
              setTeams([...data]);
            }}
            myTeams={myTeams}
            teams={teams}
          />
        </ProfilePageLayout>
      </div>
    </section>
  );
}

export default Team;
