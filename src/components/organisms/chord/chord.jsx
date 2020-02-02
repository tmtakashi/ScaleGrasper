import React from "react";
import ChordLetter from "../../atoms/chordLetter/chordLetter";
import ChordNotes from "../../atoms/chordNotes/chordNotes";
import ChordPlayer from "../../atoms/chordPlayer/chordPlayer";
import { chordToNotes } from "../../../lib/converter";
import styles from "./chord.module.css";

const Chord = props => {
  let notes = chordToNotes(props.chord);
  return (
    <div>
      <div className={styles.chord}>
        <ChordLetter>{props.chord.root}</ChordLetter>
        <ChordLetter>{props.chord.type}</ChordLetter>
        <ChordNotes notes={notes}></ChordNotes>
      </div>
      <div className={styles.playChordWrapper}>
        <ChordPlayer notes={notes}></ChordPlayer>
      </div>
    </div>
  );
};

export default Chord;
