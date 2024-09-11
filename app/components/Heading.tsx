import React from 'react'

const Heading = (props:{children:React.ReactNode}) => {
  return (
    <h2 className='text-4xl xs:text-5xl sm:text-6xl uppercase font-heading'>{props.children}</h2>
  )
}

export default Heading