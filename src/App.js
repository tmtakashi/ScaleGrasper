import React, { Component } from "react";
import { Chord, Scale } from "@tonaljs/modules";
import ChordCard from './components/molecules/cards/chordCard/chordCard'
import ScaleCard from './components/molecules/cards/scaleCard/scaleCard'
import ChordScalePlayer from "./components/atoms/chordScalePlayer/chordScalePlayer";


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
      chordScales: [],
      currentScale: '',
      currentScaleNotes: []
    };
  }

  componentDidMount() {
    this.updateScale();
  }

  componentDidUpdate(_, prevState) {
    if (prevState.chord !== this.state.chord) {
      this.updateScale();
    }
  }

  getChordScales() {
    return Chord.chordScales(Object.values(this.state.chord).join(""));
  }

  getScaleNotes(scale) {
    return Scale.scale(this.state.chord.root + "4 " + scale).notes;
  }

  updateScale() {
    let currentScale = this.getChordScales()[0];
    this.setState({
      chordScales: this.getChordScales(),
      currentScale: currentScale,
      currentScaleNotes: this.getScaleNotes(currentScale)
    });
  }

  handleEditChord(choice, palleteType) {
    let chord = { ...this.state.chord };
    chord[palleteType] = choice;
    this.setState({ chord: chord })
  }

  handleScaleChange(selectedScale) {
    this.setState({
      currentScale: selectedScale,
      currentScaleNotes: Scale.scale(
        this.state.chord.root + "4 " + selectedScale
      ).notes
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="cardsWrapper">
          <ChordCard chord={this.state.chord}
            pallete={this.state.pallete}
            editChord={(choice, palleteType) => { this.handleEditChord(choice, palleteType) }} />
          <ScaleCard
            chord={this.state.chord}
            chordScales={this.state.chordScales}
            currentScale={this.state.currentScale}
            currentScaleNotes={this.state.currentScaleNotes}
            onScaleChange={(selectedScale) => this.handleScaleChange(selectedScale)}
          ></ScaleCard>
        </div>
        <div className="chordScaleWrapper">
          <ChordScalePlayer
            notes={this.state.currentScaleNotes}
            chord={this.state.chord}
          ></ChordScalePlayer>
        </div>

        <style jsx>{`
          .wrapper {
            height: 100%;
          }
          .cardsWrapper {
            margin: 0 auto;
            padding: 0 10%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 70%;
          }
          .chordScaleWrapper {
            width: 10%;
            height: 10%;
            margin: 0 auto;
          }
        `}
        </style>
      </div>
    );
  }
}

export default App;
