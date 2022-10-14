import { useEffect } from "react";
import Cat1 from "../../src/img/home/categories/1.png";
import Cat2 from "../../src/img/home/categories/2.png";
import Cat3 from "../../src/img/home/categories/3.png";
import Cat4 from "../../src/img/home/categories/4.png";
import Cat5 from "../../src/img/home/categories/5.png";
import Cat6 from "../../src/img/home/categories/6.png";
import Cat7 from "../../src/img/home/categories/7.png";
import Cat8 from "../../src/img/home/categories/8.png";
export default function Categories() {
  useEffect(() => {}, []);
  return (
    <section className="categories">
      <div className="categories__container">
        <div className="categories__items">
          <div className="categories__item category">
            <div className="category__icon">
              <img src={Cat1.src} alt="" />
            </div>
            <div className="category__link">Проекты</div>
          </div>
          <div className="categories__item category">
            <div className="category__icon">
              <img src={Cat2.src} alt="" />
            </div>
            <div className="category__link">Команда</div>
          </div>
          <div className="categories__item category">
            <div className="category__icon">
              <img src={Cat3.src} alt="" />
            </div>
            <div className="category__link">Обьявление</div>
          </div>
          <div className="categories__item category">
            <div className="category__icon">
              <img src={Cat4.src} alt="" />
            </div>
            <div className="category__link">Карта проектов</div>
          </div>
          <div className="categories__item category">
            <div className="category__icon">
              <img src={Cat5.src} alt="" />
            </div>
            <div className="category__link">Аналитика</div>
          </div>
          <div className="categories__item category">
            <div className="category__icon">
              <img src={Cat6.src} alt="" />
            </div>
            <div className="category__link">Библиотека</div>
          </div>
          <div className="categories__item category">
            <div className="category__icon">
              <img src={Cat7.src} alt="" />
            </div>
            <div className="category__link">Обучение</div>
          </div>
          <div className="categories__item category">
            <div className="category__icon">
              <img src={Cat8.src} alt="" />
            </div>
            <div className="category__link">Научный совет</div>
          </div>
        </div>
      </div>
    </section>
  );
}
