import React, { useContext, useEffect, useState } from "react";
import ProfilePageLayout from "../../layouts/ProfilePageLayout";
import TContent from "./TContent";
import useHttp from "../../hooks/hooks.http";
import { AuthContext } from "../../context/AuthContext";
import ActivitiesMenu from "../common/ActivitiesMenu";
function Team(props) {
  const [teams, setTeams] = useState([]);
  const { request } = useHttp();
  const { token } = useContext(AuthContext);
  const [myTeams, setMyTeams] = useState([]);
  useEffect(() => {
    if (!!token)
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
