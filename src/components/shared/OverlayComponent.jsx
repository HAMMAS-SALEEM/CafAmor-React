import React from 'react'

const OverlayComponent = ({bg}) => WrappedComponent => {
  return props => {
    return (
      <>
        <div className={`relative bg-[url('${bg}')] bg-no-repeat bg-cover bg-center h-screen w-full`}>
        <div className="absolute top-0 bottom-0 right-0 left-0 bg-black opacity-70" />
          <WrappedComponent {...props} />
        </div>
      </>
    )
  }
}

export default OverlayComponent
