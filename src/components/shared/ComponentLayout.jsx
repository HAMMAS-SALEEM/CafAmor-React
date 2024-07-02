import React from 'react'

const ComponentLayout = bg => WrappedComponent => {
  return props => {
    return (
      <>
        {bg.bg.length !== 0 ? (
          <div
            style={{ '--image-url': `url(${bg.bg})` }}
            className='relative bg-[image:var(--image-url)] bg-no-repeat bg-cover bg-center w-full'
          >
            <div className='absolute top-0 bottom-0 right-0 left-0 bg-black opacity-70 h-full' />
            <WrappedComponent {...props} />
          </div>
        ) : (
          <div className='flex flex-col justify-center items-center bg-white z-30'>
            <WrappedComponent {...props} />
          </div>
        )}
      </>
    )
  }
}

export default ComponentLayout
