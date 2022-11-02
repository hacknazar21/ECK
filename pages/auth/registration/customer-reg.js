import Head from "next/head";
import HFLayout from "../../../layouts/HFLayout";
import Header from "../../../components/common/Header";
import PagesLayout from "../../../layouts/PagesLayout";
import PageLayout from "../../../layouts/PageLayout";
import Footer from "../../../components/common/Footer";
import FirstStep from "../../../components/auth/registration/FirstStep";
import CustomerReg from "../../../components/auth/registration/CustomerReg";
import { useEffect } from "react";

export default function CustomerRegPage() {
  return (
    <>
      <Head>
        <title>Данные заказчика</title>
      </Head>
      <HFLayout>
        <Header />
        <PagesLayout>
          <PageLayout>
            <CustomerReg />
          </PageLayout>
        </PagesLayout>
        <Footer />
      </HFLayout>
    </>
  );
}
