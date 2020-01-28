import React from "react";
import styles from "./chordPalleteOption.module.css";

const ChordPalleteOption = props => {
  return (
    <div
      onClick={() => {
        props.selectOption(props.children);
      }}
      className={styles.box}
    >
      <span>{props.children}</span>
    </div>
  );
};

export default ChordPalleteOption;
