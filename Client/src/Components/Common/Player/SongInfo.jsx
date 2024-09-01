import { Plus } from 'lucide-react'
import React from 'react'

const SongInfo = () => {
  return (
    <div className='flex justify-center items-center gap-4'>
      <div className='w-14 rounded-md aspect-square overflow-hidden bg-red-600'>
        <img src="/TITA.png" alt="" />
      </div>
      <div className='flex flex-col justify-center gap-1'>
        <p className='font-semibold text-white'>Song Name</p>
        <p className='text-white/70 text-xs'>Artist Name</p>
      </div>
      <div className='hover:text-white cursor-pointer'>
        <Plus size={20} className='text-white/70 ml-auto border rounded-full font-semibold'/>
      </div>
    </div>
  )
}

export default SongInfo