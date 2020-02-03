import React from "react";
import * as Tone from "tone";
import PlayerButton from "../playerButton";

const ChordPlayer = props => {
  let polySynth = new Tone.PolySynth(4, Tone.Synth).connect(
    new Tone.Gain(0.1).toMaster()
  );
  return (
    <PlayerButton
      onClick={() => {
        playChord(polySynth, props.notes);
      }}
    >
      Play chord
    </PlayerButton>
  );
};

const playChord = (polySynth, notes) => {
  Tone.Transport.cancel();
  polySynth.triggerAttackRelease(notes, "1m");
};

export default ChordPlayer;
