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
      className = 'inactive'
    }

    return (
      className +
      ' font-bold text-white text-xl hover:text-[#ffc515] transition-all duration-500'
    )
  }

  const handleNavBtns = () => {
    let style = `bg-white absolute top-full left-0 right-0 overflow-hidden ${
      navBtns ? 'max-h-96' : 'max-h-0'
    } transition-all duration-500`
    setOpenNavBtns(style)
    return style
  }

  useEffect(() => {
    handleNavBtns()
  }, [navBtns])

  return (
    <ul className={openNavBtns}>
      {navbarBtns.map(btn => {
        return (
          <li key={btn.name} className='border-b-2 py-3 pl-7 bg-slate-500'>
            <NavLink to={btn.path} className={handleActiveLink}>
              {btn.name}
            </NavLink>
          </li>
        )
      })}
    </ul>
  )
}

export default Buttons
