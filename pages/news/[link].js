import Head from "next/head";
import HFLayout from "../../layouts/HFLayout";
import Header from "../../components/common/Header";
import PageLayout from "../../layouts/PageLayout";
import PagesLayout from "../../layouts/PagesLayout";
import Footer from "../../components/common/Footer";
import Single from "../../components/news/Single";

export default function SingleNewsPage({ news }) {
  return (
    <>
      <Head>
        <title>{news.title || "Главная"}</title>
      </Head>
      <HFLayout>
        <Header />
        <PagesLayout>
          <PageLayout>
            <Single news={news} />
          </PageLayout>
        </PagesLayout>
        <Footer />
      </HFLayout>
    </>
  );
}
export async function getServerSideProps({ query }) {
  const { link } = query;
  try {
    // Fetch data from external API
    const res = await fetch(
      process.env.API_HOST + "/api/content/news/" + link + "/"
    );
    const data = await res.json();
    return {
      props: {
        news: data,
      }, // will be passed to the page component as props
    };
  } catch (e) {
    return {
      props: {
        news: {},
      },
    };
  }
}
