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

import GithubLogo from '../../static/Github.svg'

const ProyectsData = [
  {
    id: 'clime',
    photo: Clime,
    desctription:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta provident, sunt accusantium optio dolorum laborum temporibus. Deserunt, sequi nostrum natus dolores voluptatum obcaecati harum at fuga itaque iure consequatur recusandae!',
    title: 'Clime App',
    url: 'https://nachoramirez.github.io/clima/',
    proyectUrl: 'https://github.com/nachoramirez/clima',
    technologies: [
      {
        logo: ReactLogo,
        alt: 'react logo',
        url: 'https://reactjs.org/',
      },
      {
        logo: ReactRouter,
        alt: 'react router dom',
        url: 'https://reactrouter.com/',
      },
      {
        logo: StyledComponents,
        alt: 'styled components',
        url: 'https://styled-components.com/',
      },
    ],
  },
  {
    id: 'ecommerce',
    photo: Nike,
    url: 'https://nachoramirez.github.io/nike/',
    proyectUrl: 'https://github.com/nachoramirez/nike',
    desctription:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta provident, sunt accusantium optio dolorum laborum temporibus. Deserunt, sequi nostrum natus dolores voluptatum obcaecati harum at fuga itaque iure consequatur recusandae!',
    title: 'E-commerce Frontentd',
    technologies: [
      {
        logo: ReactLogo,
        alt: 'react logo',
        url: 'https://reactjs.org/',
      },
      {
        logo: ReactRouter,
        alt: 'react router dom',
        url: 'https://reactrouter.com/',
      },
      {
        logo: StyledComponents,
        alt: 'styled components',
        url: 'https://styled-components.com/',
      },
      {
        logo: ReduxLogo,
        alt: 'redux',
        url: 'https://redux.js.org/',
      },
    ],
  },
  {
    id: 'movies',
    photo: Movies,
    url: 'https://nachoramirez.github.io/movies/',
    proyectUrl: 'https://github.com/nachoramirez/movies',
    desctription:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta provident, sunt accusantium optio dolorum laborum temporibus. Deserunt, sequi nostrum natus dolores voluptatum obcaecati harum at fuga itaque iure consequatur recusandae!',
    title: 'Movies Info',
    technologies: [
      {
        logo: ReactLogo,
        alt: 'react logo',
        url: 'https://reactjs.org/',
      },
      {
        logo: ReactRouter,
        alt: 'react router dom',
        url: 'https://reactrouter.com/',
      },
      {
        logo: StyledComponents,
        alt: 'styled components',
        url: 'https://styled-components.com/',
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
        <a target="_blank" href={data[0].url}>
          <Image image={data[0].photo}>
            <a target="_blank" href={data[0].proyectUrl}>
              <img src={GithubLogo} />
            </a>
          </Image>
        </a>
        <TextProyect>
          <ProyectDescription>{data[0].desctription}</ProyectDescription>
          <TechnologiesContainer>
            {data[0].technologies.map((item) => (
              <a target="_blank" key={item.id} href={item.url}>
                <Technology alt={item.alt} src={item.logo} />
              </a>
            ))}
          </TechnologiesContainer>
        </TextProyect>
      </ProyectInfo>
    </ProyectViewContainer>
  )
}

export default ProyectView
