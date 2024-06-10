import React from 'react'
import SectionLogo from '../shared/SectionLogo'
import menu from '../../assets/menu-logo.png'
import bg from '../../assets/menu-bg.jpg'
import SectionTitle from '../shared/SectionTitle'
import ComponentLayout from '../shared/ComponentLayout'

const Menu = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <SectionLogo image={menu} />
      <SectionTitle title={"Our Menu"} overlay={true} />
    </div>
  )
}

export default ComponentLayout({ bg })(Menu)
