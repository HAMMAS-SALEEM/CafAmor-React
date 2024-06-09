import React from 'react'

const SectionTitle = ({ title, overlay = false }) => {
  return (
    <>
      {!overlay ? (
        <h2 className='text-[30px] font-bold mt-[10px]    text-[#1b1a1a]    md:text-[50px] w-full flex flex-col items-center relative'>
          <span className='bg-white z-10 md:px-[25px]'>{title}</span>
          <hr className='sm:hidden md:block border-[#ffc515] w-[50%] absolute top-[60%]' />
        </h2>
      ) : (
        <h2 className='text-[30px] font-bold mt-[10px]    text-[white]    md:text-[50px] w-full flex justify-center items-center relative'>
          <hr className='sm:hidden md:block border-[#ffc515] w-[13.2%]' />
          <span className='z-10 md:px-[25px]'>{title}</span>
          <hr className='sm:hidden md:block border-[#ffc515] w-[13.2%]' />
        </h2>
      )}
    </>
  )
}

export default SectionTitle
