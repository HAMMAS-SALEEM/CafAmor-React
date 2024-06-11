import React from 'react'
import Intro from '../components/intro/Intro'
import Testimonial from '../components/testimonial/Testimonial'
import Services from '../components/services/Services'
import Menu from '../components/menu/Menu'
import Contact from '../components/contact/Contact'
import AppLayout from '../layout/AppLayout'

const Home = () => {
  return (
    <div>
      <Intro />
      <Testimonial />
      <Services />
      <Menu />
      <Contact />
    </div>
  )
}

export default AppLayout()(Home)
