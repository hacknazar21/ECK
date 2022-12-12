import React, { useContext, useEffect, useState } from "react";
import ProfilePageLayout from "../../layouts/ProfilePageLayout";
import STContent from "./STContent";
import { useRouter } from "next/router";
import useHttp from "../../hooks/hooks.http";
import { AuthContext } from "../../context/AuthContext";
import ActivitiesMenu from "../common/ActivitiesMenu";

function SingleTeam() {
  const router = useRouter();
  const [team, setTeam] = useState({});
  const { request } = useHttp();
  const { token } = useContext(AuthContext);
  useEffect(() => {
    const { link } = router.query;
    (async () => {
      try {
        const data = await request("/api/teams/" + link + "/", "GET", null, {
          Authorization: `Bearer ${token}`,
        });
        setTeam(data);
      } catch (e) {}
    })();
  }, [token, router]);

  return (
    <section className="page__my-profile team-page">
      <div className="team-page__container">
        <ProfilePageLayout>
          <ActivitiesMenu />
          <STContent team={team} />
        </ProfilePageLayout>
      </div>
    </section>
  );
}

export default SingleTeam;
