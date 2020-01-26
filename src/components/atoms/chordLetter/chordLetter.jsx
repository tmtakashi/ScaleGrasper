import React from "react";
import styles from "./chordLetter.module.css";

const ChordLetter = props => {
  return (
    <div
      className={styles.letterBox}
      onClick={() => {
        props.onClick();
      }}
    >
      <span className={styles.letter}>{props.children}</span>
    </div>
  );
};

export default ChordLetter;
