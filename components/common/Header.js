import Logo from "../../src/img/logo.svg";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { CSSTransition } from "react-transition-group";
import { useRef } from "react";
import Menu from "./Menu";
import SResult from "./Search/SResult";
import NWindow from "./Notifications/NWindow";
import { useRouter } from "next/router";
import { AuthContext } from "../../context/AuthContext";
import Popup from "./Popup";
import ProfileMenu from "../profile/ProfileMenu";
import Select from "./Select/Select";
import HeaderProfileMenu from "./HeaderProfileMenu";

export default function Header() {
  const router = useRouter();
  const { isAuth, userData } = useContext(AuthContext);

  function openMenuClickHandler(e) {
    document.documentElement.classList.toggle("open-menu");
  }
  useEffect(() => {
    document.documentElement.classList.remove("open-menu");
  }, [router.pathname]);
  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__items">
            <Link href="/">
              <a className="header__logo header-logo">
                <div className="header-logo__img">
                  <img src={Logo.src} alt="" />
                </div>
                <div className="header-logo__text">
                  <div className="header-logo__title">
                    <p>ЕЦК</p>
                  </div>
                  <div className="header-logo__subtitle">
                    <p>Единый центр компетенции</p>
                  </div>
                </div>
              </a>
            </Link>
            <menu className="header__menu menu">
              <ul className="menu__list">
                <li className="menu__item">
                  <Link href="/">
                    <a className="menu__link">Главная</a>
                  </Link>
                </li>
                <li className="menu__item">
                  <Link href="/about">
                    <a className="menu__link">О проекте</a>
                  </Link>
                </li>
                <li className="menu__item">
                  <Link href="/contacts">
                    <a className="menu__link">Контакты</a>
                  </Link>
                </li>
                <li className="menu__item">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://eprof.kz/media/public/upload/ContentFile/instruction.pdf"
                    className="menu__link"
                  >
                    Инструкция
                  </a>
                </li>
              </ul>

              <ul className="menu__list menu__list_device_mobile">
                {isAuth && (
                  <li className="menu__item">
                    <Link href="/profile/my-profile">
                      <a className="menu__link">
                        <span className="menu__avatar">
                          <img src={userData.avatar} alt="" />
                        </span>
                        Мой профиль
                      </a>
                    </Link>
                  </li>
                )}
                {!isAuth && (
                  <li className="menu__item">
                    <Link href="/auth/login/">
                      <a className="menu__link">Войти в аккаунт</a>
                    </Link>
                  </li>
                )}
              </ul>
            </menu>
            <div className="header__actions">
              <div className="header__search">
                <SResult />
              </div>
              {isAuth && (
                <div className={"header__search"}>
                  <NWindow />
                </div>
              )}

              <div className="header__account">
                {!isAuth && (
                  <Link href="/auth/login">
                    <a className="header__account-link">Войти в аккаунт</a>
                  </Link>
                )}
                {isAuth && <HeaderProfileMenu />}
              </div>
            </div>
            <button onClick={openMenuClickHandler} className="menu__burger">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
        {router.pathname !== "/" &&
        router.pathname !== "/about" &&
        router.pathname !== "/contacts" &&
        router.pathname.indexOf("/news/") === -1 &&
        router.pathname.indexOf("/auth/") === -1 ? (
          <Menu />
        ) : (
          ""
        )}
      </header>
    </>
  );
}
