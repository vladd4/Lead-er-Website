import { useContext } from "react";
import styles from "./Burger.module.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";

import Context from "../../hooks/Context";
import { nav_links } from "../../store/nav_links";

const BurgerMenu = ({ clicked, setClicked, i18n }) => {
  const t = useContext(Context);
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    language === "en"
      ? document.querySelector("#en2").classList.add(styles.current_lang)
      : document.querySelector("#en2").classList.remove(styles.current_lang);
    language === "ua"
      ? document.querySelector("#ua2").classList.add(styles.current_lang)
      : document.querySelector("#ua2").classList.remove(styles.current_lang);
  };
  return (
    <article
      id="burger"
      className={`${styles.root} ${clicked ? styles.showBurger : ""}`}
    >
      <nav className={styles.navigation}>
        {nav_links.map((link) => {
          return (
            <AnchorLink
              key={link.href}
              onClick={() => setClicked(!clicked)}
              href={`#${link.href}`}
            >
              {t(link.title)}
            </AnchorLink>
          );
        })}
        <div className={styles.language_block}>
          <p
            id="en2"
            onClick={(e) => {
              changeLanguage("en");
              e.preventDefault();
            }}
          >
            Eng
          </p>
          <span>|</span>
          <p
            id="ua2"
            className={styles.current_lang}
            onClick={(e) => {
              changeLanguage("ua");
              e.preventDefault();
            }}
          >
            Ua
          </p>
        </div>
      </nav>
    </article>
  );
};
export default BurgerMenu;
