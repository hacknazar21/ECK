import Head from "next/head";
import HFLayout from "../../../layouts/HFLayout";
import Header from "../../../components/common/Header";
import PagesLayout from "../../../layouts/PagesLayout";
import PageLayout from "../../../layouts/PageLayout";
import Footer from "../../../components/common/Footer";
import ExecutorUrReg from "../../../components/auth/registration/ExecutorUrReg";

export default function ExecutorRegUrPage() {
  return (
    <>
      <Head>
        <title>Данные исполнителя (ЮР. лицо)</title>
      </Head>
      <HFLayout>
        <Header />

        <PagesLayout>
          <PageLayout>
            <ExecutorUrReg />
          </PageLayout>
        </PagesLayout>
        <Footer />
      </HFLayout>
    </>
  );
}
