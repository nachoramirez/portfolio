import styled from "styled-components";

export const AboutMeContainer = styled.section`
  flex-direction: column;
  align-items: center;
  justify-content: left;
  transition: 1s;
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transform: ${(props) =>
    props.isVisible ? "translateX(0)" : "translateX(-500px)"};
  @media (max-width: 768px) {
    opacity: 1;
    transform: translateX(0);
    height: auto;
  }
`;

export const AboutMeData = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;

  @media (max-width: 768px) {
    width: 95%;
  }

  @media (max-width: 1300px) {
    width: 100%;
    height: auto;
  }
  @media (max-width: 1490px) {
    width: 95%;
  }
`;

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
`;

export const DescriptionContainer = styled.div`
  width: 60%;
  height: 50vh;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border-radius: var(--border-radius-subtle);
  padding: 20px;
  text-align: justify;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
  @media (max-width: 1150px) {
    width: 75%;
    height: auto;
  }
`;

export const ProgramerImage = styled.div`
  margin: auto 10px;


  @media (max-width: 1250px) {
    display: none;
  }
`;

export const Description = styled.p`
  font-size: 1.5em;

  @media (max-width: 768px) {
    font-size: 1.25em;
  }
`;

export const ContactMe = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: var(--yellow);
  font-weight: 400;
`;
