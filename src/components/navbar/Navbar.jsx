import React, { useState } from 'react'
import Burger from './burger/Burger'
import Buttons from './buttons/Buttons'
import Logo from './logo/Logo'

const Navbar = () => {
  const [navBtns, setNavBtns] = useState(false)
  const handleNavBtns = () => setNavBtns(prev => !prev)

  return (
    <div className='flex justify-between bg-black px-7 py-7 relative'>
      <Logo />
      <Burger handleNavBtns={handleNavBtns} />
      <Buttons navBtns={navBtns} />
    </div>
  )
}

export default Navbar
