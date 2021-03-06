import React, { Component } from "react";
import styled from "styled-components";
import Vex from "vexflow";

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
    const context = this.state.renderer.getContext();
    context.clear();

    const svg = context.svg;
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.setAttribute("viewBox", "0 0 580 120"); // or whatever your defaults were
    svg.setAttribute("preserveAspectRatio", "xMidYMid");

    const firstStave = new Stave(20, 0, 300);
    firstStave.addClef("treble");
    firstStave.setContext(context).draw();
    const firstNotes = this.firstStaveNotes();
    Formatter.FormatAndDraw(context, firstStave, firstNotes);

    const secondStave = new Stave(320, 0, 300);
    secondStave.setContext(context).draw();

    const secondNotes = this.secondStaveNotes();
    Formatter.FormatAndDraw(context, secondStave, secondNotes);
  }

  render() {
    return <Container id="scaleNotes" ref={this.wrapperRef}></Container>;
  }
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export default ScaleNotes;
