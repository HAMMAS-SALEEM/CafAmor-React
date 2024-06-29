import { Carousel } from 'flowbite-react'
import React from 'react'
import home from '../../../assets/home.jpg'
import menu from '../../../assets/menu-bg.jpg'
import contact from '../../../assets/contact-bg.png'

const CarouselContainer = () => {
  return (
    <div className="flex row">
      <div className='z-20 flex'>
        <img className='h-full' src={home} alt={home} />
        <img className='h-full' src={menu} alt={menu} />
        <img className='h-full' src={contact} alt={contact} />
      </div>
      <div className='z-20 flex'>
        <img className='h-full' src={home} alt={home} />
        <img className='h-full' src={menu} alt={menu} />
        <img className='h-full' src={contact} alt={contact} />
      </div>
    </div>
  )
}

export default CarouselContainer
