import React from "react";
import style from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import variables from "../../style-variables.js";

const OpenModalButton = props => {
  return (
    <Wrapper>
      <FontAwesomeIcon
        color={variables.primaryColor}
        icon={faEdit}
        onClick={() => props.onClick()}
      />
    </Wrapper>
  );
};

const Wrapper = style.div`
  cursor: pointer;
`;

export default OpenModalButton;
