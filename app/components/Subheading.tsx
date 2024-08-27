import React from 'react'

const Subheading = (props:{children:React.ReactNode}) => {
  return (
    <span className='text-2xl uppercase font-heading'>{props.children}</span>
  )
}

export default Subheading