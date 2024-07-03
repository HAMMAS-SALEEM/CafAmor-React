import React from 'react'
import AppLayout from '../layout/AppLayout'
import AboutDetails from '../components/about/AboutDetails'
import ChefContainer from '../components/chefs/ChefContainer'

const About = () => {
  return (
    <div>
      <AboutDetails />
      <ChefContainer />
    </div>
  )
}

export default AppLayout()(About)
