import React, { useState, useEffect, useRef } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import {
  NavBarContainer,
  Name,
  NavBarButtons,
  NavBarItem,
  NavBarVisibilityButton,
  NavBarLink,
  NavBarName,
} from "./NavBar"

import HomeIcon from "../../static/HomeIcon.svg"
import PersonIcon from "../../static/PersonIcon.svg"
import WorkIcon from "../../static/WorkIcon.svg"
import ContactIcon from "../../static/ContactIcon.svg"
import Menu from "../../static/Menu.svg"
import CloseMenu from "../../static/CloseMenu.svg"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef()
  const Location = useLocation()
  const Navigate = useNavigate()

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ref])

  return (
    <>
      <NavBarContainer ref={ref} isOpen={isOpen}>
        <Name> Juan Ignacio Ramirez</Name>
        <NavBarButtons>
          <NavBarLink
            href='/#home'
            onClick={() => Location.pathname !== "/" && Navigate("/#home")}
          >
            <NavBarName> Home</NavBarName>
            <NavBarItem src={HomeIcon} />
          </NavBarLink>

          <NavBarLink
            href='/#about-me'
            onClick={() => Location.pathname !== "/" && Navigate("/#about-me")}
          >
            <NavBarName> About me</NavBarName>
            <NavBarItem src={PersonIcon} />
          </NavBarLink>
          <NavBarLink
            href='/#proyects'
            onClick={() => Location.pathname !== "/" && Navigate("/#proyects")}
          >
            <NavBarName> Proyects </NavBarName>
            <NavBarItem src={WorkIcon} />
          </NavBarLink>
          <NavBarLink
            href='/#contact'
            onClick={() => Location.pathname !== "/" && Navigate("/#contact")}
          >
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
