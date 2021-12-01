import styled from "styled-components";
import Chart from "./Responsive";

const StyledHome = styled.main`
  background-color: red;
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
