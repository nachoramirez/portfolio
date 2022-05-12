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
  z-index: 11;

  @media (max-width: 768px) {
    position: absolute;
    transition: 300ms ease-in-out;
    width: 80%;
    transform: ${(props) =>
      props.isOpen ? 'translateX(0)' : 'translateX(-400px)'};
    visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
    background: linear-gradient(
      180deg,
      rgba(7, 34, 39, 1) 40%,
      rgba(79, 189, 186, 1) 140%
    );
  }
  @media (max-width: 1500px) {
    width: 10%;
  }
  @media (max-width: 1200px) {
    width: 13%;
  }
  @media (max-width: 1100px) {
    width: 14%;
  }
  @media (max-width: 900px) {
    width: 16%;
  }
`

export const Name = styled.h1`
  justify-self: start;
  font-size: 2.1em;
  font-weight: 400;
  line-height: 70px;

  @media (max-width: 768px) {
    display: flex;
    text-align: center;
  }
  @media (max-width: 1700px) {
    font-size: 1.9em;
  }
  @media (max-width: 1100px) {
    font-size: 1.6em;
  }
`

export const NavBarButtons = styled.div`
  height: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const NavBarName = styled.p`
  color: var(--white);
  font-size: 1.7em;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`

export const NavBarLink = styled.a`
  width: 60%;
  display: flex;
  justify-content: center;
  text-decoration: none;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`

export const NavBarItem = styled.img`
  height: 35px;
  cursor: pointer;
  transition: 100ms ease-in-out;
  filter: brightness(100);

  &:hover {
    filter: brightness(1) drop-shadow(0px 0px 50px #fff);
  }

  @media (max-width: 768px) {
    &::before {
    }
  }
`

export const NavBarVisibilityButton = styled.img`
  display: none;
  height: 40px;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 11;
  @media (max-width: 768px) {
    display: block;
  }
`

/* 

  @media (max-width: 768px) {

  }
*/
