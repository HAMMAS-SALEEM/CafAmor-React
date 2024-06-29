import React from 'react'
import bg from '../../../assets/home.jpg'
import ComponentLayout from '../../shared/ComponentLayout'
import HeroDetails from '../../shared/HeroDetails'

const Hero = () => {
  const big = 'Special Dish'
  const small = 'By Chef Zakir'

  return <HeroDetails big={big} small={small} />
}

export default ComponentLayout({ bg })(Hero)
