import React from "react";

const PlayBothButton = props => {
  return (
    <div onClick={() => props.onClick()} className="btn">
      {props.children}
      <style jsx>
        {`
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 4px;
          border: none;
          height: 60%;
          min-width: 15%;
          padding: 0 2%;
          color: #fff;
          background: #2ec721;
          cursor: pointer;
          font-size: 1rem;
        `}
      </style>
    </div>
  );
};

export default PlayBothButton;
