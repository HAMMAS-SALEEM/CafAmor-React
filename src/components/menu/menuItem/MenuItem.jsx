import React from 'react'

const MenuItem = ({meal}) => {
  return (
    <li className='flex'>
      <h3 className='text-[20px] font-bold mt-[10px] text-white'>
        {meal.title}
      </h3>
      <h3 className='text-[20px] font-bold mt-[10px] text-white'>
        {meal.price}
      </h3>
    </li>
  )
}

export default MenuItem
