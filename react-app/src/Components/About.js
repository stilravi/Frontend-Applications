import styled from "styled-components";
import Title from "./Title";

const StyledAbout = styled.main`
  background-color: white;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const About = () => {
  return (
    <StyledAbout>
      <Title>About this Data visualisation</Title>
    </StyledAbout>
  );
};

export default About;
