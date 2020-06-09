import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavWrapper = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 1em;
  bottom: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.primaryDark};
  @media (min-width: 768px) {
    top: 0;
    bottom: auto;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.secondaryLight};
  &.active {
    color: ${({ theme }) => theme.primaryOrange};
  }
`;

const Navbar = () => (
  <NavWrapper>
    <StyledNavLink exact to="/">
      Home
    </StyledNavLink>
    <StyledNavLink to="/favorites">Favoritos</StyledNavLink>
  </NavWrapper>
);

export default Navbar;
