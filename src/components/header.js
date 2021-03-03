import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import share_svg from "../asset/share.svg"

const Nav = styled.header`
  position: sticky;
  top: 0;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`

const NavHeader = styled.nav`
  max-width: 1010px;
  padding: 26px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`

const NavLeft = styled.div`
  width: 33.333%;
  text-align: left;
`

const NavRight = styled.div`
  width: 33.333%;
  text-align: right;

  svg {
    margin-right: 20px;
  }
`

const nav_list = ["Schedule", "Speakers", "Register", "Share"]

const MenuLink = ({ id }) => (
  <a class="">
    <Link to={`#${id}`}>
      {id === "Share" ? <img src={share_svg} /> : null}
      <span>{id}</span>
    </Link>
  </a>
)

export const Header = () => (
  <Nav>
    <NavHeader>
      <NavLeft />
      <div class="site-branding">
        {/* <a href="">
        
            // <img src="assets/logo.svg" alt="Logo" />
        
        </a> */}
      </div>

      <NavRight>
        {nav_list.map(item => (
          <MenuLink id={item} />
        ))}
      </NavRight>
    </NavHeader>
  </Nav>
)
