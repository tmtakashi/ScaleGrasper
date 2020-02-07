import React from "react";
import styled from "styled-components";
import variables from "../../../style-variables";

const CardTitle = props => {
  return <Title>{props.children}</Title>;
};

const Title = styled.span`
  font-size: ${variables.cardTitleFontSize};
  color: ${variables.cardTitleColor};
  user-select: none;
`;

export default CardTitle;
