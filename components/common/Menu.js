import React from "react";
import Image3 from "../../src/img/menu/3.png";
import Image5 from "../../src/img/menu/5.png";
import Image7 from "../../src/img/menu/7.png";
import Image8 from "../../src/img/menu/8.png";
import Cat2 from "../../src/img/home/categories/2.png";
import Cat3 from "../../src/img/home/categories/3.png";
import Cat4 from "../../src/img/home/categories/4.png";
import Cat7 from "../../src/img/home/categories/7.png";

function Menu(props) {
  return (
    <menu className="under-header__menu under-header-menu">
      <ul className="under-header-menu__list">
        <li className="under-header-menu__item">
          <a href="" className="under-header-menu__link">
            Объявления
            <span>
              <img src={Cat3.src} alt="" />
            </span>
          </a>
        </li>
        <li className="under-header-menu__item">
          <a href="" className="under-header-menu__link">
            Команда
            <span>
              <img src={Cat2.src} alt="" />
            </span>
          </a>
        </li>
        <li className="under-header-menu__item">
          <a href="" className="under-header-menu__link">
            Проекты
            <span>
              <img src={Image3.src} alt="" />
            </span>
          </a>
        </li>
        <li className="under-header-menu__item">
          <a href="" className="under-header-menu__link">
            География
            <span>
              <img src={Cat4.src} alt="" />
            </span>
          </a>
        </li>
        <li className="under-header-menu__item">
          <a href="" className="under-header-menu__link">
            Аналитика
            <span>
              <img src={Image5.src} alt="" />
            </span>
          </a>
        </li>
        <li className="under-header-menu__item">
          <a href="" className="under-header-menu__link">
            Библиотека
            <span>
              <img src={Cat7.src} alt="" />
            </span>
          </a>
        </li>
        <li className="under-header-menu__item">
          <a href="" className="under-header-menu__link">
            Обучение
            <span>
              <img src={Image7.src} alt="" />
            </span>
          </a>
        </li>
        <li className="under-header-menu__item">
          <a href="" className="under-header-menu__link">
            Научный совет
            <span>
              <img src={Image8.src} alt="" />
            </span>
          </a>
        </li>
      </ul>
    </menu>
  );
}

export default Menu;
