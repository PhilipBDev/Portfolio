import React from "react"
import styled from "styled-components"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Navbar = () => {
  return (
    <Nav>
      <Title>PhilipBDev</Title>
      <NavList>
        <NavItem>
          <NavLink to="/#about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/#projects">Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/#contact">Contact</NavLink>
        </NavItem>
      </NavList>
    </Nav>
  )
}

export default Navbar

//~~~~~~~~~~~~~~~~~~~
// Styled-Components
//~~~~~~~~~~~~~~~~~~~

const Nav = styled.nav`
  display: flex;
  height: 2rem;
  justify-content: space-between;
  align-items: center;
  // padding: 1.5rem 2rem;
  margin-bottom: 1rem;
`

const Title = styled.h2`
  font-size: 2rem;
  color: #fff;
`

const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
`

const NavItem = styled.li`
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: center;
  // padding: 18px 10px;
`

const NavLink = styled(AnchorLink)`
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  &:hover {
    color: #8c6445;
  }
`
