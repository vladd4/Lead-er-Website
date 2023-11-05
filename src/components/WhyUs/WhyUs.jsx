import styles from "./WhyUs.module.scss";
import { useRef, useEffect, useContext } from "react";

import Phone from "../../assets/phone-icon.png";

import useScroll from "../../hooks/useScroll";
import useAnimate from "../../hooks/useAnimate";
import Context from "../../hooks/Context";

import { targetNumbers } from "../../store/whyUs";

const WhyUs = () => {
  const isScrolled = useScroll();
  const numberElements = useRef([]);
  const { ref, isAnimated } = useAnimate();
  const t = useContext(Context);

  useEffect(() => {
    if (isScrolled) {
      const updateNumbersOnScroll = () => {
        numberElements.current.forEach((element, index) => {
          const targetNumber = targetNumbers[index].number;
          const increment = targetNumber / 250;
          let currentNumber = 0;
          const update = () => {
            if (currentNumber < targetNumber) {
              currentNumber += increment;
              if (targetNumber === 40 || targetNumber === 3) {
                element.textContent = Math.floor(currentNumber) + "+";
              } else {
                element.textContent = Math.floor(currentNumber) + "%";
              }
              requestAnimationFrame(update);
            } else {
              if (targetNumber === 40 || targetNumber === 3) {
                element.textContent = targetNumber + "+";
              } else {
                element.textContent = targetNumber + "%";
              }
            }
          };
          update();
        });
      };
      updateNumbersOnScroll();
    }
  }, [isScrolled]);

  return (
    <section className={styles.root} id="whyUs">
      <article
        className={`${styles.text_block} animated-element-left ${
          isAnimated ? "animate" : ""
        }`}
        ref={ref}
      >
        <h1>{t("why_h")}</h1>
        <p>{t("why_p1")}</p>
        <p>{t("why_p2")}</p>
        <p>{t("why_p3")}</p>
        <a href="tel:+380684151233">
          <img alt="Phone" src={Phone} />
          {t("welcome_btn")}
        </a>
      </article>
      <article className={styles.card_block}>
        {targetNumbers.map((card) => {
          return (
            <div key={card.id} className={styles.card_item}>
              <h1 ref={(el) => (numberElements.current[card.id] = el)}>15+</h1>
              <p>{t(card.title)}</p>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default WhyUs;
