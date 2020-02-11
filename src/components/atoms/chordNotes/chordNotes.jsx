import React, { useEffect } from "react";
import styled from "styled-components";
import Vex from "vexflow";

const ChordNotes = props => {
  useEffect(() => {
    document.getElementById("chordNotes").innerHTML = "";
    const vf = new Vex.Flow.Factory({
      renderer: { elementId: "chordNotes" }
    });
    const score = vf.EasyScore();
    const system = vf.System();
    system
      .addStave({
        voices: [score.voice(score.notes(`(${props.notes.join(" ")})/w`))]
      })
      .addClef("treble");

    const svg = vf.context.svg;
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.setAttribute("viewBox", "0 0 150 150"); // or whatever your defaults were
    svg.setAttribute("preserveAspectRatio", "xMidYMid");

    vf.draw();
  });
  return <Container id="chordNotes"></Container>;
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export default ChordNotes;
