import React, { useContext, useEffect, useState } from "react";
import Image3 from "../../src/img/menu/3.png";
import Image5 from "../../src/img/menu/5.png";
import Image7 from "../../src/img/menu/7.png";
import Image8 from "../../src/img/menu/8.png";
import Cat2 from "../../src/img/home/categories/2.png";
import Cat3 from "../../src/img/home/categories/3.png";
import Cat4 from "../../src/img/home/categories/4.png";
import Cat7 from "../../src/img/home/categories/7.png";
import Link from "next/link";
import { useRouter } from "next/router";
import useHttp from "../../hooks/hooks.http";
import { AuthContext } from "../../context/AuthContext";

function Menu(props) {
  const router = useRouter();
  const { request } = useHttp();
  const { token } = useContext(AuthContext);
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await request("/api/content/url-cards/", "GET", null, {
          Authorization: `Bearer ${token}`,
        });
        if (data) setUrls([...data]);
      } catch (e) {}
    })();
  }, [token, router]);

  return (
    <menu className="under-header__menu under-header-menu">
      <ul className="under-header-menu__list">
        {urls.map((url, id) => (
          <li
            key={id}
            className={
              "under-header-menu__item" +
              " " +
              (router.route.indexOf(url.link) !== -1 ? "active" : "")
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
