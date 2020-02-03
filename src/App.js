import React, { Component } from "react";
import Scale from "./components/organisms/scale/scale";
import ChordCard from './components/molecules/cards/chordCard/chordCard'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chord: {
        root: 'C',
        type: 'M7',
      },
      pallete: {
        roots: {
          title: 'Roots',
          choices: ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B']
        },
        types: {
          title: 'Chord Types',
          choices: ['M', 'm', 'M7', 'm7', '7', 'mM7']
        }
      },
    };
  }

  handleEditChord(choice, palleteType) {
    let chord = { ...this.state.chord };
    chord[palleteType] = choice;
    this.setState({ chord: chord })
  }

  render() {
    return (
      <div className="wrapper">
        <ChordCard chord={this.state.chord}
          pallete={this.state.pallete}
          editChord={(choice, palleteType) => { this.handleEditChord(choice, palleteType) }} />

        <Scale chord={this.state.chord}></Scale>

        <style jsx>{`
          .wrapper {
            height: 100%;
          }
        `}
        </style>
      </div>
    );
  }
}

export default App;
