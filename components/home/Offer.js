import { useEffect } from "react";
import OfferHead from "../../src/img/home/offer-head.png";
import OfferBg from "../../src/img/home/offer-bg.png";
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
export default function Offer({ content }) {
  useEffect(() => {}, []);
  const [text] = useTypewriter({
    words: [content.title || "Единый центр компетенции"],
    loop: false,
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
        <div
          className="offer__box"
          style={{
            backgroundImage: `url(${
              content.banner_block.background || OfferBg.src
            })`,
          }}
        >
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
                {content.subtitle ||
                  "Многоуровневая интеллектуальная система автоматического обмена решениями, новыми технологиями, информационными ресурсами"}
              </p>
            </motion.div>
          </div>
          <motion.div variants={animationLogo} className="offer__image">
            <img src={content.banner_block.image || OfferHead.src} alt="" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
