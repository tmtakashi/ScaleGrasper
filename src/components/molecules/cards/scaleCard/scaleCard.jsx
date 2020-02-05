import React from "react";
import ScaleNotes from "../../../atoms/scaleNotes/scaleNotes";
import ScalePlayer from "../../../atoms/scalePlayer/scalePlayer";
import ScaleSelector from "../../../atoms/scaleSelector";
import Card from "../../../atoms/card";
import CardTitle from "../../../atoms/cardTitle/cardTitle";

const ScaleCard = props => {
  return (
    <Card>
      <div className="letterButtonWrapper">
        <div className="letterWrapper">
          <CardTitle>{props.chord.root + " " + props.currentScale}</CardTitle>
        </div>
        <ScaleSelector
          currentScale={props.currentScale}
          chordScales={props.chordScales}
          onScaleChange={scale => {
            props.onScaleChange(scale);
          }}
        />
      </div>
      <div className="playerNotesWrapper">
        <ScalePlayer notes={props.currentScaleNotes}></ScalePlayer>
        <div className="notesWrapper">
          <ScaleNotes notes={props.currentScaleNotes}></ScaleNotes>
        </div>
      </div>
      <style jsx>
        {`
            .letterButtonWrapper {
              display: flex;
              align-items: center;
              height: 30%;
              padding: 3% 3%;
            }
            .letterWrapper {
              display: flex;
              align-items: center;
              height: 20%;
              min-width: 60%;
              margin-right: 5%;
            }
            .playerNotesWrapper {
              display: flex;
              align-items: center;
              height: 50%;
              padding 0 5%;
            }
            .notesWrapper {
              margin-left: 5%;
            }
          `}
      </style>
    </Card>
  );
};

export default ScaleCard;
