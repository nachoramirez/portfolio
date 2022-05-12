import React from 'react'
import {
  MainContainer,
  MainInfoContainer,
  JobTitle,
  SecondTitle,
  Languages,
  MainImage,
  ImagesContainer,
  RigthDecoration,
  LeftDecoration,
  InfoAndFotoContainer,
  MediaContainer,
  MediaItem,
  GoDownButton,
  Hand,
} from './Main'

import lightBlueDots from '../../static/lightBlueDots.svg'
import blueDots from '../../static/blueDots.svg'
import githubLogo from '../../static/Github.svg'
import instagramLogo from '../../static/Instagram.svg'
import twitterLogo from '../../static/Twitter.svg'
import linkdinLogo from '../../static/Linkdin.svg'
import Photo from '../../static/Photo.jpg'

const Main = ({ goDown }) => {
  return (
    <MainContainer>
      <MediaContainer>
        <a
          href="https://www.linkedin.com/in/juan-ignacio-ramirez-8632831b3/"
          target="_blank"
        >
          <MediaItem height="40px" src={linkdinLogo} />
        </a>
        <h1>•</h1>
        <a href="https://www.instagram.com/nacho_ramirez07/" target="_blank">
          <MediaItem height="40px" src={instagramLogo} />
        </a>
        <h1>•</h1>
        <a href="https://twitter.com/nacho_ramirez07" target="_blank">
          <MediaItem src={twitterLogo} />
        </a>
        <h1>•</h1>
        <a href="https://github.com/nachoramirez" target="_blank">
          <MediaItem src={githubLogo} />
        </a>
      </MediaContainer>
      <InfoAndFotoContainer>
        <MainInfoContainer>
          <SecondTitle>
            Hi <Hand>👋</Hand>
          </SecondTitle>
          <JobTitle>I'm a developer</JobTitle>
          <SecondTitle>
            from <span>Argentina</span>, Buenos Aires.
          </SecondTitle>
          <Languages>Javascript / React / CSS / HTML</Languages>
        </MainInfoContainer>
        <ImagesContainer>
          <LeftDecoration src={lightBlueDots} />
          <MainImage alt="Nacho Ramirez" src={Photo} />
          <RigthDecoration src={blueDots} />
        </ImagesContainer>
      </InfoAndFotoContainer>
      <GoDownButton onClick={() => goDown.moveSectionDown()}>See More</GoDownButton>
    </MainContainer>
  )
}

export default Main
