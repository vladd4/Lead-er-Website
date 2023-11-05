import styles from "./WorkWith.module.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useContext } from "react";

import Arrow from "../../assets/arrow-icon.png";

import Context from "../../hooks/Context";

import { work_cards } from "../../store/work_with";

const WorkWith = () => {
  const t = useContext(Context);

  return (
    <section className={styles.root} id="workWith">
      <h1>{t("work_h")}</h1>
      <article className={styles.cards}>
        {work_cards.map((card) => {
          return (
            <div key={card.title} className={styles.card}>
              <img alt="TikTok" src={card.image} />
              <p>{t(card.title)}</p>
              <ul>
                {card.info.map((li) => {
                  return <li key={li}>{t(li)}</li>;
                })}
              </ul>
              <AnchorLink href="#form" className={styles.button}>
                <img alt="Arrow" src={Arrow} /> {t("work_btn")}
              </AnchorLink>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default WorkWith;
