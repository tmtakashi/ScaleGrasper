import React from "react";
import variables from "../../../variables.scss";

const CardTitle = props => {
  return (
    <span className="letter">
      {props.children}
      <style jsx>{`
        .letter {
          font-size: 1.7rem;
          color: ${variables.cardTitleColor};
          user-select: none;
        }
      `}</style>
    </span>
  );
};

export default CardTitle;
