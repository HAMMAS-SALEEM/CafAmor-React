import React from 'react'
import Chef from './Chef'
import bg from '../../../assets/chef-bg.jpg'
import logo from '../../../assets/beef-steak.png'
import ComponentLayout from '../../shared/ComponentLayout'
import SectionLogo from '../../shared/SectionLogo'

const ChefContainer = () => {
  return (
    <>
      <SectionLogo image={logo} />
      <Chef />
    </>
  )
}

export default ComponentLayout({ bg })(ChefContainer)
