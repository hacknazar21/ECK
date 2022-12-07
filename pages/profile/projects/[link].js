import Head from "next/head";
import HFLayout from "../../../layouts/HFLayout";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";
import PageLayout from "../../../layouts/PageLayout";
import PagesLayout from "../../../layouts/PagesLayout";
import Project from "../../../components/profile/Projects/single/Project";
import useHttp from "../../../hooks/hooks.http";
import { AuthContext } from "../../../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function SingleProjectProfilePage() {
  const { request } = useHttp();
  const { token } = useContext(AuthContext);
  const router = useRouter();
  const [project, setProject] = useState({});
  const [chats, setChats] = useState(null);

  useEffect(() => {
    if (token && router.query.link) {
      (async () => {
        try {
          const headers = {};
          if (token) headers["Authorization"] = `Bearer ${token}`;

          const data = await request(
            `/api/projects/${router.query.link}/`,
            "GET",
            null,
            headers
          );
          setProject({ ...data });
        } catch (e) {
          console.log(e);
        }
      })();
    }
  }, [token, router]);
  useEffect(() => {
    if (project.number)
      (async () => {
        try {
          const headers = {};
          if (token) headers["Authorization"] = `Bearer ${token}`;

          const data = await request(
            `/api/chats/?project__number=${project.number}`,
            "GET",
            null,
            headers
          );
          setChats(data.results);
        } catch (e) {
          console.log(e);
        }
      })();
  }, [project]);

  return (
    <>
      <Head>
        <title>{project.title || "Загрузка..."}</title>
      </Head>
      <HFLayout>
        <Header />
        <PagesLayout>
          <PageLayout>
            <Project project={project} chats={chats} />
          </PageLayout>
        </PagesLayout>
        <Footer />
      </HFLayout>
    </>
  );
}
