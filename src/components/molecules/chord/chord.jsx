import React from "react";
import { Tonal } from "@tonaljs/modules";
import { Chord as ChordTonal } from "@tonaljs/modules";
import ChordLetter from "../../atoms/chordLetter/chordLetter";
import ChordNotes from "../../atoms/chordNotes/chordNotes";
import ChordPlayer from "../../atoms/chordPlayer/chordPlayer";
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

const chordToNotes = chord => {
  let notes = ChordTonal.chord(Object.values(chord)).notes;
  let octave = Tonal.note(notes[0]).chroma < 9 ? 4 : 3;
  notes = notes.map((note, index) => {
    // set chord notes to root position
    if (
      index > 0 &&
      Tonal.note(note).chroma < Tonal.note(notes[index - 1]).chroma
    ) {
      octave += 1;
    }
    return note + octave.toString();
  });
  return notes;
};

export default Chord;
