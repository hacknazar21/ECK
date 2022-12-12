// 404.js
import HFLayout from "../layouts/HFLayout";
import Header from "../components/common/Header";
import PagesLayout from "../layouts/PagesLayout";
import PageLayout from "../layouts/PageLayout";
import Footer from "../components/common/Footer";
import Head from "next/head";
import Img404 from "../src/img/404.png";
import { useRouter } from "next/router";
export default function FourOhFour() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>404 - Не найдено</title>
      </Head>
      <HFLayout>
        <Header />
        <PagesLayout no_header={true}>
          <PageLayout>
            <section className="page__404 four-oh-four">
              <div className="four-oh-four__image">
                <img src={Img404.src} alt="" />
              </div>
              <h1 className="four-oh-four__title">
                Упс. Мы не нашли такую страницу
              </h1>
              <button
                onClick={() => {
                  router.back();
                }}
                className={
                  "window-notification__button window-notification__button_active"
                }
              >
                Вернуться назад
              </button>
            </section>
          </PageLayout>
        </PagesLayout>
        <Footer />
      </HFLayout>
    </>
  );
}
