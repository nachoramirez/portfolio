import React, { useState, useEffect, useRef } from 'react'

import {
  AboutMeContainer,
  Title,
  AboutMeData,
  DescriptionContainer,
  ProgramerImage,
  Description,
  ContactMe,
} from './AboutMe'

import ProgramerPhoto from '../ProgramerPhoto/ProgramerPhoto'

import { useObserver } from '../../hooks/useObserver'

const AboutMe = () => {
  const Ref = useRef()

  const isVisible = useObserver(Ref)

  return (
    <AboutMeContainer isVisible={isVisible}>
      <Title ref={Ref}> About Me</Title>
      <AboutMeData>
        <DescriptionContainer>
          <Description>
            Hi! my name is Nacho and I enjoy programing web aplications. My
            interest on development started in 2019. My first approach with
            coding was with a short course of python, but when I discovered the
            web develepment, I get fasinated.
          </Description>
          <Description>
            I work principaly with React. But i also know native HTML, CSS and
            Javascript.
          </Description>
          <Description>
            At the moment, I'm searching for my first frotend developer job. So
            if you are interested
            <ContactMe href={'#contact'}> Contact me.</ContactMe>
          </Description>
          {/* <Description> The technologies that I work are </Description> */}
        </DescriptionContainer>
        <ProgramerImage>
          <ProgramerPhoto />
        </ProgramerImage>
      </AboutMeData>
    </AboutMeContainer>
  )
}

export default AboutMe
