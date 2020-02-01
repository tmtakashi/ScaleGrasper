import React, { Component } from "react";
import * as Tone from "tone";

class ScalePlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      synth: new Tone.Synth().toMaster(),
      sequence: this.getNewSequence()
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.notes !== prevProps.notes) {
      this.setState({ sequence: this.getNewSequence() });
    }
  }

  getNewSequence() {
    Tone.Transport.cancel();
    let sequence = new Tone.Sequence(
      (time, note) => {
        console.log(note);
        this.state.synth.triggerAttackRelease(note, "4n", time);
      },
      this.props.notes,
      "4n"
    ).start(0);
    sequence.loop = false;
    return sequence;
  }

  playScale() {
    Tone.Transport.stop();
    Tone.Transport.position = 0;
    Tone.Transport.start();
  }

  render() {
    return (
      <div>
        <button onClick={this.playScale} id="playChord">
          Play scale
        </button>
      </div>
    );
  }
}

export default ScalePlayer;
