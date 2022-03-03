import styled, { keyframes } from 'styled-components'

export const AboutMeContainer = styled.section`
  flex-direction: column;
  align-items: center;
  transition: 1s;
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  transform: ${(props) =>
    props.isVisible ? 'translateX(0)' : 'translateX(-500px)'};
`

export const AboutMeData = styled.div`
  display: flex;
  justify-content: left;
  width: 65%;
`

export const Title = styled.h1`
  font-size: 3.5em;
  &::after {
    display: block;
    content: '';
    height: 4px;
    width: 50%;
    background-color: var(--white);
    border-radius: var(--border-radius-pill);
    margin: 20px auto;
  }
`

export const DescriptionContainer = styled.div`
  width: 60%;
  height: 50vh;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border-radius: var(--border-radius-subtle);
  padding: 20px;
  text-align: justify;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`

export const ProgramerImage = styled.div`
  margin: auto 10px;
`

export const Description = styled.p`
  font-size: 1.5em;
`

export const ContactMe = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: var(--yellow);
  font-weight: 400;
`
