import React from 'react'
import Hero from './hero/Hero'
import Details from './detail/Details'
import bg from '../../assets/home.jpg'
import CarouselContainer from './carousel/CarouselContainer'

const Intro = () => {
  return (
    <>
      <Hero />
      <Details />
      {/* <CarouselContainer /> */}
    </>
  )
}

export default Intro
