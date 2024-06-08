import React, { useState } from 'react'
import Burger from './burger/Burger'
import Buttons from './buttons/Buttons'
import Logo from './logo/Logo'
import Reservation from './reservation/Reservation'

const Navbar = () => {
  const [navBtns, setNavBtns] = useState(false)
  const handleNavBtns = () => setNavBtns(prev => !prev)

  return (
    <div className='flex md:justify-between bg-black relative border-b-3 border-[#ffc515]'>
      <Logo />
      <Burger handleNavBtns={handleNavBtns} />
      <Buttons navBtns={navBtns} />
      <Reservation />
    </div>
  )
}

export default Navbar
