import styles from "./Footer.module.scss";

import Logo from "../../assets/logo.png";
import Insta from "../../assets/instagram-icon-dark.png";
import Face from "../../assets/facebook-icon-dark.png";
import Phone from "../../assets/phone-icon-dark.png";
import Mail from "../../assets/mail-icon.png";

import useAnimate from "../../hooks/useAnimate";

const Footer = () => {
  const { ref, isAnimated } = useAnimate();
  return (
    <footer
      className={`${styles.root} animated-element-left ${
        isAnimated ? "animate" : ""
      }`}
      ref={ref}
    >
      <img alt="Leader" src={Logo} className={styles.logo} />
      <div className={styles.center_block}>
        <div>
          <img alt="Mail" src={Mail} />
          <a href="mailto:sashalychak123@gmail.com">sashalychak123@gmail.com</a>
        </div>
        <p>Lead-er © All rights reserved.</p>
        <div>
          <img alt="Phone" src={Phone} />
          <a href="tel:+380684151233">+380 (68) 415-12-33</a>
        </div>
      </div>
      <div className={styles.icons_block}>
        <a
          href="https://instagram.com/sashaluchak20?igshid=OGQ5ZDc2ODk2ZA=="
          target="_blank"
          rel="noreferrer"
        >
          <img alt="Instagram" src={Insta} />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61553362610336"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="Facebook" src={Face} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
