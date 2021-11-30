import styled from "styled-components";
import BarChart from "./BarChart";
import { dataByYear } from "../data";

const StyledHome = styled.main`
  background-color: red;
`;

const Home = () => {
  return (
    <StyledHome>
      <h1>Homepage</h1>
      <BarChart data={dataByYear} />
    </StyledHome>
  );
};

export default Home;
