import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import styled from "styled-components";
import Main from "../Main/Main.jsx";
import AboutMe from "../AboutMe/AboutMe.jsx";
import Proyects from "../Proyects/Proyects.jsx";
import Contact from "../Contact/Contact.jsx";

const Container = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
  scrollbar-width: none;
`;

const Section = styled.div`
  scroll-snap-align: start;
  height: 100vh;
`;

const Fullpage = () => (
  <ReactFullpage
    scrollingSpeed={700}
    anchors={["home", "about-me", "proyects", "contact"]}
    navigationTooltips={["home", "about-me", "proyects", "contact"]}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <Main goDown={fullpageApi} />
          </div>
          <div className="section">
            <AboutMe />
          </div>
          <div className="section">
            <Proyects />
          </div>
          <div className="section">
            <Contact />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />

  // <Container>
  //   <Section>
  //     <Main goDown={() => console.log('anahse')} />
  //   </Section>
  //   <Section>
  //     <AboutMe />
  //   </Section>

  //   <Section>
  //     <Proyects />
  //   </Section>
  //   <Section>
  //     <Contact />
  //   </Section>
  // </Container>
);

export default Fullpage;
