import styled from "styled-components";
import { Link } from "react-router-dom";

const NavStyled = styled.nav`
  background-color: lightblue;

  ul {
    display: flex;
  }

  li {
    background-color: darkcyan;
    list-style-type: none;
    margin-right: 1em;
  }
`;

const Nav = () => {
  return (
    <NavStyled>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </NavStyled>
  );
};

export default Nav;
