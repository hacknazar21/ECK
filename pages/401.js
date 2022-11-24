// 404.js

import { useRouter } from "next/router";

export default function FourOhOne() {
  const router = useRouter();
  return async () => {
    await router.push("/");
  };
}
// import HFLayout from "../layouts/HFLayout";
// import Header from "../components/common/Header";
// import PagesLayout from "../layouts/PagesLayout";
// import PageLayout from "../layouts/PageLayout";
// import Footer from "../components/common/Footer";
// import Head from "next/head";
// import Img401 from "../src/img/401.png";
// import Link from "next/link";
// <>
//   <Head>
//     <title>401 - Не авторизован</title>
//   </Head>
//   <HFLayout>
//     <Header />
//     <PagesLayout>
//       <PageLayout>
//         <section className="page__404 four-oh-four">
//           <div className="four-oh-four__image">
//             <img src={Img401.src} alt="" />
//           </div>
//           <h1 className="four-oh-four__title">
//             Упс. Для посещения данной страницы необходимо авторизоваться
//           </h1>
//           <Link href="/auth/login">
//             <a
//                 className={
//                   "window-notification__button window-notification__button_active"
//                 }
//             >
//               Авторизоваться
//             </a>
//           </Link>
//         </section>
//       </PageLayout>
//     </PagesLayout>
//     <Footer />
//   </HFLayout>
// </>
