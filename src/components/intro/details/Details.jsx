import React from 'react'
import lamb from '../../../assets/lamb-100.png'
import details from './details'
import signature from '../../../assets/signature.png'

const Details = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <img src={lamb} alt='lamb' className='w-[60px] mt-[120px]' />
      <h2 className='text-[30px] font-bold mt-[10px] text-[#1b1a1a] md:text-[50px] w-full flex flex-col items-center relative'>
        <span className="bg-white z-10 md:px-[25px]">Welcome</span>
        <hr className="sm:hidden md:block border-[#ffc515] w-[50%] absolute top-[60%]" />
      </h2>
      <ul className='mt-[100px] md:flex'>
        {details.map(detail => (
          <li key={detail.id} className="mb-[30px]">
            <h3 className='text-center text-[#1b1a1a] font-bold text-[30px]'>
              {detail.title}
            </h3>
            <p className='text-center mt-[10px] text-[#a0a0a0] font-bold p-[5px] md:leading-[28px]'>
              {detail.description}
            </p>
          </li>
        ))}
      </ul>
      <img src={signature} alt="signature" className="mt-[60px] md:w-[150px]" />
    </div>
  )
}

export default Details
