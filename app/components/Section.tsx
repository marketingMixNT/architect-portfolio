import React from 'react'

const Section = (props:{children:React.ReactNode}) => {
  return (
   <section  className="py-20">{props.children}</section>
  )
}

export default Section