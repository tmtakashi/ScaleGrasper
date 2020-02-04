import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const OpenModalButton = props => {
  return (
    <div>
      <FontAwesomeIcon
        color="#21a1c7"
        icon={faEdit}
        onClick={() => props.onClick()}
      />
      <style jsx>
        {`
          div {
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default OpenModalButton;
