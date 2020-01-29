import React, { useEffect } from "react";
import { Tonal, Chord } from "@tonaljs/modules";
import Vex from "vexflow";
import styles from "./chordNotes.module.css";

const ChordNotes = props => {
  useEffect(() => {
    document.getElementById("chordNotes").innerHTML = "";
    let chordNotes = Chord.chord(props.chord).notes;

    let octave = 4;
    chordNotes = chordNotes
      .map((note, index) => {
        // set chord notes to root position
        if (
          index > 0 &&
          Tonal.note(note).chroma < Tonal.note(chordNotes[index - 1]).chroma
        ) {
          octave += 1;
        }
        return note + octave.toString();
      })
      .join(" ");
    console.log(chordNotes);
    var vf = new Vex.Flow.Factory({
      renderer: { elementId: "chordNotes", width: 150, height: 120 }
    });
    var score = vf.EasyScore();
    var system = vf.System();
    system
      .addStave({
        voices: [score.voice(score.notes(`(${chordNotes})/w`))]
      })
      .addClef("treble")
      .addTimeSignature("4/4");

    vf.draw();
  });
  return <div className={styles.chordNotesWrapper} id="chordNotes"></div>;
};

export default ChordNotes;
