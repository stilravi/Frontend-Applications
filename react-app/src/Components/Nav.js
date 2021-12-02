import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FiHome, FiInfo, FiAtSign } from "react-icons/fi";

const NavStyled = styled.nav`
  background-color: #1a1c1f;
  height: 100vh;
  padding: 4em 2.2em 4em 2em;

  ul {
    padding: 0;
  }

  li {
    list-style-type: none;
    margin-bottom: 1em;
  }

  a {
    color: white;
    padding: 1em;
    text-decoration: none;
    display: flex;
    align-items: center;
    border-radius: 5px;
    transition: 0.2s ease;
    color: #b6b8bf;
  }

  a:hover svg {
    margin-right: 15px;
  }

  svg {
    margin-right: 10px;
    transition: 0.2s ease;
  }

  .active {
    background-color: #3761ed;
    color: white;
  }
`;

const Nav = () => {
  return (
    <header>
      <NavStyled>
        <ul>
          <li>
            <NavLink activeclassname="active" to="/">
              <FiHome />
              Data visualisation
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname="active" to="/about">
              <FiInfo />
              About
            </NavLink>
          </li>
        </ul>
      </NavStyled>
    </header>
  );
};

export default Nav;
