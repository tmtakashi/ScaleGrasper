import React from "react";
import * as Tone from "tone";

const ChordPlayer = props => {
  let polySynth = new Tone.PolySynth(4, Tone.Synth).connect(
    new Tone.Gain(0.1).toMaster()
  );
  return (
    <div>
      <button
        onClick={() => {
          playChord(polySynth, props.notes);
        }}
        id="playChord"
      >
        Play chord
      </button>
    </div>
  );
};

const playChord = (polySynth, notes) => {
  Tone.Transport.cancel();
  polySynth.triggerAttackRelease(notes, "1m");
};

export default ChordPlayer;
