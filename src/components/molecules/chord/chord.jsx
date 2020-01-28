import React from "react";
import ChordLetter from "../../atoms/chordLetter/chordLetter";
import styles from "./chord.module.css";

const Chord = props => {
  return (
    <div className={styles.chord}>
      <ChordLetter>{props.chord.root}</ChordLetter>
      <ChordLetter>{props.chord.type}</ChordLetter>
    </div>
  );
};

export default Chord;
