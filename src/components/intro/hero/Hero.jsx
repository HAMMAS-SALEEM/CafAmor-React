import React from 'react'
import OverlayComponent from '../../shared/OverlayComponent'

import bg from '../../../assets/home.jpg'

const Hero = () => {
  return (
    <div className="flex justify-center items-center h-screen">
        <h1 className='text-center m-auto text-5xl md:text-7xl lg:text-9xl z-10'>
          <span className='text-white font-bold'>Special Dish</span>
          <span className='text-[#ffc515] font-bold'>.</span>
          <hr />
          <span className='block text-white text-xl text-end font-bold'>By Chef Zakir</span>
        </h1>
    </div>
  )
}

export default OverlayComponent({bg})(Hero)
