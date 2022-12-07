import Head from "next/head";
import HFLayout from "../layouts/HFLayout";
import Header from "../components/common/Header";
import PageLayout from "../layouts/PageLayout";
import PagesLayout from "../layouts/PagesLayout";
import Footer from "../components/common/Footer";
import GeographyMap from "../components/GeographyMap";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import useHttp from "../hooks/hooks.http";

export default function GeographyPage() {
  const { token } = useContext(AuthContext);
  const [markers, setMarkers] = useState([]);
  const { request } = useHttp();
  useEffect(() => {
    (async () => {
      try {
        const data = await request("/api/geography/projects/", "GET", null, {
          Authorization: `Bearer ${token}`,
        });

        setMarkers([...data]);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [token]);
  return (
    <>
      <Head>
        <title>География проектов</title>
      </Head>
      <HFLayout>
        <Header />
        <PagesLayout>
          <PageLayout>
            <GeographyMap markers={markers} />
          </PageLayout>
        </PagesLayout>
        <Footer />
      </HFLayout>
    </>
  );
}
