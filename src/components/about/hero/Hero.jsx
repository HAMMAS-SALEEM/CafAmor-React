import React from 'react'
import HeroDetails from '../../shared/HeroDetails'
import ComponentLayout from '../../shared/ComponentLayout'
import bg from '../../../assets/about-bg.jpg'

const Hero = () => {
  const big = 'About us'
  return <HeroDetails big={big} />
}

export default ComponentLayout({bg})(Hero)
