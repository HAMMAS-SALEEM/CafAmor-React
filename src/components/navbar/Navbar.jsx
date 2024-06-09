import React, { useState } from 'react'
import Burger from './burger/Burger'
import Buttons from './buttons/Buttons'
import Logo from './logo/Logo'
import Reservation from './reservation/Reservation'

const Navbar = () => {
  const [navBtns, setNavBtns] = useState(false)
  const handleNavBtns = () => setNavBtns(prev => !prev)

  return (
    <div className="absolute left-0 right-0">
      <div className='flex md:justify-between relative border-b-[1px] border-white z-20'>
        <Logo />
        <Burger handleNavBtns={handleNavBtns} />
        <Buttons navBtns={navBtns} />
        <Reservation />
      </div>
    </div>
  )
}

export default Navbar
