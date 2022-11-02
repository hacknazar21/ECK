import Logo from "../../src/img/logo.svg";
import { useEffect, useState } from "react";
import Link from "next/link";
import { CSSTransition } from "react-transition-group";
import { useRef } from "react";
import Menu from "./Menu";
import SResult from "./Search/SResult";
import NWindow from "./Notifications/NWindow";

export default function Header() {
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
                  <a href="" className="menu__link">
                    Главная
                  </a>
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
              <div className={"header__search"}>
                <NWindow />
              </div>
              <div className="header__account">
                <Link href="/auth/login">
                  <a className="header__account-link">Войти в аккаунт</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Menu />
    </>
  );
}
