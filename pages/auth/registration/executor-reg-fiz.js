import Head from "next/head";
import HFLayout from "../../../layouts/HFLayout";
import Header from "../../../components/common/Header";
import PagesLayout from "../../../layouts/PagesLayout";
import PageLayout from "../../../layouts/PageLayout";
import Footer from "../../../components/common/Footer";
import ExecutorFizReg from "../../../components/auth/registration/ExecutorFizReg";

export default function ExecutorRegFizPage() {
  return (
    <>
      <Head>
        <title>Данные исполнителя (ФИЗ. лицо)</title>
      </Head>
      <HFLayout>
        <Header />

        <PagesLayout>
          <PageLayout>
            <ExecutorFizReg />
          </PageLayout>
        </PagesLayout>
        <Footer />
      </HFLayout>
    </>
  );
}
