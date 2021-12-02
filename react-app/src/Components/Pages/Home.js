import styled from "styled-components";
import Chart from "../BarChart/BarChart";
import Title from "../Text/Title";

// Styling Home
const StyledHome = styled.main`
  background-color: white;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

// Creating Home component and returning it with the styles
const Home = () => {
  return (
    <StyledHome>
      <Title>Alchohol percentage of Brewdog beers</Title>
      <Chart />
    </StyledHome>
  );
};

export default Home;
