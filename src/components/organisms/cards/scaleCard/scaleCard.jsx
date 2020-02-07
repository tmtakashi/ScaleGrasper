import React from "react";
import styled from "styled-components";
import ScaleNotes from "../../../atoms/scaleNotes/scaleNotes";
import ScalePlayer from "../../../atoms/scalePlayer/scalePlayer";
import ScaleSelector from "../../../atoms/scaleSelector";
import Card from "../../../atoms/card";
import CardTitle from "../../../atoms/cardTitle/cardTitle";

const ScaleCard = props => {
  return (
    <Card>
      <TitleButtonWrapper>
        <TitleWrapper>
          <CardTitle>{props.chord.root + " " + props.currentScale}</CardTitle>
        </TitleWrapper>
        <ScaleSelector
          currentScale={props.currentScale}
          chordScales={props.chordScales}
          onScaleChange={scale => {
            props.onScaleChange(scale);
          }}
        />
      </TitleButtonWrapper>
      <PlayerNotesWrapper>
        <ScalePlayer notes={props.currentScaleNotes}></ScalePlayer>
        <NotesWrapper>
          <ScaleNotes notes={props.currentScaleNotes}></ScaleNotes>
        </NotesWrapper>
      </PlayerNotesWrapper>
    </Card>
  );
};

const TitleButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 30%;
  padding: 3% 3%;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 20%;
  min-width: 60%;
  margin-right: 5%;
`;

const PlayerNotesWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 50%;
  padding 0 5%;
`;

const NotesWrapper = styled.div`
  margin-left: 5%;
`;

export default ScaleCard;
