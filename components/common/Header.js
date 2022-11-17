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

export default function Header() {
  const router = useRouter();
  const { isAuth } = useContext(AuthContext);
  function openMenuClickHandler(e) {
    document.documentElement.classList.toggle("open-menu");
  }

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
                  <a href="" className="menu__link">
                    О проекте
                  </a>
                </li>
                <li className="menu__item">
                  <a href="" className="menu__link">
                    Контакты
                  </a>
                </li>
                <li className="menu__item">
                  <a href="" className="menu__link">
                    Инструкция
                  </a>
                </li>
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
                {isAuth && (
                  <Link href="/profile/customer/my-profile">
                    <a className="header__account-link">Личный кабинет</a>
                  </Link>
                )}
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
        {router.pathname !== "/" ? <Menu /> : ""}
      </header>
    </>
  );
}
