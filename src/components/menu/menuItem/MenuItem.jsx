import React from 'react'

const MenuItem = ({meal}) => {
  return (
    <li className='flex items-baseline'>
      <h3 className='text-[20px] font-bold mt-[10px] text-white'>
        {meal.title}
      </h3>
      <span className="flex-1 mx-[5px] border-b-[2px] border-white border-dotted text-white w-[90px]"></span>
      <h3 className='text-[20px] font-bold mt-[10px] text-white'>
        Rs.{meal.price}
      </h3>
    </li>
  )
}

export default MenuItem
