import React from 'react'

const Wrapper = (props:{children:React.ReactNode, className?:string}) => {
  return (
    <div className={`max-w-screen-2xl mx-auto px-8 sm:px-16 ${props.className}`}>{props.children}</div>
  )
}

export default Wrapper