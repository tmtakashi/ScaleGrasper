import React, { Component } from "react";
import Vex from "vexflow";
import styles from "./scaleNotes.module.css";

const { Accidental, Formatter, Stave, StaveNote, Renderer } = Vex.Flow;

const ACCIDENTAL_REGEX = /[#b]+/;
const OCTAVE_REGREX = /\d/;

class ScaleNotes extends Component {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
    this.state = {
      renderer: null
    };
  }

  componentDidMount() {
    this.setState({
      renderer: new Renderer(this.wrapperRef.current, Renderer.Backends.SVG)
    });
  }

  componentDidUpdate() {
    this.renderScale();
  }

  firstStaveNotes() {
    return this.props.notes.slice(0, 4).map(note => {
      let accidental = note.match(ACCIDENTAL_REGEX);
      let octave = note.match(OCTAVE_REGREX)[0];
      let staveNote = new StaveNote({
        clef: "treble",
        keys: [note.slice(0, 1).toLowerCase() + "/" + octave],
        duration: "q"
      });
      if (accidental) {
        staveNote.addAccidental(0, new Accidental(accidental[0]));
      }
      return staveNote;
    });
  }

  secondStaveNotes() {
    let secondHalf = this.props.notes.slice(4, this.props.notes.length);
    let secondNotes = secondHalf.map(note => {
      let accidental = note.match(ACCIDENTAL_REGEX);
      let octave = note.match(OCTAVE_REGREX)[0];
      let staveNote = new StaveNote({
        clef: "treble",
        keys: [note.substring(0, 1).toLowerCase() + "/" + octave],
        duration: "q"
      });
      if (accidental) {
        staveNote.addAccidental(0, new Accidental(accidental[0]));
      }
      return staveNote;
    });
    // add extra rests
    let numRests = 4 - secondHalf.length;
    for (let i = 0; i < numRests; i++) {
      secondNotes.push(
        new StaveNote({ clef: "treble", keys: ["b/4"], duration: "qr" })
      );
    }
    return secondNotes;
  }

  renderScale() {
    this.state.renderer.resize(750, 100);
    let context = this.state.renderer.getContext();
    context.clear();
    context.setViewBox(0, 0, 1200, 100);

    let firstStave = new Stave(20, 0, 300);
    firstStave.addClef("treble");
    firstStave.setContext(context).draw();
    let firstNotes = this.firstStaveNotes();
    Formatter.FormatAndDraw(context, firstStave, firstNotes);

    let secondStave = new Stave(320, 0, 300);
    secondStave.setContext(context).draw();

    let secondNotes = this.secondStaveNotes();
    Formatter.FormatAndDraw(context, secondStave, secondNotes);
  }

  render() {
    return (
      <div
        className={styles.scaleNotesWrapper}
        id="scaleNotes"
        ref={this.wrapperRef}
        dangerouslySetInnerHTML={{ __html: "" }}
      ></div>
    );
  }
}

export default ScaleNotes;
