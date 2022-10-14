import { useEffect } from "react";
import OfferHead from "../../src/img/home/offer-head.png";
export default function Offer() {
  useEffect(() => {}, []);
  return (
    <section className="offer">
      <div className="offer__container">
        <div className="offer__box">
          <div className="offer__text">
            <h1 className="offer__title">Единый центр компетенции</h1>
            <div className="offer__subtitle">
              <p>
                Многоуровневая интеллектуальная система автоматического обмена
                решениями, новыми технологиями, информационными ресурсами
              </p>
            </div>
          </div>
          <div className="offer__image">
            <img src={OfferHead.src} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
