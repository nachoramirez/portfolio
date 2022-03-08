import styled from 'styled-components'

export const ProyectsPageContainer = styled.section`
  padding: 0;
  flex-direction: column;
  align-items: center;
  transition: 1s;
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  transform: ${(props) =>
    props.isVisible ? 'translateX(0)' : 'translateX(-500px)'};
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

export const ProyectsContainer = styled.div`
  height: 70%;
  width: 100%;
  padding: 30px;
  display: flex;
  justify-content: space-around;
  margin-top: 100px;
`

export const Proyect = styled.div`
  position: relative;
  width: 500px;
  height: 300px;
  background: url(${(props) => props.image || ' '}) center;
  background-size: cover;
  cursor: pointer;
  transition: 200ms ease-in-out;
  & > h1 {
    display: none;
  }
  &:hover {
    transform: scale(1.05);
    background-image: linear-gradient(
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.9) 100%
      ),
      url(${(props) => props.image || ' '});
    background-size: cover;
    & > h1 {
      display: block;
      position: absolute;
      bottom: 0;
      left: 20px;
      top: auto;
    }
  }
`