import React, { Component } from "react";
import { Chord, Scale as TonalScale } from "@tonaljs/modules";
import ScaleNotes from "../../atoms/scaleNotes/scaleNotes";
import ScalePlayer from "../../atoms/scalePlayer/scalePlayer";
import styles from "./scale.module.css";

class Scale extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chordScales: this.getChordScales()
    };
  }

  componentDidMount() {
    this.updateScale();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.chord !== this.props.chord) {
      this.updateScale();
    }
  }

  getChordScales() {
    return Chord.chordScales(Object.values(this.props.chord).join(""));
  }

  getScaleNotes(scale) {
    return TonalScale.scale(this.props.chord.root + "4 " + scale).notes;
  }

  updateScale() {
    let currentScale = this.getChordScales()[0];
    this.setState({
      chordScales: this.getChordScales(),
      currentScale: currentScale,
      currentScaleNotes: this.getScaleNotes(currentScale)
    });
  }

  handleScaleChange(e) {
    let clickedScale = e.target.value;
    this.setState({
      currentScale: clickedScale,
      currentScaleNotes: TonalScale.scale(
        this.props.chord.root + "4 " + clickedScale
      ).notes
    });
  }

  render() {
    return (
      <div className={styles.scale}>
        <div>{this.props.chord.root + " " + this.state.currentScale}</div>
        <select
          value={this.state.currentScale}
          onChange={this.handleScaleChange.bind(this)}
        >
          {this.state.chordScales.map(scale => {
            return (
              <option value={scale} key={scale}>
                {scale}
              </option>
            );
          })}
        </select>
        <ScaleNotes notes={this.state.currentScaleNotes}></ScaleNotes>
        <ScalePlayer notes={this.state.currentScaleNotes}></ScalePlayer>
      </div>
    );
  }
}

export default Scale;
