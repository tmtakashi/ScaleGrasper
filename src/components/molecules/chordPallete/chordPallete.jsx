import React from "react";
import ChordPalleteOption from "../../atoms/chordPalleteOption/chordPalleteOption";
import styles from "./chordPallete.module.css";

const ChordPallete = props => {
  return (
    <div className={styles.chordPallete}>
      <span className={styles.title}>{props.title}</span>
      <div className={styles.options}>
        {props.choices.map(choice => {
          return <ChordPalleteOption key={choice}>{choice}</ChordPalleteOption>;
        })}
      </div>
    </div>
  );
};

export default ChordPallete;
