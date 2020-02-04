import React from "react";

const PlayerButton = props => {
  return (
    <div onClick={() => props.onClick()} className="btn">
      {props.children}
      <style jsx>
        {`
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-radius: 4px;
          border: none;
          height: 50%;
          padding: 0 2%;
          color: #fff;
          background: #21a1c7;
          cursor: pointer;
          font-size: 1rem;
        `}
      </style>
    </div>
  );
};

export default PlayerButton;
