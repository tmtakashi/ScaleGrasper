import React from "react";
import styles from "./chordPalleteOption.module.css";

const ChordPalleteOption = props => {
  return (
    <div className={styles.box}>
      <span>{props.children}</span>
    </div>
  );
};

export default ChordPalleteOption;
