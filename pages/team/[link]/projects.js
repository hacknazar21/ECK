import Head from "next/head";
import HFLayout from "../../../layouts/HFLayout";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";
import PageLayout from "../../../layouts/PageLayout";
import PagesLayout from "../../../layouts/PagesLayout";
import Team from "../../../components/team/Team";
import SingleTeam from "../../../components/team/SingleTeam";
import SingleTeamMembers from "../../../components/team/SingleTeamMembers";

export default function SingleTeamMembersPage() {
  return (
    <>
      <Head>
        <title>Команды</title>
      </Head>
      <HFLayout>
        <Header />
        <PagesLayout>
          <PageLayout>
            <SingleTeamMembers />
          </PageLayout>
        </PagesLayout>
        <Footer />
      </HFLayout>
    </>
  );
}
