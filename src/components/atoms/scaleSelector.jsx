import React from "react";
import styled from "styled-components";
import variables from "../../style-variables";

const ScaleSelector = props => {
  return (
    <SelectBox
      value={props.currentScale}
      onChange={e => props.onScaleChange(e.target.value)}
    >
      {props.chordScales.map(scale => {
        return (
          <option value={scale} key={scale}>
            {scale}
          </option>
        );
      })}
    </SelectBox>
  );
};

const SelectBox = styled.select`
  cursor: pointer;
  outline: none;
  background: transparent;
  box-shadow: none;
  width: 100%;
  color: ${variables.scaleSelectorColor};
`;

export default ScaleSelector;
