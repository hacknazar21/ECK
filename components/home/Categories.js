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
export default function Categories({ content }) {
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
          {content.data?.map((link, id) => (
            <Link key={id} href={link.link}>
              <motion.a
                custom={1}
                variants={animationCategory}
                className="categories__item category"
              >
                <div className="category__icon">
                  <img src={link.image} alt="" />
                </div>
                <div className="category__link">{link.name}</div>
              </motion.a>
            </Link>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
