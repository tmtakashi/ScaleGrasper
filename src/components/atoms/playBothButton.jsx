import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const PlayBothButton = props => {
  return (
    <div onClick={() => props.onClick()} className="btn">
      <FontAwesomeIcon icon={faPlay} />
      <span>{props.children}</span>
      <style jsx>
        {`
          div {
            display: flex;
            align-items: center;
            border-radius: 4px;
            border: none;
            height: 60%;
            min-width: 15%;
            padding: 0 10%;
            color: #fff;
            background: #2ec721;
            cursor: pointer;
            font-size: 1rem;
          }
          div span {
            margin-left: 10%;>
          }
        `}
      </style>
    </div>
  );
};

export default PlayBothButton;
