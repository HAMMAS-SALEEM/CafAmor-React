import React from 'react'

const SectionTitle = ({ title }) => {
  return (
    <h2 className='text-[30px] font-bold mt-[10px] text-[#1b1a1a] md:text-[50px] w-full flex flex-col items-center relative'>
      <span className='bg-white z-10 md:px-[25px]'>{title}</span>
      <hr className='sm:hidden md:block border-[#ffc515] w-[50%] absolute top-[60%]' />
    </h2>
  )
}

export default SectionTitle
