import React from "react";
import ChordLetter from "../../atoms/chordLetter/chordLetter";
import ChordNotes from "../../atoms/chordNotes/chordNotes";
import styles from "./chord.module.css";

const Chord = props => {
  return (
    <div className={styles.chord}>
      <ChordLetter>{props.chord.root}</ChordLetter>
      <ChordLetter>{props.chord.type}</ChordLetter>
      <ChordNotes chord={props.chord.root + props.chord.type}></ChordNotes>
    </div>
  );
};

export default Chord;
