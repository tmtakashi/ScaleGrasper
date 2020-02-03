import React from "react";

const ChordLetter = props => {
  return (
    <span className="letter">
      {props.children}
      <style jsx>{`
        .letter {
          font-size: 2.5rem;
          color: #837f7f;
          user-select: none;
        }
      `}</style>
    </span>
  );
};

export default ChordLetter;
