import styled from "styled-components";

const StyledButton = styled.button`
  padding: 1.5em 4em;
  margin: 2em;
  background-color: ${(props) => (props.primary ? "#0576FF" : "#CEDDE2")};
  border: none;
  font-weight: 600;
  font-size: 0.9em;
  color: ${(props) => (props.primary ? "white" : "black")};
  border-radius: 12px;
  transition: 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const Button = ({ primary, children }) => {
  return <StyledButton primary={primary}>{children}</StyledButton>;
};

export default Button;
