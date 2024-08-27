import React from 'react'

const Heading = (props:{children:React.ReactNode}) => {
  return (
    <h2 className='text-5xl xs:text-6xl uppercase font-heading'>{props.children}</h2>
  )
}

export default Heading