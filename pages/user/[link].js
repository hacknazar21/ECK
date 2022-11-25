import Head from "next/head";
import HFLayout from "../../layouts/HFLayout";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import PageLayout from "../../layouts/PageLayout";
import PagesLayout from "../../layouts/PagesLayout";
import SingleTeam from "../../components/team/SingleTeam";

export default function TeamLinkPage() {
  return (
    <>
      <Head>
        <title>Просмотр профиля</title>
      </Head>
      <HFLayout>
        <Header />
        <PagesLayout>
          <PageLayout></PageLayout>
        </PagesLayout>
        <Footer />
      </HFLayout>
    </>
  );
}
