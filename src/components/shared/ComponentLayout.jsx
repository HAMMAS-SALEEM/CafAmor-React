import React from 'react'

const ComponentLayout = () => WrappedComponent => {
  return props => {
    return (
        <div className='flex flex-col justify-center items-center'>
          <WrappedComponent {...props} />
        </div>
      )
  }
}

export default ComponentLayout
