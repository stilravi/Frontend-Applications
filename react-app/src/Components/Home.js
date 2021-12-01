import styled from "styled-components";
import Chart from "./BarChart";
import Title from "./Title";

const StyledHome = styled.main`
  background-color: white;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Home = () => {
  return (
    <StyledHome>
      <Title>Alchohol percentage of 25 beers</Title>
      <Chart />
    </StyledHome>
  );
};

export default Home;
