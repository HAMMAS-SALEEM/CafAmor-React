import React from 'react'

const HeroDetails = ({big="", small=""}) => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <h1 className='text-center m-auto text-5xl md:text-7xl lg:text-9xl z-10'>
        <span className='text-white font-bold'>{big}</span>
        <span className='text-[#ffc515] font-bold'>.</span>
        <hr />
        <span className='block text-white text-xl text-end font-bold'>
          {small}
        </span>
      </h1>
    </div>
  )
}

export default HeroDetails
