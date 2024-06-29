import React from 'react'
import GoldenButton from '../../shared/GoldenButton'

const Form = () => {
  const handleButton = () => console.log('Button');
  return (
    <form className="flex flex-col my-[90px] w-[100%] md:w-[50%] px-[30px] gap-3">
      <input className='border-hidden bg-blueInp font-bold' type='text' placeholder='Name' />
      <input className='border-hidden bg-blueInp font-bold' type='email' placeholder='Email' />
      <textarea placeholder="Message" className="border-hidden bg-blueInp font-bold" rows={"10"} />
      <GoldenButton title={"Submit"} handleButton={handleButton} />
    </form>
  )
}

export default Form
