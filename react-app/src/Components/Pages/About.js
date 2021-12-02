import styled from "styled-components";
import Paragraph from "../Text/Paragraph";
import Title from "../Text/Title";

// Styling About
const StyledAbout = styled.main`
  background-color: white;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

// Creating About Component
const About = () => {
  return (
    //Rendering the StyledAbout (a Styled Component)
    <StyledAbout>
      <Title>About this Data visualisation</Title>
      <Paragraph>
        {" "}
        This Data visualisation uses 25 different kind of beers from the Brewdog
        Brewery. These 25 beers are comming from the Punk API. You can get
        things like "Alcohol percentage", "Name", "Brewery" and much more from
        this API.
        <br />
        <br />
        This Data visualisation was made by Ravi Stil. You can find the
        documentation on Github by clicking the following link:
        <br />
        <br />
        <a
          href="https://github.com/stilravi/Frontend-Applications"
          target="_blank"
          rel="noreferrer"
        >
          Github documentation
        </a>
      </Paragraph>
    </StyledAbout>
  );
};

export default About;
