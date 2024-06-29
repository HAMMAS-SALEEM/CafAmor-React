import React from 'react'
import { ClipLoader } from 'react-spinners'
const Loader = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <ClipLoader color="#ffc515" size={100} />
    </div>
  )
}

export default Loader
