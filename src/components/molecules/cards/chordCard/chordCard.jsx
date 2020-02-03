import React from "react";
import css from "styled-jsx/css";

const ChordCard = props => {
  return (
    <div className="card">
      <style jsx>{cardStyle}</style>
    </div>
  );
};

const cardStyle = css`
  .card {
    border-box: 1px solid black;
    width: 100px;
  }
`;

export default ChordCard;
