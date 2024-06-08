import React from 'react'

const Burger = ({ handleNavBtns }) => {
  return (
    <button type='button' className='flex flex-col gap-1.5 w-8 md:hidden' onClick={handleNavBtns}>
      <div className='bg-black p-0.5 bg-white w-full' />
      <div className='bg-black p-0.5 bg-white w-full' />
      <div className='bg-black p-0.5 bg-white w-full' />
    </button>
  )
}

export default Burger
