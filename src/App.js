import React, { Component } from "react";
import * as Tone from 'tone'
import { Chord, Scale } from "@tonaljs/modules";
import ChordCard from './components/molecules/cards/chordCard/chordCard'
import ChordScalePlayer from "./components/atoms/chordScalePlayer/chordScalePlayer";
import Footer from "./components/atoms/footer";
import Header from './components/atoms/header';
import ScaleCard from './components/molecules/cards/scaleCard/scaleCard'
import BpmSlider from './components/atoms/bpmSlider'


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

  handleBpmChange(bpm) {
    Tone.Transport.bpm.value = bpm;
  }

  render() {
    return (
      <div className="wrapper">
        <Header>
          ScaleGrasper
        </Header>
        <div className="container">
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
          <div className="controllerWrapper">
            <BpmSlider onBpmChange={bpm => this.handleBpmChange(bpm)} />
          </div>
          <div className="chordScaleWrapper">
            <ChordScalePlayer
              notes={this.state.currentScaleNotes}
              chord={this.state.chord}
            ></ChordScalePlayer>
          </div>
        </div>
        <Footer />

        <style jsx>{`
          .wrapper {
            height: 100%;
          }
          .container {
            display: flex:
            justify-content: center;
            padding: 0 5%;
            margin: 0 auto;
            height: 100%;
          }
          .cardsWrapper {
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 75%;
          }
          .controllerWrapper {
            display:flex;
            margin: 0 auto;
          }
          .chordScaleWrapper {
            width: 10%;
            height: 10%;
            margin: 0 auto;
            margin-top: 3%;
          }
        `}
        </style>
      </div>
    );
  }
}

export default App;
