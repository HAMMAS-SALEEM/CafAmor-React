import React from 'react'
import AppLayout from '../layout/AppLayout'
import Intro from '../components/intro/Intro'

const About = () => {
  return (
    <>
      <Intro />
    </>
  )
}

export default AppLayout()(About)
