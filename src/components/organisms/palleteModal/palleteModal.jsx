import React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import ChordPallete from "../../molecules/chordPallete/chordPallete";

Modal.setAppElement("#root");

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    width: "70%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

const PalleteModal = props => {
  return (
    <div>
      <Modal
        style={modalStyles}
        isOpen={props.modalIsOpen}
        onRequestClose={props.closeModal}
      >
        <PalleteContainer>
          <RootsPallete>
            <ChordPallete
              selectOption={choice => props.selectOption(choice, "root")}
              {...props.pallete.roots}
            ></ChordPallete>
          </RootsPallete>
          <TypesPallete>
            <ChordPallete
              selectOption={choice => props.selectOption(choice, "type")}
              {...props.pallete.types}
            ></ChordPallete>
          </TypesPallete>
        </PalleteContainer>
        <ModalFooter>
          <button onClick={props.closeModal}>Close</button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

const PalleteContainer = styled.div`
  margin-top: 2%;
  display: flex;
  justify-content: space-around;
`;

const RootsPallete = styled.div`
  width: 35%;
  top: 0px;
  left: 15%;
`;

const TypesPallete = styled.div`
  width: 35%;
  top: 0px;
  right: 15%;
`;

const ModalFooter = styled.div`
  margin-top: 5%;
  padding: 0 10%;
`;

export default PalleteModal;
