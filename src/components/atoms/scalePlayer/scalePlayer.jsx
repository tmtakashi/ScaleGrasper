import React, { Component } from "react";
import * as Tone from "tone";
import PlayerButton from "../../atoms/playerButton";

class ScalePlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      synth: new Tone.Synth({
        oscillator: {
          type: "square"
        }
      }).connect(new Tone.Gain(0.1).toMaster()),
      sequence: this.getNewSequence()
    };
  }

  getNewSequence() {
    Tone.Transport.cancel();
    let sequence = new Tone.Sequence(
      (time, note) => {
        this.state.synth.triggerAttackRelease(note, "4n", time);
      },
      this.props.notes,
      "4n"
    ).start(0);
    sequence.loop = false;
    return sequence;
  }

  playScale() {
    this.getNewSequence();
    Tone.Transport.stop();
    Tone.Transport.position = 0;
    Tone.Transport.start();
  }

  render() {
    return (
      <PlayerButton onClick={this.playScale.bind(this)} id="playChord">
        Play scale
      </PlayerButton>
    );
  }
}

export default ScalePlayer;
