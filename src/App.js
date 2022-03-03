import React from 'react'
import GlobalStyle from './styles/GlobalStyles.js'
import Main from './Components/Main/Main.jsx'
import NavBar from './Components/NavBar/NavBar.jsx'

import Fullpage from './Components/Fullpage/Fullpage.jsx'

const App = () => {
  return (
    <>
      <NavBar />
      <GlobalStyle />
      <Fullpage />
    </>
  )
}

export default App
