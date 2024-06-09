import React from 'react'

const Hero = () => {
  return (
    <div className="relative bg-[url('./assets/home.jpg')] bg-no-repeat bg-cover bg-center h-screen w-full flex justify-center items-center">
      <div className='overlay absolute top-0 bottom-0 left-0 right-0 opacity-70 bg-black' />
        <h1 className='text-center m-auto text-5xl z-10'>
          <span className='text-white font-bold'>Special Dish</span>
          <span className='text-[#ffc515] font-bold'>.</span>
          <hr />
          <span className='block text-white text-xl text-end font-bold'>By Chef Zakir</span>
        </h1>
    </div>
  )
}

export default Hero
