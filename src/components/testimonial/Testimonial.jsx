import React from 'react'
import SectionLogo from '../shared/SectionLogo'
import SectionTitle from '../shared/SectionTitle'
import iceCream from '../../assets/ice-cream-white.png'
import quotes from './quotes/quotes'

import bg from '../../assets/testimonial.png'
import ComponentLayout from '../shared/ComponentLayout'

const Testimonial = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <SectionLogo image={iceCream} />
      <SectionTitle title={"Testimonials"} overlay={true} />
      <div className="z-10 mt-[80px] text-center px-[15px]">
        <q className="text-white text-xl">{quotes[0].quote}</q>
      </div>
      <span className="z-10 font-bold text-[20px] mt-[80px]">
        <span className="text-[#ffc515]">{quotes[0].customerName}</span>
        <span className="text-white">, Client</span>
      </span>
    </div>
  )
}

export default ComponentLayout({bg})(Testimonial)
