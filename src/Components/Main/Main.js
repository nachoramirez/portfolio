import styled, { keyframes } from "styled-components";

export const MainContainer = styled.section`
  width: 100%;
  height: 85vh;
  justify-content: center;
  align-items: center;
  @media  (max-width: 900px) and (min-width: 768px) {
    width: 90%;
  }
`;

export const MediaContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 50px;
  width: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MediaItem = styled.img`
  margin: 0;
  height: ${(props) => props.height || "30px"};
  cursor: pointer;
`;

export const InfoAndFotoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (max-width: 900px) {
    width: 80%;
    justify-content: space-between;
  }
`;

export const MainInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const typing = keyframes`
  from{
    width: 0;
  }to {
    width: 100%;
  }
`;

const typingBar = keyframes`
 from {
    border-color: transparent;
  } to {
    border-color: var(--dark-blue);
  }
`;

export const JobTitle = styled.h1`
  text-align: left;
  padding: 5px;
  font-size: 4em;
  font-weight: 400;
  margin: 0 auto;
  overflow-x: hidden;
  white-space: nowrap;
  border-right: 5px solid;
  animation: ${typing} 1s steps(16, end), ${typingBar} 0.6s infinite;
  @media (max-width: 768px) {
    font-size: 3em;
  }
  @media (max-width: 1300px)  and (min-width: 768px){
    font-size: 3em;
  }
`;

const RotateAnimation = keyframes`
  0% {
    transform: rotate(20deg);
  } 50% {
    transform: rotate(-20deg);
  }
  100% {
    transform: rotate(20deg);
  }
  
`;

export const Hand = styled.span`
  display: inline-block;
  font-size: 1em;
  font-weight: 300;
  margin: 0;
  animation: ${RotateAnimation} 1s 0s ease-in-out infinite;
  box-sizing: content-box;
  @media (max-width: 768px) {
    font-size: 0.8em;
  }
  @media (max-width: 1300px) and (min-width: 768px) {
    font-size: 0.9em;
  }
`;

export const SecondTitle = styled.h1`
  display: inline-block;
  font-size: 2em;
  font-weight: 300;
  margin: 0;
  @media (max-width: 1024px) {
    font-size: 1.5em;
  }
  @media (max-width: 1300px) and (min-width: 1024px){
    font-size: 1.7em;
  }
`;

export const Languages = styled.h1`
  color: var(--principal-blue);
  font-weight: 400;
  font-size: 1.5em;
  @media (max-width: 768px) {
    font-size: 1.4em;
    color: var(--light-blue);
  }
  @media (max-width: 1300px)and (min-width: 768px) {
    font-size: 1.4em;
  }
`;

export const ImagesContainer = styled.div`
  user-select: none;
  position: relative;
  top: 0;
  left: 0;
  @media (max-width: 768px) {
    margin: 10px;
  }
`;
export const MainImage = styled.img`
  height: 400px;
  aspect-ratio: 4/5;
  object-fit: cover;
  border-radius: var(--border-radius-pill);
  box-shadow: 23px 23px 0px -5px rgba(24, 29, 49, 0.8);
  z-index: 10;
  position: relative;
  top: 0;
  left: 0;
  & src {
    transform: scale(1.5);
  }

  @media (max-width: 768px) {
    height: 300px;
    border-radius: var(--border-radius-subtles);
  }

  @media (max-width: 1024px)and (min-width: 768px) {
    height: 200px;
  }
  @media (max-width: 1350px)  and (min-width: 1024px) {
    height: 250px;
  }

`;

export const RigthDecoration = styled.img`
  height: 45%;
  position: absolute;
  bottom: -10%;
  right: -15%;
  user-select: none;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const LeftDecoration = styled.img`
  height: 45%;
  position: absolute;
  top: -10%;
  left: -15%;
  user-select: none;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const GoDownButton = styled.button`
  width: 200px;
  height: 60px;
  border-radius: 70px;
  position: absolute;
  margin: 0;
  bottom: 50px;
  font-size: 1.2em;
  transition: 200ms ease-in-out;
  &:hover {
    filter: brightness(1.5);
  }
`;
