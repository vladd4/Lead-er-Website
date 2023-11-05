import styles from "./Header.module.scss";
import { useContext, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import Logo from "../../assets/logo-white-theme.png";
import Burger from "../../assets/burger-menu-icon.png";
import Arrow from "../../assets/arrow-icon.png";

import Context from "../../hooks/Context";
import BurgerMenu from "../Burger/BurgerMenu";

import { nav_links } from "../../store/nav_links";

const Header = ({ i18n }) => {
  const t = useContext(Context);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    language === "en"
      ? document.querySelector("#en").classList.add(styles.current_lang)
      : document.querySelector("#en").classList.remove(styles.current_lang);
    language === "ua"
      ? document.querySelector("#ua").classList.add(styles.current_lang)
      : document.querySelector("#ua").classList.remove(styles.current_lang);
  };
  return (
    <header className={styles.root}>
      <img alt="Leader" src={Logo} className={styles.logo} />
      <nav className={styles.navigation}>
        {nav_links.map((link) => {
          return (
            <AnchorLink key={link.title} href={`#${link.href}`}>
              {t(link.title)}
            </AnchorLink>
          );
        })}
        <img
          alt="Burger"
          src={Burger}
          className={`${styles.burger} ${clicked ? styles.rotated : ""}`}
          onClick={handleClick}
        />
        <div className={styles.language_block}>
          <p
            id="en"
            onClick={(e) => {
              changeLanguage("en");
              e.preventDefault();
            }}
          >
            Eng
          </p>
          <span>|</span>
          <p
            id="ua"
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
      <AnchorLink href="#form" className={styles.button}>
        <img alt="Arrow" src={Arrow} />
        {t("header_btn")}
      </AnchorLink>
      <BurgerMenu
        clicked={clicked}
        setClicked={setClicked}
        i18n={i18n}
      ></BurgerMenu>
    </header>
  );
};

export default Header;
