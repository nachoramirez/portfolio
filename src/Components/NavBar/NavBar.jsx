import React from 'react'

import { NavBarContainer, Name, NavBarButtons, NavBarItem } from './NavBar'

import HomeIcon from '../../static/HomeIcon.svg'
import PersonIcon from '../../static/PersonIcon.svg'
import WorkIcon from '../../static/WorkIcon.svg'
import ContactIcon from '../../static/ContactIcon.svg'

const NavBar = () => {
  return (
    <NavBarContainer>
      <Name> Juan Ignacio Ramirez</Name>
      <NavBarButtons>
        <a href="/#home">
          <NavBarItem src={HomeIcon} />
        </a>
        <a href="/#about-me">
          <NavBarItem src={PersonIcon} />
        </a>
        <a href="/#proyects">
          <NavBarItem src={WorkIcon} />
        </a>
        <a href="/#contact">
          <NavBarItem src={ContactIcon} />
        </a>
      </NavBarButtons>
      <h1 />
    </NavBarContainer>
  )
}

export default NavBar
