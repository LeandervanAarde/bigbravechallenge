import React from "react";
import styles from "./LeandervanAarde.module.scss";
import { ReactComponent as Pants } from "../../Assets/pants.svg";

export default function LeandervanAarde({ head, shoulder, knessAndToes }) {
  return (
    <>
      <h3 className={styles.headingThree}>Created by</h3>

      <div className={styles.createdBy}>
        <img src={head} alt="developer" className={styles.createdBy__head} />
        <img
          src={shoulder}
          alt="developer"
          className={styles.createdBy__body}
        />
        <Pants className={styles.createdBy__pants} />
      </div>

      <h4 className={styles.headingThree}>Leander van Aarde</h4>
    </>
  );
}
