import styles from "./Form.module.scss";
import React, { useContext } from "react";

import Arrow from "../../assets/arrow-icon.png";

import { sendFormToTelegram } from "../../utils/sendForm";
import useAnimate from "../../hooks/useAnimate";
import Context from "../../hooks/Context";

const Form = () => {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [mail, setMail] = React.useState("");
  const { ref, isAnimated } = useAnimate();
  const t = useContext(Context);

  const handleClick = (e) => {
    e.preventDefault();
    if (name.trim() === "" || phone.trim() === "") {
      alert("Заповніть, будь-ласка, необхідні поля!");
      return;
    }
    const string = `Проект: Leader \nІм'я: ${name} \nНомер телефону: ${phone} \nE-mail: ${mail}`;
    sendFormToTelegram(string);
    setName("");
    setMail("");
    setPhone("");
  };

  return (
    <section className={styles.root} id="form">
      <h1
        className={`animated-element-left ${isAnimated ? "animate" : ""}`}
        ref={ref}
      >
        {t("form_h3")} <b>{t("form_h3_b")}</b>.
      </h1>
      <article
        className={`${styles.form} animated-element-right ${
          isAnimated ? "animate" : ""
        }`}
        ref={ref}
      >
        <input
          type="text"
          placeholder={t("form_name")}
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder={t("form_mail")}
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        <input
          type="text"
          placeholder={t("form_tel")}
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
        />
        <button onClick={(e) => handleClick(e)}>
          <img alt="Arrow" src={Arrow} /> {t("form_btn")}
        </button>
      </article>
    </section>
  );
};

export default Form;
