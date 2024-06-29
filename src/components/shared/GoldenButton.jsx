import React from 'react'

const GoldenButton = ({ title, handleButton }) => (
  <button
    type='button'
    className='bg-goldBtn py-2 w-[200px] font-bold m-auto'
    onClick={handleButton}
  >
    {title}
  </button>
)

export default GoldenButton
