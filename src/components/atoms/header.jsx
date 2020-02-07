import React from "react";
import styled from "styled-components";
import variables from "../../style-variables.js";

const Header = props => {
  return (
    <Wrapper>
      <Title>{props.children}</Title>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  background-color: ${variables.primaryColor};
  position: fixed;
  width: 100%;
`;

const Title = styled.h1`
  margin-left: 3%;
  user-select: none;
  color: ${variables.headerTextColor};
  font-weight: lighter;
`;

export default Header;
