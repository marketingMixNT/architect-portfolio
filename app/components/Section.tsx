import React from 'react'

const Section = (props:{children:React.ReactNode,id?:string,className?:string}) => {
  return (
   <section {...(props.id ? { id: props.id } : {})}  className={`${props.className}`}>{props.children}</section>
  )
}

export default Section