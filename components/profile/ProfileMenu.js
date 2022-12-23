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
                  "aside-menu__item no-center " +
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
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.0002 9.1697C16.8128 8.98345 16.5594 8.87891 16.2952 8.87891C16.031 8.87891 15.7776 8.98345 15.5902 9.1697L12.0002 12.7097L8.46019 9.1697C8.27283 8.98345 8.01938 8.87891 7.75519 8.87891C7.49101 8.87891 7.23756 8.98345 7.05019 9.1697C6.95646 9.26266 6.88207 9.37326 6.8313 9.49512C6.78053 9.61698 6.75439 9.74769 6.75439 9.8797C6.75439 10.0117 6.78053 10.1424 6.8313 10.2643C6.88207 10.3861 6.95646 10.4967 7.05019 10.5897L11.2902 14.8297C11.3832 14.9234 11.4938 14.9978 11.6156 15.0486C11.7375 15.0994 11.8682 15.1255 12.0002 15.1255C12.1322 15.1255 12.2629 15.0994 12.3848 15.0486C12.5066 14.9978 12.6172 14.9234 12.7102 14.8297L17.0002 10.5897C17.0939 10.4967 17.1683 10.3861 17.2191 10.2643C17.2699 10.1424 17.296 10.0117 17.296 9.8797C17.296 9.74769 17.2699 9.61698 17.2191 9.49512C17.1683 9.37326 17.0939 9.26266 17.0002 9.1697Z"
                    fill="#278BE8"
                  />
                </svg>
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
