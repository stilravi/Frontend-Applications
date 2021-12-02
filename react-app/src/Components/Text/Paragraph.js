import React from "react";
import styled from "styled-components";

// Styling Paragraph
const StyledParagraph = styled.p`
  font-family: "Outfit", sans-serif;
  font-weight: 400;
  font-size: 1.1em;
  color: #4e4e4e;
  position: absolute;
  top: 80px;
  left: 30px;
  max-width: 620px;
`;

// Creating Paragraph component
const Paragraph = ({ children }) => {
  return <StyledParagraph>{children}</StyledParagraph>;
};

export default Paragraph;
