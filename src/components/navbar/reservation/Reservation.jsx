import React from 'react'
import phone from '../../../assets/phone.png'

const Reservation = () => {
  return (
    <div className='xs:hidden sm:hidden md:hidden lg:flex justify-center items-center p-6 gap-1'>
      <span className='text-[#ffc515] font-bold'>Reservation</span>
      <img src={phone} alt='phone' className='w-4 h-4' />
      <span className='text-white font-bold'>03020163845</span>
    </div>
  )
}

export default Reservation
