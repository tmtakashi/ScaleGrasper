import React from "react";
import styled from "styled-components";

const ChordPalleteOption = props => {
  return (
    <Box
      onClick={() => {
        props.selectOption(props.children);
      }}
    >
      <Item>{props.children}</Item>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  margin: 2px 2px;
  width: 20%;
  height: 50px;
  border: 1px solid lightgrey;
  border-radius: 10%;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  transition: background-color 0.5s;
`;

const Item = styled.span`
  font-size: 0.8rem;
`;

export default ChordPalleteOption;
