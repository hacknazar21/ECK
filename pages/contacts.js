import Head from "next/head";
import HFLayout from "../layouts/HFLayout";
import Header from "../components/common/Header";
import PageLayout from "../layouts/PageLayout";
import PagesLayout from "../layouts/PagesLayout";
import Footer from "../components/common/Footer";
import Contacts from "../components/Contacts";

export default function ContactsPage({ contacts }) {
  return (
    <>
      <Head>
        <title>{contacts.title}</title>
      </Head>
      <HFLayout>
        <Header />
        <PagesLayout>
          <PageLayout>
            <Contacts contacts={contacts.blocks || []} />
          </PageLayout>
        </PagesLayout>
        <Footer />
      </HFLayout>
    </>
  );
}
export async function getServerSideProps() {
  try {
    // Fetch data from external API
    const res = await fetch(
      process.env.API_HOST + "/api/content/find/contacts_page/"
    );
    const data = await res.json();
    return {
      props: {
        contacts: data,
      }, // will be passed to the page component as props
    };
  } catch (e) {
    return {
      props: {
        contacts: {},
      },
    };
  }
}
