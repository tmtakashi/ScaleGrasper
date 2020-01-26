import React from "react";
import ChordPallete from "../../molecules/chordPallete/chordPallete";
import styles from "./palleteContainer.module.css";

const PalleteContainer = props => {
  return (
    <div className={styles.palleteContainer}>
      {props.showPallete.roots && (
        <div className={styles.rootsPallete}>
          <ChordPallete {...props.pallete.roots}></ChordPallete>
        </div>
      )}
      {props.showPallete.types && (
        <div className={styles.typesPallete}>
          <ChordPallete
            className={styles.typesPallete}
            {...props.pallete.types}
          ></ChordPallete>
        </div>
      )}
    </div>
  );
};

export default PalleteContainer;
