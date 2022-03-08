import { createGlobalStyle } from 'styled-components/macro'
import variables from './variables'
import backgroundImage from '../static/background-image.jpg'

const GlobalStyle = createGlobalStyle`
  ${variables};

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  section {
    width: 92%;
    height: 100vh;
    display: flex;
    float: right;
    

    @media (max-width: 768px) {
      width: 100%;
    }
  }


  button {
    background-color: var(--dark-blue);
    border-radius: var(--border-radius-pill);
    border: none;
    cursor: pointer;
    color: white;
    &:hover{
     filter: brightness(1.5);
    }

  }

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: #121212;
    color: var(--white);
    font-family: var(--font);
    background: linear-gradient(
      180deg,
      rgba(7, 34, 39, 0.9)20%,
      rgba(79, 189, 186, 0.8) 120%
    ),
    url(${backgroundImage});
    background-position: center;
  }

  span {
    color: var(--yellow);
    font-weight: 400;
  }

`

export default GlobalStyle
