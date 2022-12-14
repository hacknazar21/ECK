import Head from "next/head";
import HFLayout from "../../layouts/HFLayout";
import Header from "../../components/common/Header";
import PageLayout from "../../layouts/PageLayout";
import PagesLayout from "../../layouts/PagesLayout";
import Footer from "../../components/common/Footer";
import MyProfile from "../../components/profile/MyProfile";

export default function MyProfilePage() {
  return (
    <>
      <Head>
        <title>Личный кабинет - Мой профиль</title>
      </Head>
      <HFLayout>
        <Header />
        <PagesLayout>
          <PageLayout>
            <MyProfile />
          </PageLayout>
        </PagesLayout>
        <Footer />
      </HFLayout>
    </>
  );
}
