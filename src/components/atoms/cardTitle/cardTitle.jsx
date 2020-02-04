import React from "react";

const CardTitle = props => {
  return (
    <span className="letter">
      {props.children}
      <style jsx>{`
        .letter {
          font-size: 1.7rem;
          color: #837f7f;
          user-select: none;
        }
      `}</style>
    </span>
  );
};

export default CardTitle;
