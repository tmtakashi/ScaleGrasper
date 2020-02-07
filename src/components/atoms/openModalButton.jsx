import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import variables from "../../variables.scss";

const OpenModalButton = props => {
  return (
    <div>
      <FontAwesomeIcon
        color={variables.primaryColor}
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
