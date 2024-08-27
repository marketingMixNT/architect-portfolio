import React from 'react'

const Subheading = (props:{children:React.ReactNode}) => {
  return (
    <span className='text-xl uppercase'>{props.children}</span>
  )
}

export default Subheading