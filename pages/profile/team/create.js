import Head from "next/head";
import HFLayout from "../../../layouts/HFLayout";
import Header from "../../../components/common/Header";
import PageLayout from "../../../layouts/PageLayout";
import PagesLayout from "../../../layouts/PagesLayout";
import Footer from "../../../components/common/Footer";
import CreateTeam from "../../../components/profile/Team/Create-Team";

export default function CreateTeamPage() {
  return (
    <>
      <Head>
        <title>Личный кабинет - Мои команды - Создание команды</title>
      </Head>
      <HFLayout>
        <Header />
        <PagesLayout>
          <PageLayout>
            <CreateTeam />
          </PageLayout>
        </PagesLayout>
        <Footer />
      </HFLayout>
    </>
  );
}
