import React, { Component } from "react";
import Chord from "./components/organisms/chord/chord";
import Scale from "./components/organisms/scale/scale";
import PalleteModal from "./components/organisms/palleteModal/palleteModal"
import ChordCard from './components/molecules/cards/chordCard/chordCard'
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
          choices: ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B']
        },
        types: {
          title: 'Types',
          choices: ['M', 'm', 'M7', 'm7', '7', 'mM7']
        }
      },
      modalIsOpen: false
    };
  }

  openModal() {
    this.setState({ modalIsOpen: true })
  }

  closeModal() {
    this.setState({ modalIsOpen: false })
  }

  editChord(choice, palleteType) {
    let chord = { ...this.state.chord };
    chord[palleteType] = choice;
    this.setState({ chord: chord })
  }

  render() {
    return (
      <div className={styles.app}>
        <Chord
          chord={this.state.chord}
        ></Chord>

        <PalleteModal
          modalIsOpen={this.state.modalIsOpen}
          openModal={() => { this.openModal() }}
          closeModal={() => { this.closeModal() }}
          selectOption={(choice, palleteType) => { this.editChord(choice, palleteType) }}
          pallete={this.state.pallete}
        ></PalleteModal>

        <Scale chord={this.state.chord}></Scale>

        <ChordCard></ChordCard>
      </div>
    );
  }
}

export default App;
