import React from 'react'

const Burger = ({ handleNavBtns }) => {
  return (
    <button
      type='button'
      className='flex flex-col justify-center items-end gap-1.5 p-6 w-full md:hidden'
      onClick={handleNavBtns}
    >
      {[1, 2, 3].map(item => (
        <div key={item} className={`bg-black bg-white w-10 h-1.5 rounded border-line-${item}`} />
      ))} 
    </button>
  )
}

export default Burger
