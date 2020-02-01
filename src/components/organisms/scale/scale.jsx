import React, { useState } from "react";
import { Chord, Scale as TonalScale } from "@tonaljs/modules";
import ScaleNotes from "../../atoms/scaleNotes/scaleNotes";
import styles from "./scale.module.css";

const Scale = props => {
  const chordScales = Chord.chordScales(Object.values(props.chord).join(""));
  const [currentScale, setCurrentScale] = useState(chordScales[0]);
  const [currentScaleNotes, setCurrentScaleNotes] = useState(
    TonalScale.scale(props.chord.root + "4 " + currentScale).notes
  );

  const handleScaleChange = e => {
    let clickedScale = e.target.value;
    setCurrentScale(clickedScale);
    setCurrentScaleNotes(
      TonalScale.scale(props.chord.root + "4 " + clickedScale).notes
    );
  };

  return (
    <div className={styles.scale}>
      <div>{props.chord.root + " " + currentScale}</div>
      <select value={currentScale} onChange={handleScaleChange}>
        {chordScales.map(scale => {
          return (
            <option value={scale} key={scale}>
              {scale}
            </option>
          );
        })}
      </select>
      <ScaleNotes notes={currentScaleNotes}></ScaleNotes>
    </div>
  );
};

export default Scale;
