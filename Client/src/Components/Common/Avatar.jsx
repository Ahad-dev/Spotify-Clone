import { User } from 'lucide-react'
import React from 'react'

const Avatar = () => {
  return (
    <div className='h-12 w-12 flex justify-center items-center bg-white/10 rounded-full'>
        <User size={25} className='text-white/70'/>
    </div>
  )
}

export default Avatar