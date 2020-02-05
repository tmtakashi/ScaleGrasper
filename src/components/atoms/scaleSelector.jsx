import React from "react";

const ScaleSelector = props => {
  return (
    <div className="wrapper">
      <select
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
      </select>
      <style jsx>
        {`
          .wrapper select {
            cursor: pointer;
            outline: none;
            background: transparent;
            box-shadow: none;
            color: #333;
          }
        `}
      </style>
    </div>
  );
};

export default ScaleSelector;
