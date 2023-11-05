import { useContext } from "react";
import styles from "./Etaps.module.scss";

import Context from "../../hooks/Context";
import { etaps_info } from "../../store/etaps_info";

const Etaps = () => {
  const t = useContext(Context);

  return (
    <section className={styles.root} id="etaps">
      <h1>{t("etaps_h")}</h1>
      {etaps_info.map((etap) => {
        return (
          <article className={styles.row} key={etap.number}>
            {etap.number === 1 ? (
              <div className={styles.circle_block_1}>
                <div className={styles.circle}></div>
                <span className={styles.line}></span>
              </div>
            ) : etap.number === 6 ? (
              <div className={styles.circle_block_6}>
                <span className={styles.line}></span>
                <div className={styles.circle}></div>
              </div>
            ) : (
              <div className={styles.circle_block}>
                <span className={styles.line}></span>
                <div className={styles.circle}></div>
                <span className={styles.line}></span>
              </div>
            )}

            <h1>{etap.number}</h1>
            <p>{t(etap.info)}</p>
          </article>
        );
      })}
      <h1 className={styles.form_h}>{t("form_h")}</h1>
    </section>
  );
};
export default Etaps;
