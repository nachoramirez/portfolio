import styled from "styled-components"

export const ProyectsPageContainer = styled.section`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 1s;
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transform: ${(props) =>
    props.isVisible ? "translateX(0)" : "translateX(-500px)"};
  @media (max-width: 768px) {
    opacity: 1;
    transform: translateX(0);
    height: auto;
  }
`

export const Title = styled.h1`
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

  @media (max-height: 700px) {
    margin: 0;
  }

`

export const ProyectsContainer = styled.div`
  height: 70%;
  width: 100%;
  padding: 30px;
  display: flex;
  margin-top: 100px;
  justify-content: space-around;

  @media (max-width: 780px) {
    height: 60%;
    margin-top: 0;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 1700px) and (min-width: 780px) {
    flex-wrap: wrap;
    margin-top: 0;
    padding-right: 0;
  }
  @media (max-height: 700px) {
    padding: 0;
    margin-top: 0;
    height: 99%;
  }

`

export const Proyect = styled.div`
  position: relative;
  aspect-ratio: 16/9;
  width: 500px;
  margin: 10px;
  height: 300px;
  background: url(${(props) => props.image || " "}) center;
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
      url(${(props) => props.image || " "});
    background-size: cover;
    & > h1 {
      display: block;
      position: absolute;
      bottom: 0;
      left: 20px;
      top: auto;
    }
  }

  @media (max-width: 768px) {
    width: 230px;
    height: 130px;
  }



  @media (max-width: 1100px) and (min-width: 768px) {
    width: 300px;
    height: 190px;
  }

  @media (max-width: 1700px) and (min-width: 1100px) {
    width: 370px;
    height: 230px;
    margin: 10px;
  }
`
