import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AuthContext } from "../../context/AuthContext";

function ProfileMenu({ onClick = () => {} }) {
  const { pathname } = useRouter();
  const { userData } = useContext(AuthContext);
  const [isMobile, setIsMobile] = useState(false);
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
  useEffect(() => {
    if (window.innerWidth <= 992) setIsMobile(true);
  }, []);
  return (
    <>
      {!isMobile &&
        menuItems.map((menuItem, id) => {
          if (menuItem.type === "all" || menuItem.type === userData.user_type)
            return (
              <li
                key={id + menuItem.link}
                className={
                  "aside-menu__item " +
                  (pathname.indexOf(menuItem.link) !== -1 ? "active" : "")
                }
              >
                {pathname.indexOf(menuItem.link) !== -1 && (
                  <div
                    onClick={
                      pathname.indexOf(menuItem.link) !== -1
                        ? onClick
                        : () => {}
                    }
                    className="aside-menu__link"
                  >
                    {menuItem.item}
                  </div>
                )}
                {pathname.indexOf(menuItem.link) === -1 && (
                  <Link href={menuItem.link}>
                    <a className="aside-menu__link">{menuItem.item}</a>
                  </Link>
                )}
              </li>
            );
        })}
      {isMobile &&
        menuItems
          .filter((menuItem) => pathname.indexOf(menuItem.link) !== -1)
          .map((menuItem, id) => (
            <li key={id + menuItem.link} className={"aside-menu__item active"}>
              <div
                onClick={
                  pathname.indexOf(menuItem.link) !== -1 ? onClick : () => {}
                }
                className="aside-menu__link"
              >
                {menuItem.item}
              </div>
            </li>
          ))}
      {isMobile &&
        menuItems
          .filter((menuItem) => pathname.indexOf(menuItem.link) === -1)
          .map((menuItem, id) => (
            <li key={id + menuItem.link} className={"aside-menu__item"}>
              <Link href={menuItem.link}>
                <a className="aside-menu__link">{menuItem.item}</a>
              </Link>
            </li>
          ))}
    </>
  );
}

export default ProfileMenu;
