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
        <MediaItem height="40px" src={linkdinLogo} />
        <h1>•</h1>
        <MediaItem height="40px" src={instagramLogo} />
        <h1>•</h1>
        <MediaItem src={twitterLogo} />
        <h1>•</h1>
        <MediaItem src={githubLogo} />
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
          <MainImage alt='Nacho Ramirez' src={Photo} />
          <RigthDecoration src={blueDots} />
        </ImagesContainer>
      </InfoAndFotoContainer>
      <GoDownButton onClick={() => goDown.moveSectionDown()}>
        See More
      </GoDownButton>
    </MainContainer>
  )
}

export default Main
