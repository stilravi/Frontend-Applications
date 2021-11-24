import styled from "styled-components";

const StyledButton = styled.button`
  padding: 2em;
  background-color: lightblue;
  border: none;
`;

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
