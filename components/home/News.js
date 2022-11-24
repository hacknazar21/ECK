import { useEffect } from "react";
import OfferHead from "../../src/img/home/offer-head.png";
import Swiper, { Navigation, Autoplay } from "swiper";

export default function News() {
  useEffect(() => {
    new Swiper(".news__slider.news-swiper", {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Autoplay],

      observer: true,
      observeParents: true,
      slidesPerView: 3,
      spaceBetween: 10,
      autoHeight: true,
      speed: 1000,

      // Эффекты
      effect: "fade",
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      // Кнопки "влево/вправо"
      navigation: {
        prevEl: `.news__slider.news-swiper .swiper-button-prev`,
        nextEl: `.news__slider.news-swiper .swiper-button-next`,
      },

      // Брейкпоинты

      breakpoints: {
        320: {
          slidesPerView: 1.2,
          spaceBetween: 20,
        },
        770: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1920: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },

      // События
      on: {},
    });
  }, []);
  return (
    <section className="news">
      <div className="news__container">
        <div className="news__header">
          <h2 className="news__title section-title">Новости</h2>
        </div>
        <div className="news__box">
          <div className="news__slider news-swiper">
            <div className="news__wrapper swiper-wrapper">
              <div className="news__slide swiper-slide news-slide">
                <div className="news-slide__image">
                  <img
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    alt=""
                  />
                </div>
                <div className="news-slide__title-box">
                  <h3 className="news-slide__title">Название новости</h3>
                </div>
                <div className="news-slide__text-box">
                  <p className="news-slide__text">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
              <div className="news__slide swiper-slide news-slide">
                <div className="news-slide__image">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80"
                    alt=""
                  />
                </div>
                <div className="news-slide__title-box">
                  <h3 className="news-slide__title">Название новости</h3>
                </div>
                <div className="news-slide__text-box">
                  <p className="news-slide__text">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
              <div className="news__slide swiper-slide news-slide">
                <div className="news-slide__image">
                  <img
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    alt=""
                  />
                </div>
                <div className="news-slide__title-box">
                  <h3 className="news-slide__title">Название новости</h3>
                </div>
                <div className="news-slide__text-box">
                  <p className="news-slide__text">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
              <div className="news__slide swiper-slide news-slide">
                <div className="news-slide__image">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80"
                    alt=""
                  />
                </div>
                <div className="news-slide__title-box">
                  <h3 className="news-slide__title">Название новости</h3>
                </div>
                <div className="news-slide__text-box">
                  <p className="news-slide__text">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
              <div className="news__slide swiper-slide news-slide">
                <div className="news-slide__image">
                  <img
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    alt=""
                  />
                </div>
                <div className="news-slide__title-box">
                  <h3 className="news-slide__title">Название новости</h3>
                </div>
                <div className="news-slide__text-box">
                  <p className="news-slide__text">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
              <div className="news__slide swiper-slide news-slide">
                <div className="news-slide__image">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80"
                    alt=""
                  />
                </div>
                <div className="news-slide__title-box">
                  <h3 className="news-slide__title">Название новости</h3>
                </div>
                <div className="news-slide__text-box">
                  <p className="news-slide__text">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
            </div>
            <div className="news__slider-buttons">
              <button className="swiper-button-prev">
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="41"
                    y="41"
                    width="41"
                    height="41"
                    rx="20.5"
                    transform="rotate(180 41 41)"
                    fill="#4D97C1"
                    fillOpacity="0.2"
                  />
                  <path
                    d="M18.0238 21.121L21.7338 24.831C21.8151 24.913 21.9119 24.9781 22.0185 25.0226C22.1251 25.067 22.2395 25.0898 22.355 25.0898C22.4705 25.0898 22.5849 25.067 22.6915 25.0226C22.7982 24.9781 22.8949 24.913 22.9763 24.831C23.1392 24.6671 23.2307 24.4453 23.2307 24.2141C23.2307 23.983 23.1392 23.7612 22.9763 23.5973L19.8788 20.4998L22.9763 17.4023C23.1392 17.2383 23.2307 17.0166 23.2307 16.7854C23.2307 16.5542 23.1392 16.3325 22.9763 16.1685C22.8945 16.0874 22.7975 16.0233 22.6909 15.9797C22.5843 15.9362 22.4702 15.9141 22.355 15.9148C22.2399 15.9141 22.1257 15.9362 22.0191 15.9797C21.9125 16.0233 21.8155 16.0874 21.7338 16.1685L18.0238 19.8785C17.9418 19.9599 17.8767 20.0566 17.8322 20.1633C17.7878 20.2699 17.7649 20.3843 17.7649 20.4998C17.7649 20.6153 17.7878 20.7296 17.8322 20.8363C17.8767 20.9429 17.9418 21.0397 18.0238 21.121Z"
                    fill="#30A1E1"
                  />
                </svg>
              </button>
              <button className="swiper-button-next">
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="41"
                    height="41"
                    rx="20.5"
                    fill="#4D97C1"
                    fillOpacity="0.2"
                  />
                  <path
                    d="M22.9762 19.879L19.2662 16.169C19.1849 16.087 19.0881 16.0219 18.9815 15.9774C18.8749 15.933 18.7605 15.9102 18.645 15.9102C18.5295 15.9102 18.4151 15.933 18.3085 15.9774C18.2018 16.0219 18.1051 16.087 18.0237 16.169C17.8608 16.3329 17.7693 16.5547 17.7693 16.7859C17.7693 17.017 17.8608 17.2388 18.0237 17.4027L21.1212 20.5002L18.0237 23.5977C17.8608 23.7617 17.7693 23.9834 17.7693 24.2146C17.7693 24.4458 17.8608 24.6675 18.0237 24.8315C18.1055 24.9126 18.2025 24.9767 18.3091 25.0203C18.4157 25.0638 18.5298 25.0859 18.645 25.0852C18.7601 25.0859 18.8743 25.0638 18.9809 25.0203C19.0875 24.9767 19.1845 24.9126 19.2662 24.8315L22.9762 21.1215C23.0582 21.0401 23.1233 20.9434 23.1678 20.8367C23.2122 20.7301 23.2351 20.6157 23.2351 20.5002C23.2351 20.3847 23.2122 20.2704 23.1678 20.1637C23.1233 20.0571 23.0582 19.9603 22.9762 19.879Z"
                    fill="#30A1E1"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
