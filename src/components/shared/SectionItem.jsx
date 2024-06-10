import React from 'react'

const SectionItem = ({ title, description }) => {
  return (
    <li className='mb-[30px]'>
      <h3 className='text-center text-[#1b1a1a] font-bold text-[30px]'>
        {title}
      </h3>
      <p className='text-center mt-[10px] text-[#a0a0a0] font-bold p-[5px] md:leading-[28px]'>
        {description}
      </p>
    </li>
  )
}

export default SectionItem
