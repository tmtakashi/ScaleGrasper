import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import variables from "../../style-variables.js";

const PlayerButton = props => {
  return (
    <Button onClick={() => props.onClick()}>
      <FontAwesomeIcon icon={faPlay} />
      <Message>{props.children}</Message>
    </Button>
  );
};

const Button = styled.div`
  display: flex;
  align-items: center;
  border-radius: 4px;
  border: none;
  height: 30%;
  min-width: 15%;
  padding: 0 2%;
  color: ${variables.btnTextColor};
  background: ${variables.primaryColor};
  cursor: pointer;
  font-size: 1rem;
`;

const Message = styled.span`
  margin-left: 10%;
`;

export default PlayerButton;
