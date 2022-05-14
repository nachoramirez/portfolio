import React from "react"
import GlobalStyle from "./styles/GlobalStyles.js"
import Main from "./Components/Main/Main.jsx"
import NavBar from "./Components/NavBar/NavBar.jsx"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Fullpage from "./Components/Fullpage/Fullpage.jsx"
import ProyectView from "./Components/ProyectView/ProyectView.jsx"

const App = () => {
  return (
    <BrowserRouter>
      <>
        <NavBar />
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<Fullpage />} />
          <Route path='/proyect/:id' element={<ProyectView />} />
        </Routes>
      </>
    </BrowserRouter>
  )
}

export default App
