import styles from "./AboutUs.module.scss";
import { useContext } from "react";

import AboutImage from "../../assets/about-us-illustration.png";

import useAnimate from "../../hooks/useAnimate";
import Context from "../../hooks/Context";

const AboutUs = () => {
  const { ref, isAnimated } = useAnimate();
  const t = useContext(Context);

  return (
    <section
      className={`${styles.root} animated-element-left ${
        isAnimated ? "animate" : ""
      }`}
      ref={ref}
      id="aboutUs"
    >
      <img alt="About us" src={AboutImage} className={styles.image} />
      <article className={styles.text_block}>
        <h1>{t("about_h")}</h1>
        <p>{t("about_p1")}</p>
        <p>{t("about_p2")}</p>
      </article>
    </section>
  );
};

export default AboutUs;
