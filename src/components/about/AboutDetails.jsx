import React from 'react'
import HeroDetails from '../shared/HeroDetails'
import ComponentLayout from '../shared/ComponentLayout'
import bg from '../../assets/about-bg.jpg'

const AboutDetails = () => {
  return (
    <div>
      <HeroDetails big={'About us'} />
    </div>
  )
}

export default ComponentLayout({ bg })(AboutDetails)
