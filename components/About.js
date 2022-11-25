import React from "react";
import Img from "../src/img/about/Placeholder/Image.png";
import Image from "next/image";

function About({ about = [] }) {
  return (
    <section className="page__about about">
      <div className="about__container">
        <div className="about__items">
          {about.map((aboutItem, id) => (
            <div
              key={id}
              className={
                "about__item " +
                (id % 2 === 0
                  ? "about__item_direction_normal"
                  : "about__item_direction_reverse")
              }
            >
              <div className="about__image">
                <img loading="lazy" src={aboutItem.image || Img.src} alt="" />
              </div>
              <div className="about__info">
                <h2 className="about__title">{aboutItem.title}</h2>
                <div className="about__text">
                  <p>{aboutItem.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
