import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  color: red;
  font-family: "Outfit", sans-serif;
  font-weight: 600;
  font-size: 1.5em;
  color: #1b1b1b;
  position: absolute;
  top: 10px;
  left: 30px;
`;

function Title({ children }) {
  return <StyledTitle>{children}</StyledTitle>;
}

export default Title;
