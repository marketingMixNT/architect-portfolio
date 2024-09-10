import React from 'react'
import Text from '@/app/components/Text'

const TimelineItem = (props:{title:string,text?:string}) => {
  return (
    <li className='mb-10 ms-6 space-y-2'>
    <div className='absolute w-4 h-4  rounded-full mt-1.5 -start-2 border border-accent-400  bg-accent-400'></div>

    <h2 className='text-3xl'>{props.title}</h2>
    {props.title && <Text small>{props.text}</Text>}
</li>
  )
}

export default TimelineItem