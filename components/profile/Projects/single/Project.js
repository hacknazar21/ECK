import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import ProfilePageLayout from "../../../../layouts/ProfilePageLayout";
import Aside from "../../../common/Aside/Aside";
import TabBar from "../../../common/TabBar/TabBar";
import TabBarItem from "../../../common/TabBar/TabBarItem";
import Chat from "../../../common/Chat/Chat";
import Report from "./Report";
import ProfileMenu from "../../ProfileMenu";
import Requests from "./Requests/Requests";
import Invites from "./Invites/Invites";
import Solutions from "./Solutions/Solutions";
import Info from "./Info";
import Chats from "../../../common/Chat/Chats";
import { AuthContext } from "../../../../context/AuthContext";

function Project({ project, chats }) {
  const router = useRouter();
  const [chat_id, setChatId] = useState(null);
  const { userData } = useContext(AuthContext);
  return (
    <section className="page__my-profile projects">
      <div className="projects__container">
        <ProfilePageLayout>
          <Aside>
            <ProfileMenu />
          </Aside>
          <section className="single-project__content single-project-content profile-content">
            <TabBar
              header={
                <header className="single-project-content-block__header">
                  <h1
                    onClick={() => {
                      router.push("/profile/projects/");
                    }}
                    className="single-team-content__title profile-title"
                  >
                    <button className="single-team-content-block__back back-arrow">
                      <span></span>
                      <span></span>
                    </button>
                    {project.title}
                  </h1>
                </header>
              }
              classNames={["profile-block"]}
            >
              <TabBarItem className={"profile-block"} label={"Информация"}>
                <Info project={project} />
              </TabBarItem>
              <TabBarItem className={"profile-block"} label={"Чаты"}>
                {chat_id && (
                  <Chat
                    chat_id={chat_id}
                    setter={() => {
                      setChatId(null);
                    }}
                  />
                )}
                {!chat_id && (
                  <Chats
                    chats={chats}
                    setter={(id) => {
                      setChatId(id);
                    }}
                  />
                )}
              </TabBarItem>
              {userData?.user_type === "CUSTOMER" &&
                project?.project_type === "CHOICE" && (
                  <TabBarItem
                    className={"profile-block"}
                    label={"Отправленные заявки"}
                  >
                    <Invites project={project} />
                  </TabBarItem>
                )}
              {userData?.user_type === "CUSTOMER" &&
                project?.project_type === "CONTEST" && (
                  <TabBarItem
                    className={"profile-block"}
                    label={"Заявки на участие"}
                  >
                    <Requests project={project} />
                  </TabBarItem>
                )}
              {userData?.user_type === "CUSTOMER" && (
                <TabBarItem
                  className={"profile-block"}
                  label={"Поданные решения"}
                >
                  <Solutions project={project} />
                </TabBarItem>
              )}
              {userData?.user_type === "EXECUTOR" && (
                <TabBarItem
                  className={"profile-block"}
                  label={"Отчет об исполнении"}
                >
                  <Report project={project} />
                </TabBarItem>
              )}
            </TabBar>
          </section>
        </ProfilePageLayout>
      </div>
    </section>
  );
}

export default Project;
