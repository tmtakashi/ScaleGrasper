import React, { useState } from "react";
import styled from "styled-components";
import CardTitle from "../../../atoms/cardTitle/cardTitle";
import ChordNotes from "../../../atoms/chordNotes/chordNotes";
import ChordPlayer from "../../../atoms/chordPlayer/chordPlayer";
import Card from "../../../atoms/card";
import OpenModalButton from "../../../atoms/openModalButton";
import PalleteModal from "../../palleteModal/palleteModal";
import { chordToNotes } from "../../../../lib/converter";

const ChordCard = props => {
  let notes = chordToNotes(props.chord);
  let chordName = Object.values(props.chord).join("");
  let [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <Card>
      <TitleButtonWrapper>
        <TitleWrapper>
          <CardTitle>{chordName}</CardTitle>
        </TitleWrapper>
        <OpenModalButton
          onClick={() => {
            setModalIsOpen(true);
          }}
        />
      </TitleButtonWrapper>
      <PlayerNotesWrapper>
        <ChordPlayer notes={notes}></ChordPlayer>
        <NotesWrapper>
          <ChordNotes notes={notes}></ChordNotes>
        </NotesWrapper>
      </PlayerNotesWrapper>
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
  justify-content: center;
  align-items: center;
  height: 20%;
  width: 20%;
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
  width: 30%;
`;

export default ChordCard;
