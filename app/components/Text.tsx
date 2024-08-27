import React from 'react'

const Text = (props:{children:React.ReactNode}) => {
  return (
    <p className=''>
   {props.children}
</p>
  )
}

export default Text