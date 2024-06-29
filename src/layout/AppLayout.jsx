import React from 'react'
import Navbar from '../components/navbar/Navbar'

const AppLayout = () => WrappedComponent => {
  return props => {
    return (
      <>
        <Navbar />
        <WrappedComponent {...props} />
      </>
    )
  }
}

export default AppLayout
