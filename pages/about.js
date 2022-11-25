import Head from "next/head";
import HFLayout from "../layouts/HFLayout";
import Header from "../components/common/Header";
import PageLayout from "../layouts/PageLayout";
import PagesLayout from "../layouts/PagesLayout";
import Footer from "../components/common/Footer";
import About from "../components/About";

export default function AboutPage({ about }) {
  return (
    <>
      <Head>
        <title>{about.title || "О проекте"}</title>
      </Head>
      <HFLayout>
        <Header />
        <PagesLayout>
          <PageLayout>
            <About about={about.blocks || []} />
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
      process.env.API_HOST + "/api/content/find/about_page/"
    );
    const data = await res.json();
    return {
      props: {
        about: data,
      }, // will be passed to the page component as props
    };
  } catch (e) {
    console.log(e);
    return {
      props: {
        about: {},
      },
    };
  }
}
