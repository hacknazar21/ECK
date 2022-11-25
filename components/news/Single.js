import React from "react";
import Img from "../../src/img/about/Placeholder/Image.png";

function Single({ news }) {
  return (
    <section className="page__single-news single-news">
      <div className="single-news__container">
        <div className="single-news__box">
          <div className="single-news__image">
            <img src={news.image || Img.src} alt="" />
          </div>
          <h1 className="single-news__title">{news.title}</h1>
          <div className="single-news__text">
            <p>{news.content}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Single;
