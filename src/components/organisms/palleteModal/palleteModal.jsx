import React from "react";
import Modal from "react-modal";
import ChordPallete from "../../molecules/chordPallete/chordPallete";
import styles from "./palleteModal.module.css";

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
        <div className={styles.palleteContainer}>
          <div className={styles.rootsPallete}>
            <ChordPallete
              selectOption={choice => props.selectOption(choice, "root")}
              {...props.pallete.roots}
            ></ChordPallete>
          </div>
          <div className={styles.typesPallete}>
            <ChordPallete
              selectOption={choice => props.selectOption(choice, "type")}
              {...props.pallete.types}
            ></ChordPallete>
          </div>
        </div>
        <div className={styles.modalFooter}>
          <button onClick={props.closeModal}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default PalleteModal;
