import Head from "next/head";
import HFLayout from "../../layouts/HFLayout";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import PageLayout from "../../layouts/PageLayout";
import PagesLayout from "../../layouts/PagesLayout";
import Projects from "../../components/projects/Projects";

export default function ProjectsPage({ projects }) {
  return (
    <>
      <Head>
        <title>Проекты</title>
      </Head>
      <HFLayout>
        <Header />
        <PagesLayout>
          <PageLayout>
            <Projects projects={projects} />
          </PageLayout>
        </PagesLayout>
        <Footer />
      </HFLayout>
    </>
  );
}
export async function getStaticProps() {
  try {
    const res = await fetch(process.env.API_HOST + "/api/projects/");
    const data = await res.json();
    return {
      props: { products: data.results }, // will be passed to the page component as props
    };
  } catch (e) {
    return {
      props: { products: [] }, // will be passed to the page component as props
    };
  }
}
