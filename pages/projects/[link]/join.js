import Head from "next/head";
import HFLayout from "../../../layouts/HFLayout";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";
import PageLayout from "../../../layouts/PageLayout";
import PagesLayout from "../../../layouts/PagesLayout";
import ProjectJoin from "../../../components/projects/ProjectJoin";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import useHttp from "../../../hooks/hooks.http";
import { AuthContext } from "../../../context/AuthContext";

export default function ProjectJoinPage() {
  const router = useRouter();
  const [project, setProject] = useState({});
  const { request } = useHttp();
  const { token } = useContext(AuthContext);
  useEffect(() => {
    if (token && router.query.link)
      (async () => {
        try {
          const headers = {};
          headers["Authorization"] = `Bearer ${token}`;
          const data = await request(
            `/api/projects/${router.query.link}/`,
            "GET",
            null,
            headers
          );
          console.log(data);
          setProject({ ...data });
        } catch (e) {
          console.log(e);
        }
      })();
  }, [token, router]);
  return (
    <>
      <Head>
        <title>Подача заявки</title>
      </Head>
      <HFLayout>
        <Header />
        <PagesLayout>
          <PageLayout>
            <ProjectJoin project={project} />
          </PageLayout>
        </PagesLayout>
        <Footer />
      </HFLayout>
    </>
  );
}
