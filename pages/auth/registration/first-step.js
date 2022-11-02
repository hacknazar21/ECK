import Head from "next/head";
import HFLayout from "../../../layouts/HFLayout";
import Header from "../../../components/common/Header";
import PagesLayout from "../../../layouts/PagesLayout";
import PageLayout from "../../../layouts/PageLayout";
import Footer from "../../../components/common/Footer";
import FirstStep from "../../../components/auth/registration/FirstStep";
import Loading from "../../../components/common/Loading";

export default function FirstStepPage() {
  return (
    <>
      <Head>
        <title>Регистрация</title>
      </Head>
      <HFLayout>
        <Header />

        <PagesLayout>
          <PageLayout>
            <FirstStep />
          </PageLayout>
        </PagesLayout>
        <Footer />
      </HFLayout>
    </>
  );
}
