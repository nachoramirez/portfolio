import React from 'react'
import { useLocation } from 'react-router-dom'
import {
  ProyectViewContainer,
  Image,
  ProyectTitle,
  ProyectInfo,
  TextProyect,
  ProyectDescription,
  TechnologiesContainer,
  Technology,
} from './ProyectView'

import Clime from '../../static/proyects/Clime.png'
import Movies from '../../static/proyects/Movies.png'
import Nike from '../../static/proyects/Nike.png'

import ReactLogo from '../../static/technologies/ReactLogo.svg'
import ReduxLogo from '../../static/technologies/ReduxLogo.svg'
import ReactRouter from '../../static/technologies/ReactRouterLogo.svg'
import StyledComponents from '../../static/technologies/StyledComponentsLogo.svg'

const ProyectsData = [
  {
    id: 'clime',
    photo: Clime,
    desctription:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta provident, sunt accusantium optio dolorum laborum temporibus. Deserunt, sequi nostrum natus dolores voluptatum obcaecati harum at fuga itaque iure consequatur recusandae!',
    title: 'Clime App',
    technologies: [
      {
        logo: ReactLogo,
        alt: 'react logo',
      },
      {
        logo: ReactRouter,
        alt: 'react router dom',
      },
      {
        logo: StyledComponents,
        alt: 'styled components',
      },
    ],
  },
  {
    id: 'ecommerce',
    photo: Nike,
    desctription:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta provident, sunt accusantium optio dolorum laborum temporibus. Deserunt, sequi nostrum natus dolores voluptatum obcaecati harum at fuga itaque iure consequatur recusandae!',
    title: 'E-commerce Frontentd',
    technologies: [
      {
        logo: ReactLogo,
        alt: 'react logo',
      },
      {
        logo: ReactRouter,
        alt: 'react router dom',
      },
      {
        logo: StyledComponents,
        alt: 'styled components',
      },
      {
        logo: ReduxLogo,
        alt: 'redux',
      },
    ],
  },
  {
    id: 'movies',
    photo: Movies,
    desctription:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta provident, sunt accusantium optio dolorum laborum temporibus. Deserunt, sequi nostrum natus dolores voluptatum obcaecati harum at fuga itaque iure consequatur recusandae!',
    title: 'Movies Info',
    technologies: [
      {
        logo: ReactLogo,
        alt: 'react logo',
      },
      {
        logo: ReactRouter,
        alt: 'react router dom',
      },
      {
        logo: StyledComponents,
        alt: 'styled components',
      },
    ],
  },
]

const ProyectView = () => {
  const location = useLocation()

  const currentProyect = location.pathname.replace('/proyect/', '')

  const data = ProyectsData.filter((item) => item.id === currentProyect && item)
  return (
    <ProyectViewContainer>
      <ProyectTitle>{data[0].title}</ProyectTitle>
      <ProyectInfo>
        <Image alt="proyect image" src={data[0].photo} />
        <TextProyect>
          <ProyectDescription>{data[0].desctription}</ProyectDescription>
          <TechnologiesContainer>
            {data[0].technologies.map((item) => (
              <Technology key={item.id} alt={item.alt} src={item.logo} />
            ))}
          </TechnologiesContainer>
        </TextProyect>
      </ProyectInfo>
    </ProyectViewContainer>
  )
}

export default ProyectView
