import React, { Component } from "react";
import Chord from "./components/molecules/chord/chord";
import PalleteContainer from "./components/organisms/palleteContainer/palleteContainer"
import styles from './App.module.css'

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
          choices: ['C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B']
        },
        types: {
          title: 'Types',
          choices: ['M', 'm', 'M7', 'm7', '7',]
        }
      },
      showPallete: {
        roots: false,
        types: false
      }
    };
  }

  toggleChordPallete(label) {
    let showPallete = { ...this.state.showPallete }
    if (label === 'roots') {
      showPallete.roots = !showPallete.roots
    } else {
      showPallete.types = !showPallete.types
    }
    this.setState({ showPallete: showPallete })
  }
  render() {
    return (
      <div className={styles.app}>
        <Chord
          chord={this.state.chord}
          onClick={(label) => { this.toggleChordPallete(label) }}
        ></Chord>
        <PalleteContainer
          pallete={this.state.pallete}
          showPallete={this.state.showPallete}
        ></PalleteContainer>
      </div>
    );
  }
}

export default App;
