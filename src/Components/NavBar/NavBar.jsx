import React, { useState } from 'react'

import {
  NavBarContainer,
  Name,
  NavBarButtons,
  NavBarItem,
  NavBarVisibilityButton,
  NavBarLink,
  NavBarName,
} from './NavBar'

import HomeIcon from '../../static/HomeIcon.svg'
import PersonIcon from '../../static/PersonIcon.svg'
import WorkIcon from '../../static/WorkIcon.svg'
import ContactIcon from '../../static/ContactIcon.svg'
import Menu from '../../static/Menu.svg'
import CloseMenu from '../../static/CloseMenu.svg'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <NavBarContainer isOpen={isOpen}>
        <Name> Juan Ignacio Ramirez</Name>
        <NavBarButtons>
          <NavBarLink href="/#home">
            <NavBarName> Home</NavBarName>
            <NavBarItem src={HomeIcon} />
          </NavBarLink>
          <NavBarLink href="/#about-me">
            <NavBarName> About me</NavBarName>
            <NavBarItem src={PersonIcon} />
          </NavBarLink>
          <NavBarLink href="/#proyects">
            <NavBarName> Proyects </NavBarName>
            <NavBarItem src={WorkIcon} />
          </NavBarLink>
          <NavBarLink href="/#contact">
            <NavBarName> Conctact</NavBarName>
            <NavBarItem src={ContactIcon} />
          </NavBarLink>
        </NavBarButtons>
        <h1></h1>
      </NavBarContainer>
      <NavBarVisibilityButton
        onClick={() => setIsOpen(!isOpen)}
        src={isOpen ? CloseMenu : Menu}
      />
    </>
  )
}

export default NavBar
