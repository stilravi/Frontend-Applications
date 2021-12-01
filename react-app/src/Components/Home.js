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

  h1 {
    font-family: "Outfit", sans-serif;
    font-weight: 500;
    font-size: 1.5em;
    color: #1b1b1b;
    position: absolute;
    top: 20px;
    left: 30px;
  }
`;

const Home = () => {
  return (
    <StyledHome>
      <h1>Homepage</h1>
      <Chart />
    </StyledHome>
  );
};

export default Home;
