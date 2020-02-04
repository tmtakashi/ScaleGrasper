import React, { useState } from "react";
import ChordLetter from "../../../atoms/chordLetter/chordLetter";
import ChordNotes from "../../../atoms/chordNotes/chordNotes";
import ChordPlayer from "../../../atoms/chordPlayer/chordPlayer";
import Card from "../../../atoms/card";
import OpenModalButton from "../../../atoms/openModalButton";
import PalleteModal from "../../../organisms/palleteModal/palleteModal";
import { chordToNotes } from "../../../../lib/converter";

const ChordCard = props => {
  let notes = chordToNotes(props.chord);
  let [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <Card>
      <div className="letterButtonWrapper">
        <div className="letterWrapper">
          <ChordLetter>{Object.values(props.chord).join("")}</ChordLetter>
        </div>
        <OpenModalButton
          onClick={() => {
            setModalIsOpen(true);
          }}
        >
          Change chord
        </OpenModalButton>
      </div>
      <div className="playerNotesWrapper">
        <ChordPlayer notes={notes}></ChordPlayer>
        <div className="notesWrapper">
          <ChordNotes notes={notes}></ChordNotes>
        </div>
      </div>
      <PalleteModal
        modalIsOpen={modalIsOpen}
        closeModal={() => {
          setModalIsOpen(false);
        }}
        selectOption={(choice, palleteType) => {
          props.editChord(choice, palleteType);
        }}
        pallete={props.pallete}
      ></PalleteModal>
      <style jsx>{`
        .card {
          border-radius: 5%;
          box-shadow: 0px 2px 3px -2px rgba(0, 0, 0, 0.5);
          width: 40%;
          height: 35%;
          background-color: #fff;
        }
        .letterButtonWrapper {
          display:flex;
          align-items: center;
          height: 40%;
          padding: 3% 3%;
        }
        .letterWrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 20%;
          width: 20%;
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
      `}</style>
    </Card>
  );
};
// import React from "react";

// const Chord = props => {
//   let notes = chordToNotes(props.chord);
//   return (
//     <div>
//       <div className={styles.chord}>
//         <ChordLetter>{Object.values(props.chord).join("")}</ChordLetter>
//         <ChordNotes notes={notes}></ChordNotes>
//       </div>
//       <div className={styles.playChordWrapper}>
//         <ChordPlayer notes={notes}></ChordPlayer>
//       </div>
//     </div>
//   );
// };

// export default Chord;

export default ChordCard;
