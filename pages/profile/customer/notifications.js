import Head from "next/head";
import HFLayout from "../../../layouts/HFLayout";
import Header from "../../../components/common/Header";
import PageLayout from "../../../layouts/PageLayout";
import PagesLayout from "../../../layouts/PagesLayout";
import Footer from "../../../components/common/Footer";
import Notifications from "../../../components/profile/Notifications";

export default function NotificationsPage() {
  return (
    <>
      <Head>
        <title>Личный кабинет - Мои уведомления</title>
      </Head>
      <HFLayout>
        <Header />
        <PagesLayout>
          <PageLayout>
            <Notifications />
          </PageLayout>
        </PagesLayout>
        <Footer />
      </HFLayout>
    </>
  );
}
