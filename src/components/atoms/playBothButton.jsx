import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import variables from "../../style-variables.js";

const PlayBothButton = props => {
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
  height: 60%;
  min-width: 15%;
  padding: 0 10%;
  color: ${variables.btnTextColor};
  background: ${variables.secondaryColor};
  cursor: pointer;
  font-size: 1rem;
`;

const Message = styled.span`
  margin-left: 10%;
`;

export default PlayBothButton;
