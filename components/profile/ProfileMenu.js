import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AuthContext } from "../../context/AuthContext";

function ProfileMenu(props) {
  const { pathname, push } = useRouter();
  const { logout, userData } = useContext(AuthContext);
  const menuItems = [
    {
      item: "Мой профиль",
      link: "/profile/my-profile",
      type: "all",
    },
    {
      item: "Уведомления",
      link: "/profile/notifications",
      type: "all",
    },
    {
      item: "Команды",
      link: "/profile/team",
      type: "EXECUTOR",
    },
    {
      item: "Мои проекты",
      link: "/profile/projects",
      type: "all",
    },
  ];

  async function exitClickHandler() {
    logout();
    await push("/");
  }

  return (
    <>
      {menuItems.map((menuItem, id) => {
        if (menuItem.type === "all" || menuItem.type === userData.user_type)
          return (
            <li
              key={id}
              className={
                "aside-menu__item " +
                (pathname.indexOf(menuItem.link) !== -1 ? "active" : "")
              }
            >
              <Link href={menuItem.link}>
                <a className="aside-menu__link">{menuItem.item}</a>
              </Link>
            </li>
          );
      })}
      <li className={"aside-menu__item"}>
        <a onClick={exitClickHandler} className="aside-menu__link">
          Выйти
        </a>
      </li>
    </>
  );
}

export default ProfileMenu;
