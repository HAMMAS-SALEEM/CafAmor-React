import React from 'react'

const Chef = ({ chef }) => {
  return (
    <li className='flex flex-col justify-center items-center mt-[30px]'>
      <div
        style={{ '--image-url': `url(${chef.pic})` }}
        className={`w-[300px] h-[300px] border border-white bg-[image:var(--image-url)] bg-cover`}
      />
      <h2 className='text-goldBtn text-2xl font-bold mt-[50px]'>{chef.name}</h2>
      <p className='text-white w-[300px] text-center'>{chef.description}</p>
    </li>
  )
}

export default Chef
