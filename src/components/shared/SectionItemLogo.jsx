import React from 'react'

const SectionItemLogo = ({ image }) => {
  return (
    <div className='text-center flex justify-center'>
      <img src={image} alt={image} className='w-[50px]' />
    </div>
  )
}

export default SectionItemLogo
