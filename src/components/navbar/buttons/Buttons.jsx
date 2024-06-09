import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import navbarBtns from './navbarBtns'

const Buttons = ({ navBtns }) => {
  const [openNavBtns, setOpenNavBtns] = useState('')

  const handleActiveLink = ({ isActive }) => {
    let className = ''
    if (isActive) {
      className = 'active text-[#ffc515]'
    } else {
      className = 'inactive md:text-white'
    }

    return (
      className +
      ' font-bold text-xl hover:text-[#ffc515] transition-all duration-500'
    )
  }

  const handleNavBtns = () => {
    let style = `bg-white absolute top-full left-0 right-0 overflow-hidden ${
      navBtns ? 'max-h-96' : 'max-h-0'
    } transition-all duration-500`
    style = style + ` md:static md:max-h-96 md:flex md:m-auto md:bg-transparent`
    setOpenNavBtns(style)
    return style
  }

  useEffect(() => {
    handleNavBtns()
  }, [navBtns])

  return (
    <div className='lg:border-r-[1px] lg:border-white flex'>
      <ul className={openNavBtns}>
        {navbarBtns.map(btn => {
          return (
            <li
              key={btn.name}
              className='border-b-[1px] border-grey-500 md:border-none py-3 px-7 bg-white md:bg-transparent'
            >
              <NavLink to={btn.path} className={handleActiveLink}>
                {btn.name}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Buttons
