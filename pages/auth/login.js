import Head from "next/head";
import HFLayout from "../../layouts/HFLayout";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import PagesLayout from "../../layouts/PagesLayout";
import PageLayout from "../../layouts/PageLayout";
import Login from "../../components/auth/Login";

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Логин</title>
      </Head>
      <HFLayout>
        <Header />
        <PagesLayout>
          <PageLayout>
            <Login />
          </PageLayout>
        </PagesLayout>
        <Footer />
      </HFLayout>
    </>
  );
}
