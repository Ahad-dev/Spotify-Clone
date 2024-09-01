import { Circle, Forward, Pause, Play, Repeat, SkipBack, SkipForward } from 'lucide-react'
import React from 'react'
import Slider from './Slider'
import VolumeSlider from './VolumeSlider'

const Manipulator = () => {
  const [isPlaying, setIsPlaying] = React.useState(false)
 

  return (
    <div className='flex item-center gap-2 flex-col justify-center'>
        <div className='flex gap-5 items-center justify-center'> 
          <SkipBack size={28} fill='white' className='text-white/70'/>
          <div className='w-10 h-10 bg-white rounded-full flex justify-center items-center cursor-pointer'
          onClick={()=>setIsPlaying(!isPlaying)}
          >
            {isPlaying?<Pause size={28} fill='black'/>:<Play size={28} fill='black'/>}
          </div>
          <SkipForward size={28} fill='white' className='text-white/70'/>
          <Repeat size={28}  className='text-white/70'/>
        </div>
        <Slider/>
    </div>
  )
}

export default Manipulator