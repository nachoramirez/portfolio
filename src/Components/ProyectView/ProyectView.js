import styled, { keyframes } from 'styled-components'

const showAnimation = keyframes`
    from {
        opacity: 0;
    } to {
        opacity: 1;
    }
`

export const ProyectViewContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${showAnimation} linear 1.5s;
`

export const Image = styled.img`
  object-fit: cover;
  width: 700px;
  height: 400px;
  justify-self: left;
`

export const ProyectInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 80px;
`
export const TextProyect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`

export const ProyectTitle = styled.h1`
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

export const ProyectDescription = styled.p`
  padding: 0 50px;
  font-size: 2em;
  text-align: justify;
`

export const TechnologiesContainer = styled.div`
  display: flex;
  margin-left: 50px;
  width: 40%;
  justify-content: space-between;
`

export const Technology = styled.img`
  height: 90px;
  width: 90px;
  margin: 0 20px;
`
