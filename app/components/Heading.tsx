import React from 'react'

const Heading = (props:{children:React.ReactNode}) => {
  return (
    <h2 className='text-5xl uppercase'>{props.children}</h2>
  )
}

export default Heading