import React, { Component } from "react";
import { chordToNotes } from "../../../lib/converter";
import * as Tone from "tone";

class ChordScalePlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      synth: new Tone.Synth({
        oscillator: {
          type: "square"
        }
      }).connect(new Tone.Gain(0.1).toMaster()),
      polySynth: new Tone.PolySynth(4, Tone.Synth).connect(
        new Tone.Gain(0.1).toMaster()
      )
    };
  }

  getNewSequence() {
    Tone.Transport.cancel();
    const { root, type } = this.props.chord;
    let chordNotes = chordToNotes(root + type);
    let chordSequence = new Tone.Part(
      (time, chord) => {
        this.state.polySynth.triggerAttackRelease(chord, "2m", time);
      },
      [[0, chordNotes]]
    ).start(0);
    chordSequence.loop = false;

    let scaleSequence = new Tone.Sequence(
      (time, note) => {
        this.state.synth.triggerAttackRelease(note, "4n", time);
      },
      this.props.notes,
      "4n"
    ).start(0);
    scaleSequence.loop = false;
  }

  playChordScale() {
    this.getNewSequence();
    Tone.Transport.stop();
    Tone.Transport.position = 0;
    Tone.Transport.start();
  }

  render() {
    return (
      <div>
        <button onClick={this.playChordScale.bind(this)}>
          Play chord and scale
        </button>
      </div>
    );
  }
}

export default ChordScalePlayer;
