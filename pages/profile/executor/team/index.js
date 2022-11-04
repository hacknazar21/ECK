import Head from "next/head";
import HFLayout from "../../../../layouts/HFLayout";
import Header from "../../../../components/common/Header";
import PageLayout from "../../../../layouts/PageLayout";
import PagesLayout from "../../../../layouts/PagesLayout";
import Footer from "../../../../components/common/Footer";
import Team from "../../../../components/profile/executor/Team";

export default function TeamPage() {
  return (
    <>
      <Head>
        <title>Личный кабинет - Мои команды</title>
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
