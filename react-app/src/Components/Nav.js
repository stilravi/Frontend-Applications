import styled from "styled-components";

const NavStyled = styled.nav`
  background-color: red;
`;

const Nav = function Nav() {
  return (
    <NavStyled>
      <h3>Logo</h3>
      <ul>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </NavStyled>
  );
};

export default Nav;
