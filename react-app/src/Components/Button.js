import styled from "styled-components";

// export const Button = styled.button`
//   padding: 2em 4em;
//   background-color: red;
// `;

export const Button = styled.button`
  background-color: ${(props) => props.bgColor};
  padding: 4em;
  border: none;

  &:hover {
    background-color: orange;
  }
`;
