import React, { useRef } from 'react'

import {
  ProyectsPageContainer,
  Title,
  ProyectsContainer,
  Proyect,
} from './Proyects'
import { useObserver } from '../../hooks/useObserver'

import { useNavigate } from 'react-router-dom'

import Clime from '../../static/proyects/Clime.png'
import Movies from '../../static/proyects/Movies.png'
import Nike from '../../static/proyects/Nike.png'

import ProyectView from '../ProyectView/ProyectView.jsx'

const Proyects = () => {
  const Ref = useRef()
  const navigate = useNavigate()
  const isVisible = useObserver(Ref)

  return (
    <ProyectsPageContainer isVisible={isVisible}>
      <Title ref={Ref}> Best projects</Title>
      <ProyectsContainer>
        <Proyect onClick={() => navigate('/proyect/clime')} image={Clime}>
          <h1>Clime app</h1>
        </Proyect>
        <Proyect onClick={() => navigate('/proyect/movies')} image={Movies}>
          <h1>Movies info</h1>
        </Proyect>
        <Proyect onClick={() => navigate('/proyect/ecommerce')} image={Nike}>
          <h1>E-commerce frontend</h1>
        </Proyect>
      </ProyectsContainer>
    </ProyectsPageContainer>
  )
}

export default Proyects
