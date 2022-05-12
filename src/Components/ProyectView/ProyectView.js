import styled from "styled-components"

export const ProyectViewContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1508px) {
    min-height: 100vh;
    height: auto;
  }
`

export const ProyectInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 80px;
  @media (max-width: 1508px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Image = styled.div`
  width: 700px;
  height: 400px;
  position: relative;
  background: url(${(props) => props.image || " "}) center;
  background-size: cover;
  justify-self: left;
  & > * {
    visibility: hidden;
    position: absolute;
    left: 10px;
    bottom: 5px;
  }
  &:hover {
    background-image: linear-gradient(
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.9) 100%
      ),
      url(${(props) => props.image || " "});
    & > * {
      visibility: visible;
    }
  }
  @media (max-width: 768px) {
    width: 300px;
    height: 150px;
    background-attachment: contain;
  }
  @media (max-width: 1508px) and (min-width: 768px) {
    width: 550px;
    height: 300px;
  }
`

export const TextProyect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  @media (max-width: 768px)  {
    align-items: center;
  }
`

export const ProyectTitle = styled.h1`
  font-size: 3.5em;
  &::after {
    display: block;
    content: "";
    height: 4px;
    width: 50%;
    background-color: var(--white);
    border-radius: var(--border-radius-pill);
    margin: 20px auto;
  }

  @media (max-width: 768px)  {
    margin-top: 90px;
    font-size: 2em;
  }
`

export const ProyectDescription = styled.p`
  padding: 0 50px;
  font-size: 2em;
  text-align: justify;
  @media (max-width: 768px) {
    width: 100vw;
    padding: 0 10px;
    text-align: justify;
    font-size: 1.5em;
  }
`

export const TechnologiesContainer = styled.div`
  display: flex;
  margin-left: 50px;
  width: 40%;
  justify-content: space-between;
  @media (max-width: 768px) {
    margin: 0;
  }
`

export const Technology = styled.img`
  height: 70px;
  width: 70px;
  margin: 20px;
  cursor: pointer;
  @media (max-width: 768px) {
    margin: 10px;
  }
`
