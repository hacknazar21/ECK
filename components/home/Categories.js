import { useEffect } from "react";
import Cat1 from "../../src/img/home/categories/1.png";
import Cat2 from "../../src/img/home/categories/2.png";
import Cat3 from "../../src/img/home/categories/3.png";
import Cat4 from "../../src/img/home/categories/4.png";
import Cat5 from "../../src/img/home/categories/5.png";
import Cat6 from "../../src/img/home/categories/6.png";
import Cat7 from "../../src/img/home/categories/7.png";
import Cat8 from "../../src/img/home/categories/8.png";
import { motion } from "framer-motion";
import Link from "next/link";

const animationCategory = {
  hidden: {
    rotateY: 180,
    backgroundColor: "#fff",
  },
  visible: (custom) => ({
    rotateY: 0,
    backgroundColor: "#fff",
    transition: { delay: custom * 0.07 },
  }),
};
export default function Categories() {
  useEffect(() => {}, []);
  return (
    <motion.section
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ amount: 0.2 }}
      className="categories"
    >
      <div className="categories__container">
        <div className="categories__items">
          <Link href={""}>
            <motion.a
              custom={1}
              variants={animationCategory}
              className="categories__item category"
            >
              <div className="category__icon">
                <img src={Cat1.src} alt="" />
              </div>
              <div className="category__link">Проекты</div>
            </motion.a>
          </Link>
          <Link href={""}>
            <motion.a
              custom={2}
              variants={animationCategory}
              className="categories__item category"
            >
              <div className="category__icon">
                <img src={Cat2.src} alt="" />
              </div>
              <div className="category__link">Команда</div>
            </motion.a>
          </Link>
          <Link href={""}>
            <motion.a
              custom={3}
              variants={animationCategory}
              className="categories__item category"
            >
              <div className="category__icon">
                <img src={Cat3.src} alt="" />
              </div>
              <div className="category__link">Обьявление</div>
            </motion.a>
          </Link>
          <Link href={""}>
            <motion.a
              custom={4}
              variants={animationCategory}
              className="categories__item category"
            >
              <div className="category__icon">
                <img src={Cat4.src} alt="" />
              </div>
              <div className="category__link">Карта проектов</div>
            </motion.a>
          </Link>
          <Link href={""}>
            <motion.a
              custom={5}
              variants={animationCategory}
              className="categories__item category"
            >
              <div className="category__icon">
                <img src={Cat5.src} alt="" />
              </div>
              <div className="category__link">Аналитика</div>
            </motion.a>
          </Link>
          <Link href={""}>
            <motion.a
              custom={6}
              variants={animationCategory}
              className="categories__item category"
            >
              <div className="category__icon">
                <img src={Cat6.src} alt="" />
              </div>
              <div className="category__link">Библиотека</div>
            </motion.a>
          </Link>
          <Link href={""}>
            <motion.a
              custom={7}
              variants={animationCategory}
              className="categories__item category"
            >
              <div className="category__icon">
                <img src={Cat7.src} alt="" />
              </div>
              <div className="category__link">Обучение</div>
            </motion.a>
          </Link>
          <Link href={""}>
            <motion.a
              custom={8}
              variants={animationCategory}
              className="categories__item category"
            >
              <div className="category__icon">
                <img src={Cat8.src} alt="" />
              </div>
              <div className="category__link">Научный совет</div>
            </motion.a>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
