import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiHome, FiInfo, FiAtSign } from "react-icons/fi";

const NavStyled = styled.nav`
  background-color: #1a1c1f;
  height: 100vh;
  padding: 4em 2em;

  ul {
    padding: 0;
  }

  li {
    list-style-type: none;
    margin-bottom: 2em;
  }

  a {
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
  }

  svg {
    margin-right: 10px;
  }
`;

const Nav = () => {
  return (
    <header>
      <NavStyled>
        <ul>
          <li>
            <Link to="/">
              <FiHome />
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              <FiInfo />
              About
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <FiAtSign />
              Contact
            </Link>
          </li>
        </ul>
      </NavStyled>
    </header>
  );
};

export default Nav;
