import React from "react";

const OpenModalButton = props => {
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
          width: 25%;
          height: 30%;
          padding: 0 0.5%;
          color: #fff;
          background: #c7a721;
          cursor: pointer;
          font-size: 0.9rem;
        `}
      </style>
    </div>
  );
};

export default OpenModalButton;
