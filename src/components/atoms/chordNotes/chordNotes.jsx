import React, { useEffect } from "react";
import Vex from "vexflow";
import styles from "./chordNotes.module.css";

const ChordNotes = props => {
  useEffect(() => {
    document.getElementById("chordNotes").innerHTML = "";
    var vf = new Vex.Flow.Factory({
      renderer: { elementId: "chordNotes", width: 150, height: 120 }
    });
    var score = vf.EasyScore();
    var system = vf.System();
    system
      .addStave({
        voices: [score.voice(score.notes(`(${props.notes.join(" ")})/w`))]
      })
      .addClef("treble")
      .addTimeSignature("4/4");

    vf.draw();
  });
  return <div className={styles.chordNotesWrapper} id="chordNotes"></div>;
};

export default ChordNotes;
