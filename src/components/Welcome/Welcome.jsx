import styles from "./Welcome.module.scss";
import { useContext } from "react";

import Phone from "../../assets/phone-icon.png";

import useAnimate from "../../hooks/useAnimate";
import Context from "../../hooks/Context";

const Welcome = () => {
  const { ref, isAnimated } = useAnimate();
  const t = useContext(Context);
  return (
    <section className={styles.root} id="welcome">
      <article
        className={`${styles.wrapper} animated-element ${
          isAnimated ? "animate" : ""
        }`}
        ref={ref}
      >
        <h1>{t("welcome_h")}</h1>
        <p>{t("welcome_p")}</p>
        <a href="tel:+380684151233">
          <img alt="Phone" src={Phone} />
          {t("welcome_btn")}
        </a>
      </article>
    </section>
  );
};

export default Welcome;
