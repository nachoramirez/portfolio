import styled from 'styled-components'

export const NavBarContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 8%;
  background: var(--light-blue);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(7, 34, 39, 0.8) 120%
  );
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px;
  z-index: 10;
`

export const Name = styled.h1`
  justify-self: start;
  font-size: 2.1em;
  font-weight: 400;
  line-height: 70px;
`

export const NavBarButtons = styled.div`
  height: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const NavBarItem = styled.img`
  height: 35px;
  cursor: pointer;
  transition: 100ms ease-in-out;
  filter: brightness(100);

  &:hover {
    filter: brightness(1) drop-shadow(0px 0px 50px #fff);
  }
`

