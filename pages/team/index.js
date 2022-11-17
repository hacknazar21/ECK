import Head from "next/head";
import HFLayout from "../../layouts/HFLayout";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import PageLayout from "../../layouts/PageLayout";
import PagesLayout from "../../layouts/PagesLayout";
import Team from "../../components/team/Team";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useRouter } from "next/router";

export default function TeamPage() {
  return (
    <>
      <Head>
        <title>Команды</title>
      </Head>
      <HFLayout>
        <Header />
        <PagesLayout>
          <PageLayout>
            <Team />
          </PageLayout>
        </PagesLayout>
        <Footer />
      </HFLayout>
    </>
  );
}
