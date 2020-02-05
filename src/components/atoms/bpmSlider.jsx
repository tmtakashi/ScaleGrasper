import React, { useState } from "react";

const BpmSlider = props => {
  let [bpm, setBpm] = useState(120);
  return (
    <div>
      <label htmlFor="bpmSlider">BPM</label>
      <input
        name="bpmSlider"
        type="range"
        min="60"
        max="200"
        value={bpm}
        onChange={e => {
          let changedBpm = e.target.value;
          props.onBpmChange(changedBpm);
          setBpm(changedBpm);
        }}
      />
      {bpm}
    </div>
  );
};

export default BpmSlider;
