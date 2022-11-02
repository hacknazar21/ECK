import { useEffect } from "react";
import OfferHead from "../../src/img/home/offer-head.png";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
const animation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};
const animationLogo = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
  },
};
export default function Offer() {
  useEffect(() => {}, []);
  const [text, count] = useTypewriter({
    words: ["Единый центр компетенции"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <motion.section
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ amount: 0.2, once: true }}
      className="offer"
    >
      <div className="offer__container">
        <div className="offer__box">
          <div className="offer__text">
            <motion.h1 custom={1} variants={animation} className="offer__title">
              <span>{text}</span>
              <Cursor cursorColor={"#fff"} />
            </motion.h1>
            <motion.div
              custom={2}
              variants={animation}
              className="offer__subtitle"
            >
              <p>
                Многоуровневая интеллектуальная система автоматического обмена
                решениями, новыми технологиями, информационными ресурсами
              </p>
            </motion.div>
          </div>
          <motion.div variants={animationLogo} className="offer__image">
            <img src={OfferHead.src} alt="" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
