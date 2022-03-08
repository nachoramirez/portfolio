import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'

import Main from '../Main/Main.jsx'
import AboutMe from '../AboutMe/AboutMe.jsx'
import Proyects from '../Proyects/Proyects.jsx'

const Fullpage = () => (
  <ReactFullpage
    scrollingSpeed={700} 
    anchors={['home', 'about-me', 'proyects', 'contact']}
    navigationTooltips={['', 'about-me', 'proyects', 'contact']}
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
            <h1> HOLA</h1>
          </div>
        </ReactFullpage.Wrapper>
      )
    }}
  />
)

export default Fullpage
