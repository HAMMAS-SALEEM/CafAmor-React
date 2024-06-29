import React from 'react'
import AppLayout from '../layout/AppLayout'
import AboutDetails from '../components/about/AboutDetails'

const About = () => {
  return (
    <>
      <AboutDetails />
    </>
  )
}

export default AppLayout()(About)
