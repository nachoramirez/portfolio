import React, { useState, useEffect, useRef } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import {
  NavBarContainer,
  Name,
  Logo,
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

import NachoLogo from "../../static/NRLogo.svg"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)
  const Location = useLocation()
  const Navigate = useNavigate()

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false)
      }
    }

    window.addEventListener("click", handleOutsideClick)

    return () => {
      window.removeEventListener("click", handleOutsideClick)
    }
  }, [ref])

  useEffect(() => {
    setIsOpen(false)
  }, [Location])

  return (
    <>
      <NavBarContainer ref={ref} isOpen={isOpen}>
        <Logo src={NachoLogo} />
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
        <NavBarVisibilityButton
          onClick={() => setIsOpen(!isOpen)}
          src={isOpen ? CloseMenu : Menu}
          isOpen={isOpen}
        />
      </NavBarContainer>
    </>
  )
}

export default NavBar
