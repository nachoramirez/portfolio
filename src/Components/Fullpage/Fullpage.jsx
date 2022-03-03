import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import Main from '../Main/Main.jsx'

import AboutMe from '../AboutMe/AboutMe.jsx'

const Fullpage = () => (
  <ReactFullpage
    scrollingSpeed={1000} /* Options here */
    anchors={['home', 'about-me', 'contact']}
    navigationTooltips={['', 'about-me', 'contact']}
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
            <Main />
          </div>
          <div className="section">
            <Main />
          </div>
        </ReactFullpage.Wrapper>
      )
    }}
  />
)

export default Fullpage
