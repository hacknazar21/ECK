import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AuthContext } from "../../context/AuthContext";

function Menu(props) {
  const router = useRouter();
  const { urlCards: urls } = useContext(AuthContext);

  return (
    <menu className="under-header__menu under-header-menu">
      <ul className="under-header-menu__list">
        {urls.map((url, id) => (
          <li
            key={id}
            className={
              "under-header-menu__item" +
              " " +
              (router.route.indexOf(url.link.replaceAll("/", "")) !== -1
                ? "active"
                : "")
            }
          >
            <Link href={url.link}>
              <a className="under-header-menu__link">
                {url.name}
                <span>
                  <img src={url.image} alt="" />
                </span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </menu>
  );
}

export default Menu;
